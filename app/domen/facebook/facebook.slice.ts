import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { login } from './facebook.api';

export interface CounterState {
  response: any
  status: 'idle' | 'loading' | 'failed'
}

const initialState: CounterState = {
  response: null,
  status: 'idle',
}

export const loginAsync = createAsyncThunk(
  'auth/login',
  async () => {
    return await login()
  }
)

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.response = action.payload
      })
  },
});
