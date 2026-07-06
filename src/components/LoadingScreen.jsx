import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const LETTERS = ['L', 'E', 'Y', 'E'];
const SLOT_WIDTH_REM = 2.35;

const TYPE_START_DELAY = 320;
const LETTER_INTERVAL = 210;
const LETTER_POP_DURATION = 300;
const HOLD_AFTER_TYPING = 900;
const EXIT_DURATION = 550;

function LoadingScreen({ onComplete }) {
  const shouldReduceMotion = useReducedMotion();
  const [typedCount, setTypedCount] = useState(shouldReduceMotion ? LETTERS.length : 0);
  const [exiting, setExiting] = useState(false);
  const timeouts = useRef([]);

  useEffect(() => {
    if (shouldReduceMotion) {
      const exitTimer = setTimeout(() => setExiting(true), 250);
      const completeTimer = setTimeout(() => onComplete?.(), 400);
      return () => {
        clearTimeout(exitTimer);
        clearTimeout(completeTimer);
      };
    }

    // Caret advances into place, then each letter pops in behind it.
    LETTERS.forEach((_, index) => {
      const arriveDelay = TYPE_START_DELAY + index * LETTER_INTERVAL;
      timeouts.current.push(
        setTimeout(() => setTypedCount(index + 1), arriveDelay + LETTER_POP_DURATION * 0.55)
      );
    });

    const lastLetterEnd =
      TYPE_START_DELAY + (LETTERS.length - 1) * LETTER_INTERVAL + LETTER_POP_DURATION;
    const revealDuration = lastLetterEnd + HOLD_AFTER_TYPING;

    timeouts.current.push(setTimeout(() => setExiting(true), revealDuration));
    timeouts.current.push(setTimeout(() => onComplete?.(), revealDuration + EXIT_DURATION));

    return () => timeouts.current.forEach(clearTimeout);
  }, [onComplete, shouldReduceMotion]);

  const caretPosition = shouldReduceMotion ? LETTERS.length : typedCount;

  return (
    <motion.div
      className="loading-screen"
      role="status"
      aria-live="polite"
      aria-label="Loading Daniel Adeleye's portfolio"
      animate={exiting ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0.15 : 0.55, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="loading-glow" aria-hidden="true" />

      <motion.div
        className="loading-mark"
        animate={exiting ? { scale: 0.94, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0.15 : 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="loading-word" aria-hidden="true">
          {LETTERS.map((letter, index) => {
            const isTyped = index < typedCount;
            return (
              <span key={index} className="loading-letter-slot" style={{ width: `${SLOT_WIDTH_REM}rem` }}>
                <motion.span
                  className="loading-letter"
                  initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
                  animate={
                    isTyped
                      ? { opacity: 1, scale: [0.4, 1.08, 1] }
                      : { opacity: 0, scale: 0.4 }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0 : LETTER_POP_DURATION / 1000,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                >
                  {letter}
                </motion.span>
              </span>
            );
          })}

          {!shouldReduceMotion && (
            <span
              className={`loading-caret ${exiting ? 'is-exiting' : ''}`}
              style={{ transform: `translateX(${caretPosition * SLOT_WIDTH_REM}rem)` }}
            />
          )}
        </div>

        <motion.div
          className="loading-spinner"
          initial={{ opacity: 0 }}
          animate={{ opacity: exiting ? 0 : 0.7 }}
          transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.5 }}
        >
          <span className="loading-spinner-ring" />
        </motion.div>
      </motion.div>

      <span className="sr-only">Loading…</span>
    </motion.div>
  );
}

export default LoadingScreen;
