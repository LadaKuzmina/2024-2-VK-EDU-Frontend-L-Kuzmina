import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './src/index.css';
import App from "./App";
import AuthProvider from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </StrictMode>
);
