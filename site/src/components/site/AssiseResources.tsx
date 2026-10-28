import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Download, FileText, Loader2, NotebookPen, Plus, Trash2, Upload } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";

const BUCKET = "assise-documents";

type AssiseResourcesProps = {
  isHost: boolean;
};

export function AssiseResources({ isHost }: AssiseResourcesProps) {
  return (
    <div className="glass grain mt-8 rounded-xl p-6 sm:p-8">
      <div className="relative z-10">
        <h2 className="gold-text text-xs tracking-[0.28em] uppercase">Ressources de l'assise</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Les documents, notes et références partagés pendant la séance.
        </p>

        <Tabs defaultValue="documents" className="mt-6">
          <TabsList>
            <TabsTrigger value="documents">
              <FileText className="mr-2 size-4" aria-hidden="true" />
              Documents
            </TabsTrigger>
            <TabsTrigger value="notes">
              <NotebookPen className="mr-2 size-4" aria-hidden="true" />
              Notes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="documents" className="mt-6">
            <DocumentsTab isHost={isHost} />
          </TabsContent>
          <TabsContent value="notes" className="mt-6">
            <NotesTab isHost={isHost} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function DocumentsTab({ isHost }: { isHost: boolean }) {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);

  const { data: documents, isLoading } = useQuery({
    queryKey: ["assise-documents"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("assise_documents")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const upload = async () => {
    if (!file) return;
    setBusy(true);
    try {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
      const path = `${Date.now()}-${safeName}`;
      const { error: uploadError } = await supabase.storage.from(BUCKET).upload(path, file);
      if (uploadError) throw uploadError;
      const { error } = await supabase.from("assise_documents").insert({
        title: title.trim() || file.name,
        description: description.trim() || null,
        storage_path: path,
        file_name: file.name,
        file_size: file.size,
      });
      if (error) throw error;
      setTitle("");
      setDescription("");
      setFile(null);
      toast.success("Document ajouté.");
      queryClient.invalidateQueries({ queryKey: ["assise-documents"] });
    } catch {
      toast.error("L'envoi du document a échoué.");
    } finally {
      setBusy(false);
    }
  };

  const remove = useMutation({
    mutationFn: async (doc: { id: string; storage_path: string }) => {
      await supabase.storage.from(BUCKET).remove([doc.storage_path]);
      const { error } = await supabase.from("assise_documents").delete().eq("id", doc.id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Document supprimé.");
      queryClient.invalidateQueries({ queryKey: ["assise-documents"] });
    },
    onError: () => toast.error("La suppression a échoué."),
  });

  const open = async (path: string) => {
    const { data, error } = await supabase.storage.from(BUCKET).createSignedUrl(path, 3600);
    if (error || !data) {
      toast.error("Le fichier n'a pas pu être ouvert.");
      return;
    }
    window.open(data.signedUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-6">
      {isHost ? (
        <div className="space-y-3 rounded-lg border p-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="doc-title">Titre</Label>
              <Input
                id="doc-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Support de la séance"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="doc-file">Fichier (PDF, image, texte…)</Label>
              <Input
                id="doc-file"
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="doc-desc">Description (facultatif)</Label>
            <Input
              id="doc-desc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Quelques mots sur ce document"
            />
          </div>
          <Button variant="gold" size="sm" onClick={upload} disabled={!file || busy}>
            {busy ? (
              <Loader2 className="mr-2 size-4 animate-spin" aria-hidden="true" />
            ) : (
              <Upload className="mr-2 size-4" aria-hidden="true" />
            )}
            Ajouter le document
          </Button>
        </div>
      ) : null}

      {isLoading ? (
        <p className="text-sm text-muted-foreground">Chargement des documents…</p>
      ) : documents && documents.length > 0 ? (
        <ul className="space-y-3">
          {documents.map((doc) => (
            <li
              key={doc.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-lg border p-4"
            >
              <div className="min-w-0">
                <p className="truncate">{doc.title}</p>
                {doc.description ? (
                  <p className="mt-1 text-sm text-muted-foreground">{doc.description}</p>
                ) : null}
                <p className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">
                  {doc.file_name}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={() => open(doc.storage_path)}>
                  <Download className="mr-2 size-4" aria-hidden="true" />
                  Ouvrir
                </Button>
                {isHost ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      remove.mutate({ id: doc.id, storage_path: doc.storage_path })
                    }
                    aria-label={`Supprimer ${doc.title}`}
                  >
                    <Trash2 className="size-4" aria-hidden="true" />
                  </Button>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-muted-foreground">
          Aucun document pour l'instant.
        </p>
      )}
    </div>
  );
}

function NotesTab({ isHost }: { isHost: boolean }) {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { data: notes, isLoading } = useQuery({
    queryKey: ["assise-notes"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("assise_notes")
        .select("*")
        .order("position", { ascending: true })
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const add = useMutation({
    mutationFn: async () => {
      const { error } = await supabase
        .from("assise_notes")
        .insert({ title: title.trim() || "Note", content: content.trim() });
      if (error) throw error;
    },
    onSuccess: () => {
      setTitle("");
      setContent("");
      toast.success("Note enregistrée.");
      queryClient.invalidateQueries({ queryKey: ["assise-notes"] });
    },
    onError: () => toast.error("L'enregistrement a échoué."),
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("assise_notes").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Note supprimée.");
      queryClient.invalidateQueries({ queryKey: ["assise-notes"] });
    },
    onError: () => toast.error("La suppression a échoué."),
  });

  return (
    <div className="space-y-6">
      {isHost ? (
        <div className="space-y-3 rounded-lg border p-4">
          <div className="space-y-1.5">
            <Label htmlFor="note-title">Titre</Label>
            <Input
              id="note-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Points de la séance"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="note-content">Note</Label>
            <Textarea
              id="note-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={5}
              placeholder="Écrivez ici vos notes, versets, références…"
            />
          </div>
          <Button
            variant="gold"
            size="sm"
            onClick={() => add.mutate()}
            disabled={add.isPending || (!title.trim() && !content.trim())}
          >
            {add.isPending ? (
              <Loader2 className="mr-2 size-4 animate-spin" aria-hidden="true" />
            ) : (
              <Plus className="mr-2 size-4" aria-hidden="true" />
            )}
            Ajouter la note
          </Button>
        </div>
      ) : null}

      {isLoading ? (
        <p className="text-sm text-muted-foreground">Chargement des notes…</p>
      ) : notes && notes.length > 0 ? (
        <ul className="space-y-3">
          {notes.map((note) => (
            <li key={note.id} className="rounded-lg border p-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base">{note.title}</h3>
                {isHost ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => remove.mutate(note.id)}
                    aria-label={`Supprimer ${note.title}`}
                  >
                    <Trash2 className="size-4" aria-hidden="true" />
                  </Button>
                ) : null}
              </div>
              {note.content ? (
                <p className="mt-2 text-sm leading-relaxed whitespace-pre-line text-muted-foreground">
                  {note.content}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-muted-foreground">Aucune note pour l'instant.</p>
      )}
    </div>
  );
}
