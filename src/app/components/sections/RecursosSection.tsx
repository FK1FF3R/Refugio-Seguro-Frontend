// src/app/components/sections/RecursosSection.tsx
import { type Recurso } from '@/types/api';
import Link from 'next/link';

export const RecursosSection = ({ data }: { data: Recurso[] }) => (
  <section id="recursos" className="w-full py-16 px-4 bg-white">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Recursos e Guias</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((recurso) => (
          <Link href={recurso.url} key={recurso.id} target="_blank" rel="noopener noreferrer" className="block p-6 border rounded-xl shadow-lg bg-gray-50 hover:shadow-2xl hover:border-orange-500 transition-all duration-300">
            <span className="inline-block px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-semibold mb-3">{recurso.tipo}</span>
            <h3 className="text-xl font-semibold text-orange-700">{recurso.titulo}</h3>
            <p className="text-gray-600 mt-2">{recurso.descricao}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);