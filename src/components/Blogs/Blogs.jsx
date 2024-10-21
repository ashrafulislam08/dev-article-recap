import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

export const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-2/3">
      <h4 className="text-4xl">Blogs: {blogs.length}</h4>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};
