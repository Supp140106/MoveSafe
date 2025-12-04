'use client';

import Link from 'next/link';
import { Home, Building2, Car, Bike, MapPin, Shield, ArrowRight } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: Home,
            title: 'House Shifting',
            description: 'MoveSafePackers provide fabulous office or corporate shifting services to all parts in Indore and other parts of the country.',
        },
        {
            icon: Building2,
            title: 'Office Relocation',
            description: 'MoveSafePackers offer the top preparation and moving services to all locations in Indore city and other large cities in India',
        },
        {
            icon: Car,
            title: 'Car Transportation',
            description: 'Car Transport anywhere in India. We have specialized car transporters to Move cars to/from anywhere in India.',
        },
        {
            icon: Bike,
            title: 'Bike Transportation',
            description: 'Bike Transport anywhere in India. We have specialized car transporters to Move cars to/from anywhere in India.',
        },
        {
            icon: MapPin,
            title: 'Domestic Relocation',
            description: 'Seamless inter-city moving services across India.',
        },
        {
            icon: Shield,
            title: 'Goods Insurance',
            description: 'Comprehensive coverage for your peace of mind.',
        },
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                        Our Services
                    </h2>
                    <p className="text-secondary-600 text-lg max-w-2xl mx-auto">
                        Comprehensive moving solutions designed for the modern world.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="card group hover:border-primary-200"
                        >
                            <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                                <service.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
                            </div>

                            <h3 className="text-xl font-bold text-primary-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-secondary-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <Link
                                href="/services"
                                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-800 transition-colors"
                            >
                                Learn More <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
