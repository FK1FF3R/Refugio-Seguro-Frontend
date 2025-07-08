// src/app/components/sections/FaqSection.tsx
import { type FAQ } from '@/types/api';
import '../style/faq-section.css';

export const FaqSection = ({ data }: { data: FAQ[] }) => (
  <section className="faq-section" id="faq">
    <div className="container">
      <h2 className="faq-section__title">Perguntas Frequentes</h2>
      <div className="faq-section__list">
        {data.map((faq) => (
          <details key={faq.id} className="faq-section__item">
            <summary className="faq-section__summary">{faq.pergunta}</summary>
            <p className="faq-section__answer">
              {faq.resposta}
            </p>
          </details>
        ))}
      </div>
    </div>
  </section>
);