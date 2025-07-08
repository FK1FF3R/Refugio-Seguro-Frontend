// src/app/components/sections/FaqSection.tsx
import { type FAQ } from '@/types/api';
import '@/app/styles/faq-section.css';

interface FaqSectionProps {
  data: FAQ[];
}

export const FaqSection = ({ data }: FaqSectionProps) => (
  <section className="faq-section" id="faq">
    <div className="container">
      <h2 className="faq-section__title">Perguntas Frequentes</h2>
      <div className="faq-section__list">
        {data.map((faq, idx) => (
          <details key={faq.id + '-' + idx} className="faq-section__item">
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