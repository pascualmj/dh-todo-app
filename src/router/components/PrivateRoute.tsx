import { FC, ExoticComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IRoute } from 'app-types/routing';

import { APP_PATHS } from '../constants/routes';

export const PrivateRoute: FC<IRoute<ExoticComponent>> = props => {
  const isAuthenticated = true;

  if (!isAuthenticated) return <Redirect to={APP_PATHS.Home} />;

  return <Route {...props} />;
};
