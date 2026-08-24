import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KERRO | Goods & Services Marketplace",
  description: "Modern marketplace to buy, sell, and request products or services in Rwanda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-50 border-t border-gray-100 py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} KERRO. Built for Rwanda & Beyond.
          </div>
        </footer>
      </body>
    </html>
  );
}
