import { useEffect, useRef } from 'react';

const PALETTE = ['99, 102, 241', '129, 140, 248', '34, 211, 238', '165, 180, 252'];

// Static ambient network: drawn once (and redrawn only on debounced resize).
// No rAF loop, no pointermove/scroll listeners — a moving background was the
// single biggest scroll-jank source, so this keeps the visual with zero
// ongoing rendering cost. It's effectively a generated background image.
function ParticleNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    let resizeTimer = null;

    const isMobile = () => window.innerWidth < 640;
    const isTablet = () => window.innerWidth < 1024;
    const particleCount = () => (isMobile() ? 16 : isTablet() ? 32 : 50);
    const connectDist = () => (isMobile() ? 80 : 125);

    function draw() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const particles = Array.from({ length: particleCount() }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.3 + 0.6,
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
      }));

      const dist = connectDist();
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < dist) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(129, 140, 248, ${(1 - d / dist) * 0.2})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, 0.6)`;
        ctx.fill();
      }
    }

    function handleResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(draw, 200);
    }

    draw();
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-network" aria-hidden="true" />;
}

export default ParticleNetwork;
