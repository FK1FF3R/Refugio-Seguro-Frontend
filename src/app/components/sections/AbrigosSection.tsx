'use client';
// src/app/components/sections/AbrigosSection.tsx
import { type Abrigo } from '@/types/api';
import '@/app/styles/abrigos-section.css';
import { useRef, useState } from 'react';

function InfiniteCarouselRow({ abrigos }: { abrigos: Abrigo[] }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [animating, setAnimating] = useState(false);
  const items = [...abrigos, ...abrigos];

  const scroll = (dir: 'left' | 'right') => {
    if (animating) return;
    setAnimating(true);
    const row = rowRef.current;
    if (!row) return;
    const card = row.querySelector('.abrigos-section__card') as HTMLElement;
    if (!card) return;
    const scrollAmount = card.offsetWidth + 32;
    const cards = Array.from(row.querySelectorAll('.abrigos-section__card'));
    cards.forEach((el) => {
      el.classList.add('slide-out');
      el.classList.remove('slide-in');
    });
    setTimeout(() => {
      if (dir === 'left') {
        row.scrollLeft -= scrollAmount;
        if (row.scrollLeft <= 0) {
          row.scrollLeft = row.scrollWidth / 2;
        }
      } else {
        row.scrollLeft += scrollAmount;
        if (row.scrollLeft >= row.scrollWidth / 2) {
          row.scrollLeft = 0;
        }
      }
      cards.forEach((el) => {
        el.classList.remove('slide-out');
        el.classList.add('slide-in');
      });
      setTimeout(() => {
        cards.forEach((el) => {
          el.classList.remove('slide-in');
        });
        setAnimating(false);
      }, 350);
    }, 350);
  };

  return (
    <div className="abrigos-carousel-row-wrapper">
      <button className="abrigos-carousel-arrow left" onClick={() => scroll('left')} aria-label="Anterior">&#8592;</button>
      <div className="abrigos-carousel-row" ref={rowRef}>
        {items.map((abrigo, idx) => (
          <div key={abrigo.id + '-' + idx} className="abrigos-section__card">
            <h3 className="abrigos-section__card-title">{abrigo.nome}</h3>
            <p>{abrigo.cidade}, {abrigo.estado}</p>
            <p>Público: {abrigo.publico}</p>
            <p>Capacidade: {abrigo.capacidade} pessoas</p>
            <p>Telefone: {abrigo.telefone || "Não informado"}</p>
          </div>
        ))}
      </div>
      <button className="abrigos-carousel-arrow right" onClick={() => scroll('right')} aria-label="Próximo">&#8594;</button>
    </div>
  );
}

export const AbrigosSection = ({ data }: { data: Abrigo[] }) => {
  return (
    <section className="abrigos-section" id="abrigos">
      <div className="container">
        <h2 className="abrigos-section__title">Abrigos Disponíveis</h2>
        <div className="abrigos-carousel">
          <InfiniteCarouselRow abrigos={data} />
        </div>
      </div>
    </section>
  );
};