import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './PrivateRoute';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigation('/login');
  };

  const user = useAuth();

  return (
    <div className="navBar">
      <span className="navBar__logo">Products Ecommerce</span>
      <div className={`navBar__items ${isOpen && 'open'}`}>
        {user ? (
          <>
            {' '}
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            {location.pathname !== '/login' && (
              <Link to="/" onClick={logout}>
                Cerrar Sesión
              </Link>
            )}
          </>
        ) : (
          <>
            {' '}
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
      <div className={`navBar__toggle ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)}>
        <span className="navBar__bar"></span>
      </div>
    </div>
  );
};

export default NavigationBar;
