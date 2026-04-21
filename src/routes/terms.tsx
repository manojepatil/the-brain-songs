import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms and Conditions — The Brain Song Reviews" },
      { name: "description", content: "Terms and Conditions governing your use of The Brain Song Reviews affiliate website." },
      { property: "og:title", content: "Terms and Conditions — The Brain Song Reviews" },
      { property: "og:description", content: "The rules for using The Brain Song Reviews website." },
    ],
  }),
});

function TermsPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <div className="bg-secondary py-4 px-4 text-center">
        <Link to="/" className="text-primary font-bold text-xl">The Brain Song Reviews</Link>
      </div>
      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg">
        <h1 className="text-4xl font-extrabold text-secondary mb-6">Terms and Conditions</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

        <p>Please read these Terms and Conditions ("Terms") carefully before using this website. By accessing or using the site, you agree to be bound by these Terms. If you disagree with any part, do not use this website.</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">1. Use of the Website</h2>
        <p>This website is provided for general informational purposes only. You agree to use it lawfully and not in any way that may damage, disable, or impair the site or interfere with another party's use.</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">2. Affiliate Relationships</h2>
        <p>This website is an independent affiliate review site. We are not the manufacturer or vendor of "The Brain Song" or any product mentioned. We earn affiliate commissions from qualifying purchases made through links on this site, including ClickBank vendor links.</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">3. Intellectual Property</h2>
        <p>All original content on this site — including text, layouts, and graphics — is the property of the site operator and is protected by applicable copyright laws. Product names, logos, and trademarks belong to their respective owners and are used for identification and review purposes only.</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">4. No Professional Advice</h2>
        <p>Information on this site is not a substitute for professional medical, legal, financial, or psychological advice. Always consult a qualified professional before making decisions related to your health or wellbeing.</p>

        <h2 className="text-2xl function-bold text-secondary mt-8 mb-3">5. Product Purchases</h2>
        <p>All purchases of "The Brain Song" are made directly with the official vendor through their secure checkout, not through this website. The vendor's terms, refund policy, and money-back guarantee apply to your purchase.</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">6. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, this website and its operators are not liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the site or any product purchased through links on this site.</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">7. External Links</h2>
        <p>Our site contains links to third-party websites. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party site or service.</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">8. Modifications</h2>
        <p>We reserve the right to modify these Terms at any time. Updates take effect when posted. Your continued use of the website constitutes acceptance of the revised Terms.</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">9. Governing Law</h2>
        <p>These Terms are governed by the laws applicable to the jurisdiction of the site operator, without regard to its conflict of law provisions.</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">10. Contact</h2>
        <p>For questions about these Terms, please contact us through this website.</p>

        <div className="mt-10">
          <Link to="/" className="text-primary font-bold">← Back to Home</Link>
        </div>
      </article>
    </main>
  );
}
