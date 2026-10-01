import Link from "next/link";
import type { LucideIcon } from "lucide-react";

/** Visual variants shared across the page's call-to-action buttons. */
type Variant = "primary" | "secondary" | "light" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  /** Solid violet pill — main conversion action. */
  primary: "bg-violet text-paper hover:bg-navy focus-visible:outline-violet",
  /** Near-black pill — high-contrast secondary action. */
  secondary: "bg-ink text-paper hover:bg-violet focus-visible:outline-ink",
  /** White pill — sits on dark or colorful backgrounds (nav over art). */
  light: "bg-paper text-ink hover:bg-ink hover:text-paper focus-visible:outline-paper",
  /** Outlined button — low-emphasis action on light backgrounds. */
  outline:
    "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper focus-visible:outline-ink",
  /** Text-only button — tertiary action, e.g. "Learn more". */
  ghost: "text-ink hover:text-violet focus-visible:outline-violet",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
} as const;

/** Nav buttons are fully rounded; hero/CTA buttons use a soft 12px corner. */
const shapes = {
  pill: "rounded-full",
  soft: "rounded-xl",
} as const;

interface BaseProps {
  variant?: Variant;
  size?: keyof typeof sizes;
  shape?: keyof typeof shapes;
  /** Optional leading icon rendered before the label. */
  icon?: LucideIcon;
  className?: string;
}

type ButtonProps = BaseProps &
  Omit<React.ComponentPropsWithoutRef<"button">, "className">;

type LinkProps = BaseProps &
  Omit<React.ComponentPropsWithoutRef<typeof Link>, "className" | "href"> & {
    href: string;
  };

function classes({
  variant = "primary",
  size = "md",
  shape = "pill",
  className = "",
}: BaseProps) {
  return [
    "inline-flex items-center justify-center gap-2 font-medium",
    "transition-colors duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    shapes[shape],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

/** Solid action that submits a form. */
export function Button({
  variant,
  size,
  shape,
  icon: Icon,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={classes({ variant, size, shape, className })} {...props}>
      {Icon ? <Icon aria-hidden className="size-4" /> : null}
      {props.children}
    </button>
  );
}

/** Navigation action rendered as an anchor element. */
export function ButtonLink({
  variant,
  size,
  shape,
  icon: Icon,
  className,
  href,
  ...props
}: LinkProps) {
  return (
    <Link
      href={href}
      className={classes({ variant, size, shape, className })}
      {...props}
    >
      {Icon ? <Icon aria-hidden className="size-4" /> : null}
      {props.children}
    </Link>
  );
}
