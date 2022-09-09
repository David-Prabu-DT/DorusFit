import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   authData: null,
   loading: false,
   error: false,
   updateLoading: false,
};

export const AuthSlice = createSlice({
   name: "auth",
   initialState: initialState,
   reducers: {
      auth_start: (_state) => {
         return { ..._state, loading: true, error: false };
      },
      auth_success: (_state, action: any) => {

         localStorage.setItem(
            "profile",
            JSON.stringify({ ...action.payload })
         );
         return {
            ..._state,
            authData: action.payload,
            loading: false,
            error: false,
         };
      },
      auth_fail: (_state) => {
         return { ..._state, loading: false, error: true };
      },
   },
});

export const AuthReducer = AuthSlice.reducer;
