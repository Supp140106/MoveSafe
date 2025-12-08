'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-28 pb-12 bg-secondary-50">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold text-black mb-8 text-center">Privacy Policy</h1>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-6 text-[#082f49]">
                        <section>
                            <h2 className="text-xl font-bold text-black mb-3">1. Introduction</h2>
                            <p className="leading-relaxed">
                                Movesafepacker is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-3">2. Information We Collect</h2>
                            <p className="leading-relaxed">
                                We collect personal information such as your name, contact details, address, and payment information when you book our services or contact us through our website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-3">3. How We Use Your Information</h2>
                            <p className="leading-relaxed">
                                We use your information to provide you with our services, process payments, and communicate with you regarding your move or request. We may also use it for marketing and promotional purposes with your consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-3">4. Data Protection</h2>
                            <p className="leading-relaxed">
                                We take appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-3">5. Sharing Your Information</h2>
                            <p className="leading-relaxed">
                                We do not sell or rent your personal information to third parties. However, we may share your data with trusted partners or service providers who help us deliver our services to you.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-3">6. Cookies</h2>
                            <p className="leading-relaxed">
                                We use cookies to improve your experience on our website. Cookies allow us to remember your preferences and track website usage. You can control cookie settings in your browser.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-3">7. Third-Party Links</h2>
                            <p className="leading-relaxed">
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-3">8. Your Rights</h2>
                            <p className="leading-relaxed">
                                You have the right to access, correct, or delete your personal information. You can also opt-out of receiving marketing communications at any time by contacting us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-3">9. Changes to This Privacy Policy</h2>
                            <p className="leading-relaxed">
                                We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the revised policy will take effect immediately upon posting.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-3">10. Contact Us</h2>
                            <p className="leading-relaxed">
                                If you have any questions or concerns regarding this Privacy Policy or how your personal data is handled, please contact us at support@Movesafepacker.com.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
