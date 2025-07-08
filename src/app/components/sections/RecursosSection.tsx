// src/app/components/sections/RecursosSection.tsx
import { type Recurso } from '@/types/api';
import Link from 'next/link';

export const RecursosSection = ({ data }: { data: Recurso[] }) => (
  <section className="w-full bg-white text-black py-12 px-4 md:px-0">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Recursos e Guias</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-12 max-w-6xl mx-auto">
        {data.map((recurso) => (
          <Link href={recurso.url} key={recurso.id} target="_blank" rel="noopener noreferrer" className="block p-8 border-2 border-rust rounded-xl shadow-lg bg-white hover:shadow-2xl hover:border-orange-500 transition-all duration-300">
            <span className="inline-block px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-semibold mb-3">{recurso.tipo}</span>
            <h3 className="text-xl font-semibold text-orange-700">{recurso.titulo}</h3>
            <p className="text-gray-600 mt-2">{recurso.descricao}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);