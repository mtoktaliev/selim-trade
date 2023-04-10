import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from '../../utils/axios'
import { toast } from 'react-toastify'
import instance from '../../utils/axios'

const initialState = {
    postReview: [],
    loading: false,
}

export const createPostReview = createAsyncThunk(
    'post/createPostReview', 
    async(params) => {
        try {
            const {data} = await instance.post('/admin/review/save', params)
            return data
        } catch (error) {
            console.log(error)
            toast(error.message)
        }
    })

export const postReviewSlice = createSlice({
    name: 'postReview',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //Create news
        builder.addCase(postReviewSlice.pending, (state) => {
            state.loading = true
        });
        builder.addCase(postReviewSlice.fulfilled, (state, action) => {
            state.loading = false
            state.postNews.push(action.payload)
        });
        builder.addCase(postReviewSlice.rejected, (state) => {
            state.loading = false
        });
    },
})

export default postReviewSlice.reducer