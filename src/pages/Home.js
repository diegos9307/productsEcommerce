import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div>
      <header className="home__subtitle">
        <h2>Productos</h2>
      </header>
      <div className="container__card">
        <ProductCard />
      </div>
    </div>
  );
};

export default Home;
