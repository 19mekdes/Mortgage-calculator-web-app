import { useCallback } from 'react'

const useFormatCurrency = () => {
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

  const formatPercentage = useCallback((value) => {
    return `${value.toFixed(2)}%`
  }, [])

  const formatYears = useCallback((value) => {
    return `${value} ${value === 1 ? 'year' : 'years'}`
  }, [])

  const formatNumber = useCallback((value, decimals = 0) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(value)
  }, [])

  return {
    formatCurrency,
    formatCurrencyMonthly,
    formatPercentage,
    formatYears,
    formatNumber
  }
}

export default useFormatCurrency