import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthManager from "./managers/auth/AuthManager"
import AuthProvider from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <AuthProvider>
            <AuthManager />
        </AuthProvider>
    </StrictMode>
);
