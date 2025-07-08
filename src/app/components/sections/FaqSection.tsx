// src/app/components/sections/FaqSection.tsx
import { type FAQ } from '@/types/api';

export const FaqSection = ({ data }: { data: FAQ[] }) => (
  <section className="w-full bg-warning text-white py-12 px-4 md:px-0">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Perguntas Frequentes</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {data.map((faq) => (
          <details key={faq.id} className="p-4 border rounded-lg bg-white shadow-sm open:shadow-lg transition-shadow">
            <summary className="font-semibold text-lg cursor-pointer text-gray-700">{faq.pergunta}</summary>
            <p className="mt-2 text-gray-600">
              {faq.resposta}
            </p>
          </details>
        ))}
      </div>
    </div>
  </section>
);