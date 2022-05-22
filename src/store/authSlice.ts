import { createSlice } from "@reduxjs/toolkit";

export interface iAuth {
    createAccount:boolean
}

const initialState:iAuth = {
    createAccount:false
}

const authSlice =createSlice({
    name:'auth',
    initialState,
    reducers:{
        directToCreateAccount(state) {
            state.createAccount = true
        },
    }
});

export const authSliceActions =  authSlice.actions;

export default authSlice;