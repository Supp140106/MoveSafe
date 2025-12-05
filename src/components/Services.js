'use client';

import { ArrowRight } from 'lucide-react';

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
            </div>
        </section>
    );
}
