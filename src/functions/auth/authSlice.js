import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    status: null,
}

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({username, password}) => {
        try {
            const { data } = await axios.post('http://161.35.29.179:8085/auth/login', {
                username,
                password,
            })
    
            console.log(data["jwt-token"])
            if (data["jwt-token"]) {
                window.localStorage.setItem('token', data["jwt-token"])
            }
            return data
        } catch(err) {
            console.log("error")
        }
    },
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
            state.isLoading = false
            state.status = null
        }
    },
    extraReducers: (builder) => {
        //Login user
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true
            state.status = null
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
            state.user = action.payload.user
            state.token = action.payload["jwt-token"]
            // state.token = action.payload.token
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.status = action.payload.message
            state.isLoading = false; 
        });
    },
})

export const checkIsAuth = (state) => Boolean(window.localStorage.getItem('token', state["jwt-token"]))
export const {logout} = authSlice.actions
export default authSlice.reducer