import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Youtube } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { VideoCard } from "@/components/site/VideoCard";
import { Button } from "@/components/ui/button";
import { playlists, videos } from "@/data/content";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/videos")({
  component: VideosPage,
  head: () => ({
    meta: [
      { title: "Vidéothèque — Cours coraniques | Nūr al-Bayān" },
      {
        name: "description",
        content:
          "Cours enregistrés sur la méthode coranique, l'étude des sourates et les questions théologiques les plus fréquentes.",
      },
      { property: "og:title", content: "Vidéothèque — Cours coraniques" },
      {
        property: "og:description",
        content: "Cours enregistrés sur la méthode, les sourates et la théologie.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/videos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/videos" }],
  }),
});

function VideosPage() {
  const [playlist, setPlaylist] = useState("Toutes");
  const filtered = useMemo(
    () => (playlist === "Toutes" ? videos : videos.filter((v) => v.playlist === playlist)),
    [playlist],
  );

  return (
    <Section className="pt-36">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Vidéothèque"
          arabic="الدروس المرئية"
          title="Les cours à l'écran"
          description="Chaque cours parcourt les sources face caméra. Les playlists les regroupent par thème."
        />
        <Button asChild variant="quiet">
          <a href="https://www.youtube.com/@SidiLeMaliki" target="_blank" rel="noreferrer">
            <Youtube /> Voir la chaîne
          </a>
        </Button>
      </div>

      <div className="mt-12 flex flex-wrap gap-2" role="group" aria-label="Filtrer par playlist">
        {playlists.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setPlaylist(p)}
            aria-pressed={playlist === p}
            className={cn(
              "cursor-pointer rounded-full border px-4 py-2 text-xs tracking-wide transition-all duration-300",
              playlist === p
                ? "border-primary/50 bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground",
            )}
          >
            {p}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </Section>
  );
}
