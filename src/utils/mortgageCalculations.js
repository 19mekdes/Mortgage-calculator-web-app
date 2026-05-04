export const calculateMortgage = (principal, loanTermYears, annualInterestRate) => {
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
}