import { useRouter } from './useRouter';

export const useParams = () => {
  const { getParams, getParam } = useRouter();

  return {
    getParams,
    getParam,
  };
};
