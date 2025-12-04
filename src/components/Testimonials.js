'use client';

import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    const testimonials = [
        {
            name: 'Rajesh Kumar',
            location: 'Mumbai',
            rating: 5,
            text: 'I was skeptical about trying a new company, but MoveSafePackers exceeded my expectations! The team was so energetic and careful.',
        },
        {
            name: 'Priya Sharma',
            location: 'Delhi',
            rating: 5,
            text: 'Finally a moving company that uses modern technology! Loved the real-time tracking and the digital inventory list.',
        },
        {
            name: 'Amit Patel',
            location: 'Bangalore',
            rating: 5,
            text: 'Very professional and transparent. The quote they gave was exactly what I paid. No hidden fees at all. Highly recommended!',
        },
        {
            name: 'Long Word Tester',
            location: 'Test City',
            rating: 4,
            text: 'This is a test testimonial that contains a very.',
        },
    ];

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        resetInterval();
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        resetInterval();
    };

    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 4000);
    };

    const resetInterval = () => {
        clearInterval(intervalRef.current);
        startInterval();
    };

    useEffect(() => {
        startInterval();
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <section className="bg-gray-900 text-white py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">Client Stories</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        See what our early adopters are saying about the new standard in moving.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* FIX 1: Removed 'p-8 md:p-12' from this parent container */}
                    <div className="relative bg-gray-800 rounded-2xl border border-gray-700 shadow-lg overflow-hidden">
                        
                        <div
                            className="transition-all duration-700 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)`,
                                display: 'flex',
                                width: `${testimonials.length * 100}%`
                            }}
                        >
                            {testimonials.map((t, index) => (
                                <div 
                                    key={index} 
                                    // FIX 2: Added 'p-8 md:p-12' here. Padding now belongs to the slide.
                                    className="shrink-0 p-8 md:p-12" 
                                    style={{ width: `${100 / testimonials.length}%` }}
                                >
                                    <Quote className="w-12 h-12 text-gray-600 mb-6 opacity-70" />

                                    <div className="flex gap-1 mb-6">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>

                                    <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light text-gray-200 wrap-break-words whitespace-normal">
                                        "{t.text}"
                                    </p>

                                    <div>
                                        <div className="font-bold text-lg">{t.name}</div>
                                        <div className="text-gray-400 text-sm">{t.location}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Controls */}
                        <div className="absolute bottom-8 right-8 flex gap-2 z-10">
                            <button onClick={prev} className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button onClick={next} className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center mt-6 gap-2">
                        {testimonials.map((_, i) => (
                            <div
                                key={i}
                                onClick={() => {
                                    setCurrentIndex(i);
                                    resetInterval();
                                }}
                                className={`w-3 h-3 rounded-full cursor-pointer transition ${i === currentIndex ? 'bg-yellow-400' : 'bg-gray-600'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}