import { Reveal } from "./Reveal";
import { Eyebrow } from "./ui";

export function PageHero({
  badge,
  title,
  subtitle,
  children,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-brand-100 bg-gradient-to-b from-brand-50/80 via-white to-white">
      <div className="bg-grid-faint absolute inset-0 opacity-40 [background-size:30px_30px]" />
      <div className="absolute -right-16 -top-10 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl" />
      <div className="container relative py-14 lg:py-20">
        <Reveal className="max-w-3xl">
          {badge && <Eyebrow>{badge}</Eyebrow>}
          <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          {subtitle && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-900/70">{subtitle}</p>}
          {children && <div className="mt-7 flex flex-wrap gap-3">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
