import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../utils/axios'

const initialState = {
    postNews: [],
    loading: false,
}

export const createPostNews = createAsyncThunk(
    'post/createPostNews', 
    async(params) => {
        try {
            const {data} = await axios.post('/admin/news/save', params)
            return data
        } catch (error) {
            console.log(error)
        }
    })

export const postNewsSlice = createSlice({
    name: 'postNews',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //Create news
        builder.addCase(createPostNews.pending, (state) => {
            state.loading = true
        });
        builder.addCase(createPostNews.fulfilled, (state, action) => {
            state.loading = false
            state.postNews.push(action.payload)
        });
        builder.addCase(createPostNews.rejected, (state) => {
            state.loading = false
        });
    },
})

export default postNewsSlice.reducer