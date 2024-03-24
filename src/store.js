import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './modalReducer'

export default configureStore({
  reducer: {
    toggle: modalReducer
  },
})