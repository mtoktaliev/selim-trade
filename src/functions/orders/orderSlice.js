import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from '../../utils/axios'
import { toast } from 'react-toastify'
import axios from 'axios';

const initialState = {
    order: [],
    loading: false,
}

export const createOrder = createAsyncThunk(
    'order/createOrder', 
    async(params) => {
        try {
            const {data} = await axios.post('/order/save', params)
            return data
        } catch (error) {
            console.log(error)
            toast(error.message)
        }
    })

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //Create review
        builder.addCase(createOrder.pending, (state) => {
            state.loading = true
        });
        builder.addCase(createOrder.fulfilled, (state, action) => {
            state.loading = false
            state.postReview.push(action.payload)
        });
        builder.addCase(createOrder.rejected, (state) => {
            state.loading = false
        });
    },
})

export default orderSlice.reducer