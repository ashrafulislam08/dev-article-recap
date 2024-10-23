import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    reading_time,
    author_img,
    author,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 space-y-6">
      <img className="w-full rounded-lg mb-8" src={cover} alt="" />
      <div className="flex justify-between mb-4">
        <div className="flex ">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-5">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-2xl text-red-600"
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx} className="m-2">
            #{hash}
          </span>
        ))}
      </p>

      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="text-purple-500 underline ml-2 font-bold"
      >
        Mark ad Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blog;
