import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppState } from '../../store'
import { connect } from './wSAPI';

export enum WS_STATUS {
  CONNECTING = 0,
  OPEN = 1,
  CLOSING = 2,
  CLOSED = 3,
}

export interface CounterState {
  status: WS_STATUS,
}

const initialState: CounterState = {
  status: WS_STATUS.CLOSED,
}

export const selectWSStatus = (state: AppState) => state.webSocket.status

export const wsConnect = createAsyncThunk<
  void,
  string,
  { state: AppState }
  >(
  'webSocket/connect',
  async (url: string, api) => {
    const status = selectWSStatus(api.getState());

    if (status === WS_STATUS.CONNECTING) {
      console.log('reconnection');
    }

    await connect(url);
  }
)

export const WSSlice = createSlice({
  name: 'webSocket',
  initialState,
  reducers: {
    connect: (state, action: PayloadAction<string>) => {
      console.log(123);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(wsConnect.pending, (state) => {
        state.status = WS_STATUS.CONNECTING
      })
      .addCase(wsConnect.rejected, (state) => {
        state.status = WS_STATUS.CLOSED
      })
      .addCase(wsConnect.fulfilled, (state) => {
        state.status = WS_STATUS.OPEN
      })
  },
})
