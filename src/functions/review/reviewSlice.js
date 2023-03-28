import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const getReview = createAsyncThunk(
    'review/getReview', 
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}/review`)
            return res.data;
        } catch(err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
    );

const ReviewSlice = createSlice({
    name: 'review',
    initialState: {
        list: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getReview.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getReview.fulfilled, (state, { payload }) => {
            state.list = payload;
            state.isLoading = false;
        });
        builder.addCase(getReview.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export default ReviewSlice.reducer;