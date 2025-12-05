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
                        <Award className="w-8 h-8 text-primary-600 mb-3 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-3xl font-bold text-black mb-1">15+</h3>
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


            </div>
        </section>
    );
}
