import { createSlice } from "@reduxjs/toolkit";

const initialAuthSlice = {
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthSlice,
    reducers: {
        login(state){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice;