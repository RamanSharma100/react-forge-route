import { useRouter } from './useRouter';

export const useRedirect = () => {
  const { redirect, navigate } = useRouter();
  return {
    redirect,
    navigate,
  };
};
