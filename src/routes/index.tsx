import { createFileRoute, Link } from "@tanstack/react-router";
import { StickyBuyBar } from "@/components/StickyBuyBar";

const BUY_URL = "https://145b3eqlvae-e21duiy6539zfk.hop.clickbank.net";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ProstaVive - Natural Prostate Health Support Supplement" },
      {
        name: "description",
        content: "Reclaim your prostate health with ProstaVive. Natural support for urinary health, prostate function, and overall vitality. Clinically studied ingredients for men's health.",
      },
      {
        name: "keywords",
        content: "ProstaVive, prostate health, urinary health, men's supplement, prostate support, natural prostate, vitality supplement",
      },
      { property: "og:title", content: "ProstaVive - Natural Prostate Health Support" },
      {
        property: "og:description",
        content: "Discover ProstaVive, the natural supplement for prostate health and urinary function. Clinically studied ingredients for men's vitality.",
      },
      { property: "og:image", content: "https://yourdomain.com/assets/bottles.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://yourdomain.com/assets/bottles.png" },
    ],
  }),
});

function CTA({ label = "Order Now" }: { label?: string }) {
  return (
    <a
      href={BUY_URL}
      target="_blank"
      rel="noopener sponsored"
      className="inline-block rounded-full px-8 py-4 font-bold text-primary-foreground uppercase tracking-wide text-base sm:text-lg shadow-[var(--shadow-cta)] hover:scale-[1.02] transition-transform animate-pulse"
      style={{ backgroundImage: "var(--gradient-cta)" }}
    >
      ▶ {label}
    </a>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary text-center mb-8 leading-tight">
      {children}
    </h2>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-card)] border border-border/60">
      {children}
    </div>
  );
}

function Index() {
  const benefits = [
    "Supports healthy prostate function",
    "Improves urinary flow and reduces nighttime trips",
    "Reduces discomfort and promotes comfort",
    "Enhances overall vitality and energy",
    "Contains clinically studied ingredients",
  ];

  const testimonials = [
    {
      name: "John D.",
      city: "New York, NY",
      text: "ProstaVive has been a game-changer for me. No more waking up multiple times at night, and I feel more energetic during the day.",
    },
    {
      name: "Mike R.",
      city: "Los Angeles, CA",
      text: "After trying ProstaVive, my urinary issues have significantly improved. Highly recommend for men over 40.",
    },
    {
      name: "David S.",
      city: "Chicago, IL",
      text: "Great supplement! Supports prostate health naturally without any side effects. Noticeable improvement in just a few weeks.",
    },
  ];

  return (
    <main className="bg-background text-foreground pb-20 sm:pb-24">
      <StickyBuyBar href={BUY_URL} />

      {/* Hero Section */}
      <section className="px-4 pt-12 pb-16 text-secondary-foreground" style={{ backgroundImage: "var(--gradient-hero)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05]">
              Reclaim Your <span className="text-primary">Prostate Health</span> Naturally
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-secondary-foreground/90 max-w-xl">
              ProstaVive supports healthy prostate function, improves urinary flow, and enhances overall vitality with clinically studied ingredients.
            </p>
            <div className="mt-7">
              <CTA label="Get ProstaVive Today" />
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/assets/bottles.png"
              alt="ProstaVive supplement bottles"
              width={600}
              height={600}
              loading="lazy"
              className="w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src="/assets/bottles.png"
              alt="ProstaVive product"
              width={400}
              height={400}
              loading="lazy"
              className="w-full max-w-sm"
            />
          </div>
          <div>
            <SectionTitle>Why Choose ProstaVive?</SectionTitle>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary text-2xl">✓</span>
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>As Seen On</SectionTitle>
          <div className="flex justify-center items-center gap-8 mb-12">
            <div className="text-2xl font-bold text-gray-400">CNN</div>
            <div className="text-2xl font-bold text-gray-400">Fox News</div>
            <div className="text-2xl font-bold text-gray-400">Health.com</div>
            <div className="text-2xl font-bold text-gray-400">Men's Health</div>
          </div>
          <SectionTitle>Customer Reviews</SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((review, index) => (
              <Card key={index}>
                <div className="mb-4">
                  <p className="font-bold text-secondary">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.city}</p>
                  <p className="text-primary">⭐⭐⭐⭐⭐</p>
                </div>
                <p className="text-foreground/80 italic">"{review.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-10 px-4 text-center text-sm">
        <p className="max-w-3xl mx-auto mb-4">
          *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
        </p>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 font-semibold">
          <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
          <Link to="/terms" className="text-primary hover:underline">Terms</Link>
        </nav>
        <p>© {new Date().getFullYear()} ProstaVive. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default Index;