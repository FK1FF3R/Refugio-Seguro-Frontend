// src/app/components/sections/AbrigosSection.tsx
import { type Abrigo } from '@/types/api';

export const AbrigosSection = ({ data }: { data: Abrigo[] }) => (
  <section className="w-full bg-white text-black py-12 px-4 md:px-0">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Abrigos Disponíveis</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-12 max-w-6xl mx-auto">
        {data.map((abrigo) => (
          <div key={abrigo.id} className="p-8 border-2 border-primary rounded-xl shadow-lg bg-white hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-700">{abrigo.nome}</h3>
            <p className="text-gray-600 mt-2 font-medium">{abrigo.cidade}, {abrigo.estado}</p>
            <p className="text-gray-500 mt-2">Público: {abrigo.publico}</p>
            <p className="text-gray-500">Capacidade: {abrigo.capacidade} pessoas</p>
            <p className="text-gray-500">Telefone: {abrigo.telefone || "Não informado"}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);