import { useState, useEffect } from "react";

const Contador = ({ generateTime }) => {
  const defaultTime = {
    seconds: "00",
    minutes: "00",
  };

  const [timer, setTimer] = useState(defaultTime);

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
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
