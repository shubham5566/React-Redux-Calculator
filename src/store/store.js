import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from '../features/calculator/calculatorSlice'
export const store = configureStore({
  reducer: {
    // Add your reducers here
    calculator: calculatorReducer
  },
});