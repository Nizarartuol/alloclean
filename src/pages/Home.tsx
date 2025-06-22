import React from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import StatsSection from '../components/StatsSection'
import ProcessSection from '../components/ProcessSection'
import InfoSection from '../components/InfoSection'
import BenefitsSection from '../components/BenefitsSection'

function Home() {
  const features = [
    {
      title: 'Service Professionnel',
      description: 'Une équipe qualifiée et expérimentée à votre service',
      icon: '👨‍💼'
    },
    {
      title: 'Écologique',
      description: 'Produits respectueux de l\'environnement',
      icon: '🌱'
    },
    {
      title: 'Satisfaction Garantie',
      description: '100% satisfaction ou service gratuit',
      icon: '⭐'
    },
    {
      title: 'Flexible',
      description: 'Horaires adaptés à vos besoins',
      icon: '⏰'
    }
  ]

  const services = [
    {
      title: 'Nettoyage Résidentiel',
      description: 'Service complet pour votre maison, adapté à vos besoins spécifiques.',
      icon: '🏠',
      link: '/services#residential',
      bgColor: 'bg-[#5DBCD2]'
    },
    {
      title: 'Nettoyage Commercial',
      description: 'Solutions professionnelles pour bureaux, magasins et espaces commerciaux.',
      icon: '🏢',
      link: '/services#commercial',
      bgColor: 'bg-[#4CA8BC]'
    },
    {
      title: 'Nettoyage de Vitres',
      description: 'Service spécialisé pour des vitres impeccables, intérieures et extérieures.',
      icon: '🪟',
      link: '/services#windows',
      bgColor: 'bg-[#5DBCD2]'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1239ac] to-[#4CA8BC] text-white py-20 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Bienvenue sur AlloClean
            </h1>
            <p className="text-xl mb-8">
              Votre partenaire de confiance pour un nettoyage professionnel et écologique
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/quote"
                className="bg-white text-[#1239ac] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Demander un devis
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#1239ac] transition-colors duration-300"
              >
                Nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi nous choisir ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Services Preview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Services Populaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <InfoSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Process Section */}
      <ProcessSection />

      {/* CTA Section */}
      <section className="py-16 bg-[#1239ac] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à commencer ?</h2>
          <p className="text-xl mb-8">Contactez-nous dès aujourd'hui pour un devis gratuit</p>
          <Link
            to="/quote"
            className="bg-white text-[#1239ac] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home 