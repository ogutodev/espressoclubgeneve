import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Locale } from "../data/menuData";
import { isLocale, translations, type Translation } from "../translations";

type LanguageContextValue = { locale: Locale; t: Translation; setLocale: (locale: Locale) => void };

const LanguageContext = createContext<LanguageContextValue | null>(null);

const fallback: LanguageContextValue = {
  locale: "fr",
  t: translations.fr as Translation,
  setLocale: () => {},
};

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext) ?? fallback;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    const stored = window.localStorage.getItem("espresso-locale");
    if (isLocale(stored)) {
      setLocaleState(stored);
      document.documentElement.lang = stored;
    } else {
      document.documentElement.lang = "fr";
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem("espresso-locale", next);
    document.documentElement.lang = next;
  };

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale] as Translation, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}
