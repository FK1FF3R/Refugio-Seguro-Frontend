// src/app/components/sections/AbrigosSection.tsx
import { type Abrigo } from '@/types/api';
import '../style/abrigos-section.css';

export const AbrigosSection = ({ data }: { data: Abrigo[] }) => (
  <section className="abrigos-section" id="abrigos">
    <div className="container">
      <h2 className="abrigos-section__title">Abrigos Disponíveis</h2>
      <div className="abrigos-section__grid">
        {data.map((abrigo) => (
          <div key={abrigo.id} className="abrigos-section__card">
            <h3 className="abrigos-section__card-title">{abrigo.nome}</h3>
            <p>{abrigo.cidade}, {abrigo.estado}</p>
            <p>Público: {abrigo.publico}</p>
            <p>Capacidade: {abrigo.capacidade} pessoas</p>
            <p>Telefone: {abrigo.telefone || "Não informado"}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);