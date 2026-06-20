// eslint-disable-next-line no-unused-vars
import React from 'react'
import './NumberInput.css'
const NumberInput = ({ value, onChange, formatType, min, max, step }) => {
  const getSuffix = () => {
    switch(formatType) {
      case 'percentage':
        return '%'
      case 'years':
        return 'years'
      default:
        return ''
    }
  }

  const getPrefix = () => {
    return formatType === 'currency' ? '$' : ''
  }

  const prefix = getPrefix()
  const suffix = getSuffix()

  return (
    <div className="number-input-wrapper">
      {prefix && <span className="input-prefix">{prefix}</span>}
      <input
        type="number"
        className="number-input"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        min={min}
        max={max}
        step={step}
      />
      {suffix && <span className="input-suffix">{suffix}</span>}
    </div>
  )
}

export default NumberInput