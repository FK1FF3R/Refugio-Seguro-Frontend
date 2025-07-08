import { type Recurso } from '@/types/api';
import '@/app/styles/recursos-section.css';
import { MdMenuBook } from 'react-icons/md';
import { Lusitana } from '@next/font/google';
import { motion } from 'framer-motion';

const lusitana = Lusitana({ subsets: ['latin'], weight: ['700'] });

interface RecursosSectionProps {
  data: Recurso[];
}

export const RecursosSection = ({ data }: RecursosSectionProps) => (
  <section className="recursos-section" id="recursos">
    <div className="container">
      <h2 className={`recursos-section__title ${lusitana.className}`} style={{display:'flex',alignItems:'center',justifyContent:'center',gap:8}}><MdMenuBook size={36}/> Recursos e Guias</h2>
      <div className="recursos-section__grid">
        {data.map((recurso, idx) => (
          <motion.div
            key={recurso.id + '-' + idx}
            className="recursos-section__card"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 8px 36px 0 rgba(255,102,0,0.18)',
              borderColor: '#ff6600',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <span className="recursos-section__tipo">{recurso.tipo}</span>
            <h3 className="recursos-section__card-title">{recurso.titulo}</h3>
            <p className="recursos-section__card-desc">{recurso.descricao}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);