"use client";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import ContactForm from "./ContactForm";

export default function ProfessionalContact() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-widest">
            Ready to Move?
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
            Contact Our Relocation Experts
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            We provide transparent and efficient moving services. Reach out for
            a detailed, no-obligation quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6">
              <a href="tel:+919876543211" className="block">
                <div className="bg-gray-700 text-white p-6 rounded-xl shadow-lg transition-transform duration-300 hover:shadow-xl cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-xl mb-1">
                        Call Us
                      </h3>
                      <p className="block text-sm text-gray-100">
                        +91 98765 43211
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=919812718379&text=Hello%2C%20I%20need%20help%20with%20a%20relocation%20query"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-green-600 text-white p-6 rounded-xl shadow-lg transition-transform duration-300 hover:shadow-xl cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-xl mb-1">
                        WhatsApp
                      </h3>
                      <p className="block text-sm text-gray-100">
                        +91 98127 18379
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:shadow-xl">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-1">
                      Email Us
                    </h3>
                    <a
                      href="mailto:info@movesafepackers.com"
                      className="block text-sm text-gray-600 hover:text-gray-700 transition"
                    >
                      info@movesafepackers.com
                    </a>
                    <a
                      href="mailto:support@movesafepackers.com"
                      className="block text-sm text-gray-600 hover:text-gray-700 transition"
                    >
                      support@movesafepackers.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:shadow-xl">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-1">
                      Head Office
                    </h3>
                    <p className="text-gray-600 text-sm">
                      123 Business Park, Sector 5<br />
                      Mumbai, Maharashtra 400001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-80 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div style={{ width: "100%", height: "100%" }}>
                <iframe
                  className="embed-map-frame"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Taratala&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  style={{ width: "100%", height: "100%", border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
