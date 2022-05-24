import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <section className="landing">
      <div className="landing__container">
        <h1 className="">Products Ecommerce</h1>
        <p>
          Bienvenid@s a <i>Products Ecommerce.</i> Este es un sitio donde encontrarás todo tipo de
          productos especiales disponibles a la compra en modo subasta.
        </p>
        <Link to="/register" className="landing__links">
          Register
        </Link>
        <Link to="/login" className="landing__links">
          Login
        </Link>
      </div>
    </section>
  );
};

export default LandingPage;
