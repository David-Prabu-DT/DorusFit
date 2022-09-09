
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { AuthSlice } from "./slices/AuthSlice/AuthSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


const rootReducer = combineReducers({
   auth: AuthSlice.reducer,
});

const store = configureStore({
   reducer: rootReducer,
   middleware: getDefaultMiddleware({
      serializableCheck: false
   })

});

export default store;

export const authActions = AuthSlice.actions;
