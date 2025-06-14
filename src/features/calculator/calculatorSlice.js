import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  current: '0',
  previous: null,
  operator: null,
  overwrite: false,
  lastCalculation: null
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    enterDigit: (state, action) => {
      const digit = action.payload;
      
      if (state.overwrite) {
        state.current = digit;
        state.overwrite = false;
        return;
      }
      
      if (digit === '.' && state.current.includes('.')) return;
      if (digit === '0' && state.current === '0') return;
      
      state.current = state.current === '0' && digit !== '.' 
        ? digit 
        : `${state.current}${digit}`;
    },
    
    chooseOperator: (state, action) => {
      const operator = action.payload;
      
      // If no previous number, set current as previous
      if (state.previous === null) {
        state.previous = state.current;
        state.current = '0';
        state.operator = operator;
        return;
      }
      
      // If we have both numbers and an operator, calculate intermediate result
      if (state.operator && state.current !== '0') {
        const result = safeCalculate(
          parseFloat(state.previous),
          parseFloat(state.current),
          state.operator
        );
        
        state.previous = formatNumber(result);
        state.current = '0';
      }
      
      state.operator = operator;
    },
    
    calculate: (state) => {
      if (state.operator === null || state.previous === null) return;
      
      const result = safeCalculate(
        parseFloat(state.previous),
        parseFloat(state.current),
        state.operator
      );
      
      state.lastCalculation = `${state.previous} ${state.operator} ${state.current} = ${formatNumber(result)}`;
      state.current = formatNumber(result);
      state.previous = null;
      state.operator = null;
      state.overwrite = true;
    },
    
    clear: () => initialState,
    
    toggleSign: (state) => {
      if (state.current === '0') return;
      state.current = formatNumber(parseFloat(state.current) * -1);
    },
    
    percentage: (state) => {
      if (state.current === '0') return;
      state.current = formatNumber(parseFloat(state.current) / 100);
    }
  }
});

// Safe calculation with error handling
function safeCalculate(first, second, operator) {
  if (operator === '÷' && second === 0) {
    alert("Cannot divide by zero");
    return 0; // or throw an error if you prefer
  }
  
  switch (operator) {
    case '+': return first + second;
    case '-': return first - second;
    case '×': return first * second;
    case '÷': return first / second;
    default: return second;
  }
}

// Format number to handle floating point precision
function formatNumber(num) {
  // Handle very small numbers
  if (Math.abs(num) < 0.000001 && num !== 0) {
    return num.toExponential(6);
  }
  
  // Handle floating point precision issues
  const str = num.toString();
  if (str.indexOf('.') !== -1) {
    const decimalPlaces = str.split('.')[1].length;
    if (decimalPlaces > 6) {
      return parseFloat(num.toPrecision(6));
    }
  }
  
  return str;
}

export const { 
  enterDigit, 
  chooseOperator, 
  calculate, 
  clear, 
  toggleSign, 
  percentage 
} = calculatorSlice.actions;

export default calculatorSlice.reducer;