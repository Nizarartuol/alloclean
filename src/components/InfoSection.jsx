import React from 'react'

function InfoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-center md:text-left mb-12">Notre Engagement envers l'Excellence</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#1239ac] mb-4">Une Approche Professionnelle</h3>
                <p className="text-gray-600 mb-4">
                  Chez AlloClean, nous croyons que le nettoyage est bien plus qu'une simple tâche - c'est un art qui nécessite expertise, attention aux détails et passion. Notre équipe est composée de professionnels qualifiés qui suivent régulièrement des formations pour rester à la pointe des meilleures pratiques du secteur.
                </p>
                <p className="text-gray-600">
                  Chaque membre de notre équipe est formé aux techniques les plus avancées de nettoyage et utilise des équipements de pointe pour garantir des résultats impeccables. Nous accordons une importance particulière à la sécurité et à l'efficacité dans chaque intervention.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#1239ac] mb-4">Notre Engagement Écologique</h3>
                <p className="text-gray-600 mb-4">
                  La protection de l'environnement est au cœur de nos préoccupations. C'est pourquoi nous utilisons exclusivement des produits de nettoyage écologiques, certifiés et respectueux de l'environnement. Nos solutions sont non toxiques, biodégradables et sans danger pour les enfants et les animaux domestiques.
                </p>
                <p className="text-gray-600">
                  Nous optimisons également notre consommation d'eau et d'énergie lors de nos interventions, contribuant ainsi à la préservation des ressources naturelles. Notre approche durable s'étend à tous les aspects de notre service, des produits utilisés aux méthodes de travail.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#1239ac] mb-4">Une Satisfaction Garantie</h3>
                <p className="text-gray-600 mb-4">
                  Votre satisfaction est notre priorité absolue. Nous nous engageons à fournir un service de qualité exceptionnelle à chaque intervention. Si vous n'êtes pas entièrement satisfait, nous reviendrons gratuitement pour corriger tout problème.
                </p>
                <p className="text-gray-600">
                  Notre politique de satisfaction garantie s'accompagne d'une communication transparente et d'un suivi personnalisé. Nous prenons le temps de comprendre vos besoins spécifiques et d'adapter nos services en conséquence.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#1239ac] mb-4">Des Solutions Adaptées</h3>
                <p className="text-gray-600 mb-4">
                  Nous comprenons que chaque espace est unique et nécessite une approche personnalisée. C'est pourquoi nous proposons des solutions sur mesure, adaptées à vos besoins spécifiques et à vos contraintes particulières.
                </p>
                <p className="text-gray-600">
                  Que vous ayez besoin d'un nettoyage régulier ou ponctuel, d'une intervention en profondeur ou d'un entretien courant, nous élaborons un plan d'action qui correspond parfaitement à vos attentes et à votre budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoSection 