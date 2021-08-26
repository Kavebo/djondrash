import { createContext, useState } from 'react';

type Languages = 'cz' | 'en';

export const defaultLocale: Languages = 'cz';
export const locales: Languages[] = ['cz', 'en'];
export const LanguageContext = createContext<{ locale: Languages; setLocale: (lang: Languages) => void }>({
  locale: 'en',
  setLocale: (lang: Languages) => {},
});

export const LanguageProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = useState<Languages>('en');

  return <LanguageContext.Provider value={{ locale, setLocale }}>{children}</LanguageContext.Provider>;
};
