import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center text-center px-6"
      style={{ minHeight: "100vh", backgroundColor: "var(--primary)" }}
    >
      <p
        className="font-black text-white/10 leading-none mb-8 select-none"
        style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: "clamp(100px, 20vw, 220px)",
        }}
      >
        404
      </p>
      <h1
        className="text-white mb-4 -mt-4"
        style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: "clamp(28px, 4vw, 48px)",
        }}
      >
        Page not found.
      </h1>
      <p className="text-white/50 text-base max-w-sm leading-relaxed mb-10">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium text-gray-900 rounded-full hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "var(--bg-warm)" }}
        >
          Back to home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center h-12 px-8 border-2 border-white/30 text-sm font-medium text-white rounded-full hover:border-white/70 transition-colors"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
