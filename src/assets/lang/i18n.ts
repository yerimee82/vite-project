import i18n from 'i18next'; 
import { initReactI18next } from 'react-i18next';
import langEn from './en.json';
import langKo from './ko.json';

const resources = {
    en: { translation: langEn },
    ko: {translation: langKo}
}

const selectedLanguage = window.navigator.language;

i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem('language') || selectedLanguage || 'en',
    fallbackLng: 'en',
    keySeparator: false,
  interpolation: {
    escapeValue: false
  }
})

export default i18n;

export const languages = [ 'en', 'ko' ] as const;
export type Languages = typeof languages[number];