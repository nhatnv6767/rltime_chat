import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom"
import LoginPage from "./authPages/LoginPage/LoginPage";
import RegisterPage from "./authPages/RegisterPage/RegisterPage";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage/>} exact/>
                <Route path="/register" element={<RegisterPage/>} exact/>
                <Route path="/dashboard" element={<Dashboard/>} exact/>
                <Route path="/" element={<Navigate to="/dashboard"/>}/>
            </Routes>
        </Router>
    </>
  );
}

export default App;
