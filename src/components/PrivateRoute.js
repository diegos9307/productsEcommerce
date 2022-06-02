import { Navigate, Outlet } from 'react-router-dom';

export const useAuth = () => {
  const user = localStorage.getItem('user');
  const token = localStorage.getItem('token');
  if (user && token) {
    return true;
  } else {
    return false;
  }
};

const PrivateRoute = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
