import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from '../../utils/axios'
import { toast } from 'react-toastify'
import instance from '../../utils/axios'

const initialState = {
    done: [],
    loading: false,
}

export const createDone = createAsyncThunk(
    'done/createDone', 
    async(params) => {
        try {
            const {data} = await instance.post('/admin/done/save', params)
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
            toast(error.message)
        }
    })
    

export const getAllDone = createAsyncThunk('done/getAllDone', async () => {
    try {
        const { data } = await instance.get('/done')
        return data
    } catch (error) {
        console.log(error)
    }
})

export const removeDone = createAsyncThunk('done/removeDone', async(id) => {
    try {
        const {data} = await instance.delete(`/admin/done/delete/?id=${id}`, id)
        return data
    } catch (error) {
        console.log(error)
    }
})

export const doneSlice = createSlice({
    name: 'done',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //Create news
        builder.addCase(createDone.pending, (state) => {
            state.loading = true
        });
        builder.addCase(createDone.fulfilled, (state, action) => {
            state.loading = false
            state.postNews.push(action.payload)
        });
        builder.addCase(createDone.rejected, (state) => {
            state.loading = false
        });
        //get All News
        builder.addCase(getAllDone.pending, (state) => {
            state.loading = true
        });
        builder.addCase(getAllDone.fulfilled, (state, action) => {
            state.loading = false
            state.postNews = action.payload
        });
        builder.addCase(getAllDone.rejected, (state) => {
            state.loading = false
        });
        //Delete news
        builder.addCase(removeDone.pending, (state) => {
            state.loading = true
        });
        builder.addCase(removeDone.fulfilled, (state, action) => {
            state.loading = false
            state.postNews = state.postNews.filter(
                (postNews) => postNews._id !== action.payload._id,
            )
        });
        builder.addCase(removeDone.rejected, (state) => {
            state.loading = false
        });
    },
})

export default doneSlice.reducer