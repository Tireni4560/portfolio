import { useEffect, useState } from 'react';

const LETTERS = ['L', 'E', 'Y', 'E'];

const LETTER_REVEAL_DURATION = 420;
const LETTER_STAGGER = LETTER_REVEAL_DURATION;
const HOLD_AFTER_REVEAL = 550;
const EXIT_DURATION = 400;

function LoadingScreen({ onComplete }) {
  const [exiting, setExiting] = useState(false);
  // Read synchronously at mount instead of in an effect — avoids a second
  // render (and letter animation-delay recalculation) right as the page boots.
  const [reduceMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (reduceMotion) {
      const exitTimer = setTimeout(() => setExiting(true), 200);
      const completeTimer = setTimeout(() => onComplete?.(), 350);
      return () => {
        clearTimeout(exitTimer);
        clearTimeout(completeTimer);
      };
    }

    const lastLetterStart = (LETTERS.length - 1) * LETTER_STAGGER;
    const revealDuration = lastLetterStart + LETTER_REVEAL_DURATION + HOLD_AFTER_REVEAL;

    const exitTimer = setTimeout(() => setExiting(true), revealDuration);
    const completeTimer = setTimeout(() => onComplete?.(), revealDuration + EXIT_DURATION);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete, reduceMotion]);

  return (
    <div
      className={`loading-screen ${exiting ? 'is-exiting' : ''} ${reduceMotion ? 'reduce-motion' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Daniel Adeleye's portfolio"
    >
      <div className="loading-glow" aria-hidden="true" />

      <div className="loading-mark">
        <div className="loading-word" aria-hidden="true">
          {LETTERS.map((letter, index) => (
            <span
              key={index}
              className="loading-pixel-letter"
              style={{ animationDelay: reduceMotion ? '0ms' : `${index * LETTER_STAGGER}ms` }}
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="loading-spinner">
          <span className="loading-spinner-ring" />
        </div>
      </div>

      <span className="sr-only">Loading…</span>
    </div>
  );
}

export default LoadingScreen;
