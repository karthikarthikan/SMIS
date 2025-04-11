import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from '../utils/auth';

const ProtectedRoute = () => {
  const token = getToken();
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
