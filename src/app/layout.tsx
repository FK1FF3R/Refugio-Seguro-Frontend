// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Refúgio Seguro - Encontre Apoio",
  description: "Plataforma centralizada para encontrar abrigos, apoio jurídico e recursos para pessoas em vulnerabilidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-800`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}