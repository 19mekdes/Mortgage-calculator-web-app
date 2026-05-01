import 'react'
import { formatCurrency, formatCurrencyMonthly } from '../utils/formatters'
import './ResultsSection.css'

const ResultsSection = ({ results }) => {
  const { monthlyPayment, loanAmount, totalInterest, totalPayment, downPaymentPercent } = results

  return (
    <div className="results-section">
      <h2>Your Payment Summary</h2>
      
      <div className="result-card highlight">
        <div className="result-label">Monthly Payment</div>
        <div className="result-value">{formatCurrencyMonthly(monthlyPayment)}</div>
      </div>
      
      <div className="results-grid">
        <div className="result-item">
          <div className="result-icon">🏦</div>
          <div className="result-details">
            <div className="result-title">Loan Amount</div>
            <div className="result-amount">{formatCurrency(loanAmount)}</div>
          </div>
        </div>
        
        <div className="result-item">
          <div className="result-icon">📊</div>
          <div className="result-details">
            <div className="result-title">Total Interest</div>
            <div className="result-amount">{formatCurrency(totalInterest)}</div>
          </div>
        </div>
        
        <div className="result-item">
          <div className="result-icon">💵</div>
          <div className="result-details">
            <div className="result-title">Down Payment</div>
            <div className="result-amount">{downPaymentPercent.toFixed(1)}%</div>
          </div>
        </div>
        
        <div className="result-item">
          <div className="result-icon">💰</div>
          <div className="result-details">
            <div className="result-title">Total Payment</div>
            <div className="result-amount">{formatCurrency(totalPayment)}</div>
          </div>
        </div>
      </div>
      
      <div className="info-note">
        <div className="info-icon">💡</div>
        <div className="info-text">
          This is an estimate based on the information provided. 
          Actual payments may vary based on lender terms, taxes, 
          insurance, and other factors.
        </div>
      </div>
    </div>
  )
}

export default ResultsSection