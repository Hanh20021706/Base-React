import { useRoutes } from "react-router-dom";
import Home from "../page/home";
import Products from "../page/products";

const routers = [
  {
    path: "/",
    element: <Home />,
    // children: [{ path: "products", element: <ProductPage /> }],
  },
  { path: "products", element: <Products /> },
];

export default function Routers() {
  return useRoutes(routers);
}
