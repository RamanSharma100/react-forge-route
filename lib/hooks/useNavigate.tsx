import { useRouter } from './useRouter';

export const useNavigate = () => {
  return useRouter().navigate;
};
