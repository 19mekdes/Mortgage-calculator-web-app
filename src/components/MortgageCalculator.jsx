/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import InputSection from './InputSection'
import ResultsSection from './ResultsSection'
import { calculateMortgage } from '../utils/mortgageCalculations'
import { formatCurrency, formatCurrencyMonthly } from '../utils/formatters'
import './MortgageCalculator.css'

const MortgageCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState(300000)
  const [downPayment, setDownPayment] = useState(60000)
  const [loanTerm, setLoanTerm] = useState(30)
  const [interestRate, setInterestRate] = useState(5.5)
  
  const [results, setResults] = useState({
    monthlyPayment: 0,
    loanAmount: 0,
    totalInterest: 0,
    totalPayment: 0,
    downPaymentPercent: 0
  })
 useEffect(() => {
    const loanAmountValue = purchasePrice - downPayment
    const downPaymentPercentValue = (downPayment / purchasePrice) * 100
    
    const calculation = calculateMortgage(loanAmountValue, loanTerm, interestRate)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setResults({
      monthlyPayment: calculation.monthlyPayment,
      loanAmount: loanAmountValue,
      totalInterest: calculation.totalInterest,
      totalPayment: calculation.totalPayment,
      downPaymentPercent: downPaymentPercentValue
    })
  }, [purchasePrice, downPayment, loanTerm, interestRate])

  const handleDownPaymentChange = (value) => {
    const newDownPayment = Math.min(value, purchasePrice)
    setDownPayment(newDownPayment)
  }

  const handlePriceChange = (value) => {
    setPurchasePrice(value)
    if (downPayment > value) {
      setDownPayment(value)
    }
  }

  const inputProps = {
    purchasePrice,
    downPayment,
    loanTerm,
    interestRate,
    onPriceChange: handlePriceChange,
    onDownPaymentChange: handleDownPaymentChange,
    onLoanTermChange: setLoanTerm,
    onInterestRateChange: setInterestRate
  }

  return (
    <div className="mortgage-calculator">
      <div className="calculator-container">
        <div className="header">
          <div className="icon">🏠</div>
          <h1>Mortgage Calculator</h1>
          <p>Plan your home loan with confidence</p>
        </div>
        
        <div className="content">
          <InputSection {...inputProps} />
          <ResultsSection results={results} />
        </div>
      </div>
    </div>
  )
}

export default MortgageCalculator