import React, {useState, useContext } from 'react';
import { loginUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from '../context/AuthContext.jsx';
import {getCurrentUser} from '../api/users';


const AuthPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { setAuthData } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Логин пользователя
      const { access, refresh } = await loginUser(credentials);

      // Получение информации о текущем пользователе
      const user = await getCurrentUser(access);

      // Сохранение данных в контекст
      setAuthData({ accessToken: access, refreshToken: refresh, user });

      // Перенаправление на главную страницу
      navigate('/');
    } catch (error) {
      // Обработка ошибок
      setErrorMessage(error.response?.data?.detail || 'Login failed');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h1>Login</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AuthPage;
