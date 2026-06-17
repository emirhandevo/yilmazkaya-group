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
    icon: "/logo.png",
    apple: "/logo.png",
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

