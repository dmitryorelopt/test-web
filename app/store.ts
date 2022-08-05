import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import counterReducer from './redux/counter/counterSlice'
import testMiddleware from './middleware/testMiddleware'

export function makeStore() {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat([testMiddleware])
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
