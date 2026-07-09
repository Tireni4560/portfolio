import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

function MagneticButton({ href, children, className }) {
  const ref = useRef(null);
  const centerRef = useRef(null);
  const rafRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();

  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseEnter = () => {
    if (!ref.current || shouldReduceMotion) return;
    const rect = ref.current.getBoundingClientRect();
    centerRef.current = { cx: rect.left + rect.width / 2, cy: rect.top + rect.height / 2 };
  };

  const handleMouseMove = (e) => {
    if (!centerRef.current || shouldReduceMotion) return;
    const { cx, cy } = centerRef.current;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const radius = 90;

      if (dist < radius) {
        x.set(dx * 0.38);
        y.set(dy * 0.38);
      }
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block' }}
    >
      <motion.a
        href={href}
        className={className}
        style={{ x: springX, y: springY, display: 'inline-flex' }}
      >
        {children}
      </motion.a>
    </div>
  );
}

export default MagneticButton;
