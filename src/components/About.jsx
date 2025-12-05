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
                            Redefining Relocation <br />
                            <span className="text-primary-600">Across India</span>
                        </h2>
                        <p className="text-[#082f49] text-lg mb-6 leading-relaxed font-medium">
                            Headquartered in Gurugram, MoveSafePackers has evolved from a local transport provider to one of India's most trusted logistics partners. With over a decade of experience, we bridge the gap between complex logistics and personalized care.
                        </p>
                        <p className="text-gray-600 text-base leading-relaxed mb-8">
                            We understand that every move is unique. Whether it's shifting a corporate office in Bangalore or moving a family home to Mumbai, our ISO 9001:2015 certified processes ensure zero-damage delivery and on-time execution. We don't just move goods; we move memories.
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

                    {/* Right Side - Mission/Vision Cards */}
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
                        <div className="bg-secondary-50 p-8 rounded-2xl border-l-4 border-black shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-black mb-3 flex items-center">
                                <CheckCircle className="w-6 h-6 text-black mr-3" />
                                Our Vision
                            </h3>
                            <p className="text-[#082f49] leading-relaxed">
                                To be India's preferred relocation partner, known for transparency, operational excellence, and a customer-first approach that turns every move into a success story.
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}