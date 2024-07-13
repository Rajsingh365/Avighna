import React from 'react'

function GlassMorphism({className, children }) {
  return (
    <div className={`bg-opacity-25 bg-white backdrop-blur-3xl shadow-lg rounded-lg border-opacity-18 border border-gray-300 bg-clip-padding text-white text-xl md:text-3xl ${className}`}>
      {children}
    </div>
  )
}

export default GlassMorphism