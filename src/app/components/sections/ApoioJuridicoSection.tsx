// src/app/components/sections/ApoioJuridicoSection.tsx
import { type ApoioJuridico } from '@/types/api';

export const ApoioJuridicoSection = ({ data }: { data: ApoioJuridico[] }) => (
  <section id="apoio-juridico" className="w-full py-16 px-4 bg-white">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Apoio Jurídico</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((apoio) => (
          <div key={apoio.id} className="p-6 border rounded-xl shadow-lg bg-gray-50 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-teal-700">{apoio.nome}</h3>
            <p className="text-gray-600 mt-2 font-medium">{apoio.cidade}, {apoio.estado}</p>
            <p className="text-gray-500 mt-2">Serviço: {apoio.tipoServico}</p>
            <p className={`font-bold mt-1 ${apoio.disponivel ? 'text-green-600' : 'text-red-600'}`}>
              {apoio.disponivel ? 'Disponível' : 'Indisponível'}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);