"use client";

import React, { useEffect, useState } from 'react';

const Preloader = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => setIsVisible(false), 800); // Wait for fade out animation
        }, 2200);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A2351] transition-opacity duration-700 ${isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            {/* Animated Logo Container */}
            <div className="relative mb-8">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl p-1 shadow-2xl animate-startup-pulse overflow-hidden border border-white/20">
                    <img
                        src="/school_logo.jpg"
                        alt="Chanakya Logo"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Outer Glow Ring */}
                <div className="absolute inset-0 -m-4 border-2 border-[#0077B6]/30 rounded-[40px] animate-ping opacity-20" />
            </div>

            {/* Branded Text */}
            <div className="text-center space-y-2 animate-startup-text">
                <h1 className="text-3xl md:text-5xl font-black text-white tracking-[0.2em] font-poppins">
                    CHANAKYA
                </h1>
                <div className="flex items-center justify-center space-x-3">
                    <div className="h-[1px] w-8 bg-[#0077B6]" />
                    <p className="text-[#0077B6] text-xs md:text-sm font-bold uppercase tracking-[0.4em] font-inter">
                        Palghar's Gateway to Cambridge International Education
                    </p>
                    <div className="h-[1px] w-8 bg-[#0077B6]" />
                </div>
            </div>

            <style jsx global>{`
                @keyframes startup-pulse {
                    0% { transform: scale(0.85); opacity: 0; }
                    50% { transform: scale(1.05); opacity: 1; }
                    100% { transform: scale(1); opacity: 1; }
                }

                @keyframes startup-text {
                    0% { transform: translateY(20px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }

                .animate-startup-pulse {
                    animation: startup-pulse 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                .animate-startup-text {
                    animation: startup-text 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
                    opacity: 0;
                }
            `}</style>
        </div>
    );
};

export default Preloader;
