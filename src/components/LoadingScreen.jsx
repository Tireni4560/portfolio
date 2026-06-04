import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState('monogram');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPhase('complete');
      onComplete?.();
    }, 1200);
    return () => clearTimeout(timeout);
  }, [onComplete]);

  const strokeProps = {
    fill: 'none',
    stroke: '#fff',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  const drawVariant = (delay) => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeInOut', delay },
    },
  });

  return (
    <div className="loading-screen" aria-hidden="true">
      {/* LEYE uppercase wordmark */}
      <motion.svg
        width="210"
        height="60"
        viewBox="0 0 210 60"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === 'monogram' ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      >
        {/* L — vertical down, horizontal foot */}
        <motion.path
          d="M 10 8 L 10 52 L 34 52"
          {...strokeProps}
          variants={drawVariant(0.05)}
          initial="hidden"
          animate="visible"
        />

        {/* E — vertical spine, three horizontals (top, mid, bottom) */}
        <motion.path
          d="M 44 8 L 44 52"
          {...strokeProps}
          variants={drawVariant(0.18)}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M 44 8 L 70 8 M 44 30 L 64 30 M 44 52 L 70 52"
          {...strokeProps}
          variants={drawVariant(0.26)}
          initial="hidden"
          animate="visible"
        />

        {/* Y — two upper arms meeting at center, single stem down */}
        <motion.path
          d="M 82 8 L 98 30"
          {...strokeProps}
          variants={drawVariant(0.4)}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M 114 8 L 98 30 L 98 52"
          {...strokeProps}
          variants={drawVariant(0.48)}
          initial="hidden"
          animate="visible"
        />

        {/* E (second) — vertical spine, three horizontals */}
        <motion.path
          d="M 124 8 L 124 52"
          {...strokeProps}
          variants={drawVariant(0.62)}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M 124 8 L 150 8 M 124 30 L 144 30 M 124 52 L 150 52"
          {...strokeProps}
          variants={drawVariant(0.7)}
          initial="hidden"
          animate="visible"
        />
      </motion.svg>
    </div>
  );
}

export default LoadingScreen;
