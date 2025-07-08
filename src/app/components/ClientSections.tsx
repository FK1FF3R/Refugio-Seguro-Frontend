'use client';
import { AbrigosSection } from "./sections/AbrigosSection";
import { OngsSection } from "./sections/OngsSection";
import { ApoioJuridicoSection } from "./sections/ApoioJuridicoSection";
import { RecursosSection } from "./sections/RecursosSection";
import { FaqSection } from "./sections/FaqSection";
import { useEffect, useRef } from 'react';

export default function ClientSections({ abrigos, ongs, apoioJuridico, recursos, faqs }: any) {
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });
    sectionRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => observer.disconnect();
  }, []);

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