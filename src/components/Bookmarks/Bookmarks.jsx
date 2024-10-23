import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

function Bookmarks({ bookmarks, readingTime }) {
  return (
    <div className="w-1/3 bg-gray-300 mt-12 p-2 rounded-lg">
      <div className="border-2 border-purple-700 rounded-lg p-4 mb-2 bg-purple-400">
        <h2 className=" text-xl">Spent on read: {readingTime} min</h2>
      </div>
      <h2 className="text-3xl bg-gray-500 text-center text-white p-3 rounded-md mb-2">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark} />
      ))}
    </div>
  );
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
