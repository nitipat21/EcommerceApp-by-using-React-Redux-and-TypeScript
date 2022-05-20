import { createSlice } from "@reduxjs/toolkit";

interface productsState {
    productsArray:any[]
}

const initialState:productsState = {
    productsArray:[]
}

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers:{
        setProducts(state,action) {
            state.productsArray = action.payload
        }
    }
});

export const productsSliceActions = productsSlice.actions;

export default productsSlice;