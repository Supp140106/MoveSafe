'use client';

import Link from 'next/link';
import { CheckCircle, Users, Package, Clock } from 'lucide-react';

export default function About() {
    return (
        
        <section className="py-1 md:py-24 bg-secondary-50"> 
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="animate-slide-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6 pb-1">
                            About <span className="text-primary-600">MoveSafePackers</span>
                        </h2>
                        <p className="text-secondary-600 text-lg mb-6 leading-relaxed">
                            MoveSafePackers represents a new era in the relocation industry. Born from a desire to modernize the moving experience, we combine energetic professionalism with cutting-edge logistics technology.
                        </p>
                        <p className="text-secondary-600 text-lg mb-8 leading-relaxed">
                            We aren't just moving boxes; we are moving lives. Our fresh fleet of vehicles and rigorously trained team ensures that your transition is as smooth and stress-free as possible. We bring a level of transparency and care that sets a new standard.
                        </p>

                        {/* Key Points */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="w-6 h-6 text-accent-orange shrink-0 mt-1" />
                                <p className="text-secondary-700">Young, energetic, and professionally trained team</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="w-6 h-6 text-accent-orange shrink-0 mt-1" />
                                <p className="text-secondary-700">Brand new fleet of GPS-enabled vehicles</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="w-6 h-6 text-accent-orange shrink-0 mt-1" />
                                <p className="text-secondary-700">Transparent pricing with no hidden costs</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="w-6 h-6 text-accent-orange shrink-0 mt-1" />
                                <p className="text-secondary-700">Digital inventory tracking for total peace of mind</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Stats */}
                    <div className="grid grid-cols-2 gap-6 animate-slide-up">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 text-center">
                            <Users className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                            <div className="text-3xl font-bold text-primary-900 mb-1">100%</div>
                            <div className="text-secondary-500 text-sm">Dedicated Team</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 text-center">
                            <Package className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                            <div className="text-3xl font-bold text-primary-900 mb-1">Zero</div>
                            <div className="text-secondary-500 text-sm">Damage Record</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 text-center">
                            <Clock className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                            <div className="text-3xl font-bold text-primary-900 mb-1">24/7</div>
                            <div className="text-secondary-500 text-sm">Support Available</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 text-center">
                            <div className="text-3xl font-bold text-primary-900 mb-1">Top</div>
                            <div className="text-secondary-500 text-sm">Rated Service</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}