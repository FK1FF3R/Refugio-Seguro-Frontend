// src/app/components/sections/OngsSection.tsx
import { type ONG } from '@/types/api';
import '@/app/styles/ongs-section.css';

interface OngsSectionProps {
  data: ONG[];
}

export const OngsSection = ({ data }: OngsSectionProps) => (
  <section className="ongs-section" id="ongs">
    <div className="container">
      <h2 className="ongs-section__title">ONGs Parceiras</h2>
      <div className="ongs-section__list">
        {data.map((ong, idx) => (
          <div key={ong.id + '-' + idx} className="ongs-section__card">
            <h3 className="ongs-section__card-title">{ong.nome}</h3>
            <p className="ongs-section__card-missao">&quot;{ong.missao}&quot;</p>
            <div>
              <h4 className="ongs-section__areas-title">Áreas de Atuação:</h4>
              <div className="ongs-section__areas-list">
                {ong.areaAtuacao.map((area, areaIdx) => (
                  <span key={area + '-' + areaIdx} className="ongs-section__area">{area}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);