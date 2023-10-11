import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import trlSlice from "./trlSlice";

const store = configureStore({
    reducer: {
        product: productSlice,
        trl: trlSlice,
    },
});

export default store;