import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function LoadingScreen({ onComplete }) {
  const [shouldShow, setShouldShow] = useState(false);
  const [phase, setPhase] = useState('monogram'); // monogram, line, wipe

  useEffect(() => {
    // Check if already loaded
    const loaded = sessionStorage.getItem('portfolio_loaded');
    
    if (loaded) {
      // Skip loading screen
      onComplete?.();
      return;
    }

    // Show loading screen
    setShouldShow(true);

    // Sequence timing
    const lineTimer = setTimeout(() => setPhase('line'), 800);
    const wipeTimer = setTimeout(() => setPhase('wipe'), 1050);
    const completeTimer = setTimeout(() => {
      sessionStorage.setItem('portfolio_loaded', 'true');
      setShouldShow(false);
      onComplete?.();
    }, 1850);

    return () => {
      clearTimeout(lineTimer);
      clearTimeout(wipeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'var(--bg-deep)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Monogram Phase */}
          {(phase === 'monogram' || phase === 'line') && (
            <motion.svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              initial={{ opacity: 0 }}
              animate={phase === 'monogram' ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                position: phase === 'line' ? 'absolute' : 'relative',
              }}
            >
              {/* DA Monogram */}
              <motion.path
                d="M 25 85 L 45 35 L 65 85 M 32 65 L 58 65"
                fill="none"
                stroke="var(--text)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={phase === 'monogram' ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              />
              <motion.path
                d="M 70 35 L 70 85 M 70 35 L 95 35 L 95 85"
                fill="none"
                stroke="var(--text)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={phase === 'monogram' ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              />
            </motion.svg>
          )}

          {/* Line Phase */}
          {(phase === 'line' || phase === 'wipe') && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: phase === 'line' ? 'relative' : 'absolute',
                width: '80vw',
                maxWidth: '600px',
                height: '1px',
                background: 'var(--accent)',
                opacity: phase === 'wipe' ? 0 : 1,
              }}
            />
          )}

          {/* Wipe Phase - Clip Path */}
          {phase === 'wipe' && (
            <motion.div
              initial={{ clipPath: 'inset(0 0 0% 0)' }}
              animate={{ clipPath: 'inset(100% 0 0% 0)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'var(--bg-deep)',
                zIndex: 1,
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;