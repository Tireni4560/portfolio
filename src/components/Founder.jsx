"use client";

import { motion } from 'framer-motion';
import AnimatedHeading from './AnimatedHeading';
import ScrambleText from './ScrambleText';

function Founder() {
  return (
    <section id="founder" className="section founder-section" data-reveal>
      <div className="container">
        <div className="section-header">
          <ScrambleText text="Founder Project" className="section-label" />
          <h2>
            <AnimatedHeading text="Tirenify" />
          </h2>
          <p>
            Digital security built for African internet users.
          </p>
        </div>

        {/* Tirenify Featured Card */}
        <motion.div
          className="founder-card-wrapper founder-featured-grid"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="founder-card">
            {/* Tirenify Screenshot */}
            <div className="founder-screenshot">
              <img
                src="/images/tirenify.png"
                alt="Tirenify homepage — digital security for African internet users"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="founder-content">
              <div className="founder-grid">
                {/* Left Column - Info */}
                <div className="founder-info">
                  <span className="founder-badge">Current Venture</span>

                  <h3 className="founder-name">Tirenify</h3>

                  <p className="founder-tagline">
                    A breach checker specifically built for African internet users.
                    Detects exposure in threats relevant to the African cybercrime landscape.
                  </p>

                  <div className="founder-status">
                    <span className="dot" />
                    78+ active users · Shipped solo in 3 months
                  </div>

                  <ul className="founder-details">
                    <li>
                      Digital security product focused on the African internet user.
                    </li>
                    <li>
                      Full-stack build: React, Node.js, Supabase, and Resend.
                    </li>
                    <li>
                      Next: real-time alerts, dark web monitoring, and enterprise partnerships.
                    </li>
                  </ul>

                  <div className="founder-tech">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Supabase</span>
                    <span>Resend</span>
                    <span>Vercel</span>
                  </div>

                  <div className="founder-links">
                    <a
                      href="https://check.tirenify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button-primary"
                    >
                      Explore Product →
                    </a>
                    <a
                      href="https://tirenify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Homepage →
                    </a>
                  </div>
                </div>

                {/* Right Column - Metrics */}
                <div className="founder-metrics">
                  <div className="founder-metric">
                    <span className="founder-metric-value">78+</span>
                    <span className="founder-metric-label">Active Users</span>
                  </div>
                  <div className="founder-metric">
                    <span className="founder-metric-value">3</span>
                    <span className="founder-metric-label">Months to Launch</span>
                  </div>
                  <div className="founder-metric">
                    <span className="founder-metric-value">Full</span>
                    <span className="founder-metric-label">Stack Product</span>
                  </div>
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