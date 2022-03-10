import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importing translation files

import translationEN from './languages/en/translation.json';
import translationFA from './languages/fa/translation.json';

//Creating object with the variables of imported translation files
/* prettier-ignore */
const resources = {
    en: { translation: translationEN },
    hn: { translation: translationFA }
};

//i18N Initialization
/* prettier-ignore */
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", //default language
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
