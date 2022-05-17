import { useState, useEffect } from 'react';
import axios from 'axios';
import Contador from './Contador';
import { Link } from 'react-router-dom';

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

  const generateTime = ((min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  })(120000, 240000);
  const now_ml = new Date().getTime();

  const targetTime = now_ml + generateTime;

  return (
    <>
      {card.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        card.map((el) => {
          return (
            <div className="card" key={el.id}>
              <img src={el.image} alt="Product" />
              <div className="card__content">
                <h4 className="card__title">{el.title}</h4>
                <div className="card__buttons">
                  {/* <Contador generateTime={generateTime(120000, 240000)} /> */}
                  <Contador targetTime={targetTime} />
                  <Link to={`/detail/${el.id}`} className="card__btn-link">
                    Ir a detalles
                  </Link>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default ProductCard;
