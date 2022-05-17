import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Product Details - {id}</h2>
    </div>
  );
};

export default Detail;
