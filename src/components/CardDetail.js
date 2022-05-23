import { PropTypes } from 'prop-types';

const capitalizarPrimeraLetra = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const CardDetail = ({ detailCard }) => {
  CardDetail.propTypes = {
    detailCard: PropTypes.object
  };
  return (
    <div className="detailCard">
      <div className="detailCard__body">
        <h2 className="detailCard__title">
          {detailCard.title.length >= 60 ? detailCard.title.slice(0, 60) : detailCard.title}
        </h2>
        <span className="detailCard__description">
          {detailCard.description.length >= 250
            ? detailCard.description.slice(0, 250)
            : detailCard.description}
        </span>
        <div>
          <span className="detailCard__subtitle">Disponibilidad: </span>
          <span className="detailCard__number">{detailCard.rating.count}</span>
        </div>
        <div className="detailCard__subline">
          <div>
            <span className="detailCard__subtitle">Precio: </span>
            <span className="detailCard__number">{detailCard.price} $</span>
          </div>
          <div>
            <span className="detailCard__subtitle">Rate: </span>
            <span className="detailCard__number">{detailCard.rating.rate}</span>
          </div>
        </div>
      </div>
      <div className="detailCard__media">
        <img src={detailCard.image} alt="Product" />
        <span className="detailCard__category">{capitalizarPrimeraLetra(detailCard.category)}</span>
      </div>
    </div>
  );
};

export default CardDetail;
