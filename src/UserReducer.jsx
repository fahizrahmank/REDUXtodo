import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addtodo: (state, action) => {
      return [...state, action.payload];
    },
    removetodo: (state, action) => {
      const { id } = action.payload;
      return state.filter((e) => e.id !== id);
    },
    updatetodo: (state, action) => {
      const { id, added } = action.payload;
      const found = state.find((e) => e.id == id);
      if (found) {
        found.id = parseInt(id);
        found.added = added;
      }
    }
  }
});
export const { addtodo, removetodo, updatetodo } = todoSlice.actions;
export default todoSlice.reducer;
