import React from 'react'
import CalcButton from './CalcButton'

const buttonRows = [
  ['AC', '±', '%', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '=']
]

const Keypad = () => {
  return (
    <div className="mt-2">
      {buttonRows.map((row, rowIndex) => (
        <div className="row g-1 mb-2 flex-nowrap" key={rowIndex}>
          {row.map((btnLabel, btnIndex) => (
            <div
              key={btnIndex}
              className={btnLabel === '0' ? 'col-6' : 'col'}
            >
              <CalcButton
                label={btnLabel}
                type={['÷', '×', '-', '+', '='].includes(btnLabel) ? 'operator' : 'normal'}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Keypad