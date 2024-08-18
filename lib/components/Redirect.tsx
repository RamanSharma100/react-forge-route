import { useEffect } from 'react';
import { useRouter } from '../hooks';

export interface IRedirect {
  to: string;
  state?: any;
}

export const Redirect: React.FC<IRedirect> = ({ to, state = {} }) => {
  const { redirect } = useRouter();

  useEffect(() => {
    if (to === window.location.pathname) {
      redirect(to, { state });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.pathname]);

  return null;
};
