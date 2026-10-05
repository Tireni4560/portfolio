'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import es from './es';
import en from './en';

const dictionaries = { es, en };
export const LANGUAGES = ['es', 'en'];
export const DEFAULT_LANG = 'es';

const I18nContext = createContext(null);

function I18nProvider({ children }) {
  // Always start in Spanish so every page load has a consistent default.
  const [lang, setLangState] = useState(DEFAULT_LANG);

  // Keep <html lang> and the document title in sync with the chosen language.
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem('leye-lang', lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((next) => {
    setLangState(LANGUAGES.includes(next) ? next : DEFAULT_LANG);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((current) => (current === 'es' ? 'en' : 'es'));
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