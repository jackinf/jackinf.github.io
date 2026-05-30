import type { ElementType, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal.ts";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger delay in ms applied as a transition-delay. */
  delay?: number;
  id?: string;
}

/** Wraps content with a scroll-triggered fade/slide-up reveal. */
export function Reveal({ children, as, className, delay = 0, id }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, visible } = useReveal();

  return (
    <Tag
      ref={ref}
      id={id}
      data-reveal=""
      className={`${visible ? "is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
