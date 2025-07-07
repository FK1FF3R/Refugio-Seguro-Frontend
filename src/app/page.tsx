import { AbrigosSection } from "./components/sections/AbrigosSection";
import { OngsSection } from "./components/sections/OngsSection";
import { ApoioJuridicoSection } from "./components/sections/ApoioJuridicoSection";
import { RecursosSection } from "./components/sections/RecursosSection";
import { FaqSection } from "./components/sections/FaqSection";
import { getAbrigos, getONGs, getApoioJuridico, getRecursos, getFAQs } from "@/services/api";

export default async function Home() {
  const [abrigos, ongs, apoioJuridico, recursos, faqs] = await Promise.all([
    getAbrigos(),
    getONGs(),
    getApoioJuridico(),
    getRecursos(),
    getFAQs(),
  ]);

  return (
    <main className="space-y-16">
      <AbrigosSection data={abrigos} />
      <OngsSection data={ongs} />
      <ApoioJuridicoSection data={apoioJuridico} />
      <RecursosSection data={recursos} />
      <FaqSection data={faqs} />
    </main>
  );
}
