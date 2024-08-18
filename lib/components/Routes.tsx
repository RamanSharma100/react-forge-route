import { useRouter } from '../hooks';
import type { Route as RouteType } from '../types';
import React, { useEffect } from 'react';

interface RouteProps {
  children: React.ReactNode;
}

export const Routes: React.FC<RouteProps> = ({ children }) => {
  const { getPath, addRoute, getRoutes, getParams } = useRouter();
  const currentPath: string = getPath();
  const [routeLoaded, setRouteLoaded] = React.useState<boolean>(false);

  const processRoutes = (children: React.ReactNode, parentPath = ''): void => {
    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) return;

      const {
        path,
        exact,
        component,
        children: nestedChildren = [],
      } = child.props;

      if (path) {
        const fullPath =
          parentPath + (path.startsWith('/') ? path : `/${path}`);

        const route: RouteType = {
          path: fullPath,
          exact,
          component,
          children: [],
        };

        addRoute(route);

        if (nestedChildren) {
          processRoutes(nestedChildren || [], fullPath);
        }
      }
    });
  };

  useEffect(() => {
    processRoutes(children);

    setRouteLoaded(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!routeLoaded) return null;

  const route = matchRoute(currentPath, getRoutes());

  if (route && route.component) {
    const Component = route.component as React.ComponentType<any>;
    const params = getParams();
    const searchParams = new URLSearchParams(window.location.search);

    return (
      <Component
        params={params}
        searchParams={searchParams}
        history={window.history}
      />
    );
  }

  return <div>Error 404: Route {currentPath} not found</div>;
};

const matchRoute = (path: string, routes: RouteType[]): RouteType | null => {
  path = path.startsWith('/') ? path : `/${path}`;
  for (const route of routes) {
    let routePath = route.path.replace(/:[^\s/]+/g, '[^/]+');
    routePath = routePath.startsWith('/') ? routePath : `/${routePath}`;
    const regex = new RegExp(`^${routePath}$`);
    console.log(regex);
    if (regex.test(path)) {
      return route;
    }
  }
  return null;
};