'use client';

import { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, Check, ShieldCheck, Package, MapPin } from 'lucide-react';

const services = [
    {
        id: 'residential-moving',
        title: 'Residential Moving',
        description: 'Expert household shifting services ensuring your belongings reach safely. From packing delicate items to furniture disassembly, we handle everything with care.',
        longDescription: 'Our residential moving service covers complete household relocation including packing, loading, transportation, unloading, and unpacking. We use premium quality packing materials to ensure your valuables are protected during transit.',
        features: ['Complete packing & unpacking', 'Furniture disassembly & reassembly', 'Fragile item handling', 'Transit insurance'],
        image: '/images/residential.webp',
    },
    {
        id: 'corporate-relocation',
        title: 'Corporate Relocation',
        description: 'Seamless office moving solutions to minimize business downtime. We plan and execute corporate moves with precision and efficiency.',
        longDescription: 'Professional office relocation services designed to minimize disruption to your business. We handle IT equipment, office furniture, documents, and all assets with specialized care.',
        features: ['Weekend/off-hours moving', 'IT equipment handling', 'Document management', 'Furniture installation'],
        image: '/images/corporate.webp',
    },
    {
        id: 'vehicle-transportation',
        title: 'Vehicle Transportation',
        description: 'Safe and secure car and bike carrier services across India. GPS-tracked transport with full insurance coverage for your peace of mind.',
        longDescription: 'Specialized vehicle transportation using enclosed carriers and open trailers. Every vehicle is secured with proper strapping and transported by experienced drivers.',
        features: ['Enclosed & open carriers', 'Door-to-door delivery', 'GPS tracking', 'Full insurance cover'],
        image: '/images/vehicle.webp',
    },
    {
        id: 'packing-services',
        title: 'Packing Services',
        description: 'Premium packing using high-quality materials for extra protection. We pack everything from fragile glassware to heavy furniture.',
        longDescription: 'Expert packing services using multi-layered protection, custom crates for fragile items, and industry-standard packing materials to ensure zero damage during transit.',
        features: ['Multi-layer protection', 'Custom wooden crates', 'Bubble wrap & thermocol', 'Labeling & inventory'],
        image: '/images/packing.webp',
    },

];

export default function Services() {
    const [expandedCards, setExpandedCards] = useState({});

    const toggleCard = (index) => {
        setExpandedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <section className="section-padding bg-secondary-50" id="services">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[#082f49] font-bold tracking-widest uppercase text-xs mb-2 block">Our Expertise</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">
                        Services We Offer
                    </h2>
                    <p className="text-[#082f49] text-lg font-medium">
                        Comprehensive logistics and relocation solutions tailored to your specific needs.
                    </p>
                </div>

                {/* Symmetrical 2x2 grid for 4 services */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {services.map((service, index) => {
                        const isExpanded = expandedCards[index];
                        return (
                            <div
                                key={index}
                                id={service.id}
                                className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-secondary-100 flex flex-col"
                            >
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/20 transition-all duration-500"></div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-[#082f49] mb-3 group-hover:text-primary-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-[#082f49] text-sm leading-relaxed mb-4 font-medium">
                                        {service.description}
                                    </p>

                                    {/* Expanded content */}
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="pt-4 border-t border-gray-100">
                                            <p className="text-[#082f49] text-sm leading-relaxed mb-4 font-medium">
                                                {service.longDescription}
                                            </p>

                                            <h4 className="text-sm font-bold text-[#082f49] mb-3 uppercase tracking-wide">
                                                What's Included:
                                            </h4>
                                            <ul className="space-y-2">
                                                {service.features.map((feature, i) => (
                                                    <li key={i} className="text-sm text-gray-700 flex items-center">
                                                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => toggleCard(index)}
                                        className="inline-flex items-center text-[#082f49] font-bold text-sm uppercase tracking-wide hover:text-primary-600 transition-colors mt-auto cursor-pointer"
                                    >
                                        {isExpanded ? (
                                            <>
                                                Show Less <ChevronUp className="ml-2 w-4 h-4" />
                                            </>
                                        ) : (
                                            <>
                                                Read More <ChevronDown className="ml-2 w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>


                {/* Comprehensive Solutions Section */}
                <div className="max-w-6xl mx-auto mt-20 pt-12 border-t border-secondary-200">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        {/* Left Side: Title and Description (5 cols) */}
                        <div className="lg:col-span-5">
                            <h2 className="text-3xl font-bold text-black mb-6">
                                Comprehensive Solutions
                            </h2>
                            <p className="text-[#082f49] text-lg leading-relaxed font-medium">
                                Movesafe Packers & Movers offers comprehensive relocation solutions tailored for local and regional needs, drawing from standard industry practices in the area.
                            </p>
                        </div>

                        {/* Right Side: Features List (7 cols) */}
                        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                <div className="mb-4">
                                    <ShieldCheck className="w-8 h-8 text-black" strokeWidth={1.5} />
                                </div>
                                <h4 className="text-base font-bold text-black mb-2">Insurance Coverage</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">Protection against damage or loss during transit.</p>
                            </div>

                            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                <div className="mb-4">
                                    <Package className="w-8 h-8 text-black" strokeWidth={1.5} />
                                </div>
                                <h4 className="text-base font-bold text-black mb-2">Expert Packing</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">Use of quality materials for fragile and bulky items.</p>
                            </div>

                            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                <div className="mb-4">
                                    <MapPin className="w-8 h-8 text-black" strokeWidth={1.5} />
                                </div>
                                <h4 className="text-base font-bold text-black mb-2">Pan-India Service</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">Door-to-door service within Mumbai and across India.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
