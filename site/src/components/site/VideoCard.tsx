import { useState } from "react";
import { Play } from "lucide-react";
import type { Video } from "@/data/content";
import thumb from "@/assets/video-thumb.jpg";

export function VideoCard({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="glass grain group overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow">
      <div className="relative z-10 aspect-video w-full overflow-hidden bg-ink">
        {playing ? (
          <iframe
            className="size-full"
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group/btn relative size-full cursor-pointer"
            aria-label={`Lire la vidéo : ${video.title}`}
          >
            <img
              src={thumb}
              alt=""
              loading="lazy"
              width={1280}
              height={720}
              className="size-full object-cover opacity-80 transition-all duration-500 group-hover/btn:scale-105 group-hover/btn:opacity-90"
            />
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid size-14 place-items-center rounded-full border border-primary/50 bg-background/50 text-primary backdrop-blur-md transition-transform duration-300 group-hover/btn:scale-110">
                <Play className="size-5 translate-x-0.5 fill-current" />
              </span>
            </span>
            <span className="absolute right-3 bottom-3 rounded bg-background/75 px-2 py-0.5 text-xs backdrop-blur-sm">
              {video.duration}
            </span>
          </button>
        )}
      </div>

      <div className="relative z-10 p-6">
        <p className="eyebrow">{video.playlist}</p>
        <h3 className="mt-3 text-lg leading-snug">{video.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {video.description}
        </p>
      </div>
    </article>
  );
}
