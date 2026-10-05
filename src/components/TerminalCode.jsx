"use client";

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const lines = [
  {
    parts: [
      { t: 'keyword', v: 'const' },
      { t: 'text', v: ' presupuesto = {' },
    ],
  },
  {
    parts: [
      { t: 'text', v: '  entrega: ' },
      { t: 'string', v: '"5–7 días"' },
      { t: 'text', v: ',' },
    ],
  },
  {
    parts: [
      { t: 'text', v: '  oficio: ' },
      { t: 'string', v: '"Fontanería, electricidad, clínicas"' },
      { t: 'text', v: ',' },
    ],
  },
  {
    parts: [
      { t: 'text', v: '  movil_primero: ' },
      { t: 'keyword', v: 'true' },
      { t: 'text', v: ',' },
    ],
  },
  {
    parts: [
      { t: 'text', v: '  incluye: ' },
      { t: 'string', v: '"Llamar, WhatsApp, Maps, reseñas"' },
      { t: 'text', v: ',' },
    ],
  },
  {
    parts: [
      { t: 'text', v: '  tecnicismos: ' },
      { t: 'string', v: '"ninguno",' },
    ],
  },
  {
    parts: [
      { t: 'text', v: '  dominio: ' },
      { t: 'string', v: '"tuyo"' },
    ],
  },
  {
    parts: [{ t: 'text', v: '}' }],
  },
  {
    parts: [{ t: 'text', v: '' }],
  },
  {
    parts: [
      { t: 'keyword', v: 'await ' },
      { t: 'text', v: 'cliente.' },
      { t: 'function', v: 'llamar' },
      { t: 'text', v: '();' },
    ],
  },
];

const colorMap = {
  keyword: 'var(--accent-light)',
  string: '#22c55e',
  function: '#f59e0b',
  text: 'var(--text-muted)',
};

function TerminalCode() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [visibleLines, setVisibleLines] = useState(lines.length);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isInView || visibleLines === lines.length) return;

    let lineIndex = 0;
    intervalRef.current = setInterval(() => {
      lineIndex += 1;
      setVisibleLines(lineIndex);
      if (lineIndex >= lines.length) {
        clearInterval(intervalRef.current);
      }
    }, 120);

    return () => clearInterval(intervalRef.current);
  }, [isInView, visibleLines]);

  return (
    <div ref={ref} className="trades-code-terminal">
      {lines.slice(0, visibleLines).map((line, lineIndex) => (
        <div key={lineIndex} className="code-line">
          {line.parts.map((part, partIndex) => (
            <span key={partIndex} style={{ color: colorMap[part.t] }}>
              {part.v}
            </span>
          ))}
          {lineIndex === visibleLines - 1 && <span className="terminal-cursor">▋</span>}
        </div>
      ))}
    </div>
  );
}

export default TerminalCode;
