import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppState, AppThunk } from '../../store'
import { fetchCount } from './chatAPI'

export interface ChatState {
  value: Array<string>
  status: 'idle' | 'loading' | 'failed'
}

const initialState: ChatState = {
  value: [],
  status: 'idle',
}

export const sendMessageAsync = createAsyncThunk(
  'chat/sendMessage',
  async (amount: string) => {
    const response = await fetchCount(amount)
    // The value we return becomes the `fulfilled` action payload
    return response.data
  }
)

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<string>) => {
      state.value = [...state.value, action.payload]
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value += action.payload
      })
  },
})

export const { addMessage } = chatSlice.actions

export const selectChat = (state: AppState) => state.chat.value

export default chatSlice.reducer
