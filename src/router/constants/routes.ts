import { TRouteName, TAppPaths } from 'app-types/routing';

// Route Names
export const ROUTE_HOME: TRouteName = 'Home';
export const ROUTE_TODOS: TRouteName = 'Todos';
export const ROUTE_LOGIN: TRouteName = 'Login';

// Route Paths
export const APP_PATHS: TAppPaths = {
  [ROUTE_HOME]: '/',
  [ROUTE_LOGIN]: '/login',
  [ROUTE_TODOS]: '/todos'
};
