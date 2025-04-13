// LocalStorage token helpers
export const setToken = (token) => {
  localStorage.setItem('authToken', token);
};

export const getToken = () => {
  return localStorage.getItem('authToken');
};

export const removeToken = () => {
  localStorage.removeItem('authToken');
};

export const getUserRole = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user?.role || null;
};

export const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const removeUser = () => {
  localStorage.removeItem('user');
};

export function redirectToDashboard(user) {
  if (user.role === "admin") {
    window.location.href = "http://localhost:3001"; // admin_portal
  } else if (user.role === "teacher") {
    window.location.href = "http://localhost:3002"; // teacher_portal
  }else {
    // Redirect to unauthorized access page
    window.location.href = "http://localhost:3000/unauthorized"; // unauthorized access page
  }
}