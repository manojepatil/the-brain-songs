import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/disclaimer")({
  component: DisclaimerPage,
  head: () => ({
    meta: [
      { title: "Disclaimers — The Brain Song Reviews" },
      { name: "description", content: "Affiliate, medical, earnings, and content disclaimers for The Brain Song Reviews website." },
      { property: "og:title", content: "Disclaimers — The Brain Song Reviews" },
      { property: "og:description", content: "Important disclaimers regarding our reviews and affiliate links." },
    ],
  }),
});

function DisclaimerPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <div className="bg-secondary py-4 px-4 text-center">
        <Link to="/" className="text-primary font-bold text-xl">The Brain Song Reviews</Link>
      </div>
      <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg">
        <h1 className="text-4xl font-extrabold text-secondary mb-6">Disclaimers</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

        <h2 className="text-2xl font-bold text-secondary mt-6 mb-3">Affiliate Disclaimer</h2>
        <p>This website is an independent, professional review site supported by affiliate commissions. The owner of this site may receive compensation for purchases made through links on this site, including but not limited to ClickBank, at no additional cost to you. This compensation helps us maintain the site and continue producing helpful content.</p>
        <p>We only recommend products we believe may genuinely help our readers, and our opinions are our own. The presence of affiliate links does not influence the content, topics, or posts made on this website.</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">Medical Disclaimer</h2>
        <p>The content on this website, including information about "The Brain Song" audio program, is provided for general informational and educational purposes only. It is not intended as, and should not be considered, medical advice, diagnosis, or treatment.</p>
        <p>The Brain Song is a wellness audio program and is not intended to diagnose, treat, cure, or prevent any disease, including dementia, Alzheimer's, or any cognitive disorder. Always consult a qualified healthcare professional before starting any new wellness program, especially if you have an existing medical condition or are taking medication.</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">Results Disclaimer</h2>
        <p>Individual results may vary. Testimonials and reviews shown on this website reflect the personal experiences of individuals and are not necessarily typical. We cannot and do not guarantee that you will achieve any particular result, and you accept the risk that results differ for each person.</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">Earnings Disclaimer</h2>
        <p>Any references to earnings, commissions, or income on this site are not guarantees of future earnings. Affiliate income depends on many factors including effort, traffic, and market conditions.</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">FTC Compliance Disclaimer</h2>
        <p>In accordance with FTC guidelines concerning the use of endorsements and testimonials in advertising, please be aware that some of the links on this site are affiliate links. If you click on a link and purchase the item, we may receive an affiliate commission.</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">Trademarks and Copyrights</h2>
        <p>"The Brain Song" and any related trademarks, logos, and product names are the property of their respective owners. They are used on this website for identification and review purposes under fair use. This website is not endorsed by or affiliated with the official manufacturer beyond a standard affiliate relationship.</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">Content Accuracy</h2>
        <p>While we strive to provide accurate and up-to-date information, we make no warranties or representations regarding the accuracy, completeness, or reliability of the content. Pricing, bonuses, and product details can change at any time on the official sales page, which is the authoritative source.</p>

        <h2 className="text-2xl font-bold text-secondary mt-8 mb-3">No Liability</h2>
        <p>By using this website, you agree that the site operator shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the site or any product purchased through it.</p>

        <div className="mt-10">
          <Link to="/" className="text-primary font-bold">← Back to Home</Link>
        </div>
      </article>
    </main>
  );
}
