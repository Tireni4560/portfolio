"use client";

import { motion } from 'framer-motion';
import { useI18n } from '../i18n/I18nProvider';

function ShowcaseNote() {
  const { t } = useI18n();

  return (
    <section className="showcase-note" aria-label={t.projects.noteLabel}>
      <motion.div
        className="showcase-note-inner"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="showcase-note-label">{t.projects.noteLabel}</span>
        <p className="showcase-note-copy">{t.projects.note}</p>
      </motion.div>
    </section>
  );
}

export default ShowcaseNote;