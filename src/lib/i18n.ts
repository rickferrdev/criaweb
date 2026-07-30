import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptBR from "../assets/locales/pt-BR/translation.json";

i18n.use(initReactI18next).init({
	resources: {
		pt: {
			translation: ptBR,
		},
	},
	lng: "pt",
	fallbackLng: "pt",
	interpolation: {
		escapeValue: false, // react already safes from xss
		prefix: "{",
		suffix: "}",
	},
});

export default i18n;
