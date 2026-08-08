"use client";

import { motion } from 'framer-motion';

function ShowcaseNote() {
  return (
    <section className="showcase-note" aria-label="About these projects">
      <motion.div
        className="showcase-note-inner"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="showcase-note-label">A note on these projects</span>
        <p className="showcase-note-copy">
          The work above is a curated showcase of how I design and engineer today — it represents
          the standard I hold myself to, not a limitation. I'm currently taking on client builds
          through Tirenify, and this is the quality and care every project receives. If any of it
          resonates with what you're building, let's talk.
        </p>
      </motion.div>
    </section>
  );
}

export default ShowcaseNote;