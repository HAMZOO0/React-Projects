import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBookmark } from "../features/bookMarkSlice";
function Addbookmark() {
  const [Title, setTitle] = useState("");
  const [Url, setUrl] = useState("");
  const dispatch = useDispatch();

  const add = (e) => {
    e.preventDefault();

    // here we access reducer
    dispatch(addBookmark({ title: Title, url: Url }));
    // reset form
    setTitle("");
    setUrl("");
  };

  return (
    <form
      className="flex"
      onSubmit={add}
      //   value={todoContent}
      // onChange={(e) => setBookmarkContent(e.target.value)}
    >
      <input
        value={Title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Write Book Mark Title..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <input
        value={Url}
        onChange={(e) => setUrl(e.target.value)}
        type="text"
        placeholder="Add Url..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default Addbookmark;
