'use client';
import { AbrigosSection } from "./sections/AbrigosSection";
import { OngsSection } from "./sections/OngsSection";
import { ApoioJuridicoSection } from "./sections/ApoioJuridicoSection";
import { RecursosSection } from "./sections/RecursosSection";
import { FaqSection } from "./sections/FaqSection";
import { useRef } from 'react';
import { useFadeInOnScroll } from '@/app/hooks/useFadeInOnScroll';
import { type Abrigo, type ONG, type ApoioJuridico, type Recurso, type FAQ } from '@/types/api';

export default function ClientSections({ abrigos, ongs, apoioJuridico, recursos, faqs }: {
  abrigos: Abrigo[];
  ongs: ONG[];
  apoioJuridico: ApoioJuridico[];
  recursos: Recurso[];
  faqs: FAQ[];
}) {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];
  useFadeInOnScroll(sectionRefs);

  return (
    <main className="space-y-16">
      <div className="fade-in-on-scroll" ref={sectionRefs[0]}><AbrigosSection data={abrigos} /></div>
      <div className="fade-in-on-scroll" ref={sectionRefs[1]}><OngsSection data={ongs} /></div>
      <div className="fade-in-on-scroll" ref={sectionRefs[2]}><ApoioJuridicoSection data={apoioJuridico} /></div>
      <div className="fade-in-on-scroll" ref={sectionRefs[3]}><RecursosSection data={recursos} /></div>
      <div className="fade-in-on-scroll" ref={sectionRefs[4]}><FaqSection data={faqs} /></div>
    </main>
  );
} 