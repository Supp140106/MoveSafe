"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      console.log("Form submitted successfully!");
      alert("Thank you for your inquiry. We will contact you within 24 hours.");
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 p-8 md:p-12 rounded-xl shadow-2xl border-t-4 border-gray-700/80"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-8">
        Request a Free Quote
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition duration-150 shadow-sm"
            placeholder="John Doe"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition duration-150 shadow-sm"
            placeholder="+91 98765 43210"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="emailAddress"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="emailAddress"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition duration-150 shadow-sm"
            placeholder="john@example.com"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label
            htmlFor="serviceType"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Service Type
          </label>
          <select
            id="serviceType"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition duration-150 shadow-sm appearance-none bg-white"
            disabled={isSubmitting}
          >
            <option>House Shifting (Local)</option>
            <option>Office Relocation (Commercial)</option>
            <option>Inter-City Moving</option>
            <option>Vehicle Transportation</option>
            <option>Storage & Warehousing</option>
          </select>
        </div>
      </div>

      <div className="mb-8">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Details / Message
        </label>
        <textarea
          id="message"
          rows="5"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none transition duration-150 shadow-sm"
          placeholder="Please provide origin, destination, preferred date, and size of the move..."
          disabled={isSubmitting}
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-lg font-semibold rounded-lg text-white bg-gray-900 hover:bg-gray-800 transition duration-300 shadow-md hover:shadow-lg cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-3 h-5 w-5 animate-spin" />
            <span>Processing Request...</span>
          </>
        ) : (
          <>
            <span>Submit Inquiry</span>
            <Send className="ml-3 w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
}