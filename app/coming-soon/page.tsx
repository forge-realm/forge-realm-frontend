"use client";

import Link from "next/link";

export default function ComingSoon() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="max-w-xl mx-auto text-center py-16 md:py-32">
        <h1 className="text-5xl md:text-6xl font-extrabold text-parchment-white mb-6 tracking-tight">
          Coming <span className="text-pink-bg">Soon</span>
        </h1>
        <p className="text-lg md:text-xl text-cream-bg mb-10">
          We're working hard on something amazing.<br />Stay tuned for updates!
        </p>
        <Link
          href="/"
          className="inline-block bg-pink-bg text-cream-bg px-8 py-3 rounded-full font-semibold shadow transition hover:bg-btn-bg"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

