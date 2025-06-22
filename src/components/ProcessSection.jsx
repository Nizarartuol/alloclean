import React from 'react'

function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Contact Initial',
      description: 'Contactez-nous par téléphone ou via notre formulaire en ligne',
      icon: '📞'
    },
    {
      number: '02',
      title: 'Évaluation',
      description: 'Nous évaluons vos besoins et votre espace',
      icon: '📋'
    },
    {
      number: '03',
      title: 'Devis Gratuit',
      description: 'Nous vous envoyons un devis détaillé gratuit',
      icon: '💰'
    },
    {
      number: '04',
      title: 'Service',
      description: 'Notre équipe intervient selon vos préférences',
      icon: '✨'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Notre Processus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-2xl font-bold text-[#1239ac] mb-2">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection 