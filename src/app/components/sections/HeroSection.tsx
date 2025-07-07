// src/app/components/sections/HeroSection.tsx
export const HeroSection = () => (
  <section id="hero" className="w-full h-screen flex items-center justify-center bg-blue-600 text-white text-center p-4">
    <div>
      <h1 className="text-5xl md:text-7xl font-extrabold">Encontre um Porto Seguro</h1>
      <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
        Conectamos pessoas em situação de vulnerabilidade a abrigos, ONGs e apoio jurídico em todo o país.
      </p>
    </div>
  </section>
);