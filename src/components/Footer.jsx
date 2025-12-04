'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                                <span className="text-lg font-bold">MS</span>
                            </div>
                            <h3 className="text-xl font-bold">
                                MoveSafe<span className="text-orange-400">Packers</span>
                            </h3>
                        </div>

                        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                            The new standard in professional packing and moving services.
                            Modern, safe, and reliable relocation solutions.
                        </p>

                        <div className="flex space-x-4">
                            <a aria-label="Facebook" href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a aria-label="Twitter" href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a aria-label="Instagram" href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a aria-label="LinkedIn" href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>
                                <Link href="/" className="hover:text-orange-400 transition-colors flex items-center">
                                    <ArrowRight className="w-3 h-3 mr-2" /> Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-orange-400 transition-colors flex items-center">
                                    <ArrowRight className="w-3 h-3 mr-2" /> About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-orange-400 transition-colors flex items-center">
                                    <ArrowRight className="w-3 h-3 mr-2" /> Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-orange-400 transition-colors flex items-center">
                                    <ArrowRight className="w-3 h-3 mr-2" /> Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Our Services</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/services" className="hover:text-orange-400 transition-colors">House Shifting</Link></li>
                            <li><Link href="/services" className="hover:text-orange-400 transition-colors">Office Relocation</Link></li>
                            <li><Link href="/services" className="hover:text-orange-400 transition-colors">Car Transportation</Link></li>
                            <li><Link href="/services" className="hover:text-orange-400 transition-colors">Bike Transportation</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li>
                                123 Business Park, Sector 5<br />
                                Mumbai, Maharashtra 400001
                            </li>
                            <li>
                                <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a>
                            </li>
                            <li>
                                <a href="mailto:info@movesafepackers.com" className="hover:text-white">info@movesafepackers.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {currentYear} MoveSafePackers. All rights reserved.</p>

                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
