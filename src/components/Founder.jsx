import { motion } from 'framer-motion';
import AnimatedHeading from './AnimatedHeading';
import ScrambleText from './ScrambleText';
import TerminalCode from './TerminalCode';

function Founder() {
  return (
    <section id="founder" className="section" data-reveal>
      <div className="container">
        <div className="section-header">
          <ScrambleText text="04 — Ventures" className="section-label" />
          <h2>
            <AnimatedHeading text="I'm not just building for clients." />
          </h2>
          <p>
            I'm building companies. Most developers build what they're asked to build.
                I spend time thinking about what should exist, who it's for, and whether
          </p>
        </div>
        {/* Tirenify Featured Venture Card */}
        <motion.div
          className="founder-card-wrapper"
          initial={{ opacity: 0, y: 40 }}
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
                    Helping people understand and manage their digital exposure
                    in an increasingly connected world.
                  </p>

                  <div className="founder-status">
                    <span className="dot" />
                    MVP live and actively evolving
                  </div>

                  <ul className="founder-details">
                    <li>
                      Building a privacy-focused platform that helps users
                      discover whether their email addresses have appeared in
                      known data breaches.
                    </li>
                    <li>
                      Focused on making digital security awareness simple,
                      accessible, and understandable for everyday internet users.
                    </li>
                    <li>
                      Long-term vision: evolve into a broader digital trust,
                      privacy, identity, and online security platform that helps
                      people better understand and protect their online presence.
                    </li>
                  </ul>

                  <a
                    href="https://tirenify.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-primary"
                  >
                    Try the MVP →
                  </a>
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