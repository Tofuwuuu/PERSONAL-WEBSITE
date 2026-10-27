"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isArchive = pathname?.startsWith("/projects") ?? false;

  return (
    <div className="flex min-h-dvh w-full flex-col">
      {isArchive ? null : <Sidebar />}
      <div
        className={`mx-auto flex w-full flex-1 flex-col px-6 ${
          isArchive ? "max-w-[90rem] sm:px-8 md:px-12 lg:px-16 lg:py-24" : "max-w-[680px]"
        }`}
      >
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
