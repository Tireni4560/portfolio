'use client';

import { useEffect, useState } from 'react';
import { useI18n } from '../i18n/I18nProvider';
import { trackEvent } from '../lib/contact';

const DISMISS_KEY = 'leye-lang-hint-dismissed';
const SHOW_DELAY_MS = 1500;

// Hint text is fixed copy: the hint addresses the visitor in the *other*
// language, so each string belongs to the language it switches to.
const HINTS = {
  es: {
    text: '¿Hablas español? Ver esta web en español →',
    closeLabel: 'Cerrar la sugerencia de idioma',
  },
  en: {
    text: 'Prefer English? View this site in English →',
    closeLabel: 'Close the language suggestion',
  },
};

function isDismissed() {
  try {
    return window.sessionStorage.getItem(DISMISS_KEY) === '1';
  } catch {
    return false;
  }
}

function dismiss() {
  try {
    window.sessionStorage.setItem(DISMISS_KEY, '1');
  } catch {
    /* ignore */
  }
}

/** True when the visitor looks Spanish-speaking. Any failure => not Spanish. */
function looksSpanishSpeaking() {
  try {
    const languages = navigator.languages?.length
      ? Array.from(navigator.languages)
      : [navigator.language];
    const prefixes = ['es', 'ca', 'gl', 'eu'];
    const speaksSpanish = languages.some(
      (code) =>
        typeof code === 'string' &&
        prefixes.some((prefix) => code.toLowerCase().startsWith(prefix))
    );
    if (speaksSpanish) return true;

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return (
      timeZone === 'Europe/Madrid' ||
      timeZone === 'Atlantic/Canary' ||
      timeZone === 'Africa/Ceuta'
    );
  } catch {
    return false;
  }
}

/**
 * Small bottom-left pill offering the other language. Rendered once inside
 * <I18nProvider>. Appears ~1.5 s after mount (no animation with
 * prefers-reduced-motion); once closed, used, or bypassed via the header
 * switcher it stays hidden for the rest of the browser session.
 */
export default function LanguageHint() {
  const { lang, setLang } = useI18n();
  // Assume Spanish-looking=false and dismissed=true until read after mount, so
  // the SSR/first paint never flashes the hint.
  const [looksSpanish, setLooksSpanish] = useState(false);
  const [dismissed, setDismissedState] = useState(true);
  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(false);

  // Decide only after mount: navigator/timeZone/sessionStorage are unavailable
  // (and unsafe to read) during SSR.
  useEffect(() => {
    setLooksSpanish(looksSpanishSpeaking());
    setDismissedState(isDismissed());
    setChecked(true);
  }, []);

  // The header switcher writes the dismiss key when the language changes;
  // re-read it so a used hint never comes back in this session.
  useEffect(() => {
    if (checked) setDismissedState(isDismissed());
  }, [lang, checked]);

  const targetLang =
    lang === 'en' && looksSpanish ? 'es' : lang === 'es' && !looksSpanish ? 'en' : null;
  const showable = checked && !dismissed && targetLang !== null;

  useEffect(() => {
    if (!showable) {
      setVisible(false);
      return undefined;
    }
    const timer = setTimeout(() => {
      setVisible(true);
      trackEvent('lang_hint_shown', { to: targetLang });
    }, SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, [showable, targetLang]);

  const close = () => {
    dismiss();
    setDismissedState(true);
    setVisible(false);
  };

  const switchLanguage = () => {
    if (!targetLang) return;
    dismiss();
    setDismissedState(true);
    setVisible(false);
    setLang(targetLang); // provider also persists the choice + dismisses
    trackEvent('lang_hint_click', { to: targetLang });
  };

  if (!showable) return null;

  const hint = HINTS[targetLang];

  return (
    <div
      className={`language-hint${visible ? ' is-visible' : ''}`}
      role="status"
      aria-live="polite"
    >
      <button
        type="button"
        className="language-hint-action"
        lang={targetLang}
        onClick={switchLanguage}
      >
        {hint.text}
      </button>
      <button
        type="button"
        className="language-hint-close"
        lang={targetLang}
        aria-label={hint.closeLabel}
        onClick={close}
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
  );
}