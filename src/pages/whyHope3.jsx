import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar.jsx';
import NewFooter from './NewFooter.jsx';
import EnhancedAnimation from '../components/EnhancedAnimation';
import CardSwap, { Card as SwapCard } from '../components/CardSwap/CardSwap';
import '../styles/whyHope3.css';
import headerImg from '../assets/college-background1.jpg';
import img1 from '../assets/transformation/img1.jpeg';
import img2 from '../assets/transformation/img2.jpeg';
import img3 from '../assets/transformation/img3.jpeg';
import img4 from '../assets/transformation/img4.jpeg';
import img5 from '../assets/transformation/img5.jpeg';
import img6 from '../assets/transformation/img6.jpeg';
import img7 from '../assets/transformation/img7.jpeg';
import img8 from '../assets/transformation/img8.jpeg';
import Animation from '../components/Animation.jsx';

const WhyHope3 = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const journeyStages = [
    'Schooling',
    'Hope3 Gate', 
    'Classroom',
    'College Life',
    'Lab Work',
    'Digital Skills',
    'Graduation',
    'Career Entry'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="whyhope3-page">
      <Navbar />
      
      {/* Page Title */}
      <div className="page-title">
        <div className="container">
          <h1>Why HOPE3?</h1>
        </div>
      </div>

      {/* Transformation Section */}
      <div className="transformation-section">
        {/* Left Column - Image Slideshow */}
        <div className="left-column">
          <div className="transformation-container">
            {images.map((img, index) => (
              <img 
                key={index}
                src={img} 
                className={`transform-image ${index === activeIndex ? 'active' : ''}`}
                alt={`Transformation ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Center Column - Content */}
        <div className="center-column">
          <h3 className={activeIndex === 0 ? 'gradient-text active' : ''}>
            A Student's Journey of Change
          </h3>
          <p>Watch as students transform through education, from their first steps in school to successful careers.</p>
        </div>
        
        {/* Right Column - Journey Stages */}
        <div className="right-column">
          <ul>
            {journeyStages.map((stage, index) => (
              <li 
                key={index}
                className={index === activeIndex ? 'gradient-text active' : ''}
              >
                {stage}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Mission/Vision/Philosophy Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              HOPE3 is dedicated to transforming lives through education and opportunity. 
              We believe that every individual deserves access to quality education and 
              the chance to reach their full potential, regardless of their background 
              or circumstances.
            </p>
            
            <h2>Our Vision</h2>
            <p>
              We envision a world where education serves as the great equalizer, 
              breaking down barriers and creating pathways to success for all. 
              Through our comprehensive approach, we aim to nurture not just academic 
              excellence, but also character, leadership, and social responsibility.
            </p>
            
            <h2>Our Philosophy</h2>
            <p>
              At HOPE3, we believe in the power of holistic development. Our philosophy 
              centers on three pillars: Hope (inspiring dreams), Opportunity (creating 
              pathways), and Progress (measuring impact). We understand that true 
              transformation happens when we address not just educational needs, but 
              also provide mentorship, life skills, and ongoing support throughout 
              each individual's journey.
            </p>
          </div>
        </div>
      </section>

      {/* How We Do It Section */}
      <section className="how-we-do-it">
        <div className="section-title">
          <h2>How we do it</h2>
        </div>
        <EnhancedAnimation />
      </section>

      {/* Card Swap Animation Section */}
      <section className="card-swap-section">
        <div className="section-title">
          <h2>Our Digital Platforms</h2>
          <p>Explore the technology that powers HOPE3's educational ecosystem</p>
        </div>
        <div style={{ height: '600px', position: 'relative', background: 'linear-gradient(135deg, #1e1e2e 0%, #2a2a3e 100%)', borderRadius: '20px', overflow: 'hidden' }}>
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={4500}
            pauseOnHover={true}
            skewAmount={4}
            easing="elastic"
          >
            {/* HOPE3 Learning Management System */}
            <SwapCard>
              <div className="browser-tab-bar">
                <div className="browser-tab active">
                  <div className="browser-tab-icon" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>H3</div>
                  <span className="browser-tab-title">HOPE3 Learn</span>
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
                  <span className="browser-url-text">learn.hope3.org</span>
                </div>
                <div className="browser-actions">
                  <span className="browser-action-btn">⭐</span>
                  <span className="browser-action-btn">⋮</span>
                </div>
              </div>
              <div className="browser-content">
                <div className="browser-content-header" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)' }}>
                  <h3>HOPE3 Learning Platform</h3>
                  <p>Interactive courses, mentorship, and skill development</p>
                </div>
                <div className="browser-content-body">
                  <div className="content-placeholder" style={{ background: 'linear-gradient(90deg, #e2e8f0 0%, #cbd5e1 100%)' }}></div>
                  <div className="content-placeholder medium" style={{ background: 'linear-gradient(90deg, #e2e8f0 0%, #cbd5e1 100%)' }}></div>
                  <div className="content-placeholder short" style={{ background: 'linear-gradient(90deg, #e2e8f0 0%, #cbd5e1 100%)' }}></div>
                  <div className="browser-content-image" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px', fontWeight: '600' }}>
                    📚 Course Dashboard
                  </div>
                </div>
              </div>
            </SwapCard>

            {/* HOPE3 Career Portal */}
            <SwapCard>
              <div className="browser-tab-bar">
                <div className="browser-tab active">
                  <div className="browser-tab-icon" style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>💼</div>
                  <span className="browser-tab-title">HOPE3 Careers</span>
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
                  <span className="browser-url-text">careers.hope3.org</span>
                </div>
                <div className="browser-actions">
                  <span className="browser-action-btn">⭐</span>
                  <span className="browser-action-btn">⋮</span>
                </div>
              </div>
              <div className="browser-content">
                <div className="browser-content-header" style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}>
                  <h3>Career Opportunities</h3>
                  <p>Connect with top employers and launch your career</p>
                </div>
                <div className="browser-content-body">
                  <div className="content-placeholder" style={{ background: 'linear-gradient(90deg, #d1fae5 0%, #a7f3d0 100%)' }}></div>
                  <div className="content-placeholder medium" style={{ background: 'linear-gradient(90deg, #d1fae5 0%, #a7f3d0 100%)' }}></div>
                  <div className="content-placeholder short" style={{ background: 'linear-gradient(90deg, #d1fae5 0%, #a7f3d0 100%)' }}></div>
                  <div className="browser-content-image" style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px', fontWeight: '600' }}>
                    🚀 Job Opportunities
                  </div>
                </div>
              </div>
            </SwapCard>

            {/* HOPE3 Community Hub */}
            <SwapCard>
              <div className="browser-tab-bar">
                <div className="browser-tab active">
                  <div className="browser-tab-icon" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>🤝</div>
                  <span className="browser-tab-title">HOPE3 Community</span>
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
                  <span className="browser-url-text">community.hope3.org</span>
                </div>
                <div className="browser-actions">
                  <span className="browser-action-btn">⭐</span>
                  <span className="browser-action-btn">⋮</span>
                </div>
              </div>
              <div className="browser-content">
                <div className="browser-content-header" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' }}>
                  <h3>Community Network</h3>
                  <p>Connect with peers, mentors, and alumni</p>
                </div>
                <div className="browser-content-body">
                  <div className="content-placeholder" style={{ background: 'linear-gradient(90deg, #fef3c7 0%, #fde68a 100%)' }}></div>
                  <div className="content-placeholder medium" style={{ background: 'linear-gradient(90deg, #fef3c7 0%, #fde68a 100%)' }}></div>
                  <div className="content-placeholder short" style={{ background: 'linear-gradient(90deg, #fef3c7 0%, #fde68a 100%)' }}></div>
                  <div className="browser-content-image" style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px', fontWeight: '600' }}>
                    👥 Network Hub
                  </div>
                </div>
              </div>
            </SwapCard>

            {/* HOPE3 Innovation Lab */}
            <SwapCard>
              <div className="browser-tab-bar">
                <div className="browser-tab active">
                  <div className="browser-tab-icon" style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>🔬</div>
                  <span className="browser-tab-title">HOPE3 Innovation</span>
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
                  <span className="browser-url-text">innovation.hope3.org</span>
                </div>
                <div className="browser-actions">
                  <span className="browser-action-btn">⭐</span>
                  <span className="browser-action-btn">⋮</span>
                </div>
              </div>
              <div className="browser-content">
                <div className="browser-content-header" style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' }}>
                  <h3>Innovation Lab</h3>
                  <p>Research, development, and entrepreneurship</p>
                </div>
                <div className="browser-content-body">
                  <div className="content-placeholder" style={{ background: 'linear-gradient(90deg, #fecaca 0%, #fca5a5 100%)' }}></div>
                  <div className="content-placeholder medium" style={{ background: 'linear-gradient(90deg, #fecaca 0%, #fca5a5 100%)' }}></div>
                  <div className="content-placeholder short" style={{ background: 'linear-gradient(90deg, #fecaca 0%, #fca5a5 100%)' }}></div>
                  <div className="browser-content-image" style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px', fontWeight: '600' }}>
                    💡 Innovation Projects
                  </div>
                </div>
              </div>
            </SwapCard>

            {/* HOPE3 Mentorship Platform */}
            <SwapCard>
              <div className="browser-tab-bar">
                <div className="browser-tab active">
                  <div className="browser-tab-icon" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>🎯</div>
                  <span className="browser-tab-title">HOPE3 Mentors</span>
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
                  <span className="browser-url-text">mentors.hope3.org</span>
                </div>
                <div className="browser-actions">
                  <span className="browser-action-btn">⭐</span>
                  <span className="browser-action-btn">⋮</span>
                </div>
              </div>
              <div className="browser-content">
                <div className="browser-content-header" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' }}>
                  <h3>Mentorship Program</h3>
                  <p>One-on-one guidance from industry experts</p>
                </div>
                <div className="browser-content-body">
                  <div className="content-placeholder" style={{ background: 'linear-gradient(90deg, #e9d5ff 0%, #ddd6fe 100%)' }}></div>
                  <div className="content-placeholder medium" style={{ background: 'linear-gradient(90deg, #e9d5ff 0%, #ddd6fe 100%)' }}></div>
                  <div className="content-placeholder short" style={{ background: 'linear-gradient(90deg, #e9d5ff 0%, #ddd6fe 100%)' }}></div>
                  <div className="browser-content-image" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px', fontWeight: '600' }}>
                    🎓 Mentor Matching
                  </div>
                </div>
              </div>
            </SwapCard>
          </CardSwap>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Make an Impact?</h2>
          <p>Join our community of changemakers and help transform lives through education and empowerment.</p>
        </div>
        <div className="cta-buttons">
          <button 
            className="enhanced-cta-btn primary"
            onClick={() => {
              console.log('Apply to Join HOPE3 clicked');
              navigate('/join-hope3');
            }}
          >
            <span className="btn-icon">🎓</span>
            <span className="btn-text">Apply to Join HOPE3</span>
          </button>
          <button 
            className="enhanced-cta-btn secondary"
            onClick={() => {
              console.log('Volunteer with HOPE3 clicked');
              // Add navigation or modal logic here
            }}
          >
            <span className="btn-icon">🤝</span>
            <span className="btn-text">Volunteer with HOPE3</span>
          </button>
        </div>
      </section>

      <NewFooter />
    </div>
  );
};

export default WhyHope3;