'use client';

import Link from 'next/link';
import { CheckCircle, Users, Package, Clock, BadgeCheck, MapPin, ShieldCheck } from 'lucide-react';

export default function About() {
    return (

        <section className="pt-16 pb-16 bg-white">
            <div className="container-custom">
                {/* Main Intro Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
                    <div className="animate-slide-up">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
                            About <span className="text-primary-600">MoveSafePackers</span>
                        </h2>
                        <p className="text-[#082f49] text-lg mb-6 leading-relaxed font-medium">
                            Movesafe Packers & Movers, delivers reliable packing and moving services with a customer-first approach. MoveSafePackrers has evolved from a local transport provider to on of the India’s most trusted logistics partners. Our team prioritizes safety, integrity, and seamless relocations for households and businesses across India. With experienced staff and quality materials, Movesafe ensures hassle-free shifts, building trust through consistent, on-time service.
                        </p>
                        <p className="text-gray-600 text-base leading-relaxed mb-8">
<<<<<<< Updated upstream
                            We understand that every move is unique. Whether it's shifting a corporate office in Bangalore or moving a family home to Mumbai, our ISO 9001:2015 certified processes ensure zero-damage delivery and on-time execution. We don't just move goods; we move memories.
=======
                            We understand that every move is unique. Whether it's shifting a corporate office in Bangalore or moving a family home to Mumbai, our processes ensure zero-damage delivery and on-time execution. We don't just move goods; we move memories.
>>>>>>> Stashed changes
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <div className="bg-gray-50 px-6 py-3 rounded-lg border border-gray-100">
                                <span className="block text-2xl font-bold text-black">15+</span>
                                <span className="text-xs text-gray-500 uppercase tracking-wide">Years Exp.</span>
                            </div>
                            <div className="bg-gray-50 px-6 py-3 rounded-lg border border-gray-100">
                                <span className="block text-2xl font-bold text-black">20k+</span>
                                <span className="text-xs text-gray-500 uppercase tracking-wide">Happy Moves</span>
                            </div>
                            <div className="bg-gray-50 px-6 py-3 rounded-lg border border-gray-100">
                                <span className="block text-2xl font-bold text-black">19k+</span>
                                <span className="text-xs text-gray-500 uppercase tracking-wide">Pin Codes</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Mission/Vision/Commitment Cards */}
                    <div className="grid grid-cols-1 gap-6 animate-slide-up delay-100">
                        <div className="bg-secondary-50 p-8 rounded-2xl border-l-4 border-primary-600 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-black mb-3 flex items-center">
                                <Users className="w-6 h-6 text-primary-600 mr-3" />
                                Our Mission
                            </h3>
                            <p className="text-[#082f49] leading-relaxed">
                                To provide seamless, technology-driven relocation solutions that eliminate stress and ensure the safety of every item entrusted to us, setting a benchmark for reliability in the Indian logistics sector.
                            </p>
                        </div>
                        <div className="bg-secondary-50 p-8 rounded-2xl border-l-4 border-primary-600 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-black mb-3 flex items-center">
                                <CheckCircle className="w-6 h-6 text-primary-600 mr-3" />
                                Our Vision
                            </h3>
                            <p className="text-[#082f49] leading-relaxed">
                                To be India's preferred relocation partner, known for transparency, operational excellence, and a customer-first approach that turns every move into a success story.
                            </p>
                        </div>
                        <div className="bg-secondary-50 p-8 rounded-2xl border-l-4 border-primary-600 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-black mb-3 flex items-center">
                                <ShieldCheck className="w-6 h-6 text-primary-600 mr-3" />
                                Our Commitment
                            </h3>
                            <p className="text-[#082f49] leading-relaxed">
                                We are dedicated to upholding the highest standards of integrity, transparency, and customer care at every step of the relocation process. We commit to leveraging innovative technology and operational excellence to ensure every move is handled with utmost care and efficiency. Our pledge is to consistently exceed customer expectations, building lasting trust and setting new benchmarks for reliability in the Indian logistics sector.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Industry Standards Strip */}
                <div className="border-t border-b border-gray-100 py-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-3">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                            </div>
<<<<<<< Updated upstream
                            <h4 className="text-black font-bold mb-1">ISO 9001:2015</h4>
=======
                            <h4 className="text-black font-bold mb-1">Quality Assured</h4>
>>>>>>> Stashed changes
                            <p className="text-xs text-gray-500">Certified Quality</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                                <Package className="w-6 h-6 text-blue-600" />
                            </div>
                            <h4 className="text-black font-bold mb-1">IBA Approved</h4>
                            <p className="text-xs text-gray-500">Bank Verified Bills</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-3">
                                <Clock className="w-6 h-6 text-orange-600" />
                            </div>
                            <h4 className="text-black font-bold mb-1">On-Time Delivery</h4>
                            <p className="text-xs text-gray-500">GPS Tracked Fleet</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-3">
                                <Users className="w-6 h-6 text-purple-600" />
                            </div>
                            <h4 className="text-black font-bold mb-1">Verified Staff</h4>
                            <p className="text-xs text-gray-500">Background Checked</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}