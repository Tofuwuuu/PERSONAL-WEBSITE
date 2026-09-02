import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { Spotlight } from "@/components/Spotlight";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
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
    <html lang="en" className={`${inter.variable} ${firaCode.variable} scroll-smooth`}>
      <body className="min-h-dvh font-sans antialiased">
        <Spotlight>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-navy-light focus:px-3 focus:py-2 focus:text-sm focus:ring-2 focus:ring-green"
          >
            Skip to content
          </a>
          <div className="mx-auto flex min-h-dvh w-full max-w-[90rem] flex-col px-6 sm:px-8 md:px-12 lg:flex-row lg:justify-between lg:gap-8 lg:px-16 xl:px-24">
            <Sidebar />
            <div className="flex min-h-dvh w-full flex-col lg:w-[52%] lg:py-24">
              <main id="content" className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </Spotlight>
      </body>
    </html>
  );
}
