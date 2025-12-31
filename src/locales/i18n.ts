import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enJSON from './json/en.json';
import frJSON from './json/fr.json';

i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: ['en','fr'],
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {...enJSON},
        fr: {...frJSON}
    }
});

export default i18n;