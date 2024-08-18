import type { Route as RouteType } from '../types';

interface RouteProps extends RouteType {
  component: React.ComponentType<any>;
  exact?: boolean;
  path: string;
}

export const Route: React.FC<RouteProps> = ({ children }) => {
  if (children) {
    return <>{children}</>;
  }

  return null;
};
