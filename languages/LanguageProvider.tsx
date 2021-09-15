import { useLayoutEffect } from 'react';
import { createContext, useState } from 'react';
import { LANGUAGE_COOKIE, ONE_YEAR_IN_DAYS } from '../utils/constants';
import { getCookie, setCookie } from '../utils/cookies';

type Languages = 'cz' | 'en';

export const defaultLocale: Languages = 'cz';
export const locales: Languages[] = ['cz', 'en'];
export const LanguageContext = createContext<{ locale: Languages; setLocale: (lang: Languages) => void }>({
  locale: 'en',
  setLocale: (lang: Languages) => {},
});

export const LanguageProvider: React.FC = ({ children }) => {
  const [locale, _setLocale] = useState<Languages>('en');

  useLayoutEffect(() => {
    const languageCookie = getCookie(LANGUAGE_COOKIE);
    if (languageCookie) _setLocale(languageCookie as Languages);
  }, []);

  const setLocale = (language: Languages) => {
    _setLocale(language);
    setCookie(LANGUAGE_COOKIE, language, ONE_YEAR_IN_DAYS);
  };

  return <LanguageContext.Provider value={{ locale, setLocale }}>{children}</LanguageContext.Provider>;
};
