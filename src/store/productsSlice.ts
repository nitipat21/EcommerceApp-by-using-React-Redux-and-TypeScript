import { createSlice } from "@reduxjs/toolkit";

export interface iProductCard {
    name:string
    image:string
    price:number
    rating:number
    id:number
}

export interface iItemCartCard {
    name:string
    image:string
    price:number
    id:number
    amount:number
}

interface productsState {
    productsArray:any[];
}

const initialState:productsState = {
    productsArray:[]
}

const shopSlice = createSlice({
    name: 'shopSlice',
    initialState,
    reducers:{
        setProducts(state,action) {
            state.productsArray = action.payload;
        },       
    }
});

export const shopSliceActions = shopSlice.actions;

export default shopSlice;