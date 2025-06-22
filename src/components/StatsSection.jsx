import React from 'react'

function StatsSection() {
  const stats = [
    {
      number: '500+',
      label: 'Clients Satisfaits',
      icon: '👥'
    },
    {
      number: '1000+',
      label: 'Projets Réalisés',
      icon: '✨'
    },
    {
      number: '5+',
      label: 'Années d\'Expérience',
      icon: '📅'
    },
    {
      number: '24/7',
      label: 'Support Client',
      icon: '🛎️'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl font-bold text-[#5DBCD2] mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection 