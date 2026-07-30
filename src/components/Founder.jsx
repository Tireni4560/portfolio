"use client";

import { motion } from 'framer-motion';
import AnimatedHeading from './AnimatedHeading';
import ScrambleText from './ScrambleText';
import TerminalCode from './TerminalCode';

function Founder() {
  return (
    <section id="founder" className="section" data-reveal>
      <div className="container">
        <div className="section-header">
          <ScrambleText text="05 — Ventures" className="section-label" />
          <h2>
            <AnimatedHeading text="I'm building Tirenify first." />
          </h2>
          <p>
            Primary focus: building Tirenify. Secondary: select client projects for founders.
            I think about what should exist, who it's for, and whether it's worth building at all.
          </p>
        </div>
        {/* Tirenify Featured Venture Card */}
        <motion.div
          className="founder-card-wrapper"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="founder-card">
            <div className="founder-card-border" aria-hidden="true" />

            {/* Watermark */}
            <div className="founder-watermark" aria-hidden="true">
              TIRENIFY
            </div>

            <div className="founder-content">
              <div className="founder-grid">
                {/* Left Column - Info */}
                <div className="founder-info">
                  <span className="founder-badge">Current Venture</span>

                  <h3 className="founder-name">Tirenify</h3>

                  <p className="founder-tagline">
                    A breach checker specifically built for African internet users.
                  </p>

                  <div className="founder-status">
                    <span className="dot" />
                    78+ active users · Shipped solo in 3 months
                  </div>

                  <ul className="founder-details">
                    <li>
                      Detects exposure in threats relevant to the African cybercrime landscape.
                    </li>
                    <li>
                      Full-stack build: React, Node.js, Supabase, and Resend.
                    </li>
                    <li>
                      Next: real-time alerts, dark web monitoring, and enterprise partnerships.
                    </li>
                  </ul>

                  <div className="founder-links">
                    <a
                      href="https://breachchecker-rho.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-primary"
                    >
                      Use the product →
                    </a>
                    <a
                      href="https://tirenify.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Visit homepage →
                    </a>
                  </div>
                </div>

                {/* Right Column - Code Terminal */}
                <div className="founder-terminal">
                  <TerminalCode />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="founder-pipeline">
          Tirenify is the beginning. My long-term goal is to build products that
          help people navigate technology with greater trust, security, and
          confidence.
        </p>
      </div>
    </section>
  );
}

export default Founder;