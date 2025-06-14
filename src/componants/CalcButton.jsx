import React from 'react'
import PropTypes from 'prop-types'

const CalcButton = ({ label, type }) => {
  const btnClass = type === 'operator' ? 'btn-warning' : 'btn-secondary'
  const flex = label === '0' ? 2 : 1

  return (
    <button
      className={`btn ${btnClass} m-1 fs-4 w-100`}
      style={{ flex }}
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