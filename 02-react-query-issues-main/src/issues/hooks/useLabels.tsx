import { useQuery } from '@tanstack/react-query';
import { Label } from '../../interfaces/label';
import { githubApi } from '../../api/githubApi';
import { sleeps } from '../../helpers/sleeps';

const getLabels = async (): Promise<Label[]> => {
  await sleeps(2);
  const { data } = await githubApi.get<Label[]>('/labels?per_page=100');
  return data;
};

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
    staleTime: 5 * 60 * 60,
  });

  return {
    labelsQuery,
  };
};
