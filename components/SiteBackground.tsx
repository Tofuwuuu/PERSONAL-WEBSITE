export function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base */}
      <div className="absolute inset-0 bg-[#04060a]" />

      {/* Diagonal planes */}
      <div className="absolute -left-1/4 top-0 h-[140%] w-[70%] -rotate-[18deg] bg-gradient-to-br from-accent/[0.08] via-transparent to-transparent" />
      <div className="absolute -right-1/4 bottom-0 h-[120%] w-[65%] rotate-[14deg] bg-gradient-to-tl from-violet/[0.09] via-transparent to-transparent" />

      {/* Soft color fields */}
      <div className="absolute -top-32 left-1/2 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute -right-24 top-[35%] h-72 w-72 rounded-full bg-accent/10 blur-[90px]" />
      <div className="absolute -left-16 bottom-[10%] h-80 w-80 rounded-full bg-violet/10 blur-[100px]" />

      {/* Pattern layers */}
      <div className="site-grid absolute inset-0 opacity-50" />
      <div className="site-dots absolute inset-0 opacity-40" />
      <div className="site-beams absolute inset-0 opacity-70" />

      {/* Geometric frame */}
      <svg
        className="absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineAccent" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="45%" stopColor="#22d3ee" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineSoft" x1="100" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Corner brackets */}
        <g stroke="url(#lineAccent)" strokeWidth="0.35" fill="none">
          <path d="M4 16 V6 H16" />
          <path d="M84 6 H96 V18" />
        </g>
        <g stroke="url(#lineSoft)" strokeWidth="0.35" fill="none">
          <path d="M4 84 V96 H16" />
          <path d="M84 96 H96 V84" />
        </g>

        {/* Network graph — left */}
        <g stroke="#22d3ee" strokeOpacity="0.22" strokeWidth="0.25" fill="none">
          <path d="M10 32 L22 38 L34 30 L46 42" />
          <path d="M22 38 L28 52" />
          <circle cx="10" cy="32" r="0.7" fill="#22d3ee" fillOpacity="0.55" stroke="none" />
          <circle cx="22" cy="38" r="0.85" fill="#22d3ee" fillOpacity="0.7" stroke="none" />
          <circle cx="34" cy="30" r="0.65" fill="#22d3ee" fillOpacity="0.45" stroke="none" />
          <circle cx="46" cy="42" r="0.6" fill="#22d3ee" fillOpacity="0.4" stroke="none" />
          <circle cx="28" cy="52" r="0.55" fill="#22d3ee" fillOpacity="0.35" stroke="none" />
        </g>

        {/* Network graph — right */}
        <g stroke="#60a5fa" strokeOpacity="0.2" strokeWidth="0.25" fill="none">
          <path d="M90 58 L78 50 L66 58 L54 48" />
          <path d="M78 50 L74 64" />
          <circle cx="90" cy="58" r="0.65" fill="#60a5fa" fillOpacity="0.5" stroke="none" />
          <circle cx="78" cy="50" r="0.8" fill="#60a5fa" fillOpacity="0.65" stroke="none" />
          <circle cx="66" cy="58" r="0.6" fill="#60a5fa" fillOpacity="0.4" stroke="none" />
          <circle cx="54" cy="48" r="0.55" fill="#60a5fa" fillOpacity="0.35" stroke="none" />
          <circle cx="74" cy="64" r="0.5" fill="#60a5fa" fillOpacity="0.3" stroke="none" />
        </g>

        {/* Orbit rings */}
        <g
          className="site-orbit"
          stroke="#22d3ee"
          strokeOpacity="0.16"
          fill="none"
          strokeWidth="0.25"
        >
          <ellipse cx="78" cy="24" rx="14" ry="8" />
          <ellipse cx="78" cy="24" rx="20" ry="12" strokeDasharray="1.2 2.4" />
        </g>

        <g
          className="site-orbit-reverse"
          stroke="#60a5fa"
          strokeOpacity="0.14"
          fill="none"
          strokeWidth="0.25"
        >
          <ellipse cx="20" cy="76" rx="12" ry="7" />
          <ellipse cx="20" cy="76" rx="18" ry="11" strokeDasharray="1 2.8" />
        </g>

        {/* Floating nodes */}
        <circle className="site-pulse" cx="18" cy="22" r="0.9" fill="#22d3ee" fillOpacity="0.55" />
        <circle className="site-pulse-delayed" cx="62" cy="68" r="0.8" fill="#22d3ee" fillOpacity="0.4" />
        <circle className="site-pulse" cx="88" cy="42" r="0.7" fill="#60a5fa" fillOpacity="0.45" />
        <circle className="site-pulse-delayed" cx="12" cy="62" r="0.75" fill="#60a5fa" fillOpacity="0.35" />
      </svg>

      {/* Edge vignette so content stays readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_35%,transparent_0%,rgba(4,6,10,0.55)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#04060a] to-transparent" />
    </div>
  );
}
