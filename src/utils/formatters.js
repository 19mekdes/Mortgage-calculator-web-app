export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value)
}

export const formatCurrencyMonthly = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value)
}

export const formatPercentage = (value) => {
  return `${value.toFixed(2)}%`
}

export const formatYears = (value) => {
  return `${value} ${value === 1 ? 'year' : 'years'}`
}