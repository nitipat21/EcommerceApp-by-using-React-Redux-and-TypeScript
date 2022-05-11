import { combineReducers, configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";



const rootReducer = combineReducers({
    shop:menuSlice.reducer
});

const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;