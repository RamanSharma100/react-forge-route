import { useContext } from 'react';
import { RouterContext } from '../components';

export const useRouter = () => {
  const context = useContext(RouterContext);

  if (!context) {
    throw new Error('useRouter must be used within a Router');
  }

  return context;
};
