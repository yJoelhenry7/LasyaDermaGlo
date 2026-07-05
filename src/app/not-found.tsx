import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-20 text-center">
      <p className="text-sm font-medium tracking-widest text-sage uppercase">
        404
      </p>
      <h1 className="font-display mt-4 text-4xl font-medium text-charcoal">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-warm-gray">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-sage-dark px-8 py-3 text-sm font-medium text-white hover:bg-charcoal"
      >
        Back to home
      </Link>
    </div>
  );
}
