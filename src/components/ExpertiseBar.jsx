"use client";

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

function ExpertiseBar({ skill, level, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div ref={ref} className="expertise-bar-row">
      <div className="expertise-bar-meta">
        <span className="expertise-bar-label">{skill}</span>
        <span className="expertise-bar-value">{level}%</span>
      </div>
      <div className="expertise-bar-track">
        <motion.div
          className="expertise-bar-fill"
          style={{ width: `${level}%`, transformOrigin: 'left', scaleX: 1 }}
        />
      </div>
    </div>
  );
}

export default ExpertiseBar;
