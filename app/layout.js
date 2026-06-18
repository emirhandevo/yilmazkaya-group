import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createPageMetadata, siteConfig } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  ...createPageMetadata({
    description: siteConfig.defaultDescription,
    path: "/",
  }),
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
    <html lang="tr">
      <body className="min-h-screen flex flex-col">
        {/* Navbar tüm sayfaların üstünde görünür */}
        <Navbar />
        {children}

        {/* Footer tüm sayfaların altında görünür */}
        <Footer />
      </body>
    </html>
  );
}
