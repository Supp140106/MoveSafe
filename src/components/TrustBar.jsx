"use client";

import { Award, Users, MapPin, ShieldCheck, CheckCircle } from "lucide-react";

export default function TrustBar() {
    return (
        <section className="bg-white border-b border-gray-100">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    {/* Stat 1 */}
                    <div className="flex-1 py-8 md:py-12 px-4 flex flex-col items-center justify-center text-center group hover:bg-gray-50 transition-colors duration-300">
                        <Users className="w-8 h-8 text-primary-600 mb-3 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-3xl font-bold text-black mb-1">10,000+</h3>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Happy Families</p>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex-1 py-8 md:py-12 px-4 flex flex-col items-center justify-center text-center group hover:bg-gray-50 transition-colors duration-300">
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="font-bold text-gray-700 text-sm">Quality Assured</span>
                        </div>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Years Experience</p>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex-1 py-8 md:py-12 px-4 flex flex-col items-center justify-center text-center group hover:bg-gray-50 transition-colors duration-300">
                        <MapPin className="w-8 h-8 text-primary-600 mb-3 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-3xl font-bold text-black mb-1">50+</h3>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Cities Covered</p>
                    </div>

                    {/* Stat 4 */}
                    <div className="flex-1 py-8 md:py-12 px-4 flex flex-col items-center justify-center text-center group hover:bg-gray-50 transition-colors duration-300">
                        <ShieldCheck className="w-8 h-8 text-primary-600 mb-3 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-3xl font-bold text-black mb-1">100%</h3>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Safe Delivery</p>
                    </div>
                </div>

                {/* Certifications Strip */}
                <div className="py-6 border-t border-gray-100 bg-gray-50">
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="font-bold text-gray-700 text-sm">ISO 9001:2015 Certified</span>
                        </div>
                        <div className="h-4 w-px bg-gray-300 hidden md:block"></div>
                        <div className="flex items-center space-x-2">
                            <Award className="w-5 h-5 text-blue-600" />
                            <span className="font-bold text-gray-700 text-sm">IBA Approved</span>
                        </div>
                        <div className="h-4 w-px bg-gray-300 hidden md:block"></div>
                        <div className="flex items-center space-x-2">
                            <ShieldCheck className="w-5 h-5 text-purple-600" />
                            <span className="font-bold text-gray-700 text-sm">Govt. Registered</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
