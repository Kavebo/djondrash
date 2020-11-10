import { useContext } from 'react';

import { defaultLocale, LanguageContext } from './LanguageProvider';
import { languagesStrings } from './languagesStrings';

export const useTranslation = () => {
  const [locale] = useContext(LanguageContext);

  const t = (key) => {
    if (!languagesStrings[locale][key]) {
      console.warn(`No string '${key}' for locale '${locale}'`);
    }

    return languagesStrings[locale][key] || languagesStrings[defaultLocale][key] || '';
  };

  return { t, locale };
};
