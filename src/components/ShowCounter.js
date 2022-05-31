import { PropTypes } from 'prop-types';

const ShowCounter = ({ minutes, seconds }) => {
  return (
    <div className="card__contador">
      <span>{minutes > 9 ? minutes : '0' + minutes}:</span>
      <span>{seconds > 9 ? seconds : '0' + seconds}</span>
    </div>
  );
};

ShowCounter.propTypes = {
  minutes: PropTypes.number,
  seconds: PropTypes.number
};

export default ShowCounter;
