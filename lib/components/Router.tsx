import {
  createContext,
  useState,
  useEffect,
  type ReactNode,
  type FC,
} from 'react';

import { RadixTree } from '../dataStructures';
import type { NavigationOptions, Route, RouteContextProps } from '../types';

export const RouterContext = createContext<RouteContextProps | null>(null);

interface IRouterProps {
  children: ReactNode;
}

export const Router: FC<IRouterProps> = ({ children }) => {
  const [path, setPath] = useState<string>(window.location.pathname);
  const [state, setState] = useState<any>();
  const radixTree: RadixTree = new RadixTree();

  const handlePopState = (event: PopStateEvent) => {
    setPath(window.location.pathname);
    setState(event.state);
  };

  useEffect(() => {
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const matchRoute = (path: string) => {
    const routes = radixTree.getRoutes();
    for (const route of routes) {
      const routePath = route.path.replace(/:[^\s/]+/g, '[^/]+');
      const regex = new RegExp(`^${routePath}$`);
      if (regex.test(path)) {
        return route;
      }
    }
    return null;
  };

  const navigate = (
    path: string | number,
    options: NavigationOptions = {}
  ): void => {
    const { state, replace } = options;

    if (typeof path === 'number') {
      window.history.go(path);
      return;
    } else {
      if (replace) {
        window.history.replaceState(state, '', path);
      } else {
        window.history.pushState(state, '', path);
      }
      setPath(path);
      setState(state);
    }
  };

  const getPath = (): string => path;

  const getLocation = (): string => window.location.href;

  const getParams = (): Record<string, string> => {
    const route = matchRoute(path);
    if (route) {
      const paramNames = (route.path.match(/:[^\s/]+/g) || []).map((param) =>
        param.slice(1)
      );
      const match = new RegExp(route.path.replace(/:[^\s/]+/g, '([^/]+)')).exec(
        path
      );
      const params: Record<string, string> = {};
      paramNames.forEach((name, index) => {
        params[name] = match ? match[index + 1] : '';
      });
      return params;
    }
    return {};
  };

  const getParam = (key: string): string | null => {
    const params = getParams();
    return params[key] || null;
  };

  const getSearchParams = (): URLSearchParams =>
    new URLSearchParams(window.location.search);

  const getSearchParam = (key: string): string | null => {
    const searchParams = getSearchParams();
    return searchParams.get(key);
  };

  const getState = (): any => state;

  const getActiveRoute = (): Route | null => {
    return matchRoute(path);
  };

  const redirect = (path: string, options: NavigationOptions = {}): void => {
    navigate(path, {
      ...options,
      replace: true,
    });
  };

  const value: RouteContextProps = {
    getRoutes: radixTree.getRoutes,
    getPath,
    getLocation,
    navigate,
    getParams,
    getParam,
    getSearchParams,
    getSearchParam,
    getState,
    addRoute: (route: Route) => radixTree.addRoute(route),
    location: window.location.pathname,
    state,
    searchParams: getSearchParams(),
    params: getParams(),
    history: window.history,
    pathname: window.location.pathname,
    removeRoute: (path: string) => radixTree.deleteRoute(path),
    getActiveRoute,
    matchRoute,
    redirect,
  };

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
};
