import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import enTranslations from './locales/en/translation.json';
import nlTranslations from './locales/nl/translation.json';

type Translation = typeof enTranslations & typeof nlTranslations;

const nl: Translation = nlTranslations;
const en: Translation = enTranslations;

const resources = {
	en: { ...en, '*': en },
	nl: { ...nl, '*': nl },
};

export type LanguageTag = keyof typeof resources;
export type Language = 'English' | 'Nederlands';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'nl',
		interpolation: {
			escapeValue: false,
		},
		detection: {
			order: ['localStorage', 'navigator'],
			caches: ['localStorage'],
		},
		showSupportNotice: false, // Schakel advertenties uit in console log
	});

export default i18n;
