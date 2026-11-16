import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex justify-end pt-6">
        <ThemeToggle />
      </div>
      <main id="content">{children}</main>
      <Footer />
    </>
  );
}
