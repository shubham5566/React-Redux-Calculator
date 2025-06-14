import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  current: '0',
  previous: null,
  operator: null,
  overwrite: false
}

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    enterDigit: (state, action) => {
      // TODO: add logic
    },
    chooseOperator: (state, action) => {
      // TODO: add logic
    },
    calculate: (state) => {
      // TODO: add logic
    },
    clear: () => initialState,
    toggleSign: (state) => {
      // TODO: add logic
    },
    percentage: (state) => {
      // TODO: add logic
    }
  }
})

export const { enterDigit, chooseOperator, calculate, clear, toggleSign, percentage } = calculatorSlice.actions
export default calculatorSlice.reducer