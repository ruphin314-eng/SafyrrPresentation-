/* eslint-disable react/no-unescaped-entities */
'use client';

/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMsg('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data.error || "Une erreur s'est produite.");
      } else {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch {
      setStatus('error');
      setErrorMsg('Impossible de contacter le serveur. Réessayez plus tard.');
    }
  };

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
            Nous serions ravis d'avoir de vos nouvelles. Envoyez-nous un message et nous répondrons dès que possible.
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
                    <p className="text-sm text-gray-600">
                      <a href="https://wa.me/237688704382" target="_blank" className="hover:underline">
                        +237 688 70 43 82
                      </a>
                    </p>
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
                    <p className="text-sm text-gray-600">
                      <a href="mailto:contact@safyrr.tech" className="hover:underline">contact@safyrr.tech</a>
                    </p>
                    <p className="text-sm text-gray-600">
                      <a href="mailto:support@safyrr.tech" className="hover:underline">support@safyrr.tech</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Horaires */}
              <div className="mt-6 p-4 bg-[#feeec4e5]/20 border border-yellow-300 rounded-xl">
                <p className="text-sm font-semibold text-gray-900 mb-1">Horaires d'ouverture</p>
                <p className="text-sm text-gray-600">Lundi – vendredi : 8h00 – 18h00</p>
                <p className="text-sm text-gray-600">Samedi : 9h00 – 15h00</p>
                <p className="text-sm text-gray-600">Dimanche : Fermé</p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoie-nous un message</h2>

              {/* Message succès */}
              {status === 'success' && (
                <div className="mb-5 flex items-start gap-3 p-4 bg-green-50 border border-green-300 rounded-xl text-green-800 text-sm">
                  <span className="text-lg">✅</span>
                  <div>
                    <p className="font-semibold">Message envoyé avec succès !</p>
                    <p>Nous vous répondrons dans les plus brefs délais. Merci!</p>
                  </div>
                </div>
              )}

              {/* Message erreur */}
              {status === 'error' && (
                <div className="mb-5 flex items-start gap-3 p-4 bg-red-50 border border-red-300 rounded-xl text-red-800 text-sm">
                  <span className="text-lg">❌</span>
                  <div>
                    <p className="font-semibold">Erreur</p>
                    <p>{errorMsg}</p>
                  </div>
                </div>
              )}

              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1.5">
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
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
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FFDF8F] focus:border-yellow-400 transition placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1.5">Sujet</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
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
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Parlez-nous davantage de votre enquête..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FFDF8F] focus:border-yellow-400 transition placeholder-gray-400 resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-linear-to-r from-yellow-300 to-[#FFDF8F] text-gray-900 font-bold rounded-xl shadow hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Envoyer un message
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}