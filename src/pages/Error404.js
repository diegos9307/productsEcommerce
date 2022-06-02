import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="error404">
      <h2>Oops! Página no encontrada</h2>
      <h3 className="error404__number">404</h3>
      <p className="error404__content">No podemos encontrar la página que estas buscando</p>
      <Link to="/" className="btn">
        Regresar
      </Link>
    </div>
  );
};

export default Error404;
