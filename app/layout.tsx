import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/SiteShell";
import { BootLoader } from "@/components/BootLoader";
import { HiddenTerminal } from "@/components/HiddenTerminal";
import { Trinkets } from "@/components/Trinkets";
import { Trinkets2 } from "@/components/Trinkets2";
import { profile } from "@/content/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.tagline,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://markroderick.vercel.app"),
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.tagline,
    url: "/",
    siteName: profile.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.role}`,
    description: profile.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${firaCode.variable} scroll-smooth`}>
      <head>
        {/* Boot screen gate: only with JS, motion allowed, home page, first visit this session. Fails open after 1.5s. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(location.pathname==='/'&&!sessionStorage.getItem('mark-booted')&&!matchMedia('(prefers-reduced-motion: reduce)').matches){var r=document.documentElement;r.classList.add('boot');setTimeout(function(){r.classList.remove('boot')},1500)}}catch(e){}try{if(localStorage.getItem('mark-crt')==='1')document.documentElement.classList.add('crt')}catch(e){}",
          }}
        />
      </head>
      <body className="min-h-dvh font-sans antialiased">
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-navy-light focus:px-3 focus:py-2 focus:text-sm focus:ring-2 focus:ring-green"
          >
            Skip to content
          </a>
          <SiteShell>{children}</SiteShell>
          <Trinkets />
          <Trinkets2 />
          <HiddenTerminal />
          <BootLoader />
      </body>
    </html>
  );
}
