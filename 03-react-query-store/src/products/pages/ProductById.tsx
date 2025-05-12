import { useParams } from 'react-router-dom';
import { ProductCard, useProduct } from '..';

export const ProductById = () => {
  const { id } = useParams();
  const { isLoading, product } = useProduct({ id: +id! });
  return (
    <div className='flex-col'>
      <h1 className='text-2xl font-bold'>Todos los productos</h1>

      {isLoading && <p>Cargando...</p>}
      {product && <ProductCard product={product} fullDiscription />}
    </div>
  );
};
