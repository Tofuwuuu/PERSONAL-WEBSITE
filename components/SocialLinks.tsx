import type { ComponentType, SVGProps } from "react";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/SocialIcons";
import { profile } from "@/content/profile";

const icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = { GitHub: GitHubIcon, LinkedIn: LinkedInIcon };

export function SocialLinks({ className = "" }: { className?: string }) {
  const linkClass = "block text-muted transition-colors duration-150 hover:text-text";
  return (
    <ul className={`flex items-center gap-5 ${className}`} aria-label="Social links">
      {profile.links.map(({ label, href }) => {
        const Icon = icons[label];
        return (
          <li key={href}>
            <a href={href} target="_blank" rel="noreferrer" className={linkClass} aria-label={label}>
              {Icon ? <Icon className="h-5 w-5" /> : label}
            </a>
          </li>
        );
      })}
      <li>
        <a href={`mailto:${profile.email}`} className={linkClass} aria-label="Email">
          <MailIcon className="h-5 w-5" />
        </a>
      </li>
    </ul>
  );
}
