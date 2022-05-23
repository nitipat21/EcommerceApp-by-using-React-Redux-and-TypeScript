import { createSlice } from "@reduxjs/toolkit";

export interface iAuth {
    isActionSuccess:boolean;
    isActionFailure:boolean;
    isLogin:boolean;
    isAccountHasAddress:boolean;
    isAccountHasOrderHistory:boolean;
    isDisplayAddressForm:boolean;
    accountData:any[];
}

const initialState:iAuth = {
    isActionSuccess:false,
    isActionFailure:false,
    isLogin:false,
    isAccountHasAddress:false,
    isAccountHasOrderHistory:false,
    isDisplayAddressForm:false,
    accountData:[]
}

const authSlice =createSlice({
    name:'auth',
    initialState,
    reducers:{
        setAccountData(state,actions){
            state.accountData = actions.payload;
        },
        toggleActionSuccess(state) {
            state.isActionSuccess = !state.isActionSuccess;
        },
        toggleActionFailure(state) {
            state.isActionFailure = !state.isActionFailure;
        },
        toggleAddressForm(state) {
            state.isDisplayAddressForm = !state.isDisplayAddressForm;
        }
    }
});

export const authSliceActions =  authSlice.actions;

export default authSlice;