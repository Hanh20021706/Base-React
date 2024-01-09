import Home from "../page/home";
import Products from "../page/products";
import { appRoutes } from "./Router";
import { useRole } from "./constants";
import ProtectedRoute from "./protected.router";

const routesConfig = [
  {
    path: appRoutes.HOME,
    element: <Home />,
  },
  {
    path: appRoutes.PRODUCTS,
    element: (
      <Products />
      // <ProtectedRoute expectedRoles={[useRole.editor]}>
      //   <Products />
      // </ProtectedRoute>
    ),
  },
];

export default routesConfig;
