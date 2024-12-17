import React, { useContext } from 'react';
import {HashRouter, Route, Routes, Navigate} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext.jsx';
import App from '../../App';
import RegisterPage from '../../pages/RegisterPage';
import AuthPage from '../../pages/AuthPage';


const AuthManager = () => {
  const { authData } = useContext(AuthContext);

  return authData.accessToken
    ? <App/>
    : (
      <HashRouter>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
      </HashRouter>
    )
};

export default AuthManager;
