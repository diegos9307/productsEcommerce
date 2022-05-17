/* import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

const Contador = ({ generateTime }) => {
  const defaultTime = {
    seconds: 0,
    minutes: 0
  };

  Contador.propTypes = {
    generateTime: PropTypes.number
  };

  const toMinSec = (milis) => {
    const minutes = Math.floor((milis % (1000 * 60 * 60)) / (1000 * 60));
    const secondsOne = Math.floor((milis % (1000 * 60)) / 1000);
    const seconds = (secondsOne < 10 ? '0' : '') + secondsOne;
    return { minutes, seconds };
  };

  const [timer, setTimer] = useState(defaultTime);

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime(generateTime);
    }, 1000);
    return () => clearInterval(interval);
  }, [generateTime]);

  const updateTime = (generateTime) => {
    setTimer(toMinSec(generateTime));
  };

  return (
    <div className="card__contador">
      <span>{timer.minutes}:</span>
      <span>{timer.seconds}</span>
    </div>
  );
};

export default Contador;
 */

import { useCountdown } from '../hooks/useCountDown';
import { PropTypes } from 'prop-types';
import ExpiredTime from './ExpiredTime';
import ShowCounter from './ShowCounter';

const Contador = ({ targetTime }) => {
  Contador.propTypes = {
    targetTime: PropTypes.number
  };

  const [minutes, seconds] = useCountdown(targetTime);

  if (minutes + seconds <= 0) {
    return <ExpiredTime />;
  } else {
    return <ShowCounter minutes={minutes} seconds={seconds} />;
  }
};

export default Contador;
