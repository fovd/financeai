import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">FinanceAI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it works</Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
              <Link href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transform Financial PDFs into
              <span className="text-blue-600"> Actionable Insights</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Upload your financial documents and let AI analyze balance sheets, income statements, and cash flows in seconds. Make informed investment decisions faster.
            </p>
          </div>
          
          {/* Upload Section - Moved here */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="border-2 border-dashed border-blue-200 rounded-xl p-10 text-center">
                <div className="mx-auto w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <span className="material-icons-round text-4xl text-blue-600">upload_file</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Drop your financial PDF here</h3>
                <p className="text-gray-600 mb-6">or click to browse</p>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium">
                  Upload Document
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Features for Financial Analysis</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Instant Analysis',
                description: 'Upload your PDF and get detailed financial analysis in seconds',
                icon: 'analytics'
              },
              {
                title: 'Smart Insights',
                description: 'AI-powered recommendations and red flag detection',
                icon: 'psychology'
              },
              {
                title: 'Export Ready',
                description: 'Download reports in various formats for your presentations',
                icon: 'description'
              }
            ].map((feature, index) => (
              <div key={index} className="group p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <span className="material-icons-round text-4xl text-blue-600 mb-6 transition-transform duration-300 group-hover:scale-110 inline-block">
                    {feature.icon}
                  </span>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '$29',
                icon: 'rocket_launch',
                features: ['5 PDFs per month', 'Basic Analysis', 'Email Support']
              },
              {
                name: 'Professional',
                price: '$99',
                icon: 'workspace_premium',
                features: ['50 PDFs per month', 'Advanced Analysis', 'Priority Support', 'Custom Reports'],
                popular: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                icon: 'corporate_fare',
                features: ['Unlimited PDFs', 'Full API Access', 'Dedicated Support', 'Custom Integration']
              }
            ].map((plan, index) => (
              <div key={index} className={`group relative p-8 bg-white rounded-xl shadow-sm border hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'border-blue-200 scale-105 shadow-md' : 'border-gray-100'
              }`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm rounded-bl-xl rounded-tr-xl font-medium">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <span className={`material-icons-round text-4xl mb-4 ${
                    plan.popular ? 'text-blue-600' : 'text-gray-600'
                  }`}>
                    {plan.icon}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-4xl font-bold mb-2">{plan.price}</p>
                  <p className="text-gray-500">per month</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="material-icons-round text-green-500 mr-2 text-xl">check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full px-6 py-3 rounded-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-bold text-blue-600">FinanceAI</span>
              <p className="mt-4 text-gray-600">Making financial analysis accessible and efficient for everyone.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link></li>
                <li><Link href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">API</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">About</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Privacy</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Terms</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; 2024 FinanceAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
