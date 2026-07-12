"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex select-none items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full text-sm font-medium outline-none transition-[box-shadow,background-color,color] duration-300 focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-base disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue via-violet to-cyan bg-[length:200%_100%] bg-[position:0%_0%] text-white shadow-[0_0_20px_rgba(255,42,95,0.3)] hover:bg-[position:100%_0%] hover:shadow-[0_0_36px_rgba(255,42,95,0.55)]",
        outline:
          "glass text-white hover:bg-white/10 hover:shadow-[0_0_24px_rgba(255,149,0,0.2)]",
        ghost:
          "text-white/70 hover:bg-white/5 hover:text-white",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

type SharedProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children?: React.ReactNode;
  /** Enable the magnetic pull-toward-cursor effect. Default: true */
  magnetic?: boolean;
  /** How strongly the button follows the cursor. Default: 14 */
  magneticStrength?: number;
  disabled?: boolean;
};

export type ButtonProps = SharedProps &
  Omit<HTMLMotionProps<"button">, "children" | "onAnimationStart"> & {
    href?: undefined;
  };

export type ButtonAnchorProps = SharedProps &
  Omit<HTMLMotionProps<"a">, "children" | "onAnimationStart"> & {
    href: string;
  };

/**
 * Universal premium button. Renders a <button> by default, or an <a> when
 * given an `href` (external links auto-get target/rel). Used for every CTA,
 * navbar link, form action, and icon/social button across the site so the
 * interaction language stays identical everywhere.
 */
export const Button = React.forwardRef<
  HTMLButtonElement & HTMLAnchorElement,
  ButtonProps | ButtonAnchorProps
>(
  (
    {
      className,
      variant,
      size,
      magnetic = true,
      magneticStrength = 14,
      href,
      onClick,
      disabled,
      children,
      ...props
    },
    forwardedRef
  ) => {
    const innerRef = React.useRef<HTMLButtonElement & HTMLAnchorElement>(null);
    const [offset, setOffset] = React.useState({ x: 0, y: 0 });
    const [ripples, setRipples] = React.useState<Ripple[]>([]);
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    React.useImperativeHandle(forwardedRef, () => innerRef.current as any);

    function handleMouseMove(e: React.MouseEvent) {
      if (!magnetic || disabled || reducedMotion) return;
      const el = innerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      setOffset({
        x: (x / rect.width) * magneticStrength,
        y: (y / rect.height) * magneticStrength,
      });
    }

    function handleMouseLeave() {
      setOffset({ x: 0, y: 0 });
    }

    function handleClick(e: React.MouseEvent) {
      if (disabled) {
        e.preventDefault();
        return;
      }
      const el = innerRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 1.8;
        const id = Date.now() + Math.random();
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        setRipples((r) => [...r, { id, x, y, size }]);
        window.setTimeout(() => {
          setRipples((r) => r.filter((rp) => rp.id !== id));
        }, 650);
      }
      onClick?.(e as any);
    }

    const isExternal = href?.startsWith("http");
    const Comp = (href ? motion.a : motion.button) as any;

    return (
      <Comp
        ref={innerRef}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        disabled={!href ? disabled : undefined}
        aria-disabled={disabled || undefined}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        animate={{ x: offset.x, y: offset.y }}
        transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.3 }}
        whileHover={disabled ? undefined : { scale: 1.04 }}
        whileTap={disabled ? undefined : { scale: 0.96 }}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {/* moving shine sweep */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
        >
          <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/25 opacity-0 transition-all duration-700 ease-out group-hover:left-[130%] group-hover:opacity-100" />
        </span>

        {/* click ripples */}
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            initial={{ opacity: 0.45, scale: 0 }}
            animate={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="pointer-events-none absolute rounded-full bg-white/50"
            style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
          />
        ))}

        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
