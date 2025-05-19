import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = useSelector((state) => state.user.token) || localStorage.getItem('token');
  const location = useLocation();

  if (!token) {
    return <Navigate to="/signup" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
