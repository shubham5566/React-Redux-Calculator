import React from 'react'
import { useSelector } from 'react-redux';

const Display = () => {
    const { current, lastCalculation } = useSelector((state) => state.calculator);
  return (
    <div className="bg-dark text-white p-2 rounded">

      <div className="text-end text-muted small">

        {lastCalculation}

      </div>

      <output

        className="text-end fs-1 w-100 d-block"

        style={{ minHeight: '60px' }}

      >

        {current}

      </output>

    </div>
  )
}

export default Display