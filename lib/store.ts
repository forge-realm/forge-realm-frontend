import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './features/ui/themeSlice';
import uiReducer from './features/ui/uiSlice';
import userReducer from './features/user/userSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeReducer,
      ui: uiReducer,
      user: userReducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']