// /src/components/BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </h2>
          <p className="text-gray-600 mb-4">{blog.content.substring(0, 150)}...</p>
          <Link to={`/blogs/${blog.id}`} className="text-blue-500 hover:text-blue-700 font-semibold">
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
