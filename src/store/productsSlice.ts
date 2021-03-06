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
    searchedProductArray:any[];
    reviewsArray:any[];
    isDisplayFilter:boolean;
    filterType:string;
    activeReviewPage:number;
}

const initialState:productsState = {
    productsArray:[],
    filteredProductArray:[],
    searchedProductArray:[],
    reviewsArray:[],
    isDisplayFilter:false,
    filterType:'All',
    activeReviewPage:0
}

const shopSlice = createSlice({
    name: 'shopSlice',
    initialState,
    reducers:{
        setProducts(state,action) {
            state.productsArray = action.payload;
        },
        setFilteredProducts(state,action) {
            state.filteredProductArray = action.payload;
        },
        setSearchedProducts(state,action) {
            state.searchedProductArray = action.payload;
        },
        setFilterType(state,action) {
            state.filterType = action.payload;
        },
        toggleFilter(state) {
            state.isDisplayFilter = !state.isDisplayFilter;
        },
        setActiveReviewPage(state,action) {
            state.activeReviewPage = action.payload;
        },
        setReviewsArray(state,action) {
            state.reviewsArray = action.payload;
        }
    }
});

export const shopSliceActions = shopSlice.actions;

export default shopSlice;