import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import RouteRenderer from "./router/render-router";
import "./i18n";
export const user = {
  authenticated: false,
};

render(
  <BrowserRouter>
    <RouteRenderer />
  </BrowserRouter>,
  document.getElementById("root")
);
