// nanodi genrate uniq id'
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: [
    {
      id: nanoid(),
      title: "My Bookmarks",
      url: "https://www.google.com/",
    },
  ],
};

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState, // we also initailize the state here also

  //* what is reducers : it is a function that takes state and action  as parameters and returns new state based on the action that is passed to it
  reducers: {
    // action is like parameter
    addBookmark: (state, action) => {
      const bookmarks = {
        id: nanoid(),
        title: action.payload.title,
        url: action.payload.url,
      };

      state.bookmarks.push(bookmarks);
    },
    removeBookmark: (state, action) => {
      state.bookmarks = state.bookmarks.filter(
        (bookmark) => bookmark.id !== action.payload
      );
    },
  },
});
