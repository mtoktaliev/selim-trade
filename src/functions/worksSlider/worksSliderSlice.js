import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const getWorksSlider = createAsyncThunk(
    'worksSlider/getWorksSlider', 
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}/categories`)
            return res.data;
        } catch(err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
    );

const worksSliderSlice = createSlice({
    name: 'worksSlider',
    initialState: {
        list: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getWorksSlider.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getWorksSlider.fulfilled, (state, { payload }) => {
            state.list = payload;
            state.isLoading = false;
        });
        builder.addCase(getWorksSlider.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export default worksSliderSlice.reducer;