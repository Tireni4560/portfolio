"use client";

import { motion, useReducedMotion } from 'framer-motion';

function AnimatedHeading({ text, className = '' }) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');

  return (
    <span className={`animated-heading ${className}`} aria-label={text}>
      {words.map((word, index) => (
        <span key={index} className="animated-heading-word">
          <motion.span
            className="animated-heading-inner"
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.65,
              delay: shouldReduceMotion ? 0 : index * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default AnimatedHeading;
