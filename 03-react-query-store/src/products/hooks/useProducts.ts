import { useQuery } from "@tanstack/react-query"
import { producActions } from ".."

interface Options {
  filterKey?: string
}

export const useProducts = ({ filterKey }: Options) => {

  const { isLoading, isError, error, data: products = [], isFetching } = useQuery({
    queryKey: ['produtcs', { filterKey }],
    queryFn: () => producActions.getProducts({ filterKey }),
    staleTime: 1000 * 60 * 60
  })

  return {
    isLoading,
    isError,
    error,
    products,
    isFetching
  }
}

