import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null, // Initial state for the user
  reducers: {
    // Reducer to add a user
    addUser: (state, action) => {
      return action.payload; // Assign the payload to state (user data)
    },
    // Reducer to remove the user
    removeUser: () => {
      return null; // Reset state to null
    },
  },
});

// Exporting actions for use in components
export const { addUser, removeUser } = userSlice.actions;

// Exporting the reducer to be used in the store
export default userSlice.reducer;
