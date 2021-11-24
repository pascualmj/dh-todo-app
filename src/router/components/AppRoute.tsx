import { FC, ExoticComponent } from 'react';
import { Route } from 'react-router-dom';
import { IRoute } from 'app-types/routing';

import { PrivateRoute } from './PrivateRoute';

export const AppRoute: FC<IRoute<ExoticComponent>> = ({ auth: isPrivateRoute, ...routeProps }) => {
  const RouteComponent = isPrivateRoute ? PrivateRoute : Route;

  return <RouteComponent {...routeProps} />;
};
