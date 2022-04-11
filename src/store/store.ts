import {combineReducers, configureStore} from '@reduxjs/toolkit'
import weatherSliceReducer from './slices/weatherSlice'

const rootReducer = combineReducers({
  weatherSliceReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
})

export type RootStore = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type Dispatch = AppStore['dispatch']