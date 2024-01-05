import { ComponentType, LazyExoticComponent, ReactNode, lazy } from "react";

export interface IRoute {
  // Path, like in basic prop ( đường dẫn giống như props cơ bản )
  path: string;
  // Exact, like in basic prop ()
  exact: boolean;
  // Preloader for lazy loading (Trình tải trước để tải chậm)
  fallback: NonNullable<ReactNode> | null;
  // Lazy Loaded component (Thành phần tải lười biếng)
  component?: LazyExoticComponent<ComponentType<any>>;
  // Sub routes ( route phụ)
  routes?: IRoute[];
  // Redirect path ( đường dẫn trực tiếp)
  redirect?: string;
  // If router is private, this is going to be true ( có riêng tư hay khônng)
  private?: boolean;
}

export const routes: IRoute[] = [
  {
    path: "/",
    exact: true,
    redirect: "/home",
    fallback: <div> Loading... </div>,
  },
  {
    path: "/home",
    component: lazy(() => import("../page/home/index")),
    exact: false,
    private: false,
    fallback: <div> Loading... </div>,
  },
  {
    path: "/products",
    component: lazy(() => import("../components/products")),
    exact: false,
    private: false,
    fallback: <div> Loading... </div>,
  },
];
