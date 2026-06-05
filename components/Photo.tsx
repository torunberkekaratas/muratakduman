import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * next/image sarmalayıcı. Konteyner `relative` + yükseklik vermeli;
 * görsel `fill` ile kapsar. fit="contain" ürün şişeleri için (beyaz zemin).
 */
export function Photo({
  src,
  alt,
  className,
  imgClassName,
  fit = "cover",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  fit?: "cover" | "contain";
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <span className={cn("relative block overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn(fit === "contain" ? "object-contain" : "object-cover", imgClassName)}
      />
    </span>
  );
}
