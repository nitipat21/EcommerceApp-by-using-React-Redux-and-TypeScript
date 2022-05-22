import { createSlice } from "@reduxjs/toolkit";

export interface iAuth {
    isActionSuccess:boolean;
    isActionFailure:boolean;
    userData:any[];
}

const initialState:iAuth = {
    isActionSuccess:false,
    isActionFailure:false,
    userData:[]
}

const authSlice =createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUserData(state,actions){
            state.userData = actions.payload;
        },
        toggleActionSuccess(state) {
            state.isActionSuccess = !state.isActionSuccess;
        },
        toggleActionFailure(state) {
            state.isActionFailure = !state.isActionFailure;
        },
    }
});

export const authSliceActions =  authSlice.actions;

export default authSlice;