import Navbar from "./navbar.jsx"
import HeroSection from "./HeroSection.jsx"
import SpinningLogo from "../components/SpinningLogo.jsx"
import FeatureCards from "./FeatureCards.jsx"
import PhilosophySection from "./PhilosophySection.jsx"
import SpotlightSection from "./SpotlightSection.jsx"
import CardSwap, { Card as SwapCard } from "../components/CardSwap/CardSwap"
import NewFooter from "./NewFooter.jsx"

function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SpinningLogo />
      <FeatureCards />
      
      {/* Card Swap Animation Section */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #1e1e2e 0%, #2a2a3e 100%)' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Our Digital Ecosystem
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Watch the cards swap with a smooth elastic animation! Discover the platforms that power HOPE3's mission.
          </p>
          
          <div style={{ height: '600px', position: 'relative' }}>
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={4000}
              pauseOnHover={true}
              skewAmount={5}
              easing="elastic"
            >
              {/* HOPE3 Student Portal */}
              <SwapCard>
                <div className="browser-tab-bar">
                  <div className="browser-tab active">
                    <div className="browser-tab-icon" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>🎓</div>
                    <span className="browser-tab-title">Student Portal</span>
                    <span className="browser-tab-close">×</span>
                  </div>
                  <span className="new-tab-btn">+</span>
                </div>
                <div className="browser-url-bar">
                  <div className="browser-nav-buttons">
                    <span className="browser-nav-btn">←</span>
                    <span className="browser-nav-btn">→</span>
                    <span className="browser-nav-btn">↻</span>
                  </div>
                  <div className="browser-url-input">
                    <span className="browser-url-lock">🔒</span>
                    <span className="browser-url-text">portal.hope3.org</span>
                  </div>
                  <div className="browser-actions">
                    <span className="browser-action-btn">⭐</span>
                    <span className="browser-action-btn">⋮</span>
                  </div>
                </div>
                <div className="browser-content">
                  <div className="browser-content-header" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)' }}>
                    <h3>Student Dashboard</h3>
                    <p>Track your progress, access courses, and connect with mentors</p>
                  </div>
                  <div className="browser-content-body">
                    <div className="content-placeholder" style={{ background: 'linear-gradient(90deg, #e2e8f0 0%, #cbd5e1 100%)' }}></div>
                    <div className="content-placeholder medium" style={{ background: 'linear-gradient(90deg, #e2e8f0 0%, #cbd5e1 100%)' }}></div>
                    <div className="content-placeholder short" style={{ background: 'linear-gradient(90deg, #e2e8f0 0%, #cbd5e1 100%)' }}></div>
                    <div className="browser-content-image" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px', fontWeight: '600' }}>
                      📊 Progress Dashboard
                    </div>
                  </div>
                </div>
              </SwapCard>

              {/* HOPE3 Skills Lab */}
              <SwapCard>
                <div className="browser-tab-bar">
                  <div className="browser-tab active">
                    <div className="browser-tab-icon" style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>⚡</div>
                    <span className="browser-tab-title">Skills Lab</span>
                    <span className="browser-tab-close">×</span>
                  </div>
                  <span className="new-tab-btn">+</span>
                </div>
                <div className="browser-url-bar">
                  <div className="browser-nav-buttons">
                    <span className="browser-nav-btn">←</span>
                    <span className="browser-nav-btn">→</span>
                    <span className="browser-nav-btn">↻</span>
                  </div>
                  <div className="browser-url-input">
                    <span className="browser-url-lock">🔒</span>
                    <span className="browser-url-text">skills.hope3.org</span>
                  </div>
                  <div className="browser-actions">
                    <span className="browser-action-btn">⭐</span>
                    <span className="browser-action-btn">⋮</span>
                  </div>
                </div>
                <div className="browser-content">
                  <div className="browser-content-header" style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}>
                    <h3>Interactive Skills Lab</h3>
                    <p>Hands-on coding, design, and entrepreneurship challenges</p>
                  </div>
                  <div className="browser-content-body">
                    <div className="content-placeholder" style={{ background: 'linear-gradient(90deg, #d1fae5 0%, #a7f3d0 100%)' }}></div>
                    <div className="content-placeholder medium" style={{ background: 'linear-gradient(90deg, #d1fae5 0%, #a7f3d0 100%)' }}></div>
                    <div className="content-placeholder short" style={{ background: 'linear-gradient(90deg, #d1fae5 0%, #a7f3d0 100%)' }}></div>
                    <div className="browser-content-image" style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px', fontWeight: '600' }}>
                      💻 Coding Challenges
                    </div>
                  </div>
                </div>
              </SwapCard>

              {/* HOPE3 Alumni Network */}
              <SwapCard>
                <div className="browser-tab-bar">
                  <div className="browser-tab active">
                    <div className="browser-tab-icon" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>🌟</div>
                    <span className="browser-tab-title">Alumni Network</span>
                    <span className="browser-tab-close">×</span>
                  </div>
                  <span className="new-tab-btn">+</span>
                </div>
                <div className="browser-url-bar">
                  <div className="browser-nav-buttons">
                    <span className="browser-nav-btn">←</span>
                    <span className="browser-nav-btn">→</span>
                    <span className="browser-nav-btn">↻</span>
                  </div>
                  <div className="browser-url-input">
                    <span className="browser-url-lock">🔒</span>
                    <span className="browser-url-text">alumni.hope3.org</span>
                  </div>
                  <div className="browser-actions">
                    <span className="browser-action-btn">⭐</span>
                    <span className="browser-action-btn">⋮</span>
                  </div>
                </div>
                <div className="browser-content">
                  <div className="browser-content-header" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }}>
                    <h3>Alumni Success Network</h3>
                    <p>Connect with graduates working at top companies worldwide</p>
                  </div>
                  <div className="browser-content-body">
                    <div className="content-placeholder" style={{ background: 'linear-gradient(90deg, #fef3c7 0%, #fde68a 100%)' }}></div>
                    <div className="content-placeholder medium" style={{ background: 'linear-gradient(90deg, #fef3c7 0%, #fde68a 100%)' }}></div>
                    <div className="content-placeholder short" style={{ background: 'linear-gradient(90deg, #fef3c7 0%, #fde68a 100%)' }}></div>
                    <div className="browser-content-image" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px', fontWeight: '600' }}>
                      🏢 Success Stories
                    </div>
                  </div>
                </div>
              </SwapCard>
            </CardSwap>
          </div>
        </div>
      </section>
      
      <PhilosophySection />
      <SpotlightSection />
      <NewFooter />
    </main>
  )
}

export default Home