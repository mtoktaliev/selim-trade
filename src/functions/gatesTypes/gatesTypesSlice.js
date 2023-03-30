import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const getGatesTypes = createAsyncThunk(
    'gatesTypes/getGatesTypes', 
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}/gates`)
            return res.data;
        } catch(err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
    );

const GatesTypesSlice = createSlice({
    name: 'gatesTypes',
    initialState: {
        list: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getGatesTypes.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getGatesTypes.fulfilled, (state, { payload }) => {
            state.list = payload;
            state.isLoading = false;
        });
        builder.addCase(getGatesTypes.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export default GatesTypesSlice.reducer;