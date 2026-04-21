import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/sales/product.png";
import productMini from "@/assets/sales/product-mini.png";
import logoImg from "@/assets/sales/brain-song-logo.png";
import { StickyBuyBar } from "@/components/StickyBuyBar";


import review1 from "@/assets/review-1.jpg";
import review2 from "@/assets/review-2.jpg";
import review3 from "@/assets/review-3.jpg";

const BUY_URL = "https://4eaf17h8vabqnwcw16smter2ch.hop.clickbank.net/";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The Brain Song Reviews 2026 — Honest Memory & Focus Audio Program Review" },
      {
        name: "description",
        content:
          "The Brain Song reviews: a 12-minute brain-boosting audio program that activates Gamma brainwaves and supports BDNF for memory, focus and mental clarity. See benefits, pricing and how it works.",
      },
      {
        name: "keywords",
        content:
          "the brain song, the brain song reviews, brain song audio program, BDNF, gamma brainwaves, memory support, brain health audio, focus and concentration, brain song scam or legit, the brain song buy",
      },
      { property: "og:title", content: "The Brain Song Reviews 2026 — Memory & Focus Audio Program" },
      {
        property: "og:description",
        content:
          "Honest Brain Song review — how the 12-minute Gamma-wave audio works, who it's for, and real customer reviews.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
});

function CTA({ label = "Get The Brain Song Now" }: { label?: string }) {
  return (
    <a
      href={BUY_URL}
      target="_blank"
      rel="noopener sponsored"
      className="inline-block rounded-full px-8 py-4 font-bold text-primary-foreground uppercase tracking-wide text-base sm:text-lg shadow-[var(--shadow-cta)] hover:scale-[1.02] transition-transform"
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
  const reviews = [
    {
      name: "Jennifer Mitchell",
      city: "Austin, TX",
      img: review1,
      text:
        "I'm 52 and I was forgetting names, words, even why I walked into a room. After three weeks of listening to The Brain Song every morning, my head feels clear again. I finished a whole book last week without re-reading the same page five times!",
    },
    {
      name: "Robert Hayes",
      city: "Cleveland, OH",
      img: review2,
      text:
        "Honestly I thought it was just relaxing music. But within a month my focus at work was sharper, I stopped losing my keys, and my wife says I'm in a better mood. Twelve minutes a day — that's it. Wish I had this ten years ago.",
    },
    {
      name: "Ashley Carter",
      city: "Sarasota, FL",
      img: review3,
      text:
        "Brain fog from menopause was wrecking me. The Brain Song is the first thing that actually helped — I feel awake, motivated and present with my kids again. Twelve minutes a day is all it takes.",
    },
  ];

  const benefits = [
    ["Sharper Memory", "Helps you recall names, dates and conversations without that frustrating blank pause."],
    ["Laser Focus", "Quiets mental noise so you can lock in on work, reading or hobbies for hours."],
    ["More Energy", "Wakes up tired brain cells so you feel awake and motivated from the first song."],
    ["Better Mood", "Calms stress and anxiety, lifting your mood naturally without pills."],
    ["Deeper Sleep", "Slows racing thoughts at night so you fall asleep faster and wake up refreshed."],
    ["Mental Clarity", "Lifts brain fog so words, ideas and decisions come easily again."],
    ["Confidence", "When your mind works, your whole life works — meetings, conversations, family time."],
    ["Long-Term Brain Health", "Supports healthy brain aging so you stay sharp for years to come."],
  ];

  const faqs = [
    ["Is The Brain Song really just an audio?", "Yes. It's a 12-minute sound track you listen to once a day with headphones. No pills, no gadgets, no side effects."],
    ["How fast will I see results?", "Most users report feeling calmer and clearer within the first 7 days. For lasting memory and focus benefits, listen daily for 30–60 days."],
    ["Is The Brain Song safe?", "It's 100% natural sound — no chemicals, no drugs. It's safe for adults of any age and won't interact with medications."],
    ["Do I need special headphones?", "Any headphones or earbuds work. Headphones give the best stereo effect, but a phone speaker still works in a pinch."],
    ["Can I listen more than once a day?", "Yes. Many users listen morning and night. There's no risk of overdoing it."],
    ["Will it work for someone over 65?", "Absolutely. In fact, older adults often notice the biggest improvements in memory and clarity."],
    ["Is this a subscription?", "No. It's a one-time payment for lifetime access. No hidden charges, no auto-bill."],
    ["What if it doesn't work for me?", "The official Brain Song program is sold risk-free through ClickBank's secure checkout. Refund terms are handled directly by the vendor on their order page."],
    ["How do I get the program after buying?", "Instantly. After checkout you'll get an email with download links and login details for the member's area."],
    ["Where is The Brain Song available?", "Only on the official website through the secure order button on this page. It's not sold on Amazon, Walmart or in stores."],
  ];

  return (
    <main className="bg-background text-foreground pb-20 sm:pb-24">
      <StickyBuyBar href={BUY_URL} />
      {/* Top bar */}
      <div className="bg-primary text-foreground text-center text-xs sm:text-sm py-2 px-4 font-bold uppercase tracking-wide">
        🎧 Special 2026 Offer — Just <span className="text-secondary">$39</span> For Lifetime Digital Access
      </div>

      {/* Logo bar */}
      <div className="bg-white py-4 px-4 flex justify-center items-center border-b border-border">
        <img
          src={logoImg}
          alt="The Brain Song"
          width={200}
          height={80}
          className="h-14 sm:h-16 w-auto"
        />
      </div>

      {/* HERO */}
      <section
        className="px-4 pt-12 pb-16 text-secondary-foreground"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <span className="inline-block bg-primary text-foreground font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-4">
              Official Brain Song Reviews 2026
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05]">
              <span className="text-primary">Press Play.</span>
              <br />
              <span className="text-secondary-foreground">Wake Up A Sharper, Calmer, More Focused Mind In Just Minutes A Day.</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-secondary-foreground/90 max-w-xl">
              Discover the gentle audio ritual thousands of Americans are using to fight
              brain fog, recover lost focus and protect long-term memory — no pills, no
              gadgets, just headphones and a few quiet minutes a day.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-4 items-center md:items-start">
              <CTA label="Try The Brain Song Today" />
              <span className="text-sm text-secondary-foreground/80">⭐⭐⭐⭐⭐ 4.9 / 5 from 19,200+ users</span>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={heroImg}
              alt="The Brain Song audio program"
              width={600}
              height={600}
              className="w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* INTRO / PROMISE */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-5 text-lg leading-relaxed">
          <SectionTitle>A Simple 12-Minute Song That's Changing How America Remembers</SectionTitle>
          <p>
            Imagine pressing play, closing your eyes for twelve minutes, and feeling your
            mind switch back on — like flipping a light bulb you forgot was off. That's
            the promise behind The Brain Song, and that's why people from every state are
            talking about it.
          </p>
          <p>
            The Brain Song is a brand-new audio program designed to support memory,
            focus and mental clarity using carefully layered sound frequencies. No pills.
            No powders. Just headphones and twelve minutes of your day.
          </p>
          <p>
            If you've ever walked into a room and forgotten why, lost your train of
            thought mid-sentence, or felt that frustrating mental fog after 40 — this
            program was built for you.
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 px-4 bg-[oklch(0.96_0.025_250)]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Real Brain Song Reviews From Real Customers</SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <Card key={r.name}>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={r.img}
                    alt={r.name}
                    width={512}
                    height={512}
                    loading="lazy"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-secondary">{r.name}</p>
                    <p className="text-sm text-muted-foreground">{r.city}</p>
                    <p className="text-primary text-sm">⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
                <p className="text-foreground/80 italic">"{r.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-5 text-lg leading-relaxed">
          <SectionTitle>What Is The Brain Song?</SectionTitle>
          <p>
            The Brain Song is a 12-minute audio program built around layered sound
            frequencies, gentle nature tones and rhythmic beats that gently nudge your
            brain back into a focused, alert state. Think of it like a tune-up for the
            mind you can do while sipping morning coffee.
          </p>
          <p>
            Unlike supplements or nootropic pills, The Brain Song doesn't ask your body
            to digest anything. You simply put on headphones, press play, and let the
            sound do the work. That's why so many Brain Song reviews call it the
            easiest brain health habit they've ever stuck with.
          </p>
          <p>
            Inside, you get the master Brain Song track plus shorter "boost" sessions
            for focus, sleep and stress. Everything is delivered digitally, so you can
            listen on your phone, laptop or smart speaker — anywhere, anytime.
          </p>
          <p>
            For adults dealing with brain fog, forgetfulness, low focus or mental
            burnout, The Brain Song is positioned as a safe, drug-free, science-backed
            daily ritual. And with thousands of positive reviews online, it's quickly
            becoming one of the most talked-about brain health audio programs of 2026.
          </p>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-16 px-4 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 leading-tight">
            What Do You Get Inside The Brain Song?
          </h2>
          <p className="text-center text-lg mb-8 opacity-90">
            When you order today, you unlock the complete Brain Song digital experience:
          </p>
          <ul className="space-y-3 text-lg max-w-2xl mx-auto">
            {[
              "The original 12-Minute Brain Song master audio track",
              "Neuroscience-inspired Gamma brainwave sound patterns",
              "Instant digital download — listen on any device",
              "Step-by-step Quick Start listening guide",
              "Lifetime access — pay once, listen forever",
              "Works in the comfort of your own home",
              "No pills, no equipment, no subscriptions",
              "Designed for adults of any age",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-primary text-xl">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="text-center mt-10">
            <CTA />
          </div>
        </div>
      </section>

      {/* UNIQUE */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-5 text-lg leading-relaxed">
          <SectionTitle>What Makes The Brain Song Unique?</SectionTitle>
          <p>
            Most brain health products ask you to swallow capsules or change your diet.
            The Brain Song flips the script — it's the only program of its kind that
            uses pure sound to gently activate the parts of your brain responsible for
            memory and focus.
          </p>
          <p>
            Every track is layered with specific frequencies, rhythmic patterns and
            soothing tones designed to sync with brainwave activity. That means you're
            not just relaxing — you're actively training your mind in the background.
          </p>
          <p>
            And it's stupidly simple. Twelve minutes, one set of headphones, no apps to
            learn, no equipment to buy. That's why so many honest Brain Song reviews say
            it's the only routine they've ever managed to keep up daily.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-4 bg-[oklch(0.96_0.025_250)]">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>How Does The Brain Song Work?</SectionTitle>
          <ul className="space-y-4 text-lg">
            {[
              "You put on any pair of headphones or earbuds.",
              "You press play on the 12-minute Brain Song track.",
              "Layered sound frequencies start gently syncing with your brainwaves.",
              "Your nervous system relaxes, and stress chemicals begin to drop.",
              "The brain shifts into a focused, alert state similar to deep meditation.",
              "Memory and focus pathways are gently re-activated and strengthened.",
              "Done daily, this trains your brain to stay sharp, clear and calm long-term.",
            ].map((s, i) => (
              <li key={i} className="flex gap-4 bg-card p-4 rounded-xl shadow-[var(--shadow-card)]">
                <span className="font-extrabold text-primary text-xl">{i + 1}.</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CREATOR */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-5 text-lg leading-relaxed">
          <SectionTitle>Who Created The Brain Song?</SectionTitle>
          <p>
            The Brain Song was developed by an independent team of sound therapists and
            brain health researchers in the United States. After years of working with
            patients struggling with memory loss and focus issues, they wanted a tool
            that anyone — not just clinic patients — could use at home.
          </p>
          <p>
            The lead creator is reported to be a sound therapy specialist who spent
            over a decade studying how specific audio frequencies affect cognitive
            performance, drawing inspiration from both modern neuroscience and ancient
            sound healing traditions.
          </p>
          <p>
            The result is The Brain Song: a clean, simple, science-inspired audio
            program built for everyday Americans. No medical jargon, no scary pills —
            just press play.
          </p>
        </div>
      </section>

      {/* SCIENCE */}
      <section className="py-16 px-4 bg-secondary text-secondary-foreground">
        <div className="max-w-3xl mx-auto space-y-5 text-lg leading-relaxed">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 leading-tight">
            The Science Behind The Brain Song
          </h2>
          <p>
            Researchers have known for decades that sound can change brainwave
            activity. Specific frequencies can shift the brain into states of focus,
            calm, or deep rest — and that's the foundation The Brain Song is built on.
          </p>
          <p>
            Studies on rhythmic auditory stimulation suggest that gentle, repeating
            sound patterns may help support memory recall, attention span and
            relaxation in healthy adults — all areas that decline with stress and age.
          </p>
          <p>
            The Brain Song combines these patterns with carefully tuned background
            tones, designed to gently coax the brain into an alert-but-relaxed state
            similar to what experienced meditators achieve after years of practice.
          </p>
          <p>
            While it's not a medical treatment, the principles behind The Brain Song
            are rooted in real, well-studied areas of audio neuroscience — which is why
            so many users notice improvements in clarity and mood within just weeks.
          </p>
        </div>
      </section>

      {/* HELPS / GENIUS */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-2xl font-extrabold text-secondary mb-3">How The Brain Song Helps</h3>
            <p className="text-foreground/80 leading-relaxed">
              The Brain Song helps by giving your overworked, overstimulated brain a
              daily reset. Modern life floods us with screens, noise and stress — this
              12-minute ritual quiets the noise, restores focus, and supports the
              memory pathways that suffer most with age and burnout. Used daily, many
              users report feeling sharper, calmer and more like themselves again.
            </p>
          </Card>
          <Card>
            <h3 className="text-2xl font-extrabold text-secondary mb-3">
              How It Activates Your Inner Genius
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Your "inner genius" isn't magic — it's your brain operating in a focused,
              relaxed flow state. The Brain Song gently nudges your mind into that
              exact zone using sound, helping you think faster, learn easier, recall
              names instantly and tap into creativity you forgot you had. It's the
              version of you that shows up when stress finally gets out of the way.
            </p>
          </Card>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 px-4 bg-[oklch(0.96_0.025_250)]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Top Benefits of The Brain Song</SectionTitle>
          <p className="text-center text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Here's what users love most about adding The Brain Song to their daily routine:
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {benefits.map(([title, desc]) => (
              <div key={title} className="flex gap-4 bg-card p-5 rounded-xl shadow-[var(--shadow-card)]">
                <span className="text-2xl">🧠</span>
                <div>
                  <p className="font-bold text-secondary">{title}</p>
                  <p className="text-foreground/80">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCIENCE: BDNF + GAMMA — replaces fake bonuses */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src={productMini}
            alt="The Brain Song — Gamma brainwave audio"
            width={600}
            height={600}
            loading="lazy"
            className="w-full max-w-md mx-auto drop-shadow-2xl"
          />
          <div>
            <SectionTitle>BDNF + Gamma Brainwaves: The Real Science</SectionTitle>
            <ul className="space-y-3 text-lg">
              <li>🧠 <b>BDNF</b> (Brain-Derived Neurotrophic Factor) is called the brain's "fertilizer" — it supports healthy communication between brain cells.</li>
              <li>⚡ Recent research suggests <b>Gamma brainwaves</b> may play a role in encouraging BDNF activity.</li>
              <li>🎧 The Brain Song uses advanced sound patterns to gently guide your brain toward Gamma frequencies — safely and naturally.</li>
              <li>⏱️ Just <b>12 minutes a day</b> from the comfort of your home — no pills, no devices, no side effects.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROS & CONS */}
      <section className="py-16 px-4 bg-[oklch(0.96_0.025_250)]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Pros and Cons of The Brain Song</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-extrabold mb-3"><span style={{ color: "oklch(0.62 0.18 145)" }}>✅ Pros</span></h3>
              <ul className="space-y-2 text-foreground/80">
                <li>• 100% natural — no pills, no side effects</li>
                <li>• Just 12 minutes a day</li>
                <li>• Instant digital access after purchase</li>
                <li>• Works on any phone, headphones or speaker</li>
                <li>• One-time payment of $39 — lifetime access</li>
                <li>• Inspired by real BDNF + Gamma brainwave research</li>
              </ul>
            </Card>
            <Card>
              <h3 className="text-xl font-extrabold text-secondary mb-3">⚠️ Cons</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>• Only available on the official website</li>
                <li>• Requires consistent daily use for best results</li>
                <li>• Headphones strongly recommended</li>
                <li>• Stock and discounted pricing are limited</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* PRICING — replaces fake guarantee */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center bg-card rounded-3xl p-10 shadow-[var(--shadow-card)] border border-border/60">
          <p className="uppercase tracking-widest text-sm text-secondary font-bold mb-2">
            Today's Special Price
          </p>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-foreground mb-2">
            Just <span className="text-secondary">$39</span>
          </h2>
          <p className="text-lg text-foreground/80 mb-6">
            One-time payment · Instant digital delivery · Lifetime access
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-sm">
            <div className="bg-[oklch(0.96_0.025_250)] rounded-xl p-4">
              <div className="text-2xl mb-1">🔒</div>
              <div className="font-bold text-secondary">Secure Checkout</div>
              <div className="text-muted-foreground">256-bit ClickBank checkout</div>
            </div>
            <div className="bg-[oklch(0.96_0.025_250)] rounded-xl p-4">
              <div className="text-2xl mb-1">⚡</div>
              <div className="font-bold text-secondary">Instant Access</div>
              <div className="text-muted-foreground">Listen within 60 seconds</div>
            </div>
            <div className="bg-[oklch(0.96_0.025_250)] rounded-xl p-4">
              <div className="text-2xl mb-1">📱</div>
              <div className="font-bold text-secondary">Any Device</div>
              <div className="text-muted-foreground">Phone, laptop, speaker</div>
            </div>
          </div>
          <CTA label="Get Instant Access — $39" />
          <p className="text-xs text-muted-foreground mt-4">
            Secure payment processed by ClickBank. Refund terms are handled by the official vendor at checkout.
          </p>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="py-16 px-4 bg-[oklch(0.96_0.025_250)]">
        <div className="max-w-3xl mx-auto">
          <SectionTitle>How to Use The Brain Song</SectionTitle>
          <ol className="space-y-3 text-lg list-decimal pl-6">
            <li>Find a quiet spot and put on your headphones.</li>
            <li>Open the member's area and press play on the 12-minute track.</li>
            <li>Close your eyes, breathe slowly and let the audio do the work.</li>
            <li>Repeat once a day — morning is best — for at least 30 days.</li>
            <li>Stay consistent — daily listening is what trains the brain over time.</li>
          </ol>
        </div>
      </section>

      {/* WHO SHOULD USE */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionTitle>Who Should Use The Brain Song?</SectionTitle>
          <p className="text-lg text-foreground/80 leading-relaxed mb-4">
            The Brain Song is designed for any adult who wants better memory, sharper
            focus and a calmer mind — without pills or complicated routines. It's
            especially helpful for:
          </p>
          <ul className="space-y-2 text-lg">
            <li>• Adults 40+ noticing forgetfulness or brain fog</li>
            <li>• Busy professionals struggling to focus at work</li>
            <li>• Students preparing for exams or learning new skills</li>
            <li>• Seniors who want to keep their mind sharp as they age</li>
            <li>• Anyone dealing with stress, burnout or poor sleep</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[oklch(0.96_0.025_250)]">
        <div className="max-w-3xl mx-auto">
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <div className="space-y-4">
            {faqs.map(([q, a]) => (
              <details key={q} className="bg-card rounded-xl p-5 shadow-[var(--shadow-card)] group">
                <summary className="font-bold text-secondary cursor-pointer list-none flex justify-between items-center">
                  <span>{q}</span>
                  <span className="text-primary group-open:rotate-45 transition-transform text-2xl">+</span>
                </summary>
                <p className="mt-3 text-foreground/80">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* AFTER BUY */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle>What Happens After You Click "Buy Now"?</SectionTitle>
          <p className="text-lg text-foreground/80 leading-relaxed">
            After clicking the order button, you'll be taken to a secure 256-bit
            encrypted checkout page. Enter your details, complete the order, and
            you'll instantly receive an email with your login info and download links
            to The Brain Song program plus all free bonuses. Total time to access:
            under 60 seconds.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="buy"
        className="py-20 px-4 text-center text-secondary-foreground"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4">
            Don't Wait Any Longer!
          </h2>
          <p className="text-xl sm:text-2xl font-semibold mb-8 text-primary">
            Join Your Discounted Brain Song Program Now
          </p>
          <a
            href={BUY_URL}
            target="_blank"
            rel="noopener sponsored"
            className="inline-block rounded-full px-10 py-5 font-extrabold text-lg sm:text-xl uppercase tracking-wide text-foreground shadow-[var(--shadow-cta)] hover:scale-[1.02] transition-transform"
            style={{ backgroundImage: "var(--gradient-cta)" }}
          >
            ▶ Yes! I Want The Brain Song
          </a>
          <p className="mt-6 opacity-90">One-Time $39 Payment · Instant Digital Access · Lifetime Listening</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-secondary text-secondary-foreground/80 py-10 px-4 text-center text-sm">
        <p className="max-w-3xl mx-auto mb-4">
          Disclaimer: The Brain Song is an audio wellness program and is not intended
          to diagnose, treat, cure or prevent any disease. Results may vary. Always
          consult your physician before starting any new wellness routine. This site is
          an independent affiliate review and may earn a commission from purchases.
        </p>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 font-semibold">
          <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
          <Link to="/terms" className="text-primary hover:underline">Terms and Conditions</Link>
          <Link to="/disclaimer" className="text-primary hover:underline">Disclaimers</Link>
        </nav>
        <p>© {new Date().getFullYear()} The Brain Song. All rights reserved.</p>
      </footer>
    </main>
  );
}
