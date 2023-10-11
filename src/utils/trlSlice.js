import { createSlice } from "@reduxjs/toolkit";

const trlSlice = createSlice({
    name: "trlList",
    initialState: {
        trlList: null,
    },
    reducers: {
      addTrl: (state, action) => {
        state.trlList = action.payload;
      },  
    },
});

export const {addTrl} = trlSlice.actions;
export default trlSlice.reducer;