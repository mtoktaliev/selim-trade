import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from '../../utils/axios'
import { toast } from 'react-toastify'
import instance from '../../utils/axios'

const initialState = {
    postNews: [],
    loading: false,
}

export const createPostNews = createAsyncThunk(
    'post/createPostNews', 
    async(params) => {
        try {
            const {data} = await instance.post('/admin/news/save', params)
            return data
        } catch (error) {
            console.log(error)
            toast(error.message)
        }
    })
    

export const getAllNews = createAsyncThunk('post/getAllPosts', async () => {
    try {
        const { data } = await instance.get('/news')
        return data
    } catch (error) {
        console.log(error)
    }
})

export const removeNews = createAsyncThunk('news/removeNews', async(id) => {
    try {
        const {data} = await instance.delete(`/admin/news/delete/${id}`, id)
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
        //get All News
        builder.addCase(getAllNews.pending, (state) => {
            state.loading = true
        });
        builder.addCase(getAllNews.fulfilled, (state, action) => {
            state.loading = false
            state.news = action.payload.news
        });
        builder.addCase(getAllNews.rejected, (state) => {
            state.loading = false
        });
        //Delete news
        builder.addCase(removeNews.pending, (state) => {
            state.loading = true
        });
        builder.addCase(removeNews.fulfilled, (state, action) => {
            state.loading = false
            state.postNews = state.postNews.filter(
                (postNews) => postNews._id !== action.payload._id,
            )
        });
        builder.addCase(removeNews.rejected, (state) => {
            state.loading = false
        });
    },
})

export default postNewsSlice.reducer