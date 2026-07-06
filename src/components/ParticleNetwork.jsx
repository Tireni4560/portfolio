import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

const PALETTE = ['99, 102, 241', '129, 140, 248', '34, 211, 238', '165, 180, 252'];

function ParticleNetwork() {
  const canvasRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let particles = [];
    let animationId = null;
    let isVisible = true;
    let resizeTimer = null;

    const pointer = { x: -9999, y: -9999, active: false };
    const scrollState = { y: window.scrollY, bias: 0 };

    const isMobile = () => window.innerWidth < 640;
    const isTablet = () => window.innerWidth < 1024;
    const particleCount = () => (isMobile() ? 22 : isTablet() ? 46 : 78);
    const connectDist = () => (isMobile() ? 85 : 130);
    const POINTER_RADIUS = 150;
    const POINTER_CONNECT_DIST = 180;

    function createParticles() {
      particles = Array.from({ length: particleCount() }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.4 + 0.6,
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
      }));
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    }

    function handlePointerMove(e) {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    }

    function handlePointerLeave() {
      pointer.active = false;
    }

    function handleScroll() {
      const currentY = window.scrollY;
      const delta = currentY - scrollState.y;
      scrollState.bias = Math.max(-1, Math.min(1, scrollState.bias + delta * 0.0008));
      scrollState.y = currentY;
    }

    function frame() {
      ctx.clearRect(0, 0, width, height);

      const dist = connectDist();
      const mobile = isMobile();

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];

        p.vy += scrollState.bias * 0.0006;

        if (pointer.active && !mobile) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < POINTER_RADIUS && d > 0.01) {
            const force = (1 - d / POINTER_RADIUS) * 0.6;
            p.vx += (dx / d) * force * 0.02;
            p.vy += (dy / d) * force * 0.02;
          }
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.992;
        p.vy *= 0.992;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, 0.65)`;
        ctx.fill();
      }

      scrollState.bias *= 0.98;

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < dist) {
            const opacity = (1 - d / dist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      if (pointer.active && !mobile) {
        for (let i = 0; i < particles.length; i += 1) {
          const p = particles[i];
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < POINTER_CONNECT_DIST) {
            const opacity = (1 - d / POINTER_CONNECT_DIST) * 0.35;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      if (!shouldReduceMotion && isVisible) {
        animationId = requestAnimationFrame(frame);
      }
    }

    function handleVisibility() {
      isVisible = document.visibilityState === 'visible';
      if (isVisible && !animationId && !shouldReduceMotion) {
        animationId = requestAnimationFrame(frame);
      } else if (!isVisible && animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    }

    function handleResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        if (shouldReduceMotion) frame();
      }, 150);
    }

    resize();
    frame();

    if (!shouldReduceMotion) {
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
      window.addEventListener('pointerleave', handlePointerLeave);
      window.addEventListener('scroll', handleScroll, { passive: true });
      document.addEventListener('visibilitychange', handleVisibility);
    }
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      clearTimeout(resizeTimer);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [shouldReduceMotion]);

  return <canvas ref={canvasRef} className="particle-network" aria-hidden="true" />;
}

export default ParticleNetwork;
