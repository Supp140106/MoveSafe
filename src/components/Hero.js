'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Loader2 } from 'lucide-react';
import Swal from 'sweetalert2';

// Mumbai Metropolitan Region (MMR) Locations
const MMR_LOCATIONS = [
    {
        label: "MUMBAI CITY (South Mumbai)",
        options: [
            "Colaba", "Cuffe Parade", "Churchgate", "Nariman Point", "Fort",
            "Ballard Estate", "Marine Drive", "Malabar Hill", "Walkeshwar",
            "Grant Road", "Girgaon", "Chowpatty", "Tardeo", "Breach Candy",
            "Mahalaxmi", "Byculla", "Mumbai Central", "Agripada", "Nagpada"
        ]
    },
    {
        label: "MUMBAI SUBURBAN - Western",
        options: [
            "Bandra (East)", "Bandra (West)", "Khar", "Santacruz", "Vile Parle",
            "Andheri", "Jogeshwari", "Goregaon", "Malad", "Kandivali",
            "Borivali", "Dahisar", "Oshiwara", "Versova", "Lokhandwala",
            "Goregaon Filmcity", "Juhu", "Marol", "Saki Naka", "MIDC",
            "Charkop", "Gorai", "Manori", "Aksa Beach", "Madh Island"
        ]
    },
    {
        label: "MUMBAI SUBURBAN - Eastern",
        options: [
            "Kurla (East)", "Kurla (West)", "Ghatkopar", "Vidyavihar",
            "Vikhroli", "Kanjurmarg", "Bhandup", "Mulund", "Powai",
            "Chandivali", "Govandi", "Chembur", "Deonar", "Mankhurd"
        ]
    },
    {
        label: "NAVI MUMBAI",
        options: [
            "Airoli", "Ghansoli", "Koparkhairne", "Vashi", "Turbhe",
            "Sanpada", "Juinagar", "Nerul", "Seawoods", "Darave",
            "Belapur (CBD)", "Kharghar", "Taloja", "Kalamboli",
            "Kamothe", "Panvel", "Ulwe", "Dronagiri"
        ]
    },
    {
        label: "THANE CITY",
        options: [
            "Thane West", "Thane East", "Manpada", "Majiwada", "Vasant Vihar",
            "Patlipada", "Ghodbunder Road", "Naupada", "Panchpakhadi",
            "Kasarvadavali", "Wagle Estate", "Kapurbawdi"
        ]
    },
    {
        label: "KALYAN–DOMBIVLI REGION",
        options: [
            "Kalyan (East)", "Kalyan (West)", "Dombivli (East)", "Dombivli (West)",
            "Titwala", "Ambivli", "Shahad", "Ulhasnagar 1", "Ulhasnagar 2",
            "Ulhasnagar 3", "Ulhasnagar 4", "Ulhasnagar 5"
        ]
    },
    {
        label: "MIRA–BHAYANDAR",
        options: [
            "Mira Road (East)", "Mira Road (West)", "Bhayandar (East)",
            "Bhayandar (West)", "Uttan", "Gorai", "Dongri"
        ]
    },
    {
        label: "VASAI–VIRAR",
        options: [
            "Vasai (East)", "Vasai (West)", "Nalasopara (East)", "Nalasopara (West)",
            "Virar (East)", "Virar (West)", "Vasai Road", "Arnala", "Sopara", "Pelhar"
        ]
    },
    {
        label: "OTHER REGIONS IN MMR",
        options: [
            "Palghar - Vasai", "Palghar - Virar", "Palghar - Nalasopara",
            "Kelwa", "Saphale", "Raigad - Panvel", "Khopoli", "Uran",
            "Karjat", "Neral"
        ]
    }
];

// Major Indian cities for dropdown (excluding MMR duplicates if preferred, but keeping for completeness)
const INDIAN_CITIES = [
    // Metros
    "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad",
    // North India
    "Lucknow", "Jaipur", "Chandigarh", "Dehradun", "Amritsar", "Agra",
    "Kanpur", "Varanasi", "Noida", "Gurgaon", "Faridabad", "Ghaziabad",
    "Meerut", "Allahabad", "Shimla", "Jammu", "Srinagar",
    // South India  
    "Kochi", "Coimbatore", "Mysore", "Trivandrum", "Madurai",
    "Visakhapatnam", "Vijayawada", "Mangalore", "Tirupati", "Pondicherry",
    // West India
    "Pune", "Ahmedabad", "Surat", "Vadodara", "Nagpur", "Indore",
    "Bhopal", "Nashik", "Rajkot", "Goa",
    // East India
    "Patna", "Ranchi", "Bhubaneswar", "Guwahati", "Siliguri",
    "Jamshedpur", "Raipur", "Cuttack", "Imphal", "Shillong",
    // Central India
    "Jabalpur", "Gwalior", "Ujjain", "Aurangabad"
].sort();

export default function Hero() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        pickupCity: '',
        dropCity: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.pickupCity || !formData.dropCity || !formData.phoneNumber) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Information',
                text: 'Please fill in all fields to get your quote.',
                confirmButtonColor: '#111827',
            });
            return;
        }

        if (formData.pickupCity === formData.dropCity) {
            Swal.fire({
                icon: 'warning',
                title: 'Same Cities Selected',
                text: 'Pickup and drop cities cannot be the same.',
                confirmButtonColor: '#111827',
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Quote Request Received!',
                    text: `Thank you! We'll contact you shortly with a quote for ${formData.pickupCity} to ${formData.dropCity}.`,
                    confirmButtonColor: '#111827',
                });
                // Reset form
                setFormData({
                    pickupCity: '',
                    dropCity: '',
                    phoneNumber: '',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Request Failed',
                    text: data.message || 'Something went wrong. Please try again.',
                    confirmButtonColor: '#111827',
                });
            }
        } catch (error) {
            console.error('Submission error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Connection Error',
                text: 'Failed to submit request. Please check your connection and try again.',
                confirmButtonColor: '#111827',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

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

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Pickup City</label>
                                    <select
                                        name="pickupCity"
                                        value={formData.pickupCity}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:border-primary-600 focus:ring-0 outline-none transition-all font-medium text-gray-900 appearance-none cursor-pointer"
                                        required
                                    >
                                        <option value="">Select City / Area</option>
                                        {MMR_LOCATIONS.map((group) => (
                                            <optgroup key={group.label} label={group.label}>
                                                {group.options.map((option) => (
                                                    <option key={option} value={option}>{option}</option>
                                                ))}
                                            </optgroup>
                                        ))}
                                        <optgroup label="Other Major Cities">
                                            {INDIAN_CITIES.map((city) => (
                                                <option key={city} value={city}>{city}</option>
                                            ))}
                                        </optgroup>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Drop City</label>
                                    <select
                                        name="dropCity"
                                        value={formData.dropCity}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:border-primary-600 focus:ring-0 outline-none transition-all font-medium text-gray-900 appearance-none cursor-pointer"
                                        required
                                    >
                                        <option value="">Select City / Area</option>
                                        {MMR_LOCATIONS.map((group) => (
                                            <optgroup key={group.label} label={group.label}>
                                                {group.options.map((option) => (
                                                    <option key={option} value={option}>{option}</option>
                                                ))}
                                            </optgroup>
                                        ))}
                                        <optgroup label="Other Major Cities">
                                            {INDIAN_CITIES.map((city) => (
                                                <option key={city} value={city}>{city}</option>
                                            ))}
                                        </optgroup>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Mobile Number</label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="+91 98765 43210"
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:border-primary-600 focus:ring-0 outline-none transition-all font-medium text-gray-900 placeholder-gray-400"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-primary py-4 text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 w-5 h-5 animate-spin inline" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        Get Estimate <ArrowRight className="ml-2 w-5 h-5 inline" />
                                    </>
                                )}
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
