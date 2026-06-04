import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const lines = [
  {
    parts: [
      { t: 'keyword', v: 'const' },
      { t: 'text', v: ' tirenify = {' },
    ],
  },
  {
    parts: [
      { t: 'text', v: '  mission: ' },
      { t: 'string', v: '"Make digital exposure awareness accessible"' },
      { t: 'text', v: ',' },
    ],
  },
  {
    parts: [
      { t: 'text', v: '  focus: ' },
      { t: 'string', v: '"Privacy, trust & digital identity"' },
      { t: 'text', v: ',' },
    ],
  },
  {
    parts: [
      { t: 'text', v: '  mvp: ' },
      { t: 'string', v: '"Email breach checker"' },
      { t: 'text', v: ',' },
    ],
  },
  {
    parts: [
      { t: 'text', v: '  users: ' },
      { t: 'string', v: '"Internet users, freelancers & founders"' },
      { t: 'text', v: ',' },
    ],
  },
  {
    parts: [
      { t: 'text', v: '  status: ' },
      { t: 'function', v: 'iterate' },
      { t: 'text', v: '(),' },
    ],
  },
  {
    parts: [
      { t: 'text', v: '  vision: ' },
      { t: 'keyword', v: 'true' },
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
      { t: 'text', v: 'tirenify.' },
      { t: 'function', v: 'grow' },
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
  const [visibleLines, setVisibleLines] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isInView) return;

    let lineIndex = 0;
    intervalRef.current = setInterval(() => {
      lineIndex += 1;
      setVisibleLines(lineIndex);
      if (lineIndex >= lines.length) {
        clearInterval(intervalRef.current);
      }
    }, 120);

    return () => clearInterval(intervalRef.current);
  }, [isInView]);

  return (
    <div ref={ref} className="founder-code-terminal">
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
