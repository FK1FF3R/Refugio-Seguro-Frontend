import Link from 'next/link';
import '@/app/styles/header.css';

export const Header = () => (
  <header className="header">
    <div className="header__container">
      <Link href="/" className="header__brand">
        <img src="/logo.png" alt="Logo Refúgio Seguro" />
        Refúgio Seguro
      </Link>
      <nav className="header__nav">
        <a href="#abrigos" className="header__link">Abrigos</a>
        <a href="#apoio-juridico" className="header__link">Apoio Jurídico</a>
        <a href="#ongs" className="header__link">ONGs</a>
        <a href="#recursos" className="header__link">Recursos</a>
        <a href="#faq" className="header__link">FAQ</a>
      </nav>
    </div>
  </header>
);