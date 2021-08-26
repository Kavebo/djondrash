import { useContext } from 'react';

import { defaultLocale, LanguageContext } from './LanguageProvider';
import { languagesStrings } from './languagesStrings';

export const useTranslation = () => {
  const { locale } = useContext(LanguageContext);

  const t = (key: string) => {
    const stringKey = key as keyof typeof languagesStrings['cz'];

    if (stringKey in languagesStrings[locale]) {
      return languagesStrings[locale][stringKey] || languagesStrings[defaultLocale][stringKey] || '';
    }

    console.warn(`No string '${key}' for locale '${locale}'`);
  };

  return { t, locale };
};
