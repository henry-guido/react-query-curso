import './App.css';
import { useRandom } from './hooks/useRandom';

export const App = () => {
  const { query } = useRandom();

  return (
    <>
      <div>
        {query.isFetching ? (
          <h2>Cargando...</h2>
        ) : (
          <h1>Numero Aleatorio: {query.data}</h1>
        )}

        {!query.isLoading && query.isError && <h3> {`${query.error}`}</h3>}
      </div>

      <button onClick={() => query.refetch()} disabled={query.isFetching}>
        {query.isFetching ? '...' : 'Nuevo número'}
      </button>
    </>
  );
};
