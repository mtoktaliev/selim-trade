import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

import { BASE_URL } from "../../utils/constants";

export const getWorksGallery = createAsyncThunk(
    'worksGallery/getWorksGallery', 
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}/products`)
            return res.data;
        } catch(err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
    );

const worksGallerySlice = createSlice({
    name: 'worksGallery',
    initialState: {
        list: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getWorksGallery.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getWorksGallery.fulfilled, (state, { payload }) => {
            state.list = payload;
            state.isLoading = false;
        });
        builder.addCase(getWorksGallery.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export default worksGallerySlice.reducer;