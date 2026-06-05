import * as React from "react";
import type { IconKey } from "@/lib/data";

type P = React.SVGProps<SVGSVGElement>;

function S({ children, ...p }: P & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...p}
    >
      {children}
    </svg>
  );
}

/* ---------------- UI icons ---------------- */
export const ArrowRight = (p: P) => (<S {...p}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></S>);
export const ArrowUpRight = (p: P) => (<S {...p}><path d="M7 17 17 7" /><path d="M8 7h9v9" /></S>);
export const Check = (p: P) => (<S {...p}><path d="M20 6 9 17l-5-5" /></S>);
export const ChevronDown = (p: P) => (<S {...p}><path d="m6 9 6 6 6-6" /></S>);
export const Menu = (p: P) => (<S {...p}><path d="M3 6h18M3 12h18M3 18h18" /></S>);
export const Close = (p: P) => (<S {...p}><path d="M18 6 6 18M6 6l12 12" /></S>);
export const Phone = (p: P) => (
  <S {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></S>
);
export const Mail = (p: P) => (<S {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2.5 7 9.5 6 9.5-6" /></S>);
export const MapPin = (p: P) => (<S {...p}><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></S>);
export const Clock = (p: P) => (<S {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></S>);
export const Search = (p: P) => (<S {...p}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></S>);
export const Filter = (p: P) => (<S {...p}><path d="M3 4h18l-7 8v7l-4 2v-9L3 4Z" /></S>);
export const Download = (p: P) => (<S {...p}><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></S>);
export const Plus = (p: P) => (<S {...p}><path d="M12 5v14M5 12h14" /></S>);
export const Minus = (p: P) => (<S {...p}><path d="M5 12h14" /></S>);
export const Send = (p: P) => (<S {...p}><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></S>);
export const Star = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M12 3.2l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.7 6.8 19l1-5.8L3.6 9.3l5.8-.8z" /></svg>
);
export const Play = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...p}><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.6} /><path d="M10 8.5 16 12l-6 3.5z" fill="currentColor" /></svg>
);
export const WhatsApp = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M17.6 14.2c-.3-.15-1.7-.83-2-.92-.26-.1-.46-.15-.65.15-.2.3-.74.92-.9 1.1-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.65-1.57-.9-2.15-.24-.57-.48-.5-.65-.5h-.56c-.2 0-.5.07-.77.37-.26.3-1 .98-1 2.4 0 1.4 1.02 2.76 1.17 2.96.15.2 2.02 3.08 4.9 4.32.68.3 1.22.47 1.63.6.69.22 1.31.19 1.8.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.27-.2-.56-.34z" />
    <path d="M12 2a10 10 0 0 0-8.52 15.27L2 22l4.86-1.27A10 10 0 1 0 12 2zm0 18.2c-1.52 0-3.01-.41-4.3-1.18l-.31-.18-3.18.83.85-3.1-.2-.32A8.2 8.2 0 1 1 20.2 12 8.2 8.2 0 0 1 12 20.2z" />
  </svg>
);
export const Globe = (p: P) => (<S {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" /></S>);

/* ---------------- Sector / feature icons ---------------- */
const Hotel = (p: P) => (<S {...p}><path d="M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" /><path d="M3 21h18" /><path d="M9 7h.01M14 7h.01M9 11h.01M14 11h.01" /><path d="M10 21v-4h4v4" /></S>);
const Health = (p: P) => (<S {...p}><rect x="4" y="6" width="16" height="14" rx="2" /><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" /><path d="M12 10v6M9 13h6" /></S>);
const Facility = (p: P) => (
  <S {...p}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" /></S>
);
const Laundry = (p: P) => (<S {...p}><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M4 7h16" /><circle cx="12" cy="14" r="4" /><path d="M8 4.5h.01M11 4.5h.01" /></S>);
const Marine = (p: P) => (<S {...p}><circle cx="12" cy="5" r="2.4" /><path d="M12 7.4V22" /><path d="M5 12H2a10 10 0 0 0 20 0h-3" /><path d="M9 11l-4 1m14-1 4 1" /></S>);
const Auto = (p: P) => (<S {...p}><path d="M5 12l1.6-4.2A2 2 0 0 1 8.5 6.5h7a2 2 0 0 1 1.9 1.3L19 12" /><path d="M3 12h18v4a1 1 0 0 1-1 1h-1.5a2 2 0 0 1-4 0H9.5a2 2 0 0 1-4 0H4a1 1 0 0 1-1-1z" /><circle cx="7.5" cy="16.5" r="1.2" /><circle cx="16.5" cy="16.5" r="1.2" /></S>);
const Home = (p: P) => (<S {...p}><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M9.5 21v-5h5v5" /></S>);
const Drop = (p: P) => (<S {...p}><path d="M12 3s6 5.7 6 10.5a6 6 0 0 1-12 0C6 8.7 12 3 12 3Z" /></S>);
const Leaf = (p: P) => (<S {...p}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z" /><path d="M2 21c0-3 1.9-5.4 5.1-6" /></S>);
const Shield = (p: P) => (<S {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></S>);
const Beaker = (p: P) => (<S {...p}><path d="M9 3h6" /><path d="M10 3v6l-4.5 8a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L14 9V3" /><path d="M7.5 14h9" /></S>);
const Factory = (p: P) => (<S {...p}><path d="M3 21h18" /><path d="M5 21V11l5 3V11l5 3V7l4 2v12" /><path d="M9 21v-3h3v3" /></S>);
const Box = (p: P) => (<S {...p}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></S>);
const Sparkles = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M12 2.5l1.7 4.8L18.5 9l-4.8 1.7L12 15.5l-1.7-4.8L5.5 9l4.8-1.7z" /><path d="M19 13.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" /></svg>
);
const Recycle = (p: P) => (<S {...p}><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /><path d="M3 21v-5h5" /></S>);
const Truck = (p: P) => (<S {...p}><rect x="2" y="5" width="11" height="9" rx="1" /><path d="M13 8h4l3 3v3h-7" /><circle cx="6" cy="16.5" r="1.6" /><circle cx="17" cy="16.5" r="1.6" /></S>);
const Tag = (p: P) => (<S {...p}><path d="M20.6 13.4 12 22l-8-8 8.6-8.6A2 2 0 0 1 14 5h5a2 2 0 0 1 2 2v5a2 2 0 0 1-.4 1.4Z" /><circle cx="16.5" cy="7.5" r="1.1" fill="currentColor" stroke="none" /></S>);
const Award = (p: P) => (<S {...p}><circle cx="12" cy="8" r="6" /><path d="M8.2 13.5 7 22l5-3 5 3-1.2-8.5" /></S>);

export const iconMap: Record<IconKey, (p: P) => React.JSX.Element> = {
  hotel: Hotel,
  health: Health,
  facility: Facility,
  laundry: Laundry,
  marine: Marine,
  auto: Auto,
  home: Home,
  drop: Drop,
  leaf: Leaf,
  shield: Shield,
  beaker: Beaker,
  factory: Factory,
  globe: Globe,
  box: Box,
  sparkles: Sparkles,
  recycle: Recycle,
  truck: Truck,
  tag: Tag,
  award: Award,
};

export function Icon({ name, ...p }: P & { name: IconKey }) {
  const C = iconMap[name];
  return <C {...p} />;
}
