import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { render } from "react-dom";
export const user = {
  authenticated: false,
};

render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById("root")
);
