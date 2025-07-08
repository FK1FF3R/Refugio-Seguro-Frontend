import { type FAQ } from '@/types/api';
import '@/app/styles/faq-section.css';
import { MdHelpOutline } from 'react-icons/md';
import { Lusitana } from '@next/font/google';

const lusitana = Lusitana({ subsets: ['latin'], weight: ['700'] });

interface FaqSectionProps {
  data: FAQ[];
}

export const FaqSection = ({ data }: FaqSectionProps) => (
  <section className="faq-section" id="faq">
    <div className="container">
      <h2 className={`faq-section__title ${lusitana.className}`} style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8}}><MdHelpOutline size={36}/> Perguntas Frequentes</h2>
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