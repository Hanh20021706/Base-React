import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const lngs = {
  en: { nativeName: "english" },
  vn: { nativeName: "vietnam" },
} as const;

const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <h2>{t("title")}</h2>
      <h3>{t("homePage")}</h3>
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          disabled={i18n.resolvedLanguage === lng}
        >
          {lngs[lng as keyof typeof lngs].nativeName}
        </button>
      ))}
      <NavLink to={"/"}>{t("homePage")}</NavLink>
      <NavLink to={"/products"}>{t("product")}</NavLink>
    </>
  );
};

export default Home;
