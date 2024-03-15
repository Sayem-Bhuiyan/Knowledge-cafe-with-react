import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog.jsx/Blog";

const Blogs = ({handleAddToBookmarks}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">

      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} handleAddToBookmarks={handleAddToBookmarks} />
      ))}
    </div>
  );
};
Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func,
}

export default Blogs;
