import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export default function UnauthorizedAccess() {
  const navigate = useNavigate();

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
      <div className="card p-5 shadow" style={{ maxWidth: '600px', width: '100%' }}>
        <h1 className="text-danger mb-3">Unauthorized Access</h1>
        <p className="mb-4">
          You do not have permission to view this page. If you believe this is a mistake,
          please contact your administrator.
        </p>
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          Return to Login
        </button>
      </div>
    </div>
  );
}
