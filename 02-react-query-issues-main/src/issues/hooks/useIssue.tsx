import { FC } from 'react';
import { githubApi } from '../../api/githubApi';
import { useQuery } from '@tanstack/react-query';
import { Comment, Issue } from '../../interfaces';
import { sleeps } from '../../helpers/sleeps';

export const getIssueInfo = async (issueNumber: number): Promise<Issue> => {
  await sleeps(2);
  const { data } = await githubApi.get<Issue>(`issues/${issueNumber}`);
  // console.log('getIssueInfo  data:', data);
  return data;
};

export const getIssueComments = async (
  issueNumber: number
): Promise<Issue[]> => {
  await sleeps(2);
  const { data } = await githubApi.get<Issue[]>(
    `issues/${issueNumber}/comments`
  );
  // console.log('getIssueInfo  data:', data);
  return data;
};

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ['issue', issueNumber],
    queryFn: () => getIssueInfo(issueNumber),
  });

  const commentsQuery = useQuery({
    queryKey: ['issue', issueNumber, 'comments'],
    queryFn: () => getIssueComments(issueQuery.data!.number),
    enabled: !!issueQuery.data,
  });

  return {
    issueQuery,
    commentsQuery,
  };
};
