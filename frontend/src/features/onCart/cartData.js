import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    
}

export const userData = createSlice({
    name:'onCart',
    initialState,
    reducers: {
        userId: (state, action) => {
            state.Uid = action.payload
        },
        ProductId: (state, action) => {
            state.Pid = action.payload
        }
    }
})


export const { userId, ProductId } = userData.actions

export default userData.reducer