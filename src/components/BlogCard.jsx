import React from "react";

const BlogCard = ({ blog, onDelete }) => {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.content} />
      <div className="blog-content">
        <h3>{blog.category}</h3>
        <p>{blog.content}</p>
        <button onClick={() => onDelete(blog.id)}>Delete</button>
      </div>
    </div>
  );
};

export default BlogCard;
