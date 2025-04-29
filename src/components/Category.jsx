import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch, addBlog, deleteBlog } from "./services/api";
import BlogCard from "./BlogCard.jsx";
import BlogForm from "./BlogForm.jsx";

const Category = ({ category }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:3000/blogs?category=${category}`
  );
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (data && !loading && !error) {
      setBlogs(data);
    }
  }, [data, loading, error]);

  const addNewBlog = async (newBlog) => {
    const res = await addBlog(newBlog);
    setBlogs([...blogs, res]);
    navigate(-1);
  };

  const removeBlog = async (id) => {
    await deleteBlog(id);
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div>
      <h2>{category}</h2>
      <BlogForm addBlog={addNewBlog} category={category} />
      {loading ? (
        <p>Loading blogs...</p>
      ) : error ? (
        <p>Error loading blogs: {error.message}</p>
      ) : (
        <div className="blog-grid">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} onDelete={removeBlog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
