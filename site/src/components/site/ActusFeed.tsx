import { useMemo, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Hash, Heart, ImagePlus, Loader2, MessageCircle, Send, Trash2, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

const BUCKET = "actus-media";

export type ActuPost = {
  id: string;
  content: string;
  hashtags: string[];
  image_path: string | null;
  link_url: string | null;
  created_at: string;
  imageUrl?: string | null;
};

function extractHashtags(text: string) {
  const found = text.match(/#[\p{L}\p{N}_-]+/gu) ?? [];
  return Array.from(new Set(found.map((t) => t.slice(1).toLowerCase())));
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function PostText({ text }: { text: string }) {
  const parts = text.split(/(#[\p{L}\p{N}_-]+)/gu);
  return (
    <p className="leading-relaxed whitespace-pre-line">
      {parts.map((part, i) =>
        part.startsWith("#") ? (
          <span key={i} className="gold-text">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  );
}

export function ActusFeed({ isHost }: { isHost: boolean }) {
  const queryClient = useQueryClient();
  const [tag, setTag] = useState<string | null>(null);

  const { data: posts, isLoading } = useQuery({
    queryKey: ["actus-posts"],
    queryFn: async (): Promise<ActuPost[]> => {
      const { data, error } = await supabase
        .from("actus_posts")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      const rows = (data ?? []) as ActuPost[];
      const paths = rows.map((r) => r.image_path).filter(Boolean) as string[];
      if (paths.length === 0) return rows;
      const { data: signed } = await supabase.storage
        .from(BUCKET)
        .createSignedUrls(paths, 60 * 60);
      const map = new Map(
        (signed ?? []).map((s) => [s.path ?? "", s.signedUrl] as const),
      );
      return rows.map((r) => ({
        ...r,
        imageUrl: r.image_path ? (map.get(r.image_path) ?? null) : null,
      }));
    },
  });

  const tags = useMemo(() => {
    const all = new Set<string>();
    (posts ?? []).forEach((p) => p.hashtags.forEach((t) => all.add(t)));
    return Array.from(all).sort();
  }, [posts]);

  const visible = useMemo(
    () => (tag ? (posts ?? []).filter((p) => p.hashtags.includes(tag)) : (posts ?? [])),
    [posts, tag],
  );

  const remove = useMutation({
    mutationFn: async (post: ActuPost) => {
      if (post.image_path) await supabase.storage.from(BUCKET).remove([post.image_path]);
      const { error } = await supabase.from("actus_posts").delete().eq("id", post.id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Publication supprimée.");
      queryClient.invalidateQueries({ queryKey: ["actus-posts"] });
    },
    onError: () => toast.error("La suppression a échoué."),
  });

  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start">
      <div className="space-y-8">
        {isHost ? <Composer /> : null}

        {isLoading ? (
          <p className="text-sm text-muted-foreground">Chargement du fil…</p>
        ) : visible.length > 0 ? (
          visible.map((post) => (
            <article
              key={post.id}
              className="glass overflow-hidden rounded-xl border transition-all duration-500 hover:border-primary/40"
            >
              <header className="flex items-center gap-3 px-5 py-4">
                <span className="grid size-10 place-items-center rounded-full border border-primary/40 text-primary">
                  <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
                    <path
                      d="M12 2l2.6 6.6L21 11l-6.4 2.4L12 20l-2.6-6.6L3 11l6.4-2.4z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="text-sm">Sidi — Nūr al-Bayān</p>
                  <time
                    dateTime={post.created_at}
                    className="text-xs tracking-wide text-muted-foreground"
                  >
                    {formatDate(post.created_at)}
                  </time>
                </div>
                {isHost ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-auto"
                    onClick={() => remove.mutate(post)}
                    aria-label="Supprimer la publication"
                  >
                    <Trash2 className="size-4" aria-hidden="true" />
                  </Button>
                ) : null}
              </header>

              {post.imageUrl ? (
                <img
                  src={post.imageUrl}
                  alt=""
                  loading="lazy"
                  className="aspect-square w-full border-y object-cover"
                />
              ) : null}

              <div className="space-y-4 px-5 py-5">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <Heart className="size-5" strokeWidth={1.4} aria-hidden="true" />
                  <MessageCircle className="size-5" strokeWidth={1.4} aria-hidden="true" />
                </div>
                <PostText text={post.content} />
                {post.link_url ? (
                  <a
                    href={post.link_url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-block text-sm text-primary hover:underline"
                  >
                    {post.link_url}
                  </a>
                ) : null}
              </div>
            </article>
          ))
        ) : (
          <p className="text-muted-foreground">
            {tag
              ? "Aucune publication avec ce hashtag."
              : "Le fil est encore vide — les premières actualités arrivent bientôt."}
          </p>
        )}
      </div>

      <aside className="lg:sticky lg:top-28">
        <h2 className="text-xs tracking-[0.28em] text-muted-foreground uppercase">
          Hashtags
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setTag(null)}
            aria-pressed={tag === null}
            className={cn(
              "cursor-pointer rounded-full border px-3 py-1.5 text-xs transition-all duration-300",
              tag === null
                ? "border-primary/50 bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:border-primary/30",
            )}
          >
            Tout
          </button>
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTag(t)}
              aria-pressed={tag === t}
              className={cn(
                "inline-flex cursor-pointer items-center gap-1 rounded-full border px-3 py-1.5 text-xs transition-all duration-300",
                tag === t
                  ? "border-primary/50 bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/30",
              )}
            >
              <Hash className="size-3" aria-hidden="true" />
              {t}
            </button>
          ))}
          {tags.length === 0 ? (
            <p className="text-sm text-muted-foreground">Aucun hashtag pour l'instant.</p>
          ) : null}
        </div>
      </aside>
    </div>
  );
}

function Composer() {
  const queryClient = useQueryClient();
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const pick = (f: File | null) => {
    setFile(f);
    setPreview(f ? URL.createObjectURL(f) : null);
  };

  const publish = async () => {
    if (!content.trim() && !file) return;
    setBusy(true);
    try {
      let imagePath: string | null = null;
      if (file) {
        const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
        imagePath = `${Date.now()}-${safeName}`;
        const { error: upErr } = await supabase.storage
          .from(BUCKET)
          .upload(imagePath, file, { contentType: file.type });
        if (upErr) throw upErr;
      }
      const { error } = await supabase.from("actus_posts").insert({
        content: content.trim(),
        hashtags: extractHashtags(content),
        image_path: imagePath,
        link_url: link.trim() || null,
      });
      if (error) throw error;
      setContent("");
      setLink("");
      pick(null);
      if (inputRef.current) inputRef.current.value = "";
      toast.success("Publication en ligne.");
      queryClient.invalidateQueries({ queryKey: ["actus-posts"] });
    } catch {
      toast.error("La publication a échoué.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="glass grain rounded-xl border p-5 sm:p-6">
      <div className="relative z-10 space-y-4">
        <h2 className="gold-text text-xs tracking-[0.28em] uppercase">Nouvelle publication</h2>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          placeholder="Partagez une actualité… utilisez des #hashtags pour classer la publication"
          className="bg-surface/50"
        />
        {preview ? (
          <div className="relative overflow-hidden rounded-lg border">
            <img src={preview} alt="" className="aspect-square w-full object-cover" />
            <button
              type="button"
              onClick={() => {
                pick(null);
                if (inputRef.current) inputRef.current.value = "";
              }}
              className="absolute top-2 right-2 grid size-8 cursor-pointer place-items-center rounded-full border border-primary/40 bg-background/80 text-primary"
              aria-label="Retirer l'image"
            >
              <X className="size-4" />
            </button>
          </div>
        ) : null}
        <div className="grid gap-3 sm:grid-cols-2">
          <Input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={(e) => pick(e.target.files?.[0] ?? null)}
            aria-label="Ajouter une image"
          />
          <Input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Lien (facultatif)"
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <ImagePlus className="size-4" aria-hidden="true" />
            Image carrée recommandée
          </p>
          <Button
            variant="gold"
            size="sm"
            onClick={publish}
            disabled={busy || (!content.trim() && !file)}
          >
            {busy ? (
              <Loader2 className="mr-2 size-4 animate-spin" aria-hidden="true" />
            ) : (
              <Send className="mr-2 size-4" aria-hidden="true" />
            )}
            Publier
          </Button>
        </div>
      </div>
    </div>
  );
}
