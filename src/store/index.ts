import { combineReducers, configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import productsSlice from "./productsSlice";
import productsSliceActions from "./productsSlice";



const rootReducer = combineReducers({
    menu:menuSlice.reducer,
    products:productsSlice.reducer
});

const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;