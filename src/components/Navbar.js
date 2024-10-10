// /src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ auth, setAuth }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuth(false);
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <div>
          <Link to="/" className="mr-4 font-bold">Home</Link>
          {auth && <Link to="/blogs" className="mr-4">Blogs</Link>}
        </div>
        <div>
          {!auth ? (
            <>
              <Link to="/login" className="mr-4 font-bold">Login</Link>
              <Link to="/signup" className="font-bold">Signup</Link> {/* Add Signup */}
            </>
          ) : (
            <button onClick={handleLogout} className="font-bold">Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
