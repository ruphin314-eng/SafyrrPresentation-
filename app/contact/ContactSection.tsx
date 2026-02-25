/* eslint-disable @next/next/no-img-element */
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-linear-to-br bg-[#eddbae] to-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-[#fdf6ea] text-[#F5B83D] text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
            Contactez-nous
          </span>
          <h1 className="font-extrabold text-4xl md:text-5xl text-gray-900 mb-4">
            Contactez-nous
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Nous serions ravis d’avoir de vos nouvelles. Envoyez-nous un message et nous répondrons dès que possible.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column */}
            <div>
              <div className="relative mb-8">
                <div className="absolute -inset-3 bg-linear-to-r from-yellow-300 to-[#F5B83D] rounded-2xl opacity-15 blur-xl"></div>
                <img
                  src="/assets/contact-illustration-Dzrvamnj.jpg"
                  alt="Contactez SAFYRR"
                  className="relative rounded-2xl shadow-lg w-full h-56 object-cover border-4 border-yellow-300/30"
                />
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contactez-nous</h2>

              <div className="space-y-5">
                {/* Adresse */}
                <div className="flex gap-4 p-4 bg-[#fdf6ea] rounded-xl hover:bg-[#feeec4e5] transition">
                  <div className="w-10 h-10 bg-[#FFDF8F] rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-[#F5B547]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Notre bureau</h4>
                    <p className="text-sm text-gray-600">bonamoussadi</p>
                    <p className="text-sm text-gray-600">Douala, Cameroun</p>
                  </div>
                </div>

                {/* Téléphone */}
                <div className="flex gap-4 p-4 bg-[#fdf6ea] rounded-xl hover:bg-[#feeec4e5] transition">
                  <div className="w-10 h-10 bg-[#FFDF8F] rounded-lg flex items-center justify-center">
                    <FaPhoneAlt className="text-[#F5B547]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Téléphone</h4>
                    <p className="text-sm text-gray-600"><a href="https://wa.me/237688704382" target="_blank" className="hover:underline">
                     +237 000 000 000</a></p>
                    <p className="text-sm text-gray-600">+237 111 111 111</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 p-4 bg-[#fdf6ea] rounded-xl hover:bg-[#feeec4e5] transition">
                  <div className="w-10 h-10 bg-[#FFDF8F] rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-[#F5B547]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Email</h4>
                    <p className="text-sm text-gray-600"><a href="mailto:Lionelkewang087@safyrr.org" className="hover:underline">
                     contact@safyrr.com
                     </a></p>
                    <p className="text-sm text-gray-600">support@safyrr.com</p>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="mt-6 p-4 bg-[#feeec4e5]/20 border border-yellow-300 rounded-xl">
                <p className="text-sm font-semibold text-gray-900 mb-1">Horaires d’ouverture</p>
                <p className="text-sm text-gray-600">Lundi – vendredi : 8h00 – 18h00</p>
                <p className="text-sm text-gray-600">Samedi : 9h00 – 15h00</p>
                <p className="text-sm text-gray-600">Dimanche : Fermé</p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoie-nous un message</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1.5">
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Votre nom complet"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FFDF8F] focus:border-yellow-400 transition placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1.5">
                      Adresse e-mail <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FFDF8F] focus:border-yellow-400 transition placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1.5">Sujet</label>
                  <input
                    type="text"
                    placeholder="Comment pouvons-nous vous aider ?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FFDF8F] focus:border-yellow-400 transition placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={6}
                    required
                    placeholder="Parlez-nous davantage de votre enquête..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FFDF8F] focus:border-yellow-400 transition placeholder-gray-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-linear-to-r from-yellow-300 to-[#FFDF8F] text-gray-900 font-bold rounded-xl shadow hover:opacity-90 transition"
                >
                  <FaPaperPlane />
                  Envoyer un message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}