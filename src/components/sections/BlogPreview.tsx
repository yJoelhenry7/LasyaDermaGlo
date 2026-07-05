import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/site";

export function BlogPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-medium tracking-widest text-sage uppercase">
          Skin Insights
        </p>
        <h2 className="font-display mt-2 text-3xl font-medium text-charcoal md:text-4xl">
          Helpful tips and expert advice
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl bg-surface transition hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-warm-gray">
                  {post.date} • {post.category}
                </p>
                <h3 className="mt-2 text-sm font-medium leading-snug text-charcoal group-hover:text-sage">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="text-sm font-medium text-sage underline underline-offset-4 hover:text-sage-dark"
          >
            View all articles
          </Link>
        </div>
      </div>
    </section>
  );
}
