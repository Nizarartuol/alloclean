import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici, vous pourrez ajouter la logique d'envoi du formulaire
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Contactez-nous</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Informations de contact */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nos Coordonnées</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Adresse</h3>
              <p className="text-gray-600">123 Rue du Nettoyage<br />75000 Paris, France</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Téléphone</h3>
              <p className="text-gray-600">01 23 45 67 89</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <p className="text-gray-600">contact@alloclean.fr</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Horaires</h3>
              <p className="text-gray-600">Lundi - Vendredi: 8h00 - 19h00<br />Samedi: 9h00 - 17h00</p>
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Envoyez-nous un message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1239ac] focus:ring-[#1239ac]"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1239ac] focus:ring-[#1239ac]"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1239ac] focus:ring-[#1239ac]"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1239ac] focus:ring-[#1239ac]"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1239ac] text-white py-2 px-4 rounded-md hover:bg-[#4CA8BC] transition-colors duration-300"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact 