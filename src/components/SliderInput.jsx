// eslint-disable-next-line no-unused-vars
import React from 'react'
import NumberInput from './NumberInput'
import './SliderInput.css'

const SliderInput = ({
  label,
  icon,
  value,
  onChange,
  min,
  max,
  step,
  formatType,
  leftLabel,
  rightLabel
}) => {
  return (
    <div className="slider-input">
      <label className="slider-label">
        <span className="slider-icon">{icon}</span>
        <span className="slider-text">{label}</span>
      </label>
      
      <NumberInput
        value={value}
        onChange={onChange}
        formatType={formatType}
        min={min}
        max={max}
        step={step}
      />
      
      <input
        type="range"
        className="range-input"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
      
      <div className="range-labels">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
    </div>
  )
}

export default SliderInput