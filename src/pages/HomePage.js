// /src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to the MERN Blog!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Explore the world of blogging! Sign up to create your own blogs or log in to view your favorite blogs. This is your space to share and discover great ideas.
        </p>
        <div className="space-x-4">
          <Link to="/login">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition duration-300">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
