import { useState } from 'react'

interface AnalysisPopupProps {
  isOpen: boolean
  onClose: () => void
  fileName: string
}

export default function AnalysisPopup({ isOpen, onClose, fileName }: AnalysisPopupProps) {
  const [selectedMetrics, setSelectedMetrics] = useState({
    ebitda: true,
    netIncome: true,
    grossMargin: true,
    operatingIncome: true,
    cashFlow: true,
    roi: true,
    debtToEquity: true,
    marketCap: false,
    peRatio: false,
    freeCashFlow: true,
    workingCapital: false,
    currentRatio: false,
    quickRatio: false,
    assetTurnover: false,
    inventoryTurnover: false
  })

  const [depth, setDepth] = useState('standard')

  const metrics = [
    {
      key: 'ebitda',
      label: 'EBITDA',
      description: 'Earnings Before Interest, Taxes, Depreciation, and Amortization',
      icon: 'trending_up'
    },
    {
      key: 'netIncome',
      label: 'Net Income',
      description: 'Total profit after all expenses, taxes, and costs',
      icon: 'payments'
    },
    {
      key: 'grossMargin',
      label: 'Gross Margin',
      description: 'Revenue minus cost of goods sold (COGS), divided by revenue',
      icon: 'percent'
    },
    {
      key: 'operatingIncome',
      label: 'Operating Income',
      description: 'Earnings before interest and taxes (EBIT)',
      icon: 'account_balance'
    },
    {
      key: 'cashFlow',
      label: 'Cash Flow',
      description: 'Net amount of cash being transferred into and out of business',
      icon: 'currency_exchange'
    },
    {
      key: 'roi',
      label: 'Return on Investment',
      description: 'Measure of the profitability of an investment',
      icon: 'show_chart'
    },
    {
      key: 'debtToEquity',
      label: 'Debt-to-Equity Ratio',
      description: 'Measure of financial leverage (total liabilities / stockholders equity)',
      icon: 'balance'
    },
    {
      key: 'marketCap',
      label: 'Market Capitalization',
      description: 'Total market value of outstanding shares',
      icon: 'monitoring'
    },
    {
      key: 'peRatio',
      label: 'P/E Ratio',
      description: 'Share price relative to earnings per share',
      icon: 'calculate'
    },
    {
      key: 'freeCashFlow',
      label: 'Free Cash Flow',
      description: 'Cash available for distribution to investors',
      icon: 'savings'
    },
    {
      key: 'workingCapital',
      label: 'Working Capital',
      description: 'Current assets minus current liabilities',
      icon: 'account_balance_wallet'
    },
    {
      key: 'currentRatio',
      label: 'Current Ratio',
      description: 'Current assets divided by current liabilities',
      icon: 'speed'
    },
    {
      key: 'quickRatio',
      label: 'Quick Ratio',
      description: 'Liquid assets divided by current liabilities',
      icon: 'bolt'
    },
    {
      key: 'assetTurnover',
      label: 'Asset Turnover',
      description: 'Revenue divided by average total assets',
      icon: 'cyclone'
    },
    {
      key: 'inventoryTurnover',
      label: 'Inventory Turnover',
      description: 'Cost of goods sold divided by average inventory',
      icon: 'inventory_2'
    }
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl transform transition-all max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex-shrink-0">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Configure Analysis</h2>
              <p className="text-sm text-gray-500 mt-1">
                {fileName}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <span className="material-icons-round">close</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Analysis Options */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium text-gray-700">Financial Metrics to Analyze</h3>
              <button 
                onClick={() => setSelectedMetrics(prev => {
                  const allSelected = Object.values(prev).every(v => v)
                  const newValue = !allSelected
                  return Object.keys(prev).reduce((acc, key) => ({
                    ...acc,
                    [key]: newValue
                  }), {} as typeof prev)
                })}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Select All
              </button>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {metrics.map(({ key, label, description, icon }) => (
                <div
                  key={key}
                  onClick={() => setSelectedMetrics(prev => ({
                    ...prev,
                    [key]: !prev[key as keyof typeof selectedMetrics]
                  }))}
                  className={`flex items-start p-4 rounded-xl border-2 transition-all cursor-pointer ${
                    selectedMetrics[key as keyof typeof selectedMetrics]
                      ? 'border-blue-200 bg-blue-50'
                      : 'border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <span className={`material-icons-round mr-3 mt-0.5 ${
                    selectedMetrics[key as keyof typeof selectedMetrics]
                      ? 'text-blue-600'
                      : 'text-gray-400'
                  }`}>{icon}</span>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`font-medium truncate ${
                        selectedMetrics[key as keyof typeof selectedMetrics]
                          ? 'text-gray-900'
                          : 'text-gray-600'
                      }`}>{label}</span>
                      <span className={`material-icons-round text-xl flex-shrink-0 ${
                        selectedMetrics[key as keyof typeof selectedMetrics]
                          ? 'text-blue-600'
                          : 'text-gray-200'
                      }`}>
                        {selectedMetrics[key as keyof typeof selectedMetrics] ? 'check_circle' : 'circle'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Analysis Depth */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-4">Analysis Depth</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: 'basic', label: 'Basic', description: 'Key metrics and basic trend analysis' },
                { value: 'standard', label: 'Standard', description: 'Detailed analysis with industry comparisons' },
                { value: 'advanced', label: 'Advanced', description: 'In-depth analysis with predictive insights' },
              ].map(({ value, label, description }) => (
                <div
                  key={value}
                  className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                    depth === value
                      ? 'border-blue-200 bg-blue-50'
                      : 'border-gray-100 hover:border-gray-200'
                  }`}
                  onClick={() => setDepth(value)}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={depth === value ? 'text-gray-900 font-medium' : 'text-gray-600'}>
                      {label}
                    </span>
                    {depth === value && (
                      <span className="material-icons-round text-blue-600">check_circle</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 flex justify-between items-center flex-shrink-0">
          <div className="text-sm text-gray-500">
            {Object.values(selectedMetrics).filter(Boolean).length} metrics selected
          </div>
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                // Handle analysis start
                onClose()
              }}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              <span className="material-icons-round text-sm mr-2">play_arrow</span>
              Start Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 