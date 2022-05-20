import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div>
      <header className="subtitle_centered">
        <h2>Productos</h2>
      </header>
      <div className="container__card">
        <ProductCard />
      </div>
    </div>
  );
};

export default Home;
