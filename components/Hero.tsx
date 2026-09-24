import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section className="mb-12 animate-fade-up lg:hidden">
      <h1 className="text-4xl font-bold tracking-tight text-bright">
        {profile.name}
      </h1>
      <h2 className="mt-2 text-xl font-medium text-heading">{profile.role}</h2>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate">
        {profile.tagline}
      </p>
    </section>
  );
}
