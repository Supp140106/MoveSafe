'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, ChevronRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-50 text-[#082f49] pt-16 pb-8 border-t border-gray-200">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Column 1: Company */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <span className="text-2xl font-bold tracking-tight text-black">MoveSafePackers</span>
                        </div>
                        <p className="text-[#082f49] text-sm leading-relaxed mb-6 font-medium">
                            India's premier logistics and supply chain partner. delivering excellence across 19000+ pin codes.
                        </p>
                        <div className="flex space-x-3">
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-colors text-[#082f49]">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-colors text-[#082f49]">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-colors text-[#082f49]">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-6 text-black">Our Services</h4>
                        <ul className="space-y-3 text-sm text-[#082f49] font-medium">
                            <li>
                                <Link href="/services" className="flex items-center hover:text-primary-600 transition-all duration-300 hover:translate-x-2">
                                    <ChevronRight className="w-4 h-4 text-primary-600 mr-2" />
                                    Residential Moving
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="flex items-center hover:text-primary-600 transition-all duration-300 hover:translate-x-2">
                                    <ChevronRight className="w-4 h-4 text-primary-600 mr-2" />
                                    Corporate Relocation
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="flex items-center hover:text-primary-600 transition-all duration-300 hover:translate-x-2">
                                    <ChevronRight className="w-4 h-4 text-primary-600 mr-2" />
                                    Vehicle Transport
                                </Link>
                            </li>

                            <li>
                                <Link href="/services" className="flex items-center hover:text-primary-600 transition-all duration-300 hover:translate-x-2">
                                    <ChevronRight className="w-4 h-4 text-primary-600 mr-2" />
                                    Packing Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-6 text-black">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-[#082f49] font-medium">
                            <li>
                                <Link href="/about" className="flex items-center hover:text-primary-600 transition-all duration-300 hover:translate-x-2">
                                    <ChevronRight className="w-4 h-4 text-primary-600 mr-2" />
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="flex items-center hover:text-primary-600 transition-all duration-300 hover:translate-x-2">
                                    <ChevronRight className="w-4 h-4 text-primary-600 mr-2" />
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex items-center hover:text-primary-600 transition-all duration-300 hover:translate-x-2">
                                    <ChevronRight className="w-4 h-4 text-primary-600 mr-2" />
                                    Get a Quote
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="flex items-center hover:text-primary-600 transition-all duration-300 hover:translate-x-2">
                                    <ChevronRight className="w-4 h-4 text-primary-600 mr-2" />
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-conditions" className="flex items-center hover:text-primary-600 transition-all duration-300 hover:translate-x-2">
                                    <ChevronRight className="w-4 h-4 text-primary-600 mr-2" />
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Support */}
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-wider mb-6 text-black">Get in Touch</h4>
                        <ul className="space-y-4 text-sm text-[#082f49] font-medium">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                                <span>Plot No 5, Sector 44, Gurugram, Haryana - 122002</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                                <span>+91 98127 18379</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                                <span>support@movesafepackers.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} MoveSafe Packers Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
