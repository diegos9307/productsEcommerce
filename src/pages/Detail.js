import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../components/DataContext';
import CardDetail from '../components/CardDetail';
import NavigationBar from '../components/NavigationBar';

const Detail = () => {
  const { cardId } = useParams();
  const { card } = useContext(DataContext);
  let detailCard = card.filter((el) => el.id === Math.floor(cardId));
  return (
    <div>
      <NavigationBar />
      <h2 className="subtitle_centered">Detalle del Producto</h2>
      <div className="container__card">
        <CardDetail detailCard={detailCard[0]} />
      </div>
    </div>
  );
};

export default Detail;
