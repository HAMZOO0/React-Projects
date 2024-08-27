import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBookmark, removeBookmark } from "../features/bookMarkSlice";

function BookmarkList() {
  const bookmarks = useSelector((state) => state.bookmark);
  const dispatch = useDispatch();

  console.log("bookmarks", bookmarks);

  return (
    <div className="flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black  bg-[#1f3f54]">
      <h1 className="text-3xl">Bookmark</h1>
      <ul>
        {bookmarks && bookmarks.length > 0 ? (
          bookmarks.map((bookmark) => (
            <li key={bookmark.id}>
              <div>{bookmark.title}</div>
              <div>{bookmark.url}</div>
              <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => dispatch(removeBookmark(bookmark.id))}
              >
                ❌
              </button>
            </li>
          ))
        ) : (
          <p>No bookmarks available</p>
        )}
      </ul>
    </div>
  );
}

export default BookmarkList;
