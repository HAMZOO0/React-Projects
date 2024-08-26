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
    updateBookmark: (state, action) => {
      state.map((bookmark) => {
        if (bookmark.id === action.payload.id) {
          bookmark.title = action.payload.title;
          bookmark.url = action.payload.url;
        }
      });
    },
  },
});

export const { addBookmark, removeBookmark, updateBookmark } =
  bookmarkSlice.actions;

export default bookmarkSlice.reducer;

// createSlice: This is a function from @reduxjs/toolkit that helps you create a slice of the Redux store. A "slice" is just a part of the store that handles related data and actions (e.g., managing bookmarks).
