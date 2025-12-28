import React, { useState, useEffect } from 'react';
import '../styles/Hope3Journey.css';
import journeyImage from '../assets/journey/Gemini_Generated_Image_yyvlsoyyvlsoyyvl-removebg-preview.png';
import mobileTrackImage from '../assets/journey/_620DED87-C755-4F75-9D5F-3EA3E770D415_-removebg-preview.png';
import Navbar from './navbar';
import NewFooter from './NewFooter';

const JourneyTimeline = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileSelectedStation, setMobileSelectedStation] = useState(null);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const studentData = [
    { year: 2018, students: 7, station: "Social projects findabed", icon: "🏠" },
    { year: 2019, students: 23, station: "Varsity", icon: "🎓" },
    { year: 2020, students: 23, station: "RCD", icon: "🔬" },
    { year: 2021, students: 28, station: "Enters into IIT Game", icon: "🏆" },
    { year: 2022, students: 55, station: "Study in Abroad", icon: "✈️" },
    { year: 2023, students: 18, station: "Earn while u Learn", icon: "💼" },
    { year: 2024, students: 15, station: "Student Entreprenship", icon: "🚀" },
    { year: 2025, students: 2, station: "Enters into Maang", icon: "💻" }
  ];

  const totalStudents = 139;

  // Calculate zigzag positions for 8 stations
  const getZigzagPosition = (index, total) => {
    const segment = index / (total - 1);
    const x = 8 + segment * 84; // Spread across width
    let y = index % 2 === 0 ? 35 : 65; // Zigzag pattern
    if (index === 2) y = 30; // Move 2020 slightly up from 2018
    if (index === 4) y = 2; // Move 2022 slightly up from 2020
    if (index === 6) y = 20; // Move 2024 slightly up from 2022
    if (index === 3) y = 85; // Move 2021 slightly down from 2019
    if (index === 5) y = 60; // Move 2023 slightly down from 2021
    if (index === 7) y = 85; // Move 2025 slightly down from 2023
    return { x: `${x}% `, y: `${y}% ` };
  };

  return (
    <>
      <Navbar />
      {isMobile ? (
        // Mobile-specific layout
        <div className="mobile-journey-layout">
          <div style={{ textAlign: 'center' }}>
            <h1 className="journey-headline">HOPE3 Journey</h1>
          </div>

          {/* Banner Block with Quote */}
          <div className="banner-block">
            <p className="banner-quote">
              "The Journey Of A Thousand Miles Begins With One Step"
            </p>
            <p className="banner-author">- Lao Tzu</p>
          </div>

          {/* HOPE3 Story Section */}
          <div className="hope3-story">
            <p className="story-intro">
              <strong>HOPE3 began modestly,</strong> driven by a simple vision to make learning accessible to all.
            </p>
            <p className="story-text">
              Over the years, it has grown steadily, shaping countless student journeys.
            </p>
            <p className="story-text">
              This transformation was made possible by the unwavering support of volunteers.
            </p>
            <p className="story-text">
              Generous donors joined hands, strengthening every step of the mission.
            </p>
            <p className="story-text">
              Each contribution—big or small—added a unique spark of change.
            </p>
            <p className="story-text">
              Together, they empowered students to learn, dream, and achieve.
            </p>
            <p className="story-highlight">
              <strong>Today, HOPE3 stands as a catalyst—transforming every student's life.</strong>
            </p>
          </div>

          {/* Zigzag Track Visualization */}
          <div className="track-visualization">
            <p className="track-instruction">
              Tap the icons to see milestone details
            </p>
            <div className="track-container">
              <img src={mobileTrackImage} alt="Journey Track" className="track-image" />

              {/* Station markers in zigzag pattern */}
              {studentData.map(({ year, students, station, icon }, index) => {
                const position = 8 + (index * 11.5); // Distribute vertically
                const isLeft = index % 2 === 0; // Alternate left/right
                const isSelected = mobileSelectedStation === year;

                return (
                  <div
                    key={year}
                    className={`track - station ${isLeft ? 'left' : 'right'} `}
                    style={{ top: `${position}% ` }}
                  >
                    {/* Icon marker */}
                    <div
                      className={`track - marker ${isSelected ? 'selected' : ''} `}
                      onClick={() => setMobileSelectedStation(isSelected ? null : year)}
                    >
                      <span className="track-icon">{icon}</span>
                    </div>

                    {/* Content box - shows on selection */}
                    {isSelected && (
                      <div className={`track - info - box ${isLeft ? 'left' : 'right'} `}>
                        <div className="track-year">{year}</div>
                        <div className="track-station-name">{station}</div>
                        <div className="track-students">{students} Students</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        // Desktop layout (unchanged)
        <div className="journey-container">
          <div style={{ textAlign: 'center' }}>
            <h1 className="journey-headline">HOPE3 Journey</h1>
          </div>

          {/* Fixed Hover Card Container */}
          <div className="hover-card-container">
            {selectedYear && (
              <div className="hover-card show">
                <h3>{selectedYear}</h3>
                <h4 className="hover-station-name">{studentData.find(d => d.year === selectedYear)?.station}</h4>
                <p className="student-count">{studentData.find(d => d.year === selectedYear)?.students} Students</p>
              </div>
            )}
          </div>

          <div className="timeline-container">
            <img src={journeyImage} alt="Journey Timeline" className="journey-image" />

            {/* Station markers */}
            {studentData.map(({ year, students, station, icon }, index) => {
              const { x, y } = getZigzagPosition(index, studentData.length);
              return (
                <div
                  key={year}
                  className="station-container"
                  style={{ left: x, top: y }}
                  onMouseEnter={() => setSelectedYear(year)}
                  onMouseLeave={() => setSelectedYear(null)}
                >
                  <div className={`station - marker ${selectedYear === year ? 'active' : ''} `}>
                    <div className="station-icon">{icon}</div>
                  </div>
                  <div className="station-name-label">{station}</div>
                </div>
              );
            })}
          </div>

          {/* Total summary card */}
          {/*<div className="total-card">
            <h4>Total Impact</h4>
            <p className="total-students">{totalStudents} Students</p>
            <p className="year-range">2018 - 2025</p>
          </div>*/}
        </div>
      )}
      <NewFooter />
    </>
  );
};

export default JourneyTimeline;