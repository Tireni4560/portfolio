import { useEffect, useState, lazy, Suspense } from 'react';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import './styles/global.css';

const About = lazy(() => import('./components/About.jsx'));
const Skills = lazy(() => import('./components/Skills.jsx'));
const Projects = lazy(() => import('./components/Projects.jsx'));
const Journey = lazy(() => import('./components/Journey.jsx'));
const Services = lazy(() => import('./components/Services.jsx'));
const Vision = lazy(() => import('./components/Vision.jsx'));
const Testimonials = lazy(() => import('./components/Testimonials.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));

function App() {
  const [isDark, setIsDark] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(storedTheme ? storedTheme === 'dark' : prefersDark);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('light-mode', !isDark);
    root.classList.toggle('dark-mode', isDark);
    window.localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const toggleTheme = () => setIsDark((current) => !current);

  return (
    <div className={`app-shell ${loaded ? 'page-loaded' : ''}`}>
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle light and dark mode">
        {isDark ? '☀️ Light Mode' : '🌑 Dark Mode'}
      </button>
      <Hero />
      <main>
        <Suspense fallback={<div className="skeleton-loader">Loading premium content…</div>}>
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Services />
          <Vision />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
