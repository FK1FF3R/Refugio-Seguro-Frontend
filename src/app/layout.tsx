import './globals.css';
import '@/app/styles/layout.css';
import { Header } from '@/app/components/layout/Header';
import { Footer } from '@/app/components/layout/Footer';
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className="layout-html">
      <head>
        <title>Refúgio Seguro</title>
        <link rel="icon" href="/favicon.ico" type="image/png" />
      </head>
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
