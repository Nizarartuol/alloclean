import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const advantages = [
  {
    title: 'Fiabilité',
    description: 'Une équipe professionnelle et fiable à votre service',
    icon: CheckCircleIcon,
  },
  {
    title: 'Produits écologiques',
    description: 'Utilisation exclusive de produits respectueux de l\'environnement',
    icon: CheckCircleIcon,
  },
  {
    title: 'Équipe professionnelle',
    description: 'Des experts formés et qualifiés pour un service impeccable',
    icon: CheckCircleIcon,
  },
];

const testimonials = [
  {
    content: "Service exceptionnel ! L'équipe est très professionnelle et minutieuse.",
    author: "Marie D.",
    role: "Client particulier"
  },
  {
    content: "Je recommande vivement Alloclean. Le nettoyage est impeccable à chaque fois.",
    author: "Pierre L.",
    role: "Client régulier"
  },
  {
    content: "Une équipe à l'écoute et des résultats au-delà de nos attentes.",
    author: "Sophie M.",
    role: "Client entreprise"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-[#5DBCD2] to-[#A8D5BA]">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            La propreté, c'est notre métier !
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Des solutions de nettoyage professionnelles pour votre maison et votre entreprise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="btn-primary bg-white text-[#5DBCD2] hover:bg-gray-100">
              Voir nos services
            </Link>
            <Link to="/quote" className="btn-primary bg-[#A8D5BA] text-white hover:bg-[#97C4A9]">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Pourquoi nous choisir ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage) => (
              <div
                key={advantage.title}
                className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300"
              >
                <advantage.icon className="h-12 w-12 text-[#5DBCD2] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Ce que disent nos clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div className="font-semibold text-[#5DBCD2]">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 