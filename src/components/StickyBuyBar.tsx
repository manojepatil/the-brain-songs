import { useEffect, useState } from "react";

export function StickyBuyBar({ href }: { href: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
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
          <div className="hidden sm:flex flex-col text-secondary-foreground leading-tight">
            <span className="text-xs uppercase tracking-wider opacity-80">Today's Special</span>
            <span className="font-extrabold text-lg">
              The Brain Song — <span className="text-primary">$39</span> One-Time
            </span>
          </div>
          <div className="flex sm:hidden flex-col text-secondary-foreground leading-tight">
            <span className="font-extrabold text-base">
              <span className="text-primary">$39</span> · Lifetime Access
            </span>
          </div>
          <a
            href={href}
            target="_blank"
            rel="noopener sponsored"
            className="rounded-full px-5 sm:px-8 py-3 font-extrabold uppercase tracking-wide text-sm sm:text-base text-foreground shadow-[var(--shadow-cta)] hover:scale-[1.03] transition-transform whitespace-nowrap"
            style={{ backgroundImage: "var(--gradient-cta)" }}
          >
            ▶ Get Instant Access — $39
          </a>
        </div>
      </div>
    </div>
  );
}
