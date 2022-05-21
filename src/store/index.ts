import { combineReducers, configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import shopSlice from "./productsSlice";



const rootReducer = combineReducers({
    menu:menuSlice.reducer,
    shop:shopSlice.reducer
});

const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;