// /src/App.js
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import BlogPage from './pages/BlogPage';
import BlogDetail from './pages/BlogDetail'; // Import BlogDetail
import Navbar from './components/Navbar';

function App() {
  const [auth, setAuth] = useState(!!localStorage.getItem('token'));

  const PrivateRoute = ({ children }) => {
    return auth ? children : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <Navbar auth={auth} setAuth={setAuth} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage setAuth={setAuth} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/blogs" element={
          <PrivateRoute>
            <BlogPage />
          </PrivateRoute>
        } />
        <Route path="/blogs/:id" element={
          <PrivateRoute>
            <BlogDetail />
          </PrivateRoute>
        } /> {/* Route for BlogDetail */}
      </Routes>
    </div>
  );
}

export default App;
