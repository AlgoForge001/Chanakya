import React from 'react';
import Image from 'next/image';

const facilities = [
    {
        title: 'Positive Learning Environment',
        image: '/positive_learning.jpg',
        description: 'A joyful and engaging classroom atmosphere that encourages curiosity and confidence.',
        reverse: false,
    },
    {
        title: 'Safe School Bus',
        image: '/bus.png',
        description: 'GPS-enabled buses with trained staff ensuring safe daily transportation.',
        reverse: true,
    },
    {
        title: 'Healthy Canteen',
        image: '/canteen.jpg',
        description: 'Nutritious, hygienic meals that support students’ health and well-being.',
        reverse: false,
    },
    {
        title: 'CCTV Surveillance',
        image: '/cctv.jpg',
        description: '24/7 CCTV monitoring across the campus for complete student safety.',
        reverse: true,
    },
];

const FloatingElement = ({ className, delay = "0s" }: { className: string; delay?: string }) => (
    <div
        className={`absolute rounded-full blur-3xl mix-blend-multiply opacity-20 animate-pulse ${className}`}
        style={{ animationDelay: delay }}
    />
);

const FacilitiesSection = () => {
    return (
        <section className="relative w-full flex flex-col bg-[#FCF9F6] overflow-hidden">
            {/* 3D Abstract Background Elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <FloatingElement className="w-[500px] h-[500px] bg-orange-200/50 -top-20 -left-20" />
                <FloatingElement className="w-[600px] h-[600px] bg-peach-200/40 bottom-[-10%] right-[-10%]" delay="2s" />
                <FloatingElement className="w-[400px] h-[400px] bg-beige-200/50 top-1/2 left-1/3 -translate-y-1/2" delay="1s" />
                <FloatingElement className="w-[300px] h-[300px] bg-orange-100/30 bottom-1/4 left-1/4" delay="3s" />

                {/* 3D Rings & Spheres */}
                <div className="absolute top-40 right-[15%] w-32 h-32 rounded-full border-[10px] border-orange-100/30 opacity-40 rotate-12" />
                <div className="absolute bottom-60 left-[10%] w-48 h-48 rounded-full border-[15px] border-peach-100/20 opacity-30 -rotate-12" />
                <div className="absolute top-1/4 left-[5%] w-12 h-12 bg-orange-200/20 rounded-full blur-[1px]" />
                <div className="absolute bottom-1/4 right-[8%] w-20 h-20 bg-peach-200/10 rounded-full blur-[2px]" />
                <div className="absolute top-[10%] left-[40%] w-16 h-16 rounded-full border-[4px] border-beige-200/40 opacity-50" />
                <div className="absolute bottom-[5%] left-[20%] w-24 h-24 bg-orange-100/20 rounded-full" />
                <div className="absolute top-1/2 right-[20%] w-28 h-28 rounded-full border-[6px] border-peach-200/30 opacity-40 rotate-45" />
                <div className="absolute top-[60%] left-[5%] w-14 h-14 bg-beige-100/30 rounded-full blur-sm" />
            </div>

            {/* Top Header Band */}
            <div className="relative z-10 w-full bg-[#4F56C0] py-20 px-4 text-center">
                <h2 className="text-4xl md:text-6xl font-bold font-poppins text-white uppercase tracking-wider mb-4">
                    School Facilities
                </h2>
                <p className="text-blue-100 font-inter text-lg max-w-2xl mx-auto opacity-90">
                    Safe, modern, and engaging learning spaces for intellectual growth.
                </p>
            </div>

            {/* Hybrid Transition: Desktop Triangles / Mobile Glassmorphism */}
            <div className="relative w-full z-20">
                {/* Desktop: Sawtooth Separator */}
                <div className="hidden md:block w-full h-12 relative -mt-0.5 overflow-hidden">
                    <svg
                        viewBox="0 0 1440 48"
                        className="absolute top-0 w-full h-full"
                        preserveAspectRatio="none"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 0L48 48L96 0L144 48L192 0L240 48L288 0L336 48L384 0L432 48L480 0L528 48L576 0L624 48L672 0L720 48L768 0L816 48L864 0L912 48L960 0L1008 48L1056 0L1104 48L1152 0L1200 48L1248 0L1296 48L1344 0L1392 48L1440 0V0H0Z"
                            fill="#4F56C0"
                        />
                    </svg>
                </div>

                {/* Mobile: Glassmorphism Gradient transition */}
                <div className="block md:hidden relative w-full h-24 -mt-12 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#4F56C0] to-transparent opacity-90" />
                    <div className="absolute inset-0 backdrop-blur-md bg-white/5" />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
                </div>
            </div>

            {/* Content Grid */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 lg:gap-x-20">
                    {facilities.map((facility, index) => (
                        <div
                            key={index}
                            className={`flex flex-col sm:flex-row items-center gap-8 lg:gap-10 group ${facility.reverse ? 'sm:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Image Container with Glassmorphism shadow */}
                            <div className="w-full sm:w-1/2 flex-shrink-0">
                                <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200/50 bg-white p-2 border border-white/50 transition-all duration-500 group-hover:-translate-y-2">
                                    <div className="relative w-full h-full rounded-[24px] overflow-hidden">
                                        <Image
                                            src={facility.image}
                                            alt={facility.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Text Group */}
                            <div className={`w-full sm:w-1/2 flex flex-col ${facility.reverse ? 'text-center sm:text-right' : 'text-center sm:text-left'
                                }`}>
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 font-poppins leading-tight">
                                    {facility.title}
                                </h3>
                                <p className="text-slate-500 font-inter text-base md:text-lg leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                                    "{facility.description}"
                                </p>
                                <div className={`mt-6 flex ${facility.reverse ? 'justify-center sm:justify-end' : 'justify-center sm:justify-start'}`}>
                                    <div className="w-12 h-1.5 bg-orange-200 rounded-full group-hover:w-20 transition-all duration-500" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FacilitiesSection;
