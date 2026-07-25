"use client";

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

function StatCounter({ value, suffix, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(value);

  useEffect(() => {
    if (!isInView || count === value) return;

    const duration = 1200;
    const steps = 40;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [count, isInView, value]);

  return (
    <div ref={ref} className="hero-stat">
      <span className="hero-stat-value">{count}{suffix}</span>
      <span className="hero-stat-label">{label}</span>
    </div>
  );
}

export default StatCounter;
