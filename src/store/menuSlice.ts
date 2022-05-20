import { createSlice } from "@reduxjs/toolkit";

export interface menuState {
    isDisplayMenu:boolean;
    isDisplayProducts:boolean;
    isDisplayOurStory:boolean;
    isDisplaySearchBar:boolean;
    isDisplayCart:boolean;
    isDisplayIngredientInfo:boolean;
    isHideSideMenu:boolean;
    isMouseOverProducts:boolean;
    isMouseOverOurStory:boolean;
    windowWidth:number;
}

const initialState:menuState = {
    isDisplayMenu:false,
    isDisplayProducts:false,
    isDisplayOurStory:false,
    isDisplaySearchBar:false,
    isDisplayCart:false,
    isDisplayIngredientInfo:false,
    isHideSideMenu:false,
    isMouseOverProducts:false,
    isMouseOverOurStory:false,
    windowWidth:window.innerWidth
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
        },
        hideSideMenu(state,action) {
            state.isHideSideMenu = action.payload;
        },
        displayNavProducts(state,action) {
            state.isMouseOverProducts = action.payload;
        },
        displayNavOurStory(state,action) {
            state.isMouseOverOurStory = action.payload;
        },
        setWindowWidth(state,action) {
            state.windowWidth = action.payload;
        }
        
    }
});

export const menuSliceActions = menuSlice.actions;

export default menuSlice;