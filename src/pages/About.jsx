import React from 'react'
import { Link } from 'react-router-dom';
import { StarIcon, SparklesIcon, HeartIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

function About() {
  const values = [
    {
      name: 'Respect',
      description: "Respect de nos clients, de leurs espaces et de l'environnement.",
      icon: ShieldCheckIcon,
    },
    {
      name: 'Transparence',
      description: 'Des devis clairs et une communication honnête à chaque étape.',
      icon: StarIcon,
    },
    {
      name: 'Innovation',
      description: 'Utilisation de techniques et produits à la pointe pour des résultats optimaux.',
      icon: SparklesIcon,
    },
    {
      name: 'Engagement',
      description: 'Une équipe investie, soucieuse de dépasser vos attentes.',
      icon: HeartIcon,
    },
  ]

  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1239ac] to-[#A8D5BA] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À Propos d'AlloClean</h1>
          <p className="text-xl max-w-3xl mx-auto">Découvrez notre histoire, nos valeurs et notre engagement pour un service de nettoyage d'exception.</p>
        </div>
      </section>

      {/* Main content */}
      <div className="container mx-auto px-4 py-16">
        
        {/* Our History Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Notre histoire</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Depuis sa création, AlloClean a su s'imposer comme un acteur incontournable du nettoyage grâce à une approche centrée sur l'humain et la qualité. Nous avons débuté avec une petite équipe passionnée, animée par le désir d'offrir un service irréprochable à nos clients particuliers et professionnels. Aujourd'hui, nous sommes fiers d'accompagner de nombreux foyers et entreprises dans leur quête de propreté et de bien-être, en nous appuyant sur une réputation solide bâtie sur la confiance et l'excellence.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center shadow-lg">
                 <span className="text-gray-400 italic">Image de l'équipe ou du bureau</span>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nos valeurs fondamentales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.name} className="text-center p-8 bg-gray-50 rounded-lg shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300">
                <value.icon className="h-12 w-12 text-[#1239ac] mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.name}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team & Commitment Section */}
        <section>
            <div className="bg-gray-100 rounded-lg p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Notre équipe et notre engagement</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Nos collaborateurs sont le cœur de notre réussite. Chacun d'eux est sélectionné pour son sérieux, sa discrétion et son professionnalisme. Nous investissons dans la formation continue afin de garantir un service toujours à la hauteur des exigences du secteur et des attentes de nos clients.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Conscients de notre responsabilité environnementale, nous privilégions des produits écologiques et des méthodes respectueuses de la planète. Notre objectif : offrir un nettoyage efficace tout en préservant la santé de nos clients et de nos équipes, ainsi que l'environnement.
                        </p>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Rejoignez l'expérience AlloClean</h3>
                        <p className="text-gray-600 mb-6">
                            Contactez-nous pour découvrir une propreté où confiance, qualité et respect priment.
                        </p>
                        <Link
                            to="/contact"
                            className="btn-primary inline-block"
                        >
                            Contactez-nous
                        </Link>
                    </div>
                </div>
            </div>
        </section>

      </div>
    </div>
  )
}

export default About 