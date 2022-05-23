import { useCountdown } from '../hooks/useCountDown';
import { PropTypes } from 'prop-types';
import ExpiredTime from './ExpiredTime';
import ShowCounter from './ShowCounter';

const Contador = ({ targetTime, setActive }) => {
  Contador.propTypes = {
    targetTime: PropTypes.number,
    setActive: PropTypes.func
  };

  const [minutes, seconds] = useCountdown(targetTime);

  if (minutes + seconds <= 0) {
    return <ExpiredTime setActive={setActive(true)} />;
  } else {
    return <ShowCounter minutes={minutes} seconds={seconds} />;
  }
};

export default Contador;
