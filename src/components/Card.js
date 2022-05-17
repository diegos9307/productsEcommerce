import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Contador from './Contador';

const Card = ({ el }) => {
  Card.propTypes = {
    el: PropTypes.object
  };

  const generateTime = ((min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  })(120000, 240000);
  const now_ml = new Date().getTime();

  const targetTime = now_ml + generateTime;

  return (
    <div>
      <div className="card" key={el.id}>
        <img src={el.image} alt="Product" />
        <div className="card__content">
          <h4 className="card__title">{el.title}</h4>
          <div className="card__buttons">
            <Contador targetTime={targetTime} />
            <Link to={`/detail/${el.id}`} className="card__btn-link">
              Ir a detalles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
