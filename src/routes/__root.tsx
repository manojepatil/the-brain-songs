import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Brain Song" },
      { name: "description", content: "Boost focus and memory in just 12 minutes a day with The Brain Song — a science-backed Gamma brainwave audio that supports BDNF. Instant access for $39." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "The Brain Song" },
      { property: "og:description", content: "Boost focus and memory in just 12 minutes a day with The Brain Song — a science-backed Gamma brainwave audio that supports BDNF. Instant access for $39." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "The Brain Song" },
      { name: "twitter:description", content: "Boost focus and memory in just 12 minutes a day with The Brain Song — a science-backed Gamma brainwave audio that supports BDNF. Instant access for $39." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/O8bVkrDDbOSRTiX9en4o3fqUSfp2/social-images/social-1776737642632-imgi_6_prd-img.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/O8bVkrDDbOSRTiX9en4o3fqUSfp2/social-images/social-1776737642632-imgi_6_prd-img.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
