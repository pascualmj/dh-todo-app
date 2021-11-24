import React, { Suspense } from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";

import { APP_PATHS } from "./constants/routes";
import { appRoutes } from "./routes";
import { AppRoute } from "./components/AppRoute";

const MainRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          {appRoutes.map((route) => (
            <AppRoute key={route.name} {...route} />
          ))}
          <Redirect to={APP_PATHS.Home} />;
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default MainRouter;
