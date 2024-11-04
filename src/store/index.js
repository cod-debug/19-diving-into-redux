import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authReducer';
import counterSlice from './counterReducer';

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export default store;