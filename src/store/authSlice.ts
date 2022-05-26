import { createSlice } from "@reduxjs/toolkit";
import { iItemCartCard } from "./productsSlice";

interface iAccountData {
    address:any[]
    authProvider:string
    cart:iItemCartCard[]
    email:string
    firstName:string
    lastName:string
    orderHistory:string[]
    uid:string
    docId:string
}

export interface iAuth {
    isActionSuccess:boolean;
    isActionFailure:boolean;
    isAccountHasAddress:boolean;
    isAccountHasOrderHistory:boolean;
    isDisplayAddressForm:boolean;
    accountData:iAccountData|null;
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
        addItemtoCart(state,action) {
            if (state.accountData?.cart.some(product => product.id === action.payload.id)) {
                state.accountData?.cart.forEach(product => product.id === action.payload.id ? {...product, amount:product.amount++} : product);
            } else {
                state.accountData?.cart.push({...action.payload, amount:1});
            };

            localStorage.setItem('authUser',JSON.stringify(state.accountData));
        },
        deleteItemFromCart(state,action) {
            state.accountData?.cart.forEach((product,index) => {
                if (product.id === action.payload.id) {
                    if (product.amount === 1) {
                        state.accountData?.cart.splice(index,1)
                    } else {
                        return {...product, amount:product.amount--}
                    }
                }
            });

            localStorage.setItem('authUser',JSON.stringify(state.accountData));
        },
        clearItemFromCart(state,action) {
            state.accountData?.cart.forEach((product,index) => {
                if (product.id === action.payload.id) {
                    state.accountData?.cart.splice(index,1)
                }
            })

            localStorage.setItem('authUser',JSON.stringify(state.accountData));
        },
        addAccountAddress(state,action) {

            if (action.payload.isDefault) {
                state.accountData?.address.unshift(action.payload);
            } else {
                state.accountData?.address.push(action.payload);
            }

            localStorage.setItem('authUser',JSON.stringify(state.accountData));
        },
        deleteAccountAddress(state,action) {
            state.accountData?.address.splice(action.payload,1);

            localStorage.setItem('authUser',JSON.stringify(state.accountData));
        },
        editAccountAddress(state,action) {
            if (action.payload.editAccountAddress.isDefault) {
                state.accountData?.address.splice(action.payload.accountIndex,1);
                state.accountData?.address.unshift(action.payload.editAccountAddress);
            } else {
                state.accountData?.address.splice(action.payload.accountIndex, 1, action.payload.editAccountAddress);
            }

            localStorage.setItem('authUser',JSON.stringify(state.accountData));
        }

    }
});

export const authSliceActions =  authSlice.actions;

export default authSlice;