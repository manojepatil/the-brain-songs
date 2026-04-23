import { useEffect, useState } from "react";

export function StickyBuyBar({ href }: { href: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="bg-secondary border-t-4 border-primary shadow-2xl">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex flex-col text-secondary-foreground leading-tight">
            <span className="text-xs uppercase tracking-wider opacity-80">ProstaVive</span>
            <span className="font-extrabold text-lg">Special Offer</span>
          </div>
          <a
            href={href}
            target="_blank"
            rel="noopener sponsored"
            className="rounded-full px-5 sm:px-8 py-3 font-extrabold uppercase tracking-wide text-sm sm:text-base text-foreground shadow-[var(--shadow-cta)] hover:scale-[1.03] transition-transform whitespace-nowrap animate-pulse"
            style={{ backgroundImage: "var(--gradient-cta)" }}
          >
            ▶ Order Now
          </a>
        </div>
      </div>
    </div>
  );
}
