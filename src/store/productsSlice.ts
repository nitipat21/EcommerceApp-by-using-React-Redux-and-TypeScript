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
    cartArray:any[];
}

const initialState:productsState = {
    productsArray:[],
    cartArray:[]
}

const shopSlice = createSlice({
    name: 'shopSlice',
    initialState,
    reducers:{
        setProducts(state,action) {
            state.productsArray = action.payload;
        },
        addItemtoCart(state,action) {
            if (state.cartArray.some(product => product.id === action.payload.id)) {
                state.cartArray.map(product => product.id === action.payload.id ? {...product, amount:product.amount++} : product)
            } else {
                state.cartArray.push({...action.payload, amount:1})
            }
        },
        deleteItemFromCart(state,action) {
            state.cartArray.map(product => {
                if (product.id === action.payload.id) {
                    if (product.amount === 1) {
                        state.cartArray = state.cartArray.filter(product => product.id !== action.payload.id);
                    } else {
                        return {...product, amount:product.amount--}
                    }
                }
            });
        },
        clearItemFromCart(state,action) {
            state.cartArray = state.cartArray.filter(product => product.id !== action.payload.id);
        }
    }
});

export const shopSliceActions = shopSlice.actions;

export default shopSlice;