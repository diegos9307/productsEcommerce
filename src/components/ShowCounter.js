const ShowCounter = ({ minutes, seconds }) => {
  return (
    <div className="card__contador">
      <span>{minutes > 9 ? minutes : '0' + minutes}:</span>
      <span>{seconds > 9 ? seconds : '0' + seconds}</span>
    </div>
  );
};

export default ShowCounter;
