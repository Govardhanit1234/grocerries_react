import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./redux/createCart"

export const store = configureStore({
  reducer: {
    cart : cartReducer,
  },
})