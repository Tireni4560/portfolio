'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import es from './es';
import en from './en';

const dictionaries = { es, en };
export const LANGUAGES = ['es', 'en'];
// English is the default: first-time visitors always start in English, whatever
// the browser language says. The visitor can still choose Spanish with the
// header switcher, a ?lang=es URL, or the language hint.
export const DEFAULT_LANG = 'en';

// Per-tab storage: the choice lasts for this browser session only.
const SESSION_LANG_KEY = 'leye-lang-session';
const HINT_DISMISS_KEY = 'leye-lang-hint-dismissed';

function readUrlLang() {
  try {
    const param = new URLSearchParams(window.location.search).get('lang');
    return LANGUAGES.includes(param) ? param : null;
  } catch {
    return null;
  }
}

function readSessionLang() {
  try {
    const stored = window.sessionStorage.getItem(SESSION_LANG_KEY);
    return LANGUAGES.includes(stored) ? stored : null;
  } catch {
    return null;
  }
}

function storeLang(value) {
  try {
    window.sessionStorage.setItem(SESSION_LANG_KEY, value);
  } catch {
    /* ignore */
  }
}

function markHintDismissed() {
  try {
    window.sessionStorage.setItem(HINT_DISMISS_KEY, '1');
  } catch {
    /* ignore */
  }
}

const I18nContext = createContext(null);

function I18nProvider({ children }) {
  // Server render and first client render are always English, so there is no
  // hydration mismatch; the real language is resolved after mount below.
  const [lang, setLangState] = useState(DEFAULT_LANG);

  // Resolve the language once, after mount (reading the URL earlier would risk
  // a hydration mismatch). Priority: (1) ?lang=en / ?lang=es in the URL,
  // (2) the language chosen earlier in this browser session, (3) English.
  // The browser language is deliberately never consulted.
  useEffect(() => {
    setLangState(readUrlLang() || readSessionLang() || DEFAULT_LANG);
  }, []);

  // Keep <html lang> in sync and remember the choice for this session.
  useEffect(() => {
    document.documentElement.lang = lang;
    storeLang(lang);
  }, [lang]);

  const setLang = useCallback((next) => {
    const resolved = LANGUAGES.includes(next) ? next : DEFAULT_LANG;
    setLangState(resolved);
    storeLang(resolved);
    // Using a language control also retires the language hint for this session.
    markHintDismissed();
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((current) => {
      const next = current === 'es' ? 'en' : 'es';
      storeLang(next);
      return next;
    });
    markHintDismissed();
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t: dictionaries[lang] }),
    [lang, setLang, toggleLang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>');
  return ctx;
}

export default I18nProvider;