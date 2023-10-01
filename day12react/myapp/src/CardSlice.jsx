import { createSlice } from "@reduxjs/toolkit";

export const CardSlice = createSlice({
  name: "cardcount",
  initialState: 0,
  reducers: {
    increment:(state, action) => {
        const { itemId  } = action.payload;
        return {
            ...state,
            [itemId]:   (state[itemId] || 0) + 1, 
          };
      },
    
    decrement: (state, action) => {
        const { itemId  } = action.payload;
        return {
            ...state,
            [itemId]: Math.max( (state[itemId] || 0) - 1,0)
          };
      },
      reset: (state, action) => {
        const { itemId  } = action.payload;
        delete state[itemId];
      },
    
  }
});

export const { increment, decrement, reset } = CardSlice.actions;
export default CardSlice.reducer;