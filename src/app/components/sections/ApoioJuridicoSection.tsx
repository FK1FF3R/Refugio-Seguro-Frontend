import { type ApoioJuridico } from '@/types/api';
import '@/app/styles/apoio-juridico-section.css';
import { MdGavel } from 'react-icons/md';
import { Lusitana } from '@next/font/google';

const lusitana = Lusitana({ subsets: ['latin'], weight: ['700'] });

interface ApoioJuridicoSectionProps {
  data: ApoioJuridico[];
}

export const ApoioJuridicoSection = ({ data }: ApoioJuridicoSectionProps) => (
  <section className="apoio-juridico-section" id="apoio-juridico">
    <div className="container">
      <h2 className={`apoio-juridico-section__title ${lusitana.className}`} style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8}}><MdGavel size={36}/> Apoio Jurídico</h2>
      <div className="apoio-juridico-section__grid">
        {data.map((apoio, idx) => (
          <div key={apoio.id + '-' + idx} className="apoio-juridico-section__card">
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