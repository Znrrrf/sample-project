import { configureStore } from '@reduxjs/toolkit';
import userData from '../features/users/userData';

export const store = configureStore({
    reducer: {
        users: userData
    }
})