import clsx from "clsx";

// Shared button styles so links and buttons look identical everywhere.
export type ButtonVariant = "gold" | "ink" | "chalk" | "outline-ink" | "outline-chalk";

const variants: Record<ButtonVariant, string> = {
  gold: "bg-gold text-ink hover:bg-chalk",
  ink: "bg-ink text-chalk hover:bg-gold hover:text-ink",
  chalk: "bg-chalk text-ink hover:bg-gold",
  "outline-ink": "border-2 border-ink text-ink hover:bg-ink hover:text-chalk",
  "outline-chalk": "border-2 border-chalk/40 text-chalk hover:border-gold hover:bg-gold hover:text-ink",
};

export function buttonClass(variant: ButtonVariant = "gold", extra?: string) {
  return clsx(
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.14em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/50 active:scale-[0.97]",
    variants[variant],
    extra,
  );
}
