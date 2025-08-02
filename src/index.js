import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import i18n from "i18next";
// eslint-disable-next-line
import { I18nextProvider, initReactI18next } from "react-i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: global_es
      },
      en: {
        translation: global_en
      }
    },
    lng: 'es',
    fallbackLng: 'es',

    interpolation: {
      escapeValue: false
    }
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
