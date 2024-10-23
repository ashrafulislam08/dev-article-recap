import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

function Bookmarks({ bookmarks }) {
  return (
    <div className="w-1/3 bg-gray-300 mt-12 p-2 rounded-lg">
      <h2 className="text-3xl mb-2">Bookmarked Blogs: {bookmarks.length}</h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark} />
      ))}
    </div>
  );
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
};

export default Bookmarks;
