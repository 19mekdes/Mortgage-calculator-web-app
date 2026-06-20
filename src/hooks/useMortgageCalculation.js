import { useState, useEffect, useCallback } from 'react'

const useMortgageCalculation = (purchasePrice, downPayment, loanTerm, interestRate) => {
  const [results, setResults] = useState({
    monthlyPayment: 0,
    loanAmount: 0,
    totalInterest: 0,
    totalPayment: 0,
    downPaymentPercent: 0
  })

  const calculateMortgage = useCallback((principal, loanTermYears, annualInterestRate) => {
    if (principal <= 0) {
      return {
        monthlyPayment: 0,
        totalInterest: 0,
        totalPayment: 0
      }
    }

    const monthlyRate = annualInterestRate / 100 / 12
    const numberOfPayments = loanTermYears * 12
    
    // eslint-disable-next-line no-useless-assignment
    let monthlyPayment = 0
    
    if (monthlyRate === 0) {
      
      monthlyPayment = principal / numberOfPayments
    } else {
      // Mortgage formula: M = P[r(1+r)^n/((1+r)^n)-1)]
      const factor = Math.pow(1 + monthlyRate, numberOfPayments)
      monthlyPayment = principal * (monthlyRate * factor) / (factor - 1)
    }
    
    const totalPayment = monthlyPayment * numberOfPayments
    const totalInterest = totalPayment - principal
    
    return {
      monthlyPayment: isNaN(monthlyPayment) ? 0 : monthlyPayment,
      totalInterest: isNaN(totalInterest) ? 0 : totalInterest,
      totalPayment: isNaN(totalPayment) ? 0 : totalPayment
    }
  }, [])

  const updateResults = useCallback(() => {
    const loanAmountValue = Math.max(0, purchasePrice - downPayment)
    const downPaymentPercentValue = purchasePrice > 0 
      ? (downPayment / purchasePrice) * 100 
      : 0
    
    const calculation = calculateMortgage(loanAmountValue, loanTerm, interestRate)
    
    setResults({
      monthlyPayment: calculation.monthlyPayment,
      loanAmount: loanAmountValue,
      totalInterest: calculation.totalInterest,
      totalPayment: calculation.totalPayment,
      downPaymentPercent: downPaymentPercentValue
    })
  }, [purchasePrice, downPayment, loanTerm, interestRate, calculateMortgage])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    updateResults()
  }, [updateResults])

  const formatCurrency = useCallback((value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }, [])

  const formatCurrencyMonthly = useCallback((value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value)
  }, [])

  return {
    results,
    monthlyPayment: results.monthlyPayment,
    loanAmount: results.loanAmount,
    totalInterest: results.totalInterest,
    totalPayment: results.totalPayment,
    downPaymentPercent: results.downPaymentPercent,
    formatCurrency,
    formatCurrencyMonthly,
    recalculate: updateResults
  }
}

export default useMortgageCalculation