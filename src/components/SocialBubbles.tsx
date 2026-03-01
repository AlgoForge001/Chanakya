'use client';

import React from 'react';
import { Instagram } from 'lucide-react';

const SocialBubbles = () => {
    const whatsappNumber = "919730390599";
    const whatsappMessage = "Hello! I would like to know more about Chanakya International School.";
    const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedWhatsappMessage}`;
    const instagramUrl = "https://www.instagram.com/chhanakyaschool";

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-center space-y-4">
            {/* Instagram Bubble */}
            <div className="group relative">
                <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#c32aa3] text-white rounded-full shadow-lg transition-all duration-300 transform group-hover:scale-110 active:scale-95 group-hover:-rotate-12"
                    aria-label="Visit Instagram"
                >
                    <Instagram size={28} />
                </a>

                {/* Tooltip */}
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-xl shadow-xl text-xs font-semibold opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-x-4 group-hover:translate-x-0 whitespace-nowrap border border-gray-100">
                    Follow us
                    <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-white" />
                </div>
            </div>

            {/* WhatsApp Bubble */}
            <div className="group relative">
                {/* Ripple Effect */}
                <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />

                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl transition-all duration-300 transform group-hover:scale-110 active:scale-95 group-hover:rotate-12"
                    aria-label="Chat on WhatsApp"
                >
                    <svg
                        viewBox="0 0 24 24"
                        width="32"
                        height="32"
                        fill="currentColor"
                        className="drop-shadow-sm"
                    >
                        <path d="M12.004 2C6.48 2 2.004 6.48 2.004 12c0 1.91.53 3.69 1.45 5.23L2.004 22l4.89-1.42c1.47.88 3.19 1.42 5.11 1.42 5.52 0 10-4.48 10-10S17.524 2 12.004 2zm5.75 14.15c-.24.68-1.4 1.25-1.92 1.33-.49.07-1.12.1-3.23-.77-2.7-1.11-4.44-3.83-4.57-4.01-.14-.18-1.11-1.48-1.11-2.81 0-1.33.68-1.99.93-2.25.21-.21.54-.3.8-.3.08 0 .15 0 .22.01.2.01.35.02.5.38.19.46.65 1.58.7 1.7.06.12.1.26.02.42-.08.16-.12.26-.24.41-.12.14-.26.32-.37.43-.12.12-.25.26-.11.5.14.24.63 1.03 1.34 1.67.92.82 1.7 1.07 1.94 1.19.24.12.38.1.51-.04.14-.15.58-.68.74-.91.16-.24.32-.2.54-.12.22.08 1.41.67 1.65.79.24.12.4.18.46.28.06.1.06.57-.18 1.25z" />
                    </svg>
                </a>

                {/* Tooltip */}
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-xl shadow-xl text-xs font-semibold opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-x-4 group-hover:translate-x-0 whitespace-nowrap border border-gray-100">
                    Chat with us
                    <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-white" />
                </div>
            </div>
        </div>
    );
};

export default SocialBubbles;
