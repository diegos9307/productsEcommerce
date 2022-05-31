import { useState } from 'react';
import { Link } from 'react-router-dom';
import Contador from './Contador';

const Card = ({ el }) => {
  const generateTime = ((min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  })(120000, 240000);
  const now_ml = new Date().getTime();

  const targetTime = now_ml + generateTime;

  const [active, setActive] = useState(false);

  return (
    <div>
      <div className="card" key={el.id}>
        <div className="card__media">
          <img src={el.image} alt="Product" />
        </div>
        <div className="card__content">
          <h4 className="card__title">{el.title}</h4>
          <div className="card__buttons">
            <Contador targetTime={targetTime} setActive={setActive} active={active} />
            <Link
              to={`/detail/${el.id}`}
              className="btn"
              style={!active ? null : { display: 'none' }}>
              Ir a detalles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
