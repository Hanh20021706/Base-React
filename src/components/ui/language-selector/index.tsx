import React from "react";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "english" },
  vi: { nativeName: "vietnam" },
} as const;
const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <>
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          disabled={i18n.resolvedLanguage === lng}
        >
          {lngs[lng as keyof typeof lngs].nativeName}
        </button>
      ))}
    </>
  );
};

export default LanguageSelector;
