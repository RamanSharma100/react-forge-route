import type { Route as RouteType } from '../types';

interface RouteProps extends Omit<RouteType, 'children'> {
  children?: React.ReactNode | React.ReactNode[];
  index?: boolean;
}

export const Route: React.FC<RouteProps> = ({ children }) => {
  if (children) {
    return <>{children}</>;
  }

  return null;
};
