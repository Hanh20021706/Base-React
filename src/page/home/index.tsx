import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import LanguageSelector from "src/components/ui/language-selector";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("home.title")}</h2>
      <p>{t("home.desc")}</p>
      <LanguageSelector />

      <NavLink to={"/"}>{t("homePage")}</NavLink>
      <NavLink to={"/products"}>{t("product")}</NavLink>
    </>
  );
};

export default Home;
