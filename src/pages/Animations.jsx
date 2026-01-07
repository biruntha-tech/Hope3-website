import * as motion from "motion/react-client";
import { useState } from "react";
import Navbar from "./navbar.jsx";
import NewFooter from "./NewFooter.jsx";
import "../styles/animations.css";
import CardSwap, { Card as SwapCard } from "../components/CardSwap/CardSwap";
import CardFlipCarousel, { FlipCard } from "../components/CardFlipCarousel/CardFlipCarousel";
import FlyingPosters from "../components/FlyingPosters/FlyingPosters";
import RopePhysics from "../components/RopePhysics.jsx";
import FlipCardAnimation from "../components/FlipCardAnimation.jsx";
export default function Animations() {
    const [expandedCard, setExpandedCard] = useState(null);

    const toggleCard = (cardId) => {
        if (expandedCard === cardId) {
            setExpandedCard(null);
        } else {
            setExpandedCard(cardId);
        }
    };

    return (
        <div className="animations-page">
            <Navbar />
            <div className="animations-content">
                {/* Scroll Triggered Section */}
                <div className="animation-section">
                    <h1 className="animations-title">Scroll-Triggered Animations</h1>
                    <p className="animations-description">
                        Scroll down to see the beautiful animations come to life!
                    </p>
                    <ScrollTriggered />
                </div>

                {/* App Store Section - "Inside the Box" Overlapping Mode */}
                <div className="animation-section">
                    <div id="app-store" className="dark-mode-store today-box-container">
                        <header className="today-header">
                            <div>
                                <span className="current-date">Saturday, 21 December</span>
                                <h2 className="store-title">Today</h2>
                            </div>
                            <div className="avatar-group">
                                <img
                                    alt="User Avatar"
                                    loading="lazy"
                                    width="44"
                                    height="44"
                                    className="user-profile-img"
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hope3"
                                />
                            </div>
                        </header>

                        <div className={`card-grid-absolute ${expandedCard ? 'has-expanded' : ''}`}>
                            {/* 1. Mountain */}
                            <div
                                className={`click-card mountain ${expandedCard === 'mountain' ? 'expanded' : ''}`}
                                onClick={() => toggleCard('mountain')}
                            >
                                <div className="hover-card-content">
                                    {expandedCard === 'mountain' && (
                                        <button className="close-card-btn" onClick={(e) => { e.stopPropagation(); setExpandedCard(null); }}>×</button>
                                    )}
                                    <div className="hover-card-image-wrap">
                                        <img src="/src/assets/mountain-card.png" alt="Mountain" />
                                    </div>
                                    <div className="hover-card-info">
                                        <div className="info-top">
                                            <span className="category">Travel</span>
                                            <h2 className="card-h2">5 Inspiring Apps for Your Next Trip</h2>
                                        </div>
                                        <div className="info-bottom">
                                            <p className="reveal-text">Explore the world with these hand-picked travel companions designed for adventure. From hidden gems to city guides, we've got you covered.</p>
                                            <div className="card-action">
                                                <button className="get-btn">GET</button>
                                                <span className="in-app">In-App Purchases</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2. Leaves */}
                            <div
                                className={`click-card leaves ${expandedCard === 'leaves' ? 'expanded' : ''}`}
                                onClick={() => toggleCard('leaves')}
                            >
                                <div className="hover-card-content">
                                    {expandedCard === 'leaves' && (
                                        <button className="close-card-btn" onClick={(e) => { e.stopPropagation(); setExpandedCard(null); }}>×</button>
                                    )}
                                    <div className="hover-card-image-wrap">
                                        <img src="/src/assets/leaves-card.png" alt="Leaves" />
                                    </div>
                                    <div className="hover-card-info">
                                        <div className="info-top">
                                            <span className="category">Serenity</span>
                                            <h2 className="card-h2">Contemplate the Meaning of Life</h2>
                                        </div>
                                        <div className="info-bottom">
                                            <p className="reveal-text">Twice a day, take a moment to reflect on existence and inner peace. Master the art of being present in every moment.</p>
                                            <div className="card-action">
                                                <button className="get-btn">GET</button>
                                                <span className="in-app">In-App Purchases</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Stairs */}
                            <div
                                className={`click-card stairs ${expandedCard === 'stairs' ? 'expanded' : ''}`}
                                onClick={() => toggleCard('stairs')}
                            >
                                <div className="hover-card-content">
                                    {expandedCard === 'stairs' && (
                                        <button className="close-card-btn" onClick={(e) => { e.stopPropagation(); setExpandedCard(null); }}>×</button>
                                    )}
                                    <div className="hover-card-image-wrap">
                                        <img src="/src/assets/urban-card.png" alt="Stairs" />
                                    </div>
                                    <div className="hover-card-info">
                                        <div className="info-top">
                                            <span className="category">Explore</span>
                                            <h2 className="card-h2">Urban Exploration Apps</h2>
                                        </div>
                                        <div className="info-bottom">
                                            <p className="reveal-text">For the vertically-inclined explorer searching for hidden city secrets. Find rooftop views and forgotten tunnels in your city.</p>
                                            <div className="card-action">
                                                <button className="get-btn">GET</button>
                                                <span className="in-app">In-App Purchases</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 4. Hat */}
                            <div
                                className={`click-card hat ${expandedCard === 'hat' ? 'expanded' : ''}`}
                                onClick={() => toggleCard('hat')}
                            >
                                <div className="hover-card-content">
                                    {expandedCard === 'hat' && (
                                        <button className="close-card-btn" onClick={(e) => { e.stopPropagation(); setExpandedCard(null); }}>×</button>
                                    )}
                                    <div className="hover-card-image-wrap">
                                        <img src="/src/assets/hat-card.png" alt="Hat" />
                                    </div>
                                    <div className="hover-card-info">
                                        <div className="info-top">
                                            <span className="category">Fashion</span>
                                            <h2 className="card-h2">Take Control of Your Hat Life</h2>
                                        </div>
                                        <div className="info-bottom">
                                            <p className="reveal-text">Stunning new app to manage your collection with style and precision. Never misplace your favorite fedora again.</p>
                                            <div className="card-action">
                                                <button className="get-btn">GET</button>
                                                <span className="in-app">In-App Purchases</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card Flip Carousel Animation Section */}
                <div className="animation-section">
                    <h2 className="section-title">Card Flip Carousel</h2>
                    <p className="section-description">
                        Watch the 3D carousel rotate with smooth flip animations! Click on cards or dots to navigate.
                    </p>
                    <div style={{ height: '700px', position: 'relative' }}>
                        <CardFlipCarousel
                            width={350}
                            height={280}
                            radius={280}
                            delay={5000}
                            pauseOnHover={true}
                            rotationSpeed={1.8}
                            flipDuration={0.9}
                        >
                            {/* Social Media Card 1 - Instagram Style */}
                            <FlipCard>
                                <div className="social-card">
                                    <div className="social-card-header">
                                        <img 
                                            className="social-avatar" 
                                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hope3Student1" 
                                            alt="Student" 
                                        />
                                        <div className="social-user-info">
                                            <h4>Sarah Chen</h4>
                                            <p>HOPE3 Graduate • Computer Science</p>
                                        </div>
                                    </div>
                                    <div className="social-card-content">
                                        <h3>My Journey with HOPE3</h3>
                                        <p>From struggling with basic programming to landing my dream job at a tech startup! HOPE3's mentorship program changed everything.</p>
                                        <img 
                                            className="social-card-image" 
                                            src="https://picsum.photos/300/120?random=10" 
                                            alt="Graduation" 
                                        />
                                    </div>
                                    <div className="social-card-footer">
                                        <div className="social-actions">
                                            <span className="social-action">❤️ 234</span>
                                            <span className="social-action">💬 45</span>
                                            <span className="social-action">🔄 12</span>
                                        </div>
                                        <span className="social-timestamp">2 hours ago</span>
                                    </div>
                                </div>
                            </FlipCard>

                            {/* App Card 1 - Learning Platform */}
                            <FlipCard>
                                <div className="app-card">
                                    <div className="app-card-header">
                                        <div className="app-icon">📚</div>
                                        <div className="app-info">
                                            <h3>HOPE3 Learn</h3>
                                            <p>Education Platform</p>
                                        </div>
                                    </div>
                                    <div className="app-card-body">
                                        <p className="app-description">
                                            Interactive learning platform designed for HOPE3 students. Access courses, track progress, and connect with mentors.
                                        </p>
                                        <div className="app-features">
                                            <span className="feature-tag">Interactive</span>
                                            <span className="feature-tag">Mentorship</span>
                                            <span className="feature-tag">Progress Tracking</span>
                                        </div>
                                    </div>
                                    <div className="app-card-footer">
                                        <div className="app-rating">
                                            <span>⭐⭐⭐⭐⭐</span>
                                            <span>4.9</span>
                                        </div>
                                        <button className="download-btn">Get Started</button>
                                    </div>
                                </div>
                            </FlipCard>

                            {/* Social Media Card 2 - LinkedIn Style */}
                            <FlipCard>
                                <div className="social-card">
                                    <div className="social-card-header">
                                        <img 
                                            className="social-avatar" 
                                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hope3Mentor1" 
                                            alt="Mentor" 
                                        />
                                        <div className="social-user-info">
                                            <h4>Dr. Maria Rodriguez</h4>
                                            <p>HOPE3 Mentor • Senior Software Engineer</p>
                                        </div>
                                    </div>
                                    <div className="social-card-content">
                                        <h3>Proud Mentor Moment</h3>
                                        <p>Just watched another HOPE3 student present their final project. The innovation and dedication never cease to amaze me! 🚀</p>
                                        <img 
                                            className="social-card-image" 
                                            src="https://picsum.photos/300/120?random=11" 
                                            alt="Presentation" 
                                        />
                                    </div>
                                    <div className="social-card-footer">
                                        <div className="social-actions">
                                            <span className="social-action">❤️ 156</span>
                                            <span className="social-action">💬 28</span>
                                            <span className="social-action">🔄 8</span>
                                        </div>
                                        <span className="social-timestamp">5 hours ago</span>
                                    </div>
                                </div>
                            </FlipCard>

                            {/* App Card 2 - Networking App */}
                            <FlipCard>
                                <div className="app-card">
                                    <div className="app-card-header">
                                        <div className="app-icon">🤝</div>
                                        <div className="app-info">
                                            <h3>HOPE3 Connect</h3>
                                            <p>Networking Platform</p>
                                        </div>
                                    </div>
                                    <div className="app-card-body">
                                        <p className="app-description">
                                            Connect with fellow students, alumni, and mentors. Build your professional network and find collaboration opportunities.
                                        </p>
                                        <div className="app-features">
                                            <span className="feature-tag">Networking</span>
                                            <span className="feature-tag">Alumni</span>
                                            <span className="feature-tag">Collaboration</span>
                                        </div>
                                    </div>
                                    <div className="app-card-footer">
                                        <div className="app-rating">
                                            <span>⭐⭐⭐⭐⭐</span>
                                            <span>4.8</span>
                                        </div>
                                        <button className="download-btn">Join Network</button>
                                    </div>
                                </div>
                            </FlipCard>

                            {/* Social Media Card 3 - Success Story */}
                            <FlipCard>
                                <div className="social-card">
                                    <div className="social-card-header">
                                        <img 
                                            className="social-avatar" 
                                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hope3Student2" 
                                            alt="Student" 
                                        />
                                        <div className="social-user-info">
                                            <h4>James Thompson</h4>
                                            <p>HOPE3 Alumni • Entrepreneur</p>
                                        </div>
                                    </div>
                                    <div className="social-card-content">
                                        <h3>Startup Launch Success!</h3>
                                        <p>Two years after graduating from HOPE3, I'm excited to announce the launch of my EdTech startup! None of this would be possible without the foundation HOPE3 provided.</p>
                                        <img 
                                            className="social-card-image" 
                                            src="https://picsum.photos/300/120?random=12" 
                                            alt="Startup Launch" 
                                        />
                                    </div>
                                    <div className="social-card-footer">
                                        <div className="social-actions">
                                            <span className="social-action">❤️ 342</span>
                                            <span className="social-action">💬 67</span>
                                            <span className="social-action">🔄 23</span>
                                        </div>
                                        <span className="social-timestamp">1 day ago</span>
                                    </div>
                                </div>
                            </FlipCard>
                        </CardFlipCarousel>
                    </div>
                </div>

                {/* Card Swap Animation Section */}
                <div className="animation-section">
                    <h2 className="section-title">Card Swap Animation</h2>
                    <p className="section-description">
                        Watch the cards swap with a smooth elastic animation!
                    </p>
                    <div style={{ height: '600px', position: 'relative' }}>
                        <CardSwap
                            cardDistance={60}
                            verticalDistance={70}
                            delay={5000}
                            pauseOnHover={false}
                        >
                            {/* Card 1 - Google Search */}
                            <SwapCard>
                                <div className="browser-tab-bar">
                                    <div className="browser-tab active">
                                        <img className="browser-tab-icon" src="https://www.google.com/favicon.ico" alt="Google" />
                                        <span className="browser-tab-title">Google</span>
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
                                        <span className="browser-url-text">google.com</span>
                                    </div>
                                    <div className="browser-actions">
                                        <span className="browser-action-btn">⭐</span>
                                        <span className="browser-action-btn">⋮</span>
                                    </div>
                                </div>
                                <div className="browser-content">
                                    <div className="browser-content-header" style={{ background: 'linear-gradient(135deg, #4285f4 0%, #34a853 100%)' }}>
                                        <h3>Google Search</h3>
                                        <p>Search the world's information</p>
                                    </div>
                                    <div className="browser-content-body">
                                        <div className="content-placeholder"></div>
                                        <div className="content-placeholder medium"></div>
                                        <div className="content-placeholder short"></div>
                                        <img className="browser-content-image" src="https://picsum.photos/400/120?random=1" alt="Preview" />
                                    </div>
                                </div>
                            </SwapCard>

                            {/* Card 2 - YouTube */}
                            <SwapCard>
                                <div className="browser-tab-bar">
                                    <div className="browser-tab active">
                                        <img className="browser-tab-icon" src="https://www.youtube.com/favicon.ico" alt="YouTube" />
                                        <span className="browser-tab-title">YouTube</span>
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
                                        <span className="browser-url-text">youtube.com</span>
                                    </div>
                                    <div className="browser-actions">
                                        <span className="browser-action-btn">⭐</span>
                                        <span className="browser-action-btn">⋮</span>
                                    </div>
                                </div>
                                <div className="browser-content">
                                    <div className="browser-content-header" style={{ background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)' }}>
                                        <h3>YouTube</h3>
                                        <p>Watch, share & enjoy videos</p>
                                    </div>
                                    <div className="browser-content-body">
                                        <div className="content-placeholder"></div>
                                        <div className="content-placeholder medium"></div>
                                        <div className="content-placeholder short"></div>
                                        <img className="browser-content-image" src="https://picsum.photos/400/120?random=2" alt="Preview" />
                                    </div>
                                </div>
                            </SwapCard>

                            {/* Card 3 - GitHub */}
                            <SwapCard>
                                <div className="browser-tab-bar">
                                    <div className="browser-tab active">
                                        <img className="browser-tab-icon" src="https://github.com/favicon.ico" alt="GitHub" />
                                        <span className="browser-tab-title">GitHub</span>
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
                                        <span className="browser-url-text">github.com</span>
                                    </div>
                                    <div className="browser-actions">
                                        <span className="browser-action-btn">⭐</span>
                                        <span className="browser-action-btn">⋮</span>
                                    </div>
                                </div>
                                <div className="browser-content">
                                    <div className="browser-content-header" style={{ background: 'linear-gradient(135deg, #24292e 0%, #1a1e22 100%)' }}>
                                        <h3>GitHub</h3>
                                        <p>Where the world builds software</p>
                                    </div>
                                    <div className="browser-content-body">
                                        <div className="content-placeholder"></div>
                                        <div className="content-placeholder medium"></div>
                                        <div className="content-placeholder short"></div>
                                        <img className="browser-content-image" src="https://picsum.photos/400/120?random=3" alt="Preview" />
                                    </div>
                                </div>
                            </SwapCard>
                        </CardSwap>
                    </div>
                </div>

                {/* Flying Posters Animation Section */}
                <div className="animation-section">
                    <h2 className="section-title">Flying Posters</h2>
                    <p className="section-description">
                        Scroll or drag to see the 3D flying poster effect!
                    </p>
                    <div style={{ height: '600px', position: 'relative' }}>
                        <FlyingPosters
                            items={[
                                '/src/assets/mountain-card.png',
                                '/src/assets/leaves-card.png',
                                '/src/assets/urban-card.png',
                                '/src/assets/hat-card.png',
                                '/src/assets/travel-card.png'
                            ]}
                        />
                    </div>
                </div>

                {/* GSAP Flip Animation Section */}
                <div className="animation-section">
                    <h2 className="section-title">HOPE3 Journey - GSAP Flip Animation</h2>
                    <p className="section-description">
                        Explore the HOPE3 journey through interactive cards! Click on any card to see detailed information about our mission, values, and student transformation process.
                    </p>
                    <div style={{ height: '600px', position: 'relative' }}>
                        <FlipCardAnimation />
                    </div>
                </div>

                {/* Rope Physics Animation Section */}
                <div className="animation-section">
                    <h2 className="section-title">Interactive Rope Physics</h2>
                    <p className="section-description">
                        Drag the HOPE3 card to see realistic rope physics in action! The card is connected by joints and rope constraints.
                    </p>
                    <div style={{ height: '600px', position: 'relative' }}>
                        <RopePhysics />
                    </div>
                </div>
            </div>
            <NewFooter />
        </div>
    );
}

function ScrollTriggered() {
    return (
        <div style={container}>
            {food.map(([emoji, hueA, hueB], i) => (
                <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
            ))}
        </div>
    );
}

function Card({ emoji, hueA, hueB, i }) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

    return (
        <motion.div
            className={`card-container-${i}`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div style={{ ...splash, background }} />
            <motion.div style={card} variants={cardVariants} className="card">
                {emoji}
            </motion.div>
        </motion.div>
    );
}

const cardVariants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Styles   ================
 */

const container = {
    margin: "100px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
};

const cardContainer = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -120,
};

const splash = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card = {
    fontSize: 164,
    width: 300,
    height: 430,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#f5f5f5",
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
};

/**
 * ==============   Data   ================
 */

const food = [
    ["🍅", 340, 10],
    ["🍊", 20, 40],
    ["🍋", 60, 90],
    ["🍐", 80, 120],
    ["🍏", 100, 140],
    ["🫐", 205, 245],
    ["🍆", 260, 290],
    ["🍇", 290, 320],
];

