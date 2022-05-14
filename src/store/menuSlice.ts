import { createSlice } from "@reduxjs/toolkit";


const initialState:menuState = {
    isDisplayMenu:false,
    isDisplayProducts:false,
    isDisplayOurStory:false,
    isDisplaySearchBar:false,
    isDisplayCart:false,
    isDisplayIngredientInfo:false
}

export interface menuState {
    isDisplayMenu:boolean;
    isDisplayProducts:boolean;
    isDisplayOurStory:boolean;
    isDisplaySearchBar:boolean;
    isDisplayCart:boolean;
    isDisplayIngredientInfo:boolean;
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers:{
        displayMenu(state) {
            state.isDisplayMenu = !state.isDisplayMenu;
        },
        displayProducts(state) {
            state.isDisplayProducts = !state.isDisplayProducts;
        },
        displayOurStory(state) {
            state.isDisplayOurStory = !state.isDisplayOurStory;
        },
        displaySearchBar(state) {
            state.isDisplaySearchBar = !state.isDisplaySearchBar;
        },
        displayCart(state) {
            state.isDisplayCart = !state.isDisplayCart;
        },
        displayIngredientInfo(state) {
            state.isDisplayIngredientInfo = !state.isDisplayIngredientInfo;
        }
    }
});

export const menuSliceActions = menuSlice.actions;

export default menuSlice;