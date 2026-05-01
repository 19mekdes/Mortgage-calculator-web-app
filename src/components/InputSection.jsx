/* eslint-disable no-unused-vars */
import React from 'react'
import SliderInput from './SliderInput'
import NumberInput from './NumberInput'
import './InputSection.css'

const InputSection = ({
  purchasePrice,
  downPayment,
  loanTerm,
  interestRate,
  onPriceChange,
  onDownPaymentChange,
  onLoanTermChange,
  onInterestRateChange
}) => {
  return (
    <div className="input-section">
      <h2>Loan Details</h2>
      
      <SliderInput
        label="Purchase Price"
        icon="💰"
        value={purchasePrice}
        onChange={onPriceChange}
        min={0}
        max={1000000}
        step={5000}
        formatType="currency"
        leftLabel="$0"
        rightLabel="$1M+"
      />
      
      <SliderInput
        label="Down Payment"
        icon="💵"
        value={downPayment}
        onChange={onDownPaymentChange}
        min={0}
        max={purchasePrice}
        step={1000}
        formatType="currency"
        leftLabel="0%"
        rightLabel="100%"
      />
      
      <SliderInput
        label="Loan Term"
        icon="📅"
        value={loanTerm}
        onChange={onLoanTermChange}
        min={1}
        max={50}
        step={1}
        formatType="years"
        leftLabel="1 year"
        rightLabel="50 years"
      />
      
      <SliderInput
        label="Interest Rate"
        icon="📈"
        value={interestRate}
        onChange={onInterestRateChange}
        min={0}
        max={20}
        step={0.125}
        formatType="percentage"
        leftLabel="0%"
        rightLabel="20%+"
      />
    </div>
  )
}

export default InputSection