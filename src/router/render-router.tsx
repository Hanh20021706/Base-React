import { useRoutes } from "react-router-dom";
import routesConfig from "./router-config";

const RouteRenderer = () => {
  const routes = useRoutes(routesConfig);
  return routes;
};

export default RouteRenderer;
