import { createSlice } from "@reduxjs/toolkit";

export interface iProductCard {
    name:string
    image:string
    price:number
    rating:number
    id:number
    isBestSeller:boolean
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
    filteredProductArray:any[];
    isDisplayFilter:boolean;
}

const initialState:productsState = {
    productsArray:[],
    filteredProductArray:[],
    isDisplayFilter:false
}

const shopSlice = createSlice({
    name: 'shopSlice',
    initialState,
    reducers:{
        setProducts(state,action) {
            state.productsArray = action.payload;
        },
        setfilteredProducts(state,action) {
            state.productsArray = action.payload;
        },
        toggleFilter(state) {
            state.isDisplayFilter = !state.isDisplayFilter;
        }
    }
});

export const shopSliceActions = shopSlice.actions;

export default shopSlice;