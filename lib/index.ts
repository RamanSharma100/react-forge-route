import {
  Link,
  Route,
  Routes,
  Router,
  Redirect,
  RouterContext,
} from './components';

import {
  useRoute,
  useMatch,
  useParams,
  useRouter,
  useLocation,
  useNavigate,
  useRedirect,
} from './hooks';

import type {
  NavigationOptions,
  RouteContextProps,
  Route as RouteType,
  ParameterizedRouteComponent,
} from './types';

export {
  Link,
  Route,
  Routes,
  Router,
  Redirect,
  RouterContext,
  useRoute,
  useMatch,
  useParams,
  useRouter,
  useLocation,
  useNavigate,
  useRedirect,
};

export type {
  NavigationOptions,
  RouteContextProps,
  RouteType,
  ParameterizedRouteComponent,
};

export default Router;
