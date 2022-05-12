import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

const Contador = ({ generateTime }) => {
  const defaultTime = {
    seconds: "00",
    minutes: "00",
  };

  Contador.propTypes = {
    generateTime: PropTypes.number,
  };

  const [timer] = useState(defaultTime);

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime(generateTime);
    }, 1000);
    return () => clearTimeout(interval);
  }, []);

  const updateTime = () => {};

  return (
    <div className="card__contador">
      <span>{timer.minutes}:</span>
      <span>{timer.seconds}</span>
    </div>
  );
};

export default Contador;
