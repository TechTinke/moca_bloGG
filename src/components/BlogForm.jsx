import React, { useState } from "react";

const BlogForm = ({ addBlog, category }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog({ title, content, image, category });
    setTitle("");
    setContent("");
    setImage("");
  };

  return (
    <div className="blog-form">
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Blog Content"
          required
        />
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
          required
        />
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default BlogForm;
