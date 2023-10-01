import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counterY",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
        const {itemId, amount } = action.payload;
        return state   + amount;
      },
      decrement: (state, action) => {
        const {itemId, amount } = action.payload;
        return Math.max(state  - amount,0);
      },
      reset: ( ) => {
        
      },
    
    
  }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;