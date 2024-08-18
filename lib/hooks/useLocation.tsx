import { useRouter } from './useRouter';

export const useLocation = () => {
  const { getLocation, getState, location, state, pathname } = useRouter();

  return {
    getLocation,
    getLocationState: () => getState(),
    location,
    state,
    pathname,
  };
};
