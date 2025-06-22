import React from 'react';
import { UsersIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline';

const stats = [
  { id: 1, name: 'Clients satisfaits', value: '1000+' },
  { id: 2, name: 'Années d\'expérience', value: '10+' },
  { id: 3, name: 'Interventions réalisées', value: '5000+' },
];

const values = [
  {
    title: 'Hygiène',
    description: 'Nous garantissons un niveau d\'hygiène irréprochable pour tous nos clients.',
    icon: SparklesIcon,
  },
  {
    title: 'Confiance',
    description: 'Une relation de confiance durable avec nos clients est notre priorité.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Qualité',
    description: 'Nous nous engageons à fournir un service de qualité supérieure.',
    icon: UsersIcon,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#5DBCD2] to-[#A8D5BA] py-20">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos d'Alloclean</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Votre partenaire de confiance pour tous vos besoins en nettoyage depuis plus de 10 ans
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl font-bold text-[#5DBCD2] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Notre Mission
          </h2>
          <div className="max-w-3xl mx-auto text-center text-gray-600">
            <p className="mb-6">
              Chez Alloclean, notre mission est de fournir des services de nettoyage professionnels
              qui dépassent les attentes de nos clients. Nous nous engageons à créer des espaces
              propres, sains et accueillants pour tous.
            </p>
            <p>
              Notre équipe de professionnels qualifiés utilise des produits écologiques et des
              techniques innovantes pour garantir des résultats exceptionnels à chaque intervention.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300"
              >
                <value.icon className="h-12 w-12 text-[#5DBCD2] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 