import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} · ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.tagline,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  openGraph: {
    title: `${profile.name} · ${profile.role}`,
    description: profile.tagline,
    url: "/",
    siteName: profile.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · ${profile.role}`,
    description: profile.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-dvh antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-card focus:px-3 focus:py-2 focus:text-sm focus:ring-2 focus:ring-accent"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="content" className="mx-auto w-full max-w-5xl px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

