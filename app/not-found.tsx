import Link from "next/link";

const BUILDINGS = "0,200 0,120 60,120 60,90 120,90 120,140 170,140 170,70 230,70 230,130 290,130 290,100 340,100 340,150 400,150 400,60 460,60 460,120 520,120 520,95 580,95 580,140 640,140 640,80 700,80 700,200";

export default function NotFound() {
  return (
    <div className="lost-scene relative my-10 overflow-hidden rounded-sm border border-green/20 px-6 pb-48 pt-16 text-center">
      <svg aria-hidden viewBox="0 0 700 200" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-40 w-full">
        <polygon points={BUILDINGS} fill="#0b0b16" />
        <polyline points={BUILDINGS} fill="none" stroke="#2fd3c4" strokeOpacity="0.4" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
      <div aria-hidden className="lost-street" />
      <p className="lost-sign font-mono text-3xl font-bold uppercase tracking-[0.25em] sm:text-5xl">SIGNAL LOST</p>
      <h1 className="mt-6 text-lg font-semibold text-heading">Page not found</h1>
      <p className="mt-2 text-sm text-slate">The page you’re looking for doesn’t exist.</p>
      <Link href="/" className="neon-btn relative z-10 mt-8 inline-flex items-center rounded-sm border border-green px-5 py-2.5 font-mono text-sm text-green hover:bg-green/10">
        Back home
      </Link>
    </div>
  );
}
