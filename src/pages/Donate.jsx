import Navbar from './navbar.jsx'
import donateImage from '../assets/donate.png'

const Donate = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with Background Image */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${donateImage})` }}>
        <div className="absolute inset-0 flex items-center justify-center pt-20">
          <h1 className="text-white text-center px-4 max-w-4xl jaini-regular" style={{
            fontSize: '64px',
            textShadow: 'rgba(0, 0, 0, 0.62) 0px 0px 10px'
          }}>
            Every student deserves a chance to rise and achieve their fullest potential.
          </h1>
        </div>
      </section>

      {/* Empowering Dreams Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl shadow-lg p-8 text-center shadow-black/20" style={{ backgroundColor:'#e8f5e8' }}>
            <h2 className="text-3xl font-bold mb-8 text-gray-800" style={{ fontFamily: 'Kavoon' }}>Empowering Dreams, Transforming Lives</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Every student deserves a chance to rise and achieve their fullest potential. This transformative
              work at HOPE3 is made possible by a vibrant community of volunteers and generous donors, each
              contributing in their own unique way to empower students and drive change. Sustaining the HOPE3
              residential program relies on generous, ongoing support. Every contribution, no matter the size, truly
              makes a meaningful impact in covering each student's essential expenses, including hostel, meals,
              healthcare, and utilities. Donations also fund tuition, exam fees, textbooks, commuting expenses, and
              critical staff salaries, ensuring students always receive guidance and support in their academic journey.
              Your donation goes a long way toward empowering their journey and shaping brighter futures.
            </p>
          </div>
        </div>
      </section>

      {/* Donations in USA Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="py-4 px-6" style={{ backgroundColor: '#d6e9f0' }}>
            <h2 className="text-4xl font-bold text-center text-gray-800" style={{ fontFamily: 'Kavoon' }}>Donations in USA</h2>
          </div>
          
          <div className="py-8 px-6">
            <p className="text-lg text-center mb-12 text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'Kavoon' }}>
              Your generous support is invaluable and has the power to change a student's life forever. Every
              donation—no matter the amount—makes a meaningful difference and a profound impact in uplifting their journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Hope Builder */}
              <div className="bg-white rounded-xl p-6 text-center shadow-lg shadow-black/20 hover:bg-[#e8f5e8] transition-colors duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #ff6b6b, #ffa500)' }}>
                  <span className="text-white text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Hope Builder</h3>
                <div className="mb-3">
                  <span className="text-2xl font-bold text-blue-600">$1200</span>
                  <span className="text-gray-500">/year</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Cover hostel, meals and healthcare for one student
                </p>
              </div>

              {/* Hope Enabler */}
              <div className="bg-white rounded-xl p-6 text-center shadow-lg shadow-black/20 hover:bg-[#e8f5e8] transition-colors duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #4ecdc4, #44a08d)' }}>
                  <span className="text-white text-2xl">💎</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Hope Enabler</h3>
                <div className="mb-3">
                  <span className="text-2xl font-bold text-blue-600">$1500</span>
                  <span className="text-gray-500">/year</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Cover tuition, books, and fees for one student
                </p>
              </div>

              {/* Dream Enabler */}
             <div className="bg-white rounded-xl p-6 text-center shadow-lg shadow-black/20 hover:bg-[#e8f5e8] transition-colors duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
                  <span className="text-white text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Dream Enabler</h3>
                <div className="mb-3">
                  <span className="text-2xl font-bold text-blue-600">$3000</span>
                  <span className="text-gray-500">/year</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Cover all expenses for one student
                </p>
              </div>

              {/* Hope Maker */}
             <div className="bg-white rounded-xl p-6 text-center shadow-lg shadow-black/20 hover:bg-[#e8f5e8] transition-colors duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f093fb, #f5576c)' }}>
                  <span className="text-white text-2xl">💖</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Hope Maker</h3>
                <div className="mb-3">
                  <span className="text-2xl font-bold text-blue-600">Custom</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Your choice of amount
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-8 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="py-3 px-6" style={{ backgroundColor: '#d6e9f0' }}>
            <h2 className="text-3xl font-bold text-center text-gray-800" style={{ fontFamily: 'Kavoon' }}>Payment Methods</h2>
          </div>

          <div className="flex gap-12 items-start mt-8">
            {/* Payment Options */}
            <div className="bg-white rounded-xl px-16 py-6 shadow-md shadow-black/40 ml-8" style={{ backgroundColor: '#e8f5e8' }}>
              <div className="space-y-4">
              {/* PayPal */}
              <div className="px-4 py-4 border-b border-gray-200 last:border-b-0">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">P</span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-800">PayPal - Donate via PayPal</h3>
                  </div>
                </div>
              </div>

              {/* Zelle */}
              <div className="px-4 py-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">Z</span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-800">Zelle - Contact us for Zelle details</h3>
                  </div>
                </div>
              </div>
              </div>
            </div>

            {/* Tax Information */}
            <div className="text-center" style={{ marginTop: '1cm' }}>
              <h3 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Kavoon' }}>Tax Information</h3>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Kavoon' }}>
                HOPE3 is tax-exempt in the USA (501(C)(3)), making donations both impactful and tax-friendly.
                Contributions can be matched through employer programs for an increased impact. We will send you
                the tax exempt receipts for your contributions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-6 border-t">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 rounded-lg p-6">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Hope3 Foundation</h4>
                <p className="text-sm text-gray-600 mb-1">2715 204th St. SE, Sammamish, WA - 98074</p>
                <div className="flex space-x-4 mt-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                  <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
                  <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                  <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600 mb-1">US IRS 501(C)(3) Non-Profit Organization</p>
                <p className="text-sm text-gray-600">Tax ID: 94-3184861</p>
                <div className="mt-2">
                  <p className="text-xs text-blue-600">www.All Rights Reserved - Privacy Policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Donate