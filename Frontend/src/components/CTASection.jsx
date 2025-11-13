import React from 'react';
import { LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section 
      className="relative py-20 text-center overflow-hidden bg-linear-to-r from-blue-600 dark: dark:bg-slate-950  border-t border-transparent dark:border-slate-800 transition-colors duration-300" 
      data-scroll-section
    >
      <div className="absolute inset-0 opacity-0 dark:opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <h3 
          className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight reveal reveal-up"
          data-scroll
        >
          Join the Future of Healthcare Today
        </h3>
        
        <p 
          className="text-lg md:text-xl mb-10 text-blue-100 dark:text-slate-400 max-w-2xl mx-auto reveal reveal-up"
          data-scroll
          data-scroll-delay="0.1"
        >
          Register now as a Patient, Doctor, or Hospital and experience a connected, secure, and immutable health ecosystem.
        </p>
        
        <div 
           className="reveal reveal-up" 
           data-scroll
           data-scroll-delay="0.2"
        >
          <button
            onClick={() => navigate("/signup")}
            // Added 'relative' to the button so the icon's absolute positioning works
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full shadow-xl bg-white text-blue-700  hover:bg-gray-50 dark:bg-greenish dark:text-slate-900 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <span className="font-bold text-lg group-hover:text-xl transition-all duration-300 ease-out pr-5 group-hover:pr-0">
              Get Started
            </span>
            
            <LogIn 
              className="absolute right-6 transform transition-all duration-300 ease-in-out group-hover:translate-x-full group-hover:opacity-0 w-5 h-5" 
            />
          </button>
        </div>
      </div>
    </section>
  );
}