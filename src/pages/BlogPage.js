// /src/pages/BlogPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogList from '../components/BlogList';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('https://blog-backend-2u37.onrender.com/api/blogs', {
          headers: { Authorization: token }, // Pass the token in the request header
        });
        setBlogs(res.data);
      } catch (err) {
        setError('Unable to fetch blogs. Please try again.');
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">Blog Posts</h1>
        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <BlogList blogs={blogs} />
        )}
      </div>
    </div>
  );
};

export default BlogPage;
