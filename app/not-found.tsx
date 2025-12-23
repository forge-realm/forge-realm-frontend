import Link from "next/link";
import { Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-soft-charcoal px-4">
      <div className="bg-neutral-900/80 border border-neutral-800 rounded-lg shadow-xl p-8 flex flex-col items-center max-w-md w-full">
        <Ghost className="text-pink-bg mb-4 w-16 h-16" strokeWidth={1.5} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-cream-bg mb-4 font-display">404</h1>
        <p className="text-lg md:text-xl text-parchment-white mb-2 font-semibold text-center">Page Not Found</p>
        <p className="text-base text-cream-bg mb-6 text-center max-w-xs">
          The page you’re looking for doesn’t exist, was moved, or you may have mistyped the URL.
        </p>
        <Link
          href="/"
          className="inline-block bg-pink-bg hover:bg-btn-bg transition-all text-cream-bg px-6 py-2 rounded-md font-bold mt-2"
          aria-label="Go back home"
        >
          Back Home
        </Link>
      </div>
    </section>
  );
}
