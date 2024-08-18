import { useRouter } from './useRouter';

export const useRoute = () => {
  const {
    addRoute,
    getState,
    getSearchParam,
    getSearchParams,
    getRoutes,
    getActiveRoute,
    matchRoute,
  } = useRouter();

  return {
    addRoute,
    getState,
    getSearchParam,
    getSearchParams,
    getRoutes,
    getActiveRoute,
    matchRoute,
  };
};
