import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — The Brain Song Reviews" },
      { name: "description", content: "Privacy Policy for The Brain Song Reviews affiliate website. Learn how we collect, use and protect your information." },
      { property: "og:title", content: "Privacy Policy — The Brain Song Reviews" },
      { property: "og:description", content: "How we handle your data on The Brain Song Reviews affiliate website." },
    ],
  }),
});

function PrivacyPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <div className="bg-secondary py-4 px-4 text-center">
        <Link to="/" className="text-primary font-bold text-xl">The Brain Song Reviews</Link>
      </div>
      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg">
        <h1 className="text-4xl font-extrabold text-secondary mb-6">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

        <p>This Privacy Policy explains how this website ("we", "us", "our") collects, uses, and protects information when you visit our site. By using this website, you agree to the practices described below.</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">1. Information We Collect</h2>
        <p>We do not require you to register or submit personal information to read our content. We may automatically collect non-personal data such as your IP address, browser type, device information, referring URL, and pages visited, through standard server logs and analytics tools (such as Google Analytics).</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">2. Cookies</h2>
        <p>Our website may use cookies and similar tracking technologies to improve user experience, measure traffic, and track affiliate referrals. You can disable cookies through your browser settings, though some features may not function properly.</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">3. Affiliate Disclosure</h2>
        <p>This website contains affiliate links, including links to ClickBank vendors. If you click an affiliate link and make a purchase, we may earn a commission at no additional cost to you. We only recommend products we believe may provide value to our readers.</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">4. Third-Party Services</h2>
        <p>When you click an outbound link to a vendor (such as the official The Brain Song sales page), you will be subject to that third party's privacy policy and terms. We are not responsible for the content, security, or privacy practices of third-party websites.</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">5. Data Security</h2>
        <p>We implement reasonable measures to protect any information processed through this site. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">6. Children's Privacy</h2>
        <p>This website is not directed to individuals under the age of 18. We do not knowingly collect personal information from children.</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">7. Your Rights</h2>
        <p>Depending on your location, you may have the right to access, correct, or delete personal data we hold about you. To make a request, contact us using the details below.</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">8. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. The "Last updated" date at the top reflects the most recent revision. Continued use of the site means you accept the updated policy.</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">9. Contact</h2>
        <p>For questions about this Privacy Policy, please contact us through our website.</p>

        <div className="mt-10">
          <Link to="/" className="text-primary font-bold">← Back to Home</Link>
        </div>
      </article>
    </main>
  );
}
