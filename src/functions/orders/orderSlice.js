import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from '../../utils/axios'
import { toast } from 'react-toastify'
import instance from '../../utils/axios';

const initialState = {
    order: [],
    loading: false,
}

export const createOrder = createAsyncThunk(
    'order/createOrder', 
    async(params) => {
        try {
            const {data} = await instance.post('/order/save', params)
            return data
        } catch (error) {
            console.log(error)
            toast(error.message)
        }
    })

    export const getAllOrders = createAsyncThunk('order/getAllOrders', async () => {
        try {
            const { data } = await instance.get('/admin/orders')
            return data
        } catch (error) {
            console.log(error)
        }
    })

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //Create order
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
        //get All News
        builder.addCase(getAllOrders.pending, (state) => {
            state.loading = true
        });
        builder.addCase(getAllOrders.fulfilled, (state, action) => {
            state.loading = false
            state.postNews = action.payload
        });
        builder.addCase(getAllOrders.rejected, (state) => {
            state.loading = false
        });
    },
})

export default orderSlice.reducer