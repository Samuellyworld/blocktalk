// importing relevant module
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USER_ACTION_TYPES } from "./user.action";

// initial state
const initialState: {
  currentUser: { wallet: string; username?: string } | null;
} = {
  currentUser: null,
};

// setting user actions;
export const userSlice = createSlice({
  name: USER_ACTION_TYPES.SET_CURRENT_USER,
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<{
      wallet : string
      username?: string;
    } | null>) => {
      state.currentUser = action.payload;
      console.log(state)
    },
    // setUserToken: (state, action: PayloadAction<string>) => {
    //   if (state.currentUser) {
    //     state.currentUser. = action.payload;
    //   }
    // },
    // logUserOut: (state) => {
    //   if (state.currentUser) {
    //     state.currentUser = null;
    //     localStorage.clear();
    //   }
    // },
  },
});

// dispatch
export const { setCurrentUser } =
  userSlice.actions;

//reducer
export default userSlice.reducer;
