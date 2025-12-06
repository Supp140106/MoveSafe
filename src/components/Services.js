'use client';

<<<<<<< Updated upstream
import { ArrowRight } from 'lucide-react';
=======
import { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp, Check, ShieldCheck, Package, MapPin } from 'lucide-react';
>>>>>>> Stashed changes

const services = [
    {
        title: 'Residential Moving',
        description: 'Expert household shifting services ensuring your belongings reach safely.',
        image: '/images/residential.png', // Indian family moving context
    },
    {
        title: 'Corporate Relocation',
        description: 'Seamless office moving solutions to minimize business downtime.',
        image: '/images/corporate.png', // Indian office with boxes
    },
    {
        title: 'Vehicle Transportation',
        description: 'Safe and secure car and bike carrier services across India.',
        image: '/images/vehicle.png', // Maruti Swift on carrier
    },
    {
        title: 'Warehousing',
        description: 'Secure storage facilities for short and long-term requirements.',
        image: '/images/warehousing.png', // Indian warehouse
    },
    {
        title: 'International Moving',
        description: 'Global relocation services with customs clearance assistance.',
        image: '/images/international.png', // Air India cargo context
    },
    {
        title: 'Packing Services',
        description: 'Premium packing using high-quality materials for extra protection.',
        image: '/images/packing.png', // Indian packing context
    },
];

export default function Services() {
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-secondary-100"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#082f49] mb-3 group-hover:text-primary-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-[#082f49] text-sm leading-relaxed mb-6 line-clamp-2 font-medium">
                                    {service.description}
                                </p>

                                <a href="#" className="inline-flex items-center text-[#082f49] font-bold text-sm uppercase tracking-wide hover:text-primary-600 transition-colors">
                                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Services Info - Industry Standard Design */}
                <div className="mt-20 pt-12 border-t border-gray-200">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Left Column: Description */}
                        <div className="lg:col-span-5">
                            <h3 className="text-2xl font-bold text-black mb-6">Comprehensive Solutions</h3>
                            <p className="text-[#082f49] text-lg leading-relaxed font-medium">
                                Movesafe Packers & Movers offers comprehensive relocation solutions tailored for local and regional needs, drawing from standard industry practices in the area.
                            </p>
                        </div>

                        {/* Right Column: Features List */}
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="flex flex-col items-start">
                                    <ShieldCheck className="w-8 h-8 text-primary-600 mb-4" />
                                    <h4 className="text-black font-bold text-base mb-2">Insurance Coverage</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Protection against damage or loss during transit.
                                    </p>
                                </div>

                                <div className="flex flex-col items-start">
                                    <Package className="w-8 h-8 text-primary-600 mb-4" />
                                    <h4 className="text-black font-bold text-base mb-2">Expert Packing</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Use of quality materials for fragile and bulky items.
                                    </p>
                                </div>

                                <div className="flex flex-col items-start">
                                    <MapPin className="w-8 h-8 text-primary-600 mb-4" />
                                    <h4 className="text-black font-bold text-base mb-2">Pan-India Service</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Door-to-door service within Mumbai and across India.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
