import { useState } from 'react';
import api from '../services/api';
import { setToken, setUser } from '../utils/auth';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import { redirectToDashboard } from '../utils/auth'; 
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState({ field: '', message: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      const res = await api.post('/auth/login', credentials);
      const { token, user } = res.data;
  
      // Save token and user
      setToken(token);
      setUser(user);

      if (user) {
        redirectToDashboard(user);
      } else {
        const hasPermission = user.role === 'admin'; // Example check
        if (!hasPermission) {
          navigate('/unauthorized');
        } else {
          navigate('/dashboard');
        }
      }
    } catch (err) {
      if (err.response?.status === 401) {
        // Incorrect password error message
        setErrorMessage({ field: 'password', message: 'Incorrect password. Please try again.' });
      }  else if (err.response?.status === 404) {
        setErrorMessage({ field: 'username', message:'User not found. Please enter a valid username.'});
      }else if (err.response?.status === 403) {
        // Unauthorized or forbidden error
        setErrorMessage('You do not have permission to access this account.');
      } else {
        setErrorMessage('Login failed. Please check your username and password.');
      }
    }
  };
  

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className={`form-control ${errorMessage.field === 'username' ? 'is-invalid' : ''}`}
              id="username"
              name="username"
              placeholder="Enter username"
              value={credentials.username}
              onChange={handleChange}
              required
            />
            {errorMessage.field === 'username' && (<div className="invalid-feedback">{errorMessage.message}</div>)}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errorMessage.field === 'password' ? 'is-invalid' : ''}`}
              id="password"
              name="password"
              placeholder="Enter password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
             {errorMessage.field === 'password' && <div className="invalid-feedback">{errorMessage.message}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-2">
            Login
          </button>
        </form>

        <div className="text-center mt-2">
          <span>Don't have an account? </span>
          <Link to="/register">Register here</Link>
        </div>
      </div>
    </div>
  );
}
