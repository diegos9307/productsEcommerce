import { PropTypes } from 'prop-types';

const ShowCounter = ({ minutes, seconds }) => {
  ShowCounter.propTypes = {
    minutes: PropTypes.number
  };
  ShowCounter.propTypes = {
    seconds: PropTypes.number
  };
  return (
    <div className="card__contador">
      <span>{minutes}:</span>
      <span>{seconds}</span>
    </div>
  );
};

export default ShowCounter;
