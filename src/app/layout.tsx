// src/app/layout.tsx
import './globals.css';
import './components/style/layout.css';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className="layout-html">
      <body className="layout-body">
        <Header />
        <main className="layout-main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
