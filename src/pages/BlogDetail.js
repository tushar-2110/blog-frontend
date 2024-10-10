// /src/pages/BlogDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`http://localhost:5000/api/blogs/${id}`, {
          headers: { Authorization: token }, // Pass the token in the request header
        });
        setBlog(res.data);
      } catch (err) {
        setError('Unable to fetch blog. Please try again.');
      }
    };

    fetchBlog();
  }, [id]);

  if (error) return <p className="text-red-500">{error}</p>;

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-4">{new Date(blog.date).toLocaleDateString()}</p>
      <p className="text-gray-800">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
