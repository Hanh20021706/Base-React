// Example i18n setup (you need to adapt this to your actual i18n library)
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: "title",
        homePage: "Home page",
        product: "product",
      },
    },
    vn: {
      translation: {
        title: "tieu de",
        homePage: "trang chu",
        product: "san pham",
      },
    },
  },
  lng: "vn",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
