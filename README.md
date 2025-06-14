# React-Redux Calculator

![image](https://github.com/user-attachments/assets/2a3fe5fd-5395-464f-a4ab-c46d51243e18)

A feature-rich calculator application built with React, Redux Toolkit, and Bootstrap that handles complex operations with precision.

## Features

### 🧮 Core Operations
- **Basic Arithmetic**: `+`, `-`, `×`, `÷`
- **Operator Precedence**: Correctly solves `5 + 2 × 3 = 11` (not 21)
- **Chained Calculations**: Supports sequential operations

### ⚡ Advanced Functions
- **Percentage Conversion**: Instantly converts to percent
- **Sign Toggling**: Switch between positive/negative
- **Decimal Handling**: Smart floating-point formatting

### 🛡️ Safety & Reliability
- **Divide-by-Zero Protection**: Shows alert and resets
- **Input Validation**: Prevents invalid entries
- **Precision Control**: Limits to 6 significant digits

### 🎨 UI Components
- Responsive Bootstrap layout
- Themed operator buttons
- Large visible display

## Technical Implementation

### State Management
```javascript
{
  current: '0',       // Current input
  previous: null,     // Previous operand
  operator: null,     // Active operation
  overwrite: false,   // Display control flag
  lastCalculation: '' // Formula history
}
