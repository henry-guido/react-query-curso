import { useEffect, useState } from 'react';
import './App.css';

const getRandomNumber = async (): Promise<number> => {
  const res = await fetch(
    'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'
  );
  const number = await res.text();

  return +number;
};

export const App = () => {
  const [number, setNumber] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    getRandomNumber()
      .then(setNumber)
      .catch((error) => setError(error.message));
  }, []);

  useEffect(() => {
    if (number) setIsLoading(false);
  }, [number]);

  return (
    <div>
      {isLoading ? <h2>Cargando...</h2> : <h1>Numero Aleatorio: {number}</h1>}
    </div>
  );
};
