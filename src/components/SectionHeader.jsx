"use client";

import { motion } from 'framer-motion';

function SectionHeader({ label, title, description, number }) {
  return (
    <motion.div
      className="section-header"
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {label && (
        <span className="section-label">
          {number && `${number} — `}
          {label}
        </span>
      )}
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
    </motion.div>
  );
}

export default SectionHeader;