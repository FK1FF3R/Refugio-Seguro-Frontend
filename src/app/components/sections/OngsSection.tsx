// src/app/components/sections/OngsSection.tsx
import { type ONG } from '@/types/api';

export const OngsSection = ({ data }: { data: ONG[] }) => (
  <section className="w-full bg-white text-black py-12 px-4 md:px-0">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">ONGs Parceiras</h2>
      <div className="space-y-10 gap-y-12 max-w-4xl mx-auto">
        {data.map((ong) => (
          <div key={ong.id} className="p-8 bg-white border-2 border-secondary rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-purple-700">{ong.nome}</h3>
            <p className="text-gray-700 italic mt-2">&quot;{ong.missao}&quot;</p>
            <div className="mt-4">
              <h4 className="font-semibold">Áreas de Atuação:</h4>
              <div className="flex flex-wrap gap-2 mt-1">
                {ong.areaAtuacao.map(area => (
                    <span key={area} className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-medium">{area}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);