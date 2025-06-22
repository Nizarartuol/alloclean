import React, { useState } from 'react'

function Quote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
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
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Demander un Devis</h1>
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom complet</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#5DBCD2] focus:ring-[#5DBCD2]"
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#5DBCD2] focus:ring-[#5DBCD2]"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Téléphone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#5DBCD2] focus:ring-[#5DBCD2]"
              required
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service souhaité</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#5DBCD2] focus:ring-[#5DBCD2]"
              required
            >
              <option value="">Sélectionnez un service</option>
              <option value="residential">Nettoyage Résidentiel</option>
              <option value="commercial">Nettoyage Commercial</option>
              <option value="construction">Nettoyage après Construction</option>
              <option value="windows">Nettoyage de Vitres</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#5DBCD2] focus:ring-[#5DBCD2]"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#5DBCD2] text-white py-2 px-4 rounded-md hover:bg-[#4CA8BC] transition-colors duration-300"
          >
            Envoyer la demande
          </button>
        </form>
      </div>
    </div>
  )
}

export default Quote 