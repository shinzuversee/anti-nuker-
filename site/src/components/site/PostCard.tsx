import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Post } from "@/data/content";
import { TiltCard } from "@/components/motion/TiltCard";

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <TiltCard className="rounded-xl">
      <article
        className={
          "glass grain gold-edge group relative flex h-full flex-col rounded-xl p-7 transition-all duration-500 hover:border-primary/30 hover:shadow-glow " +
          (featured ? "sm:p-10" : "")
        }
      >
        <div className="relative z-10 flex flex-1 flex-col">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="text-primary">{post.category}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>

          <h3 className={"mt-4 leading-snug " + (featured ? "text-2xl sm:text-3xl" : "text-xl")}>
            <Link
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              {post.title}
            </Link>
          </h3>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>

          <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary">
            Lire l'article
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </article>
    </TiltCard>
  );
}
