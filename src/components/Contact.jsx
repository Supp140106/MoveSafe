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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div>
            <ContactForm />
          </div>

          <div className="flex flex-col h-full gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="tel:+918059677080" className="block">
                <div className="bg-gray-700 text-white p-4 rounded-xl shadow-lg transition-transform duration-300 hover:shadow-xl cursor-pointer h-full">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-0.5">
                        Call Us
                      </h3>
                      <p className="block text-xs text-gray-100">
                        +91 80596 77080 / 72299 96947
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=917400405120&text=Hello%2C%20I%20need%20help%20with%20a%20relocation%20query"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-green-600 text-white p-4 rounded-xl shadow-lg transition-transform duration-300 hover:shadow-xl cursor-pointer h-full">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-0.5">
                        WhatsApp
                      </h3>
                      <p className="block text-xs text-gray-100">
                        +91 74004 05120
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl shadow-lg transition-transform duration-300 hover:shadow-xl h-full">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-0.5">
                      Email Us
                    </h3>
                    <a
                      href="mailto:info@Movesafepacker.com"
                      className="block text-xs text-gray-600 hover:text-gray-700 transition"
                    >
                      info@Movesafepacker.com
                    </a>
                    <a
                      href="mailto:support@Movesafepacker.com"
                      className="block text-xs text-gray-600 hover:text-gray-700 transition"
                    >
                      support@Movesafepacker.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl shadow-lg transition-transform duration-300 hover:shadow-xl h-full">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-0.5">
                      Head Office
                    </h3>
                    <p className="text-gray-600 text-xs">
                      Shop No. 12, Andheri-Kurla Road,<br />
                      Sakinaka, Andheri East, Mumbai 400072
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex-grow min-h-[250px]">
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
