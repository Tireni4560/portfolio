"use client";

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%';

function ScrambleText({ text, className = '', trigger = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(text);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!isInView || !trigger) return;

    let iteration = 0;
    const totalFrames = text.length * 3;

    const animate = () => {
      setDisplay(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration / 3) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      iteration += 1;
      if (iteration <= totalFrames) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(text);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isInView, text, trigger]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {display}
    </span>
  );
}

export default ScrambleText;
