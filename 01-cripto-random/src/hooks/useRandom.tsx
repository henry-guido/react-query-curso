import { useQuery } from '@tanstack/react-query';

const getRandomNumber = async (): Promise<number> => {
  const res = await fetch(
    'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'
  );
  const number = await res.text();

  return +number;
};

export const useRandom = () => {
  const query = useQuery({
    queryKey: ['randomNumber'],
    queryFn: getRandomNumber,
    refetchOnWindowFocus: true,
  });

  return {
    query,
  };
};
