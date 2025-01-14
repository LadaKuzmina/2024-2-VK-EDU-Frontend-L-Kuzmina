import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HistoryPage from "./pages/HistoryPage";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<HistoryPage />} />
            </Routes>
        </Router>
    );
};

export default App;
