import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navBar">
      <span className="navBar__logo">Products Ecommerce</span>
      <div className={`navBar__items ${isOpen && 'open'}`}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/">Cerrar Sesión</Link>
      </div>
      <div className={`navBar__toggle ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)}>
        <span className="navBar__bar"></span>
      </div>
    </div>
  );
};

export default NavigationBar;
