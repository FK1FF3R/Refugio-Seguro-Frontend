// src/app/components/layout/Header.tsx
import Link from 'next/link';

export const Header = () => (
  <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-md">
    <div className="container mx-auto flex justify-between items-center p-4">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        Refúgio Seguro
      </Link>
      <nav className="hidden md:flex space-x-6">
        <Link href="#abrigos" className="text-gray-600 hover:text-blue-600 transition">Abrigos</Link>
        <Link href="#apoio-juridico" className="text-gray-600 hover:text-blue-600 transition">Apoio Jurídico</Link>
        <Link href="#ongs" className="text-gray-600 hover:text-blue-600 transition">ONGs</Link>
        <Link href="#recursos" className="text-gray-600 hover:text-blue-600 transition">Recursos</Link>
        <Link href="#faq" className="text-gray-600 hover:text-blue-600 transition">FAQ</Link>
      </nav>
    </div>
  </header>
);