import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import RouteRenderer from "./router/render-router";
import i18next from "i18next";
import { resources } from "./language";
import { LANGUAGE } from "./constants";
import { I18nextProvider } from "react-i18next";

export const user = {
  authenticated: false,
};

i18next.init({
  resources,
  interpolation: { escapeValue: false },
  lng: LANGUAGE.VI,
});

render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <RouteRenderer />
    </I18nextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
