import { getUserRole, removeToken, removeUser } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const role = getUserRole();
  const navigate = useNavigate();

  const logout = () => {
    removeToken();
    removeUser();
    navigate('/login');
  };

  return (
    <div>
      <h2>Welcome to Dashboard</h2>
      <p>Your Role: {role}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
