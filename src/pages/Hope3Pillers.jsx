import Navbar from "./navbar.jsx"
import NewFooter from "./NewFooter.jsx"
import { useEffect, useState } from 'react'
import './Hope3Pillers.css'
import palaniImage from '../assets/pillers/palani.png'
import neelImage from '../assets/pillers/neel.png'
import meenachiImage from '../assets/pillers/meenachi.png'
import SwipeableVideoStack from '../components/SwipeableVideoStack.jsx'

function Hope3Pillers() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const pillars = [
    {
      id: 1,
      name: "Palaniappan Vairavan",
      title: "Founder",
      image: palaniImage,
      bio: "Mr. Palaniappan Vairavan is an educator, entrepreneur, and a visionary who believes that education can alleviate most of the key challenges faced by society today. He is the president of HOPE3 Foundation and the Dean of the Computer Science department of HOPE3 Varsity. Palani has been volunteering with many educational nonprofit organizations since 2016 to level the playing field for the circumstantially challenged students. He provided the impetus for conception of HOPE3 by identifying the need for providing educational opportunities of the highest quality for the talented students who lack the resources or exposure. He teaches data structures, algorithms, web and mobile app development in HOPE3 Varsity. Professionally he works at Amazon Corporation, Washington as a Senior Software Engineer. He holds a MS in Computer Science from East Carolina University. On the personal front he loves playing tennis and outdoor activities with his family.",
      achievements: [
        "President of HOPE3 Foundation",
        "Dean of Computer Science at HOPE3 Varsity",
        "Senior Software Engineer at Amazon Corporation",
        "MS in Computer Science from East Carolina University"
      ],
      quote: "Education can alleviate most of the key challenges faced by society today.",
      contact: {
        email: "palani@hope3.org"
      }
    },
    {
      id: 2,
      name: "Neelakandan Venkataraman",
      title: "Co-founder",
      image: neelImage,
      bio: "Neelakandan Venkataraman is passionate about learning and teaching. Neelakandan has been part of the Hope 3 Foundation as a member in governing body since the inception of the non profit organization. Neelakandan is motivated to create a change through personal and social awareness – especially within the upcoming generation. In addition to being an advisor to the Hope 3 foundation long term strategy and regular activities, Neelakandan enjoys connecting with students through Soft Skills club, as part of Hope3 Varsity. Professionally, Neelakandan is a Director of Hardware Engineering at Microsoft Devices, designing products like Surface computers, Xbox and Hololens. Prior to joining Microsoft, Neelakandan has been designing automotive and Marine engines in India, Germany and US. Neelakandan has a Masters in Business Administration degree from University of Wisconsin and Bachelors of Mechanical Engineering from Kumaraguru College of Technology, Coimbatore, India.",
      achievements: [
        "Co-founder and Governing Body Member of HOPE3 Foundation",
        "Director of Hardware Engineering at Microsoft Devices",
        "Product designer for Surface, Xbox, and Hololens",
        "MBA from University of Wisconsin"
      ],
      quote: "Creating change through personal and social awareness, especially within the upcoming generation.",
      contact: {
        email: "neel@hope3.org"
      }
    },
    {
      id: 3,
      name: "Dr. Meenakshi Sundaram",
      title: "Co-founder",
      image: meenachiImage,
      bio: "Dr. Meenakshi Sundaram is an educator, scientist, and a yoga, meditation enthusiast. He is one of the founding members of HOPE3 Foundation and is the president of HOPE3 Varsity the educational wing of HOPE3 Foundation. He believes in education that is actionable and education that builds a seeking (research) mindset. Meenakshi actively engages in a wide variety of HOPE3 Varsity classes as a mentor and many a time as a student. He is also a certified breathwork and meditation instructor with the Art of Living Foundation. Meenakshi works in Intel Corporation, Oregon as an process engineer helping in the manufacturing process of semiconductor chips. He holds a MS, PhD from Cornell University, New York in Mechanical Engineering, and a M Tech in Computational Science from Indian Institute of Science, Bangalore.",
      achievements: [
        "Co-founder and President of HOPE3 Varsity",
        "Process Engineer at Intel Corporation",
        "PhD from Cornell University in Mechanical Engineering",
        "Certified breathwork and meditation instructor"
      ],
      quote: "Education should be actionable and build a seeking (research) mindset.",
      contact: {
        email: "meenakshi.sundaram@hope3.org"
      }
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const contentElements = document.querySelectorAll('.founder-section')
      const windowHeight = window.innerHeight
      
      let currentIndex = 0
      let maxVisibility = 0
      
      // Find which section is most visible in the viewport
      contentElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect()
        const elementTop = rect.top
        const elementBottom = rect.bottom
        
        // Calculate how much of the section is visible
        const visibleTop = Math.max(0, windowHeight - Math.max(elementTop, 0))
        const visibleBottom = Math.min(windowHeight, Math.max(elementBottom, 0))
        const visibleHeight = Math.max(0, visibleBottom - Math.max(elementTop, 0))
        
        const visibilityRatio = visibleHeight / windowHeight
        
        // Use the section that has the most visibility and is at least 20% visible
        if (visibilityRatio > maxVisibility && visibilityRatio > 0.2) {
          maxVisibility = visibilityRatio
          currentIndex = index
        }
      })
      
      // Update active image with smooth transition only if it actually changed
      if (currentIndex !== activeImageIndex) {
        console.log(`Switching to ${pillars[currentIndex].name}'s image (section ${currentIndex + 1})`)
        setActiveImageIndex(currentIndex)
        
        // Smooth transition effect
        const imageContainer = document.querySelector('.sticky-image-container')
        if (imageContainer) {
          imageContainer.style.opacity = '0.3'
          imageContainer.style.transform = 'translateY(10px) scale(0.98)'
          
          setTimeout(() => {
            imageContainer.style.opacity = '1'
            imageContainer.style.transform = 'translateY(0) scale(1)'
          }, 150)
        }
      }
    }

    // Throttled scroll handler for better performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    // Initial setup
    window.addEventListener('scroll', throttledScroll)
    
    // Call immediately to set initial state
    setTimeout(() => {
      handleScroll()
    }, 100)
    
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [activeImageIndex, pillars])

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pillars-hero py-20 px-6">
        <div className="max-w-6xl mx-auto text-center animate-fade-in relative z-10">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-blue-100 text-sm font-medium backdrop-blur-sm border border-white border-opacity-30 mb-6">
              ✨ Meet Our Visionary Leaders
            </span>
          </div>
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Meet Our <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Founders</span>
          </h1>
          <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Meet the visionary leaders who founded HOPE3 Foundation. Their expertise, passion, and dedication drive our mission to transform lives through quality education and empowerment of circumstantially challenged students.
          </p>
          
          {/* Floating Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-white mb-2">3</div>
              <div className="text-blue-100 text-sm">Visionary Founders</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-100 text-sm">Years Combined Experience</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
              <div className="text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-blue-100 text-sm">Lives Transformed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Sticky Scroll Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Side - Sticky Image Area (Apple/Stripe Style) */}
            <div className="lg:w-2/5">
              <div className="sticky top-20 h-screen flex items-center justify-center">
                <div className="sticky-image-container w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 transition-all duration-500 ease-out">
                  <div className="text-center">
                    {/* Progress Indicator */}
                    <div className="flex justify-center mb-6">
                      <div className="flex space-x-2">
                        {pillars.map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === activeImageIndex 
                                ? 'bg-gradient-to-r from-blue-500 to-purple-600 w-8' 
                                : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="relative">
                      <img
                        src={pillars[activeImageIndex].image}
                        alt={pillars[activeImageIndex].name}
                        className="pillar-profile-image w-48 h-48 rounded-full object-cover mx-auto mb-6 border-4 border-gray-100 shadow-xl transition-all duration-500"
                      />
                      
                      {/* Floating Badge */}
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                        {activeImageIndex + 1}/3
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-black mb-2">
                      {pillars[activeImageIndex].name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {pillars[activeImageIndex].title}
                    </p>
                    
                    {/* Quick Stats */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mt-4">
                      <div className="text-xs text-gray-500 mb-1">Current Focus</div>
                      <div className="text-sm font-medium text-gray-700">
                        {activeImageIndex === 0 && "Education & Technology"}
                        {activeImageIndex === 1 && "Hardware & Innovation"}
                        {activeImageIndex === 2 && "Research & Wellness"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Scrolling Content */}
            <div className="lg:w-3/5 space-y-20">
              {pillars.map((pillar, index) => (
                <div 
                  key={pillar.id} 
                  className="founder-section min-h-screen flex items-center py-20"
                  data-index={index}
                >
                  <div className="w-full bg-white rounded-3xl shadow-xl p-12 relative overflow-hidden">
                    {/* Decorative Elements - Subtle for white theme */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-16 translate-x-16 opacity-30"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-50 to-yellow-50 rounded-full translate-y-12 -translate-x-12 opacity-30"></div>
                    
                    <div className="space-y-8 relative z-10">
                      {/* Header */}
                      <div className="border-b border-gray-200 pb-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                            {index + 1}
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-black mb-1">
                              {pillar.name}
                            </h2>
                            <p className="text-base text-gray-600 flex items-center gap-2">
                              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                              {pillar.title}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Bio */}
                      <div>
                        <h3 className="text-lg font-semibold text-black mb-4">
                          About
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {pillar.bio}
                        </p>
                      </div>
                      
                      {/* Philosophy */}
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
                        <h4 className="text-lg font-semibold text-black mb-4">
                          Philosophy
                        </h4>
                        <blockquote className="text-gray-600 italic text-sm leading-relaxed">
                          "{pillar.quote}"
                        </blockquote>
                      </div>

                      {/* Achievements */}
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm">🏆</span>
                          </div>
                          <h3 className="text-lg font-semibold text-black">
                            Key Achievements
                          </h3>
                        </div>
                        <div className="grid gap-4">
                          {pillar.achievements.map((achievement, achievementIndex) => (
                            <div 
                              key={achievementIndex} 
                              className="achievement-item flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                            >
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                                <span className="text-white text-sm font-bold">✓</span>
                              </div>
                              <div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                  {achievement}
                                </p>
                                <div className="mt-2 flex items-center gap-2">
                                  <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                                  <span className="text-xs text-gray-400">Professional Excellence</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Contact */}
                      <div className="pt-6 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                              <span className="text-blue-600 font-semibold">@</span>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Contact</p>
                              <a 
                                href={`mailto:${pillar.contact.email}`}
                                className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 flex items-center gap-1"
                              >
                                {pillar.contact.email}
                                <span className="text-xs">↗</span>
                              </a>
                            </div>
                          </div>
                          
                          {/* Social Proof */}
                          <div className="text-right">
                            <div className="flex items-center gap-1 mb-1">
                              <span className="text-yellow-400 text-sm">⭐</span>
                              <span className="text-sm font-medium text-gray-700">4.9</span>
                            </div>
                            <p className="text-xs text-gray-500">Leadership Rating</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Swipeable Video Stack Section */}
      <section className="video-stack-section py-20 px-6 bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-white bg-opacity-60 rounded-full text-purple-700 text-sm font-medium backdrop-blur-sm border border-white border-opacity-40 mb-6">
              🎥 Interactive Experience
            </span>
          </div>
          
          <h2 className="section-title text-3xl font-bold text-black mb-4">
            Watch Our Story
          </h2>
          <p className="text-gray-600 text-base mb-12 max-w-2xl mx-auto">
            Discover HOPE3's impact through these interactive videos. Swipe through our journey of transformation and empowerment.
          </p>
          
          {/* Video Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-4 border border-white border-opacity-50">
              <div className="text-2xl font-bold text-purple-600 mb-1">50K+</div>
              <div className="text-gray-600 text-sm">Video Views</div>
            </div>
            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-4 border border-white border-opacity-50">
              <div className="text-2xl font-bold text-blue-600 mb-1">12</div>
              <div className="text-gray-600 text-sm">Success Stories</div>
            </div>
            <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl p-4 border border-white border-opacity-50">
              <div className="text-2xl font-bold text-green-600 mb-1">95%</div>
              <div className="text-gray-600 text-sm">Satisfaction Rate</div>
            </div>
          </div>
          
          {/* Swipeable Video Stack */}
          <SwipeableVideoStack />
          
          {/* Enhanced Helper Text */}
          <div className="mt-12">
            <div className="helper-text inline-flex items-center gap-3 px-8 py-4 rounded-full">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">👆</span>
              </div>
              <p className="text-sm text-gray-700 font-medium">
                Swipe the top video left or right. Swiped videos move to the back of the stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NewFooter />
    </main>
  )
}

export default Hope3Pillers