import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Yılmazkaya Group",
  description: "Yılmazkaya Group resmi kurumsal web sitesi",
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

