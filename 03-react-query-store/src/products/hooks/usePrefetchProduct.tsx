import { useQueryClient } from '@tanstack/react-query';
import { producActions } from '..';

export const usePrefetchProduct = () => {
  const queryClient = useQueryClient();

  const prefetchProduct = (id: number) => {
    queryClient.prefetchQuery({
      queryKey: ['product', id],
      queryFn: () => producActions.getProductById(id),
      staleTime: 1000 * 60 * 60,
    });
  };

  return prefetchProduct;
};
