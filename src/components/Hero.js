'use client';

import Link from 'next/link';
import { ArrowRight, ShieldCheck, Truck, Clock } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-secondary-50 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
                </svg>
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-medium text-sm mb-8 animate-fade-in">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                        New Standard in Relocation Services
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-primary-900 mb-6 leading-tight animate-slide-up">
                        Moving Made <span className="text-primary-600">Simple</span> & <span className="text-accent-orange">Safe</span>
                    </h1>

                    <p className="text-xl text-secondary-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up">
                        Experience the fresh approach to packing and moving. We combine modern technology with dedicated service to ensure your belongings reach safely.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up">
                        <Link href="/contact" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
                            Get Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <Link href="/services" className="btn-outline text-lg px-8 py-4 w-full sm:w-auto">
                            Explore Services
                        </Link>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left animate-slide-up">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
                            <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                                <Truck className="w-6 h-6 text-primary-600" />
                            </div>
                            <h3 className="text-lg font-bold text-primary-900 mb-2">Modern Fleet</h3>
                            <p className="text-secondary-600 text-sm">GPS-enabled vehicles for real-time tracking of your goods.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
                            <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                                <ShieldCheck className="w-6 h-6 text-primary-600" />
                            </div>
                            <h3 className="text-lg font-bold text-primary-900 mb-2">Secure Packing</h3>
                            <p className="text-secondary-600 text-sm">Premium packing materials to ensure zero damage.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
                            <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                                <Clock className="w-6 h-6 text-primary-600" />
                            </div>
                            <h3 className="text-lg font-bold text-primary-900 mb-2">On-Time Delivery</h3>
                            <p className="text-secondary-600 text-sm">Punctual service respecting your valuable time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
