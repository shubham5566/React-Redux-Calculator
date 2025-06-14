import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { calculate, chooseOperator, clear, enterDigit, percentage, toggleSign } from '../features/calculator/calculatorSlice';

const CalcButton = ({ label, type }) => {
      const dispatch = useDispatch();

  

  const handleClick = () => {

  if (!isNaN(label) || label === '.') {

      dispatch(enterDigit(label));

    } else if (label === 'AC') {

      dispatch(clear());

    } else if (label === '±') {

      dispatch(toggleSign());

    } else if (label === '%') {

      dispatch(percentage());

    } else if (label === '=') {

      dispatch(calculate());

    } else {

      dispatch(chooseOperator(label));
    }

  };
  const btnClass = type === 'operator' ? 'btn-warning' : 'btn-secondary'
  const flex = label === '0' ? 2 : 1

  return (
    <button
      className={`btn ${btnClass} m-1 fs-4 w-100`}
      style={{ flex }}
        onClick={handleClick}
    >
      {label}
    </button>
  )
}

CalcButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['operator', 'normal']).isRequired
}

export default CalcButton