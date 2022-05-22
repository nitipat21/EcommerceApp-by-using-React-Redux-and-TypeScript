import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import menuSlice from "./menuSlice";
import shopSlice from "./productsSlice";



const rootReducer = combineReducers({
    menu:menuSlice.reducer,
    shop:shopSlice.reducer,
    auth:authSlice.reducer
});

const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;