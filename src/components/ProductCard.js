import { useContext } from 'react';
import Card from './Card';
import DataContext from './DataContext';
import Loader from './Loader';

const ProductCard = () => {
  const { card } = useContext(DataContext);
  return (
    <>{card.length === 0 ? <Loader /> : card.map((el, index) => <Card key={index} el={el} />)}</>
  );
};

export default ProductCard;
