'use client';

import { Users, Clock, Package, Shield, BadgeCheck, Headphones } from 'lucide-react';

export default function WhyChooseUs() {
    const features = [
        {
            icon: Users,
            title: 'Expert Team',
            description: 'Our team is young, energetic, and trained in modern packing techniques.',
        },
        {
            icon: Clock,
            title: 'On-Time Delivery',
            description: 'We respect your schedule and guarantee punctual pickup and delivery.',
        },
        {
            icon: Package,
            title: 'Premium Packing',
            description: 'We use 3-layer protective packing to ensure zero scratches.',
        },
        {
            icon: Shield,
            title: 'Full Insurance',
            description: 'Comprehensive transit insurance for complete protection of goods.',
        },
        {
            icon: BadgeCheck,
            title: 'Transparent Pricing',
            description: 'Upfront quotes with absolutely no hidden charges or surprises.',
        },
        {
            icon: Headphones,
            title: '24/7 Support',
            description: 'Dedicated move coordinator available round the clock for updates.',
        },
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                        Why Choose <span className="text-primary-600">MoveSafe</span>?
                    </h2>
                    <p className="text-secondary-600 text-lg max-w-2xl mx-auto">
                        We bring a fresh perspective to relocation, prioritizing safety and speed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-start p-6 rounded-lg border border-secondary-100 hover:border-primary-200 hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                                    <feature.icon className="w-6 h-6 text-primary-600" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-bold text-primary-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-secondary-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
