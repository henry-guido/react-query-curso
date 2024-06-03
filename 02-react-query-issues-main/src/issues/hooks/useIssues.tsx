import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { githubApi } from '../../api/githubApi';
import { Issue, State } from '../../interfaces';
import { sleeps } from '../../helpers/sleeps';

interface Props {
  state?: State;
  labels: string[];
  page?: number;
}

const getIssues = async ({
  labels,
  state,
  page = 1,
}: Props): Promise<Issue[]> => {
  const params = new URLSearchParams();

  await sleeps(2);
  if (state) params.append('state', state);

  if (labels.length > 0) {
    const labelString = labels.join(',');
    params.append('labels', labelString);
  }

  params.append('page', page.toString());
  params.append('per_page', '5');

  const { data } = await githubApi.get<Issue[]>('/issues', { params });
  // console.log('getIssues  data:', data);
  return data;
};

export const useIssues = ({ state, labels }: Props) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [state, labels]);

  const issuesQuery = useQuery({
    queryKey: ['issues', { state, labels, page }],
    queryFn: () => getIssues({ labels, state, page }),
    refetchOnWindowFocus: false,
  });

  const nextPage = () => {
    console.log(issuesQuery.data);
    console.log(issuesQuery.data?.length, 'data length');
    if (issuesQuery.data?.length === 0) return;
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return {
    //properties
    issuesQuery,

    //Getter
    page: issuesQuery.isFetching ? 'cargando' : page,

    //Methods
    nextPage,
    prevPage,
  };
};
