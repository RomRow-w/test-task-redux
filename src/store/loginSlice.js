import { createSlice } from "@reduxjs/toolkit";

export const loginState = createSlice({
  name:'loginState',
  initialState: {
    userInput: {login:'',password:''},
    isLoggedIn: false,
  },
  reducers: {
    inpChange: (state,action) => {
      state.userInput = {...state.userInput, ...action.payload}
    },
    isLoggedIn: (state) => {
      if(
        state.userInput.login.toString() === 'developer21' &&
        state.userInput.password.toString() === '123456'
        ) {
          state.isLoggedIn = true;
          return;
      }
      state.isLoggedIn = false;
    },
  }
})

export const {inpChange,isLoggedIn} = loginState.actions;

export default loginState.reducer;