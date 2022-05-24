import { createSlice } from "@reduxjs/toolkit";

export interface iAuth {
    isActionSuccess:boolean;
    isActionFailure:boolean;
    isAccountHasAddress:boolean;
    isAccountHasOrderHistory:boolean;
    isDisplayAddressForm:boolean;
    accountData:null|any[];
}

const initialState:iAuth = {
    isActionSuccess:false,
    isActionFailure:false,
    isAccountHasAddress:false,
    isAccountHasOrderHistory:false,
    isDisplayAddressForm:false,
    accountData:null
}

const authSlice =createSlice({
    name:'auth',
    initialState,
    reducers:{
        setAccountData(state){
            state.accountData = JSON.parse(`${localStorage.getItem('authUser')}`);
        },
        toggleActionSuccess(state) {
            state.isActionSuccess = !state.isActionSuccess;
        },
        toggleActionFailure(state) {
            state.isActionFailure = !state.isActionFailure;
        },
        toggleAddressForm(state) {
            state.isDisplayAddressForm = !state.isDisplayAddressForm;
        },
    }
});

export const authSliceActions =  authSlice.actions;

export default authSlice;