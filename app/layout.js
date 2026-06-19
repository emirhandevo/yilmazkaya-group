import "./globals.css";
import SiteShell from "@/components/SiteShell";
import { getPageMetadata, siteConfig } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  ...getPageMetadata("/", "tr"),
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
