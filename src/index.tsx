import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { routes } from "./router/config";
import { render } from "react-dom";
export const user = {
  authenticated: false,
};

const App = () => {
  return (
    <div>
      <Router routes={routes} />
    </div>
  );
};

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
