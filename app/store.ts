import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import counterReducer from './domen/counter/counter.slice'
import testMiddleware from './middleware/test.middleware'
import { loginSlice } from './domen/facebook/facebook.slice';

export function makeStore() {
  return configureStore({
    reducer: {
      counter: counterReducer,
      login: loginSlice.reducer,
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
