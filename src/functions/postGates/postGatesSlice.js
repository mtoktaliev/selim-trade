import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from '../../utils/axios'
import { toast } from 'react-toastify'
import instance from '../../utils/axios'

const initialState = {
    postGates: [],
    loading: false,
}

export const createPostGates = createAsyncThunk(
    'post/createPostGates', 
    async(params) => {
        try {
            const {data} = await instance.post('/admin/gates/save', params)
            return data
        } catch (error) {
            console.log(error)
            toast(error.message)
        }
    })

export const postGatesSlice = createSlice({
    name: 'postGates',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //Create gates
        builder.addCase(createPostGates.pending, (state) => {
            state.loading = true
        });
        builder.addCase(createPostGates.fulfilled, (state, action) => {
            state.loading = false
            state.postNews.push(action.payload)
        });
        builder.addCase(createPostGates.rejected, (state) => {
            state.loading = false
        });
    },
})

export default postGatesSlice.reducer