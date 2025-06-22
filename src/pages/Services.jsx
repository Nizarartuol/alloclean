import React from 'react'

function Services() {
  const services = [
    {
      title: 'Nettoyage Résidentiel',
      description: 'Service complet de nettoyage pour votre maison, adapté à vos besoins spécifiques.',
      icon: '🏠'
    },
    {
      title: 'Nettoyage Commercial',
      description: 'Solutions de nettoyage professionnel pour bureaux, magasins et espaces commerciaux.',
      icon: '🏢'
    },
    {
      title: 'Nettoyage après Construction',
      description: 'Nettoyage approfondi après travaux de construction ou rénovation.',
      icon: '🏗️'
    },
    {
      title: 'Nettoyage de Vitres',
      description: 'Service spécialisé pour des vitres impeccables, intérieures et extérieures.',
      icon: '🪟'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Nos Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services 