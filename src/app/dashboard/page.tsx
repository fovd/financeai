'use client'

import Link from 'next/link'
import { useState } from 'react'
import AnalysisPopup from './AnalysisPopup'

export default function Dashboard() {
  const [isAnalysisPopupOpen, setIsAnalysisPopupOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Analysis Configuration Popup */}
      <AnalysisPopup
        isOpen={isAnalysisPopupOpen}
        onClose={() => setIsAnalysisPopupOpen(false)}
        fileName="Q4 2023 Financial Report.pdf"
      />

      {/* Dashboard Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-2xl font-bold text-blue-600">FinanceAI</Link>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="#" className="text-gray-600 hover:text-gray-900">Documents</Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">Analysis</Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">Compare</Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">Reports</Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <span className="material-icons-round">notifications</span>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <span className="material-icons-round">settings</span>
              </button>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="material-icons-round text-blue-600">person</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Test Button */}
          <div className="mb-8">
            <button
              onClick={() => setIsAnalysisPopupOpen(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <span className="material-icons-round">science</span>
              Test Analysis Popup
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Documents Analyzed', value: '24', icon: 'description', trend: '+3 this week' },
              { label: 'Processing', value: '2', icon: 'hourglass_top', trend: 'In progress' },
              { label: 'Saved Reports', value: '15', icon: 'folder', trend: 'View all' },
              { label: 'Storage Used', value: '45%', icon: 'cloud', trend: '2.3GB of 5GB' },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <h3 className="text-2xl font-bold mt-1 mb-1">{stat.value}</h3>
                    <p className="text-xs text-gray-500">{stat.trend}</p>
                  </div>
                  <span className="material-icons-round text-blue-600">{stat.icon}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Documents */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">Recent Documents</h2>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Q4 2023 Financial Report.pdf', status: 'Analyzed', date: '2 hours ago', score: 85 },
                    { name: 'Annual Statement 2023.pdf', status: 'Processing', date: '5 hours ago', score: null },
                    { name: 'Investment Proposal.pdf', status: 'Analyzed', date: '1 day ago', score: 92 },
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="flex items-center gap-4">
                        <span className="material-icons-round text-gray-400">description</span>
                        <div>
                          <p className="font-medium text-gray-900">{doc.name}</p>
                          <p className="text-sm text-gray-500">{doc.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {doc.score ? (
                          <div className="bg-green-50 text-green-700 text-sm font-medium px-2.5 py-0.5 rounded">
                            Score: {doc.score}
                          </div>
                        ) : (
                          <div className="bg-blue-50 text-blue-700 text-sm font-medium px-2.5 py-0.5 rounded flex items-center gap-1">
                            <span className="material-icons-round text-sm">hourglass_top</span>
                            Processing
                          </div>
                        )}
                        <button className="text-gray-400 hover:text-gray-600">
                          <span className="material-icons-round">more_vert</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comparison Tool */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-8">
                <h2 className="text-lg font-semibold mb-6">Compare Documents</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center">
                    <span className="material-icons-round text-gray-400 mb-2">add</span>
                    <p className="text-sm text-gray-600">Select first document</p>
                  </div>
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center">
                    <span className="material-icons-round text-gray-400 mb-2">add</span>
                    <p className="text-sm text-gray-600">Select second document</p>
                  </div>
                </div>
                <button className="w-full mt-4 bg-gray-50 text-gray-600 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                  Compare Selected Documents
                </button>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              {/* Upload Widget */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-semibold mb-4">Upload Document</h2>
                <div className="border-2 border-dashed border-blue-200 rounded-xl p-8 text-center bg-blue-50">
                  <span className="material-icons-round text-blue-600 text-3xl mb-2">upload_file</span>
                  <p className="text-sm text-gray-600 mb-2">Drag and drop your PDF here</p>
                  <p className="text-xs text-gray-500 mb-4">or</p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Browse Files
                  </button>
                </div>
              </div>

              {/* Quick Analysis */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-semibold mb-4">Quick Analysis</h2>
                <div className="space-y-4">
                  {[
                    { label: 'Revenue Growth', value: '+12.5%', trend: 'positive' },
                    { label: 'Profit Margin', value: '23.4%', trend: 'neutral' },
                    { label: 'Debt Ratio', value: '0.8', trend: 'negative' },
                  ].map((metric, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-600">{metric.label}</span>
                      <div className="flex items-center gap-2">
                        <span className={`font-medium ${
                          metric.trend === 'positive' ? 'text-green-600' :
                          metric.trend === 'negative' ? 'text-red-600' :
                          'text-gray-600'
                        }`}>{metric.value}</span>
                        <span className="material-icons-round text-sm">
                          {metric.trend === 'positive' ? 'trending_up' :
                           metric.trend === 'negative' ? 'trending_down' :
                           'remove'}
                        </span>
                      </div>
                    </div>
                  ))}
                  <button className="w-full mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View Full Report →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 