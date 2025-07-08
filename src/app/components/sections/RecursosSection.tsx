// src/app/components/sections/RecursosSection.tsx
import { type Recurso } from '@/types/api';
import '@/app/styles/recursos-section.css';

interface RecursosSectionProps {
  data: Recurso[];
}

export const RecursosSection = ({ data }: RecursosSectionProps) => (
  <section className="recursos-section" id="recursos">
    <div className="container">
      <h2 className="recursos-section__title">Recursos e Guias</h2>
      <div className="recursos-section__grid">
        {data.map((recurso, idx) => (
          <div key={recurso.id + '-' + idx} className="recursos-section__card">
            <span className="recursos-section__tipo">{recurso.tipo}</span>
            <h3 className="recursos-section__card-title">{recurso.titulo}</h3>
            <p className="recursos-section__card-desc">{recurso.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);