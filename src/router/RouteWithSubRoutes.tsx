import React, { Suspense } from "react";
import { user } from "..";
import { IRoute } from "./config";
import { Redirect, Route } from "react-router-dom";

const RouteWithSubRoutes = (route: IRoute) => {
  const authenticated: boolean = user.authenticated;

  return (
    <Suspense fallback={route.fallback}>
      <Route
        path={route.path}
        render={(props) =>
          route.redirect ? (
            <Redirect to={route.redirect} />
          ) : route.private ? (
            authenticated ? (
              route.component && (
                <route.component {...props} routes={route.routes} />
              )
            ) : (
              <Redirect to="/home" />
            )
          ) : (
            route.component && (
              <route.component {...props} routes={route.routes} />
            )
          )
        }
      />
    </Suspense>
  );
};

export default RouteWithSubRoutes;
