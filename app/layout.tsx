import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Graduação UNI",
  description: "Cursos de Graduação - UNI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900 font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
