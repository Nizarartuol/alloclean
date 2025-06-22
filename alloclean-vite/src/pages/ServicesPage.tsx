import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  BuildingOfficeIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  SwatchIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Nettoyage de matelas',
    description: 'Élimination des acariens, taches et odeurs pour un sommeil sain et confortable.',
    icon: SwatchIcon,
    image: '/images/mattress-cleaning.jpg',
  },
  {
    title: 'Nettoyage fin de chantier',
    description: 'Préparation de votre espace pour une remise des clés impeccable.',
    icon: BuildingOfficeIcon,
    image: '/images/construction-cleaning.jpg',
  },
  {
    title: 'Nettoyage de tapis',
    description: 'Nettoyage professionnel pour redonner vie à vos tapis et moquettes.',
    icon: SparklesIcon,
    image: '/images/carpet-cleaning.jpg',
  },
  {
    title: 'Cristallisation de marbre',
    description: 'Traitement professionnel pour faire briller vos sols en marbre.',
    icon: WrenchScrewdriverIcon,
    image: '/images/marble-polishing.jpg',
  },
  {
    title: 'Ménage complet de maison',
    description: 'Service de nettoyage complet pour une maison impeccable.',
    icon: HomeIcon,
    image: '/images/house-cleaning.jpg',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#5DBCD2] to-[#A8D5BA] py-20">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Des solutions de nettoyage professionnelles adaptées à vos besoins
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-200">
                  {/* Placeholder pour l'image */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <service.icon className="h-16 w-16 text-[#5DBCD2]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/quote"
                    className="btn-primary inline-block"
                  >
                    Demander ce service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Besoin d'un service personnalisé ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contactez-nous pour discuter de vos besoins spécifiques
          </p>
          <Link
            to="/contact"
            className="btn-primary"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
} 