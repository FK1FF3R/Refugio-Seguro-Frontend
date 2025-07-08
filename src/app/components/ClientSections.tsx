'use client';
import { AbrigosSection } from "./sections/AbrigosSection";
import { OngsSection } from "./sections/OngsSection";
import { ApoioJuridicoSection } from "./sections/ApoioJuridicoSection";
import { RecursosSection } from "./sections/RecursosSection";
import { FaqSection } from "./sections/FaqSection";
import { useRef } from 'react';
import { type Abrigo, type ONG, type ApoioJuridico, type Recurso, type FAQ } from '@/types/api';
import { motion } from 'framer-motion';

export default function ClientSections({ abrigos, ongs, apoioJuridico, recursos, faqs }: {
  abrigos: Abrigo[];
  ongs: ONG[];
  apoioJuridico: ApoioJuridico[];
  recursos: Recurso[];
  faqs: FAQ[];
}) {
  return (
    <main className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <AbrigosSection data={abrigos} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <OngsSection data={ongs} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <ApoioJuridicoSection data={apoioJuridico} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <RecursosSection data={recursos} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <FaqSection data={faqs} />
      </motion.div>
    </main>
  );
} 