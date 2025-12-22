import * as motion from "motion/react-client";
import { useState } from "react";
import Navbar from "./navbar.jsx";
import NewFooter from "./NewFooter.jsx";
import "../styles/animations.css";
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
                <h1 className="animations-title">Scroll-Triggered Animations</h1>
                <p className="animations-description">
                    Scroll down to see the beautiful animations come to life!
                </p>
                <ScrollTriggered />

                {/* App Store Section - "Inside the Box" Overlapping Mode */}
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

