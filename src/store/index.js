import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authReducer';
import counterSlice from './counterReducer';

const store = configureStore({
    reducer: {
        counter: counterSlice,
        auth: authSlice
    }
});

export default store;