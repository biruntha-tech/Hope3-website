import { useState, useEffect } from 'react';
import '../styles/animation.css';
import './EnhancedAnimation.css';
import CardFlipCarousel, { FlipCard } from './CardFlipCarousel/CardFlipCarousel';
import image1 from '../assets/animation/image1.jpg';
import image2 from '../assets/animation/image2.jpg';
import image3 from '../assets/animation/image3.jpg';
import image4 from '../assets/animation/image4.jpg';
import image5 from '../assets/animation/image5.jpg';
import image6 from '../assets/animation/image6.jpg';
import image7 from '../assets/animation/image7.jpg';
import image8 from '../assets/animation/image8.jpg';

function EnhancedAnimation() {
  const [activeTab, setActiveTab] = useState('journey');
  
  // Original journey animation
  const images = [image1, image2, image3, image4, image5, image6, image7, image8];
  const stages = ['Schooling', 'Hope3 Gate', 'Classroom', 'College Life', 'Lab Work', 'Digital Skills', 'Graduation', 'Career Entry'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (activeTab === 'journey') {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [images.length, activeTab]);

  const getPosition = (index) => {
    const centerIndex = currentIndex;
    const leftIndex = (centerIndex - 1 + images.length) % images.length;
    const rightIndex = (centerIndex + 1) % images.length;
    
    if (index === centerIndex) return { x: 0, scale: 1.2, opacity: 1, zIndex: 100 };
    if (index === rightIndex) return { x: 250, scale: 0.8, opacity: 0.7, zIndex: 50 };
    if (index === leftIndex) return { x: -250, scale: 0.8, opacity: 0.7, zIndex: 50 };
    
    return { x: 0, scale: 0.5, opacity: 0.3, zIndex: 10 };
  };

  return (
    <div className="enhanced-animation-container">
      {/* Tab Navigation */}
      <div className="animation-tabs">
        <button 
          className={`tab-button ${activeTab === 'journey' ? 'active' : ''}`}
          onClick={() => setActiveTab('journey')}
        >
          <span className="tab-icon">🎓</span>
          <span className="tab-text">Journey</span>
        </button>
        <button 
          className={`tab-button ${activeTab === 'stories' ? 'active' : ''}`}
          onClick={() => setActiveTab('stories')}
        >
          <span className="tab-icon">💫</span>
          <span className="tab-text">Success Stories</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="animation-content">
        {activeTab === 'journey' && (
          <div className="journey-animation">
            <h3 className="animation-title">The HOPE3 Journey</h3>
            <p className="animation-subtitle">Follow the transformation from education to career success</p>
            
            <div className="animation-container">
              <div className="carousel">
                {images.map((img, index) => {
                  const pos = getPosition(index);
                  return (
                    <div
                      key={index}
                      className="image-wrapper"
                      style={{
                        transform: `translateX(${pos.x}px) scale(${pos.scale})`,
                        opacity: pos.opacity,
                        zIndex: pos.zIndex
                      }}
                    >
                      <img src={img} alt={`Process ${index + 1}`} />
                    </div>
                  );
                })}
              </div>
              <div className="stage-card">
                <h3>{stages[currentIndex]}</h3>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'stories' && (
          <div className="stories-animation">
            <h3 className="animation-title">Success Stories</h3>
            <p className="animation-subtitle">Real stories from our community members</p>
            
            <CardFlipCarousel
              width={320}
              height={240}
              radius={250}
              delay={6000}
              pauseOnHover={true}
              rotationSpeed={1.5}
              flipDuration={0.8}
            >
              {/* Success Story 1 */}
              <FlipCard>
                <div className="story-card">
                  <div className="story-header">
                    <img 
                      className="story-avatar" 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hope3Success1" 
                      alt="Graduate" 
                    />
                    <div className="story-info">
                      <h4>Alex Rivera</h4>
                      <p>Software Engineer at Google</p>
                    </div>
                  </div>
                  <div className="story-content">
                    <p>"HOPE3 didn't just teach me to code - it taught me to dream bigger. From a small town to Silicon Valley!"</p>
                    <div className="story-stats">
                      <span className="stat">🎓 2022 Graduate</span>
                      <span className="stat">💼 $120K Starting Salary</span>
                    </div>
                  </div>
                </div>
              </FlipCard>

              {/* Success Story 2 */}
              <FlipCard>
                <div className="story-card">
                  <div className="story-header">
                    <img 
                      className="story-avatar" 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hope3Success2" 
                      alt="Entrepreneur" 
                    />
                    <div className="story-info">
                      <h4>Maya Patel</h4>
                      <p>Founder of EduTech Startup</p>
                    </div>
                  </div>
                  <div className="story-content">
                    <p>"The entrepreneurship program at HOPE3 gave me the confidence to start my own company. We just raised $2M!"</p>
                    <div className="story-stats">
                      <span className="stat">🚀 Startup Founder</span>
                      <span className="stat">💰 $2M Series A</span>
                    </div>
                  </div>
                </div>
              </FlipCard>

              {/* Success Story 3 */}
              <FlipCard>
                <div className="story-card">
                  <div className="story-header">
                    <img 
                      className="story-avatar" 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hope3Success3" 
                      alt="Designer" 
                    />
                    <div className="story-info">
                      <h4>Jordan Kim</h4>
                      <p>UX Designer at Apple</p>
                    </div>
                  </div>
                  <div className="story-content">
                    <p>"The design thinking workshops at HOPE3 opened my eyes to the power of user-centered design."</p>
                    <div className="story-stats">
                      <span className="stat">🎨 Design Lead</span>
                      <span className="stat">🏆 Design Award Winner</span>
                    </div>
                  </div>
                </div>
              </FlipCard>

              {/* Success Story 4 */}
              <FlipCard>
                <div className="story-card">
                  <div className="story-header">
                    <img 
                      className="story-avatar" 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hope3Success4" 
                      alt="Data Scientist" 
                    />
                    <div className="story-info">
                      <h4>Sam Chen</h4>
                      <p>Data Scientist at Netflix</p>
                    </div>
                  </div>
                  <div className="story-content">
                    <p>"HOPE3's data science track prepared me for the real world. Now I'm helping millions discover great content!"</p>
                    <div className="story-stats">
                      <span className="stat">📊 ML Engineer</span>
                      <span className="stat">🎯 Impact: 50M+ Users</span>
                    </div>
                  </div>
                </div>
              </FlipCard>

              {/* Success Story 5 */}
              <FlipCard>
                <div className="story-card">
                  <div className="story-header">
                    <img 
                      className="story-avatar" 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hope3Success5" 
                      alt="Product Manager" 
                    />
                    <div className="story-info">
                      <h4>Taylor Johnson</h4>
                      <p>Product Manager at Microsoft</p>
                    </div>
                  </div>
                  <div className="story-content">
                    <p>"The leadership skills I developed at HOPE3 helped me transition from engineering to product management."</p>
                    <div className="story-stats">
                      <span className="stat">📱 Product Lead</span>
                      <span className="stat">👥 Team of 15</span>
                    </div>
                  </div>
                </div>
              </FlipCard>
            </CardFlipCarousel>
          </div>
        )}
      </div>
    </div>
  );
}

export default EnhancedAnimation;