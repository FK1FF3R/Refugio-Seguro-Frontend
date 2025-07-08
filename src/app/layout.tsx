// src/app/layout.tsx
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="min-h-screen">
      <body className="flex flex-col min-h-screen bg-white text-black font-sans">
        <header className="bg-appleGreen p-4 shadow-md">
          <h1 className="text-3xl font-bold">Refúgio Seguro</h1>
        </header>

        <main className="p-6 bg-white text-black flex-1">
          {children}
        </main>

        <footer className="bg-rust text-white p-4 text-center">
          <p>&copy; 2025 Refúgio Seguro. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
