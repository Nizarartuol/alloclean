import React from 'react'

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">À propos d'AlloClean</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-4">
          AlloClean est votre partenaire de confiance pour tous vos besoins en nettoyage. 
          Notre mission est de fournir des services de nettoyage professionnels et fiables 
          pour rendre votre espace plus agréable et sain.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          Fondée avec passion, notre entreprise s'engage à :
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-600">
          <li>Fournir un service de qualité exceptionnelle</li>
          <li>Utiliser des produits écologiques et respectueux de l'environnement</li>
          <li>Former notre personnel aux meilleures pratiques de nettoyage</li>
          <li>Garantir votre satisfaction à 100%</li>
        </ul>
      </div>
    </div>
  )
}

export default About 