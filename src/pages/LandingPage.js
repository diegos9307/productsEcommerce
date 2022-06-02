import { Link } from 'react-router-dom';
import inicioImg from '../assets/img/subasta.jpg';

const LandingPage = () => {
  return (
    <section className="landing">
      <div className="landing__container">
        <h1 className="landing__title">Products Ecommerce</h1>
        <img src={inicioImg} alt="Subasta" />
        <p>
          Bienvenid@s a <i>Products Ecommerce.</i> Este es un sitio donde encontrarás todo tipo de
          productos especiales disponibles a la compra en modo subasta.
        </p>
        <div className="btn__container btn__container-landing">
          <Link to="/register" className="btn btn-landing">
            Register
          </Link>
          <Link to="/login" className="btn btn-landing">
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
