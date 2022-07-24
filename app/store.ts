import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import counterReducer from './redux/counter/counterSlice'
import socketMiddleware from './middleware/socketMiddleware'
import { WSSlice } from './redux/websocket/wSSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      counter: counterReducer,
      webSocket: WSSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat([socketMiddleware])
    },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
  >

export default store
