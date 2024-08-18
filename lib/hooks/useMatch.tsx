import { useRouter } from './useRouter';

export const useMatch = (path: string) => {
  const { matchRoute } = useRouter();

  return matchRoute(path);
};
