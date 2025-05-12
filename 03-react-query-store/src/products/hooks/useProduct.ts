import { useQuery } from '@tanstack/react-query';
import { producActions } from '..';

interface Options {
  id: number;
}

export const useProduct = ({ id }: Options) => {
  const {
    isLoading,
    isError,
    error,
    data: product,
    isFetching,
  } = useQuery({
    queryKey: ['produtcs', id],
    queryFn: () => producActions.getProductById(id),
    staleTime: 1000 * 60 * 60,
  });

  return {
    isLoading,
    isError,
    error,
    product,
    isFetching,
  };
};
