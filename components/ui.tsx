import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={cn("eyebrow", light && "!text-teal-300 [&::before]:bg-teal-300/70")}>
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  text,
  center,
  light,
  className,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-2xl", center && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 className={cn("section-title mt-3", light && "text-white")}>{title}</h2>
      {text && (
        <p className={cn("mt-4 text-lg leading-relaxed", light ? "text-white/70" : "text-brand-900/65")}>
          {text}
        </p>
      )}
    </Reveal>
  );
}

export function Stat({
  value,
  label,
  light,
}: {
  value: string;
  label: string;
  light?: boolean;
}) {
  return (
    <div>
      <div className={cn("font-display text-3xl font-bold sm:text-4xl", light ? "text-white" : "text-ink")}>
        {value}
      </div>
      <div className={cn("mt-1 text-sm", light ? "text-white/60" : "text-brand-900/55")}>{label}</div>
    </div>
  );
}

export function Pill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-white px-3 py-1 text-xs font-medium text-brand-700 shadow-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}
