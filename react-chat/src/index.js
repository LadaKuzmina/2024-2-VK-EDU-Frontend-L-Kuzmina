import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthManager from './managers/auth/AuthManager.jsx'
import AuthProvider from './context/AuthContext.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <AuthProvider>
      <AuthManager />
    </AuthProvider>
  </StrictMode>
)
