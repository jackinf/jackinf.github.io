import type { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal.ts";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger delay in ms applied as a transition-delay. */
  delay?: number;
  id?: string;
  /** Extra inline styles (e.g. CSS custom properties); merged with the delay. */
  style?: CSSProperties;
}

/** Wraps content with a scroll-triggered fade/slide-up reveal. */
export function Reveal({ children, as, className, delay = 0, id, style }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, visible } = useReveal();

  const mergedStyle =
    delay || style ? { ...style, ...(delay ? { transitionDelay: `${delay}ms` } : {}) } : undefined;

  return (
    <Tag
      ref={ref}
      id={id}
      data-reveal=""
      className={`${visible ? "is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={mergedStyle}
    >
      {children}
    </Tag>
  );
}
