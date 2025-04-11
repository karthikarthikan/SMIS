import { getUserRole, removeToken, removeUser } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard() {
  const role = getUserRole();
  const navigate = useNavigate();

  const logout = () => {
    removeToken();
    removeUser();
    navigate('/');
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card p-4 shadow-sm text-center" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="mb-3">Welcome to Dashboard</h2>
        <p className="mb-4">Your Role: <strong>{role}</strong></p>
        <button onClick={logout} className="btn btn-danger w-100">
          Logout
        </button>
      </div>
    </div>
  );
}

