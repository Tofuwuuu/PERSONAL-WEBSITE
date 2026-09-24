"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isArchive = pathname?.startsWith("/projects") ?? false;

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[90rem] flex-col px-6 sm:px-8 md:px-12 lg:flex-row lg:justify-between lg:gap-16 lg:px-16 xl:gap-20 xl:px-24">
      {isArchive ? null : <Sidebar />}
      <div
        className={`flex min-h-dvh w-full flex-col lg:py-24 ${
          isArchive ? "" : "lg:w-[52%]"
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
