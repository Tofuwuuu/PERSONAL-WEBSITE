import { PlaceholderScreenshot } from "@/components/PlaceholderScreenshot";

export function PlaceholderCaseStudy({ title }: { title: string }) {
  return (
    <section className="surface-soft mt-8 rounded-3xl p-6 md:p-8">
      <h2 className="text-lg font-semibold tracking-tight text-text">
        Project Preview
      </h2>
      <p className="mt-2 text-sm text-muted">
        Placeholder case study content. Details, screenshots, and links will be
        added soon.
      </p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
        <div className="aspect-video w-full">
          <PlaceholderScreenshot title={title} />
        </div>
        <p className="border-t border-white/10 px-4 py-3 text-xs text-muted">
          Placeholder preview — full walkthrough coming soon.
        </p>
      </div>
    </section>
  );
}
