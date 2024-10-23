import { useState } from "react";
import { Blogs } from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { Header } from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (book) => {
    const isExist = bookmarks.find((bookmark) => bookmark.id === book.id);
    if (!isExist) {
      setBookmarks([...bookmarks, book]);
    } else {
      return alert("Already bookmarked");
    }
  };

  const handleMarkAsRead = (time) => {
    console.log("marking as read", time);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <div className="md:flex p-3 gap-2">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        />
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </div>
  );
}

export default App;
