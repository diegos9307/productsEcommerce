import { useState, useEffect } from "react";
import axios from "axios";
import Contador from "./Contador";

const ProductCard = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    const getCard = async () => {
      const url = "https://fakestoreapi.com/products";
      const result = await axios.get(url);
      setCard(result.data);
    };
    getCard();
  }, []);

  const generateTime = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  /*   const defaultTime = {
    seconds: "00",
    minutes: "00",
  };

  const [timer, setTimer] = useState(defaultTime);
 */
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
                  <Contador generateTime={generateTime(120000, 240000)} />
                  <button className="card__btn">Ir a detalles</button>
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
