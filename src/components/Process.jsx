"use client";

import { motion, useAnimation, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import AnimatedHeading from './AnimatedHeading';
import ScrambleText from './ScrambleText';

const steps = [
  {
    number: '01',
    title: 'Understanding',
    description: "I dig into what's actually being asked — not just what's specified.",
  },
  {
    number: '02',
    title: 'Questioning',
    description: 'I challenge assumptions and flag where the brief could be improved.',
  },
  {
    number: '03',
    title: 'Architecture',
    description: 'I design the component structure, data flow, and UX before any visual work.',
  },
  {
    number: '04',
    title: 'Shipping',
    description: 'I build, test, and deploy with performance and maintainability first.',
  },
];

function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const connectorVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.3,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3,
      },
    },
  };

  const shouldReduceMotion = useReducedMotion();
  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="process" className="section" ref={ref} data-reveal>
      <div className="container">
        <div className="section-header">
          <ScrambleText text="03 — Approach" className="section-label" />
          <h2>
            <AnimatedHeading text="How I Work" />
          </h2>
          <p>
            My process is shaped by product thinking. Before I write a line of code,
            I ask whether the thing I'm building actually solves the right problem.
          </p>
        </div>

        <motion.div
          className="process-steps"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
          }}
          initial={false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Connecting Line (Desktop) */}
          <svg className="process-connector" aria-hidden="true">
            <motion.line
              x1="10%"
              y1="0"
              x2="90%"
              y2="0"
              stroke="var(--color-border)"
              strokeWidth="1"
              strokeDasharray="4 4"
              variants={connectorVariants}
              initial="hidden"
              animate={controls}
            />
          </svg>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="process-step"
              variants={stepVariants}
            >
              <div className="process-step-number">{step.number}</div>

              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Process;