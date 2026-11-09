import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { cartItemsArray, dataArray } from "../types/apiResponseType";

const addToCart = createSlice({
    name: "addToCart",
    initialState: {
        items: []
    } as cartItemsArray,
    reducers: {
        addProduct: (state, action: PayloadAction<dataArray>) => {
            if(!action.payload)
                return;
            state.items.push(action.payload);
        },
        removeProduct: (state, action: PayloadAction<dataArray>) => {
            if(!action.payload)
                return;
            state.items = state.items.filter((item: dataArray) => item.id !== action.payload.id)
        }
    }
});

export const { addProduct, removeProduct } = addToCart.actions;
export default addToCart.reducer;
