import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog | Derma Glo",
  description: "Helpful tips and expert advice on skin health and treatments.",
};

export default function BlogPage() {
  return (
    <div className="pt-36 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-medium tracking-widest text-sage uppercase">
          Skin Insights
        </p>
        <h1 className="font-display mt-2 text-4xl font-medium text-charcoal md:text-5xl">
          Helpful tips and expert advice
        </h1>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl bg-surface transition hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-warm-gray">
                  {post.date} • {post.category}
                </p>
                <h2 className="mt-2 font-medium leading-snug text-charcoal group-hover:text-sage">
                  {post.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
