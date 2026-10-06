'use client';

import { useI18n } from '../i18n/I18nProvider';
import { trackEvent } from '../lib/contact';

const LABEL = 'Cambiar idioma / Change language';

const OPTIONS = [
  { code: 'es', short: 'ES' },
  { code: 'en', short: 'EN' },
];

/** Small inline globe (no icon library in the project). */
function GlobeIcon() {
  return (
    <svg
      className="lang-switcher-globe"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" />
    </svg>
  );
}

/**
 * Language switcher — pill with globe + "ES | EN".
 * Rendered once in the header: in the nav row on desktop, next to the
 * hamburger on mobile. Never inside the mobile drawer.
 */
export default function LanguageSwitcher({ className = '' }) {
  const { lang, setLang } = useI18n();

  const choose = (code) => {
    if (code === lang) return;
    setLang(code);
    trackEvent('Language toggle', { to: code });
  };

  return (
    <div
      className={`lang-switcher ${className}`.trim()}
      role="group"
      aria-label={LABEL}
      title={LABEL}
    >
      <GlobeIcon />
      {OPTIONS.map((option, index) => (
        <span key={option.code} className="lang-switcher-part">
          {index > 0 && (
            <span className="lang-switcher-sep" aria-hidden="true">
              |
            </span>
          )}
          <button
            type="button"
            className="lang-option"
            lang={option.code}
            onClick={() => choose(option.code)}
            aria-current={lang === option.code ? 'true' : undefined}
            aria-label={
              option.code === 'es'
                ? lang === 'es'
                  ? 'Cambiar a español'
                  : 'Switch to Spanish'
                : lang === 'es'
                  ? 'Cambiar a inglés'
                  : 'Switch to English'
            }
          >
            {option.short}
          </button>
        </span>
      ))}
    </div>
  );
}