export function SkillChips({ skills, className = "" }: { skills: readonly string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`} aria-label="Skills">
      {skills.map((skill) => (
        <li key={skill} className="rounded-full border border-line px-2.5 py-0.5 text-xs font-medium text-muted">
          {skill}
        </li>
      ))}
    </ul>
  );
}
