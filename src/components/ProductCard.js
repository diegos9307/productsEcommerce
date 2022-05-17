import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const ProductCard = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    const getCard = async () => {
      const url = 'https://fakestoreapi.com/products';
      const result = await axios.get(url);
      setCard(result.data);
    };
    getCard();
  }, []);

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
