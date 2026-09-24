import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="mt-10 pb-8 text-center font-mono text-xs text-slate lg:pb-10">
      <p>
        Loosely inspired by{" "}
        <a
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-green"
        >
          brittanychiang.com
        </a>
        . Built with Next.js and Tailwind CSS. Coded by {profile.name.split(" ")[0]}.
      </p>
    </footer>
  );
}
