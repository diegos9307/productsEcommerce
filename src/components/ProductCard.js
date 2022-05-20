import { useContext } from 'react';
import Card from './Card';
import DataContext from './DataContext';

const ProductCard = () => {
  const { card } = useContext(DataContext);
  return (
    <>
      {card.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        card.map((el, index) => <Card key={index} el={el} />)
      )}
    </>
  );
};

export default ProductCard;
