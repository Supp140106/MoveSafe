'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsConditions() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="pt-28 pb-12 bg-secondary-50">
                <div className="container-custom">
                    <h1 className="text-4xl font-bold text-black mb-8 text-center">Terms and Conditions</h1>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-6 text-[#082f49]">
                        <section>
                            <h2 className="text-xl font-bold text-black mb-3">1. Agreement</h2>
                            <p className="leading-relaxed">
                                By using the services of Movesafepacker, you agree to these Terms and Conditions. If you do not agree, you must not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-3">2. Service Scope</h2>
                            <p className="leading-relaxed">
                                We offer packing, transportation, storage, and related services. The services will be provided according to the details agreed upon in the service agreement or quote.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-3">3. Payment Terms</h2>
                            <p className="leading-relaxed">
                                Payment for services must be made before or upon delivery, as agreed in the contract. Failure to pay may result in cancellation or delay of services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-3">4. Liability</h2>
                            <p className="leading-relaxed">
                                We are not liable for any loss or damage to your belongings during transit unless insurance is purchased for the items in question.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-3">5. Insurance</h2>
                            <p className="leading-relaxed">
                                Movesafepacker offers transit insurance. We recommend purchasing insurance for valuable or fragile items. Full details of coverage are provided in the insurance policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-3">6. Cancellations</h2>
                            <p className="leading-relaxed">
                                Cancellations must be made at least 48 hours before the scheduled move. If the cancellation is made later, a cancellation fee may apply.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-3">7. Customer Responsibilities</h2>
                            <p className="leading-relaxed">
                                It is the customer's responsibility to ensure that all items are packed securely for the move. Any damage resulting from improper packing is not the responsibility of Movesafepacker.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-3">8. Delays</h2>
                            <p className="leading-relaxed">
                                We make every effort to deliver services on time, but we are not responsible for delays caused by circumstances beyond our control, such as weather, traffic, or unforeseen events.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-3">9. Dispute Resolution</h2>
                            <p className="leading-relaxed">
                                Any disputes arising from these Terms and Conditions will be resolved through arbitration under the laws of the region where services are provided.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-black mb-3">10. Modifications</h2>
                            <p className="leading-relaxed">
                                Movesafepacker reserves the right to modify these Terms and Conditions at any time. Any updates will be posted on our website and are effective immediately.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
