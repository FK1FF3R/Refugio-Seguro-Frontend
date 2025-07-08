// src/app/components/sections/ApoioJuridicoSection.tsx
import { type ApoioJuridico } from '@/types/api';
import '../style/apoio-juridico-section.css';

export const ApoioJuridicoSection = ({ data }: { data: ApoioJuridico[] }) => (
  <section className="apoio-juridico-section" id="apoio-juridico">
    <div className="container">
      <h2 className="apoio-juridico-section__title">Apoio Jurídico</h2>
      <div className="apoio-juridico-section__grid">
        {data.map((apoio) => (
          <div key={apoio.id} className="apoio-juridico-section__card">
            <h3 className="apoio-juridico-section__card-title">{apoio.nome}</h3>
            <p>{apoio.cidade}, {apoio.estado}</p>
            <p>Serviço: {apoio.tipoServico}</p>
            <p className={apoio.disponivel ? 'apoio-juridico-section__disponivel' : 'apoio-juridico-section__indisponivel'}>
              {apoio.disponivel ? 'Disponível' : 'Indisponível'}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);