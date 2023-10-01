import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
        const { itemId, amount } = action.payload;
        return {
          ...state,
          [itemId]:(state[itemId] || 0) + amount,
        };
      },
    decrement: 
     (state, action) => {
        const { itemId, amount } = action.payload;
        return {
          ...state,
          [itemId]:  Math.max((state[itemId] || 0) - amount,0)
        };
      },
      reset: (state, action) => {
        const { itemId  } = action.payload;
        delete state[itemId];
      },
    
  }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;