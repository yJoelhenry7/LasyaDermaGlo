import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts, pageKeywords } from "@/data/site";
import { createMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return createMetadata({ title: "Not Found", noIndex: true });

  return createMetadata({
    title: post.title,
    description: `${post.title} — expert skincare insights from Derma Glo dermatology clinic in Rajahmundry.`,
    path: `/blog/${post.slug}`,
    keywords: [...pageKeywords.blog, post.category, post.title],
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <article className="pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-warm-gray hover:text-sage"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        <p className="mt-8 text-sm text-warm-gray">
          {post.date} • {post.category}
        </p>
        <h1 className="font-display mt-4 text-3xl font-medium text-charcoal md:text-4xl">
          {post.title}
        </h1>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <div className="prose prose-neutral mt-10 max-w-none">
          <p className="text-lg leading-relaxed text-warm-gray">
            Your skin is your body&apos;s largest organ, and caring for it
            requires understanding both science and your unique needs. At Derma
            Glo, we believe informed patients make the best decisions about
            their skin health.
          </p>
          <p className="mt-6 leading-relaxed text-warm-gray">
            In this article, we explore key insights from our dermatology team to
            help you understand your options and take proactive steps toward
            healthier, more radiant skin. Whether you&apos;re dealing with a
            specific concern or looking to maintain your skin&apos;s health, our
            experts are here to guide you.
          </p>
          <p className="mt-6 leading-relaxed text-warm-gray">
            Ready to take the next step? Book a free skin analysis consultation
            with our team and discover a personalized treatment plan designed
            just for you.
          </p>
        </div>

        <div className="mt-12 rounded-2xl bg-sage/10 p-8 text-center">
          <p className="font-medium">Want personalized advice?</p>
          <Link
            href="/appointment"
            className="mt-4 inline-flex rounded-full bg-sage-dark px-8 py-3 text-sm font-medium text-white hover:bg-charcoal"
          >
            Book a consultation
          </Link>
        </div>
      </div>
    </article>
  );
}
