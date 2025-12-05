'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-[800px] lg:h-[700px] flex items-center justify-center overflow-hidden pt-32 pb-12 lg:py-0">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>
                {/* Indian Logistics Context Image - Container Truck on Highway */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat"></div>
            </div>

            <div className="container-custom relative z-20 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Left Content - Bold & Direct */}
                    <div className="text-white max-w-2xl animate-slide-up text-center lg:text-left">
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-xl">
                            <span className="text-white">WE MOVE</span> <br />
                            <span className="text-red-600 drop-shadow-sm">YOUR WORLD</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-100 mb-8 font-medium drop-shadow-md">
                            India's most trusted logistics and relocation partner. Fast, Safe, and Reliable.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="/services" className="bg-primary-600 text-white hover:bg-primary-700 text-lg font-bold px-10 py-4 rounded-sm shadow-lg hover:shadow-xl transition-all uppercase tracking-wider border border-primary-600">
                                Explore Services
                            </Link>
                        </div>
                    </div>

                    {/* Right Form - Floating Card (Delhivery Style) */}
                    <div className="bg-white p-8 rounded-sm shadow-2xl w-full max-w-md animate-fade-in">
                        <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
                            <span className="w-1 h-8 bg-primary-600 mr-3 rounded-full"></span>
                            Get a Free Quote
                        </h2>

                        <form className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Pickup City</label>
                                    <input type="text" placeholder="Enter City" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:border-primary-600 focus:ring-0 outline-none transition-all font-medium text-gray-900 placeholder-gray-400" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Drop City</label>
                                    <input type="text" placeholder="Enter City" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:border-primary-600 focus:ring-0 outline-none transition-all font-medium text-gray-900 placeholder-gray-400" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Mobile Number</label>
                                <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:border-primary-600 focus:ring-0 outline-none transition-all font-medium text-gray-900 placeholder-gray-400" />
                            </div>

                            <button type="submit" className="w-full btn-primary py-4 text-lg shadow-lg">
                                Get Estimate <ArrowRight className="ml-2 w-5 h-5" />
                            </button>

                            <p className="text-[10px] text-center text-gray-400 mt-4">
                                By continuing, you agree to our Terms of Service & Privacy Policy.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
