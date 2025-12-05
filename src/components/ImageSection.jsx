"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ImageSection({
    imageSrc,
    title,
    subtitle,
    description,
    reversed = false,
}) {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container-custom">
                <div
                    className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                        } items-center gap-16`}
                >
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="absolute inset-0 bg-primary-600 rounded-sm transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                        <div className="relative h-[400px] w-full overflow-hidden rounded-sm shadow-xl">
                            <img
                                src={imageSrc}
                                alt={title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <div className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-widest mb-4 rounded-sm">
                            {subtitle}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
                            {title}
                        </h2>
                        <p className="text-[#082f49] text-lg leading-relaxed mb-8 font-medium">
                            {description}
                        </p>
                        <Link
                            href="/about"
                            className="group inline-flex items-center text-primary-600 font-bold uppercase tracking-wide text-sm hover:text-primary-800 transition-colors"
                        >
                            Read More
                            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
