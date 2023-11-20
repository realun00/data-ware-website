import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

import en from './locales/english.json';
import bg from './locales/bulgarian.json';

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translations: en,
      },
      bg: {
        translations: bg,
      },
    },
    ns: ['translations'],
    defaultNS: 'translations',
  });

i18n.languages = ['en', 'bg'];

export default i18n;
