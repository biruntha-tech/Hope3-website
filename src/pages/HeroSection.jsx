"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const HeroSection = () => {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: 'url(/src/assets/college-graduation-pictures.jpg)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text */}
      <div
        className={`relative z-10 max-w-5xl px-6 transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        {/* Quote */}
        <blockquote className="text-white text-[26px] md:text-[30px] font-light leading-relaxed text-center">
          “Learning gives creativity, creativity leads to thinking,
          thinking provides knowledge, knowledge makes you great.”
        </blockquote>

        {/* Author – aligned like screenshot */}
        <cite className="block mt-4 text-white text-[14px] md:text-[16px] font-medium not-italic opacity-90 text-right">
          — Dr. A. P. J. Abdul Kalam
        </cite>

        {/* Animations Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate('/animations')}
            className="group relative px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <span className="flex items-center gap-2">
              ✨ View Animations
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>

    </section>
  )
}

export default HeroSection