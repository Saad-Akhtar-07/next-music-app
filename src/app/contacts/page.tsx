"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

function page() {
  return (
    <div className="relative min-h-screen bg-black py-12 pt-20 flex items-center justify-center">
      <BackgroundBeams className="w-full h-full absolute inset-0 z-0" />
      <div className="relative z-10 w-full max-w-lg bg-white/10 dark:bg-black/60 rounded-xl p-8 shadow-lg border border-white/20 backdrop-blur">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Contact Us</h1>
        <form className="space-y-5">
          <div>
            <label className="block text-white text-sm mb-2" htmlFor="name">Name</label>
            <input id="name" type="text" className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-300" placeholder="Your Name" required />
          </div>
          <div>
            <label className="block text-white text-sm mb-2" htmlFor="email">Email</label>
            <input id="email" type="email" className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-300" placeholder="you@email.com" required />
          </div>
          <div>
            <label className="block text-white text-sm mb-2" htmlFor="message">Message</label>
            <textarea id="message" className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-300" rows={4} placeholder="Your message..." required></textarea>
          </div>
          <button type="submit" className= "px-6 py-2 rounded-full text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300 hover:scale-105 ">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default page