import ClientSections from "./components/ClientSections";
import { getAbrigos, getONGs, getApoioJuridico, getRecursos, getFAQs } from "@/services/api";

export default async function Home() {
  const [abrigos, ongs, apoioJuridico, recursos, faqs] = await Promise.all([
    getAbrigos(),
    getONGs(),
    getApoioJuridico(),
    getRecursos(),
    getFAQs(),
  ]);
  return <ClientSections abrigos={abrigos} ongs={ongs} apoioJuridico={apoioJuridico} recursos={recursos} faqs={faqs} />;
}
