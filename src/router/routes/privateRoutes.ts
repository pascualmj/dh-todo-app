import { lazy, ExoticComponent } from 'react';
import { IRoute } from 'app-types/routing';

import * as routesConstants from '../constants/routes';

const Todos = lazy(() => import('../../pages/todos/Todos'));

export const privateRoutes: IRoute<ExoticComponent>[] = [
  {
    name: routesConstants.ROUTE_TODOS,
    path: routesConstants.APP_PATHS.Todos,
    component: Todos,
    exact: true,
    auth: true
  }
];
