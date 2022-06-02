import NavigationBar from '../components/NavigationBar';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <header>
        <h2 className="subtitle_centered">Productos</h2>
      </header>
      <div className="container__card">
        <ProductCard />
      </div>
    </div>
  );
};

export default Home;
