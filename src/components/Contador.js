/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useCountdown } from '../hooks/useCountDown';
import ExpiredTime from './ExpiredTime';
import ShowCounter from './ShowCounter';

const Contador = ({ targetTime, active, setActive }) => {
  const [minutes, seconds, isFinished] = useCountdown(targetTime);
  useEffect(() => {
    function handleClick() {}
    handleClick();
  }, []);

  useEffect(() => {
    isFinished && setActive(true);
    // console.log('Entro en useEffect');
  }, [isFinished]);

  return active ? <ExpiredTime /> : <ShowCounter minutes={minutes} seconds={seconds} />;
};

export default Contador;
