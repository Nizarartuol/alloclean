import React from 'react'
import { Link } from 'react-router-dom'

function ServiceCard({ title, description, icon, link, bgColor = '#1239ac' }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className={`h-48 ${bgColor} flex items-center justify-center`}>
        <span className="text-6xl">{icon}</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={link} 
          className="text-[#1239ac] font-semibold hover:underline inline-flex items-center"
        >
          En savoir plus 
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard 