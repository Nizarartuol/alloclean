import React from 'react'

function BenefitsSection() {
  const benefits = [
    {
      title: 'Qualité Premium',
      description: 'Nous utilisons des produits et équipements de haute qualité pour garantir des résultats impeccables. Notre expertise nous permet de traiter efficacement tous types de surfaces et de matériaux.',
      icon: '✨'
    },
    {
      title: 'Flexibilité Totale',
      description: 'Adaptez nos services à vos besoins : fréquence, horaires, zones à nettoyer. Nous nous organisons selon vos contraintes pour vous offrir le meilleur service possible.',
      icon: '🕒'
    },
    {
      title: 'Équipe Qualifiée',
      description: 'Notre personnel est formé aux dernières techniques de nettoyage et suit régulièrement des formations pour maintenir un niveau d\'excellence constant.',
      icon: '👥'
    },
    {
      title: 'Prix Transparents',
      description: 'Pas de surprise ! Nos devis sont détaillés et transparents. Vous savez exactement ce que vous payez et pourquoi.',
      icon: '💰'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Les Avantages AlloClean</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="text-4xl mr-4">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1239ac] mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-center text-[#1239ac] mb-6">
            Pourquoi Choisir AlloClean ?
          </h3>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              AlloClean se distingue par son approche holistique du nettoyage. Nous ne nous contentons pas de nettoyer vos espaces, nous les transformons en environnements sains et agréables. Notre expertise nous permet de :
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Identifier et traiter les zones nécessitant une attention particulière</li>
              <li>Utiliser les produits les plus adaptés à chaque type de surface</li>
              <li>Respecter les normes d'hygiène les plus strictes</li>
              <li>Garantir une propreté durable et visible</li>
              <li>Offrir un service personnalisé selon vos besoins spécifiques</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Notre engagement envers l'excellence se reflète dans chaque aspect de notre service, de la première prise de contact à la fin de l'intervention. Nous croyons que la propreté est essentielle au bien-être et à la productivité, et nous nous efforçons de créer des espaces où vous vous sentez bien.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection 