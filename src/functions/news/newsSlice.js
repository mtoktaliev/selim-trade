import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

import { BASE_URL } from "../../utils/constants";

export const getNews = createAsyncThunk(
    'news/getNews', 
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}/products`); // заменить на новости
            return res.data;
        } catch(err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
    );

const newsSlice = createSlice({
    name: 'news', //новости?
    initialState: {
        list: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getNews.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getNews.fulfilled, (state, { payload }) => {
            state.list = payload;
            state.isLoading = false;
        });
        builder.addCase(getNews.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export default newsSlice.reducer;