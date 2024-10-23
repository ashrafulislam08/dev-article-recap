import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

export const Blogs = ({ handleAddToBookmark }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-2/3 py-2">
      <h4 className="text-4xl mb-2">Blogs: {blogs.length}</h4>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookmark={handleAddToBookmark}
        />
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func,
};
