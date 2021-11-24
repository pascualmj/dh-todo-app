import React, { useMemo } from 'react';
import { Route } from 'react-router-dom';
import { IRoute } from 'app-types/routing';

import { PrivateRoute } from './PrivateRoute';

// Layouts
import { LayoutDefault } from 'layouts/layoutDefault/layoutDefault';

export const AppRoute: React.FC<IRoute<React.ExoticComponent>> = ({
  auth: isPrivateRoute,
  ...routeProps
}) => {
  const RouteComponent = isPrivateRoute ? PrivateRoute : Route;
  const LayoutComponent = useMemo(
    () =>
      ({
        default: LayoutDefault,
        blank: React.Fragment
      }[routeProps.layout || 'blank']),
    [routeProps.layout]
  );

  return (
    <LayoutComponent>
      <RouteComponent {...routeProps} />
    </LayoutComponent>
  );
};
