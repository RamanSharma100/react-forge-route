export type Route = {
  children?: Route[];
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean;
  group?: boolean;
  routes?: Route[];
};

export interface RouteContextProps {
  getRoutes: () => Route[];
  getPath: () => string;
  getLocation: () => string;
  navigate: (path: string | number, option?: NavigationOptions) => void;
  getParams: () => Record<string, string>;
  getParam: (key: string) => string | null;
  getSearchParams: () => URLSearchParams;
  getSearchParam: (key: string) => string | null;
  getState: () => any;
  addRoute: (route: Route) => void;
  location: string;
  state: any;
  searchParams: URLSearchParams;
  params: Record<string, string>;
  history: History;
  pathname: string;
  removeRoute: (path: string) => void;
  getActiveRoute: () => Route | null;
  matchRoute: (path: string) => Route | null;
  redirect: (path: string, options?: NavigationOptions) => void;
}

export type NavigationOptions<S = any> = {
  state?: S;
  replace?: boolean;
};
