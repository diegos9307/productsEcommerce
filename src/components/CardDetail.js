import { PropTypes } from 'prop-types';

const CardDetail = ({ detailCard }) => {
  CardDetail.propTypes = {
    detailCard: PropTypes.object
  };
  console.log(CardDetail);
  return (
    <div>
      <div className="card">
        <img src={detailCard.image} alt="Product" />
        <div className="card__content">
          <h4 className="card__title">{detailCard.title}</h4>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
