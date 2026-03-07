'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [

    {
        image: '/14072022012942_0_456814_Chanakya-The-Global-School-For-Intellectuals-Palghar-(1).jpg',
        title: 'World Class Infrastructure',
        description: 'Modern campus designed for holistic development and intellectual growth.',
        alt: 'World-class campus infrastructure of Chanakya International School in Palghar',
    },
    {
        image: '/14072022015320_8033_Chanakya-The-Global-School-For-Intellectuals-Palghar-(7).jpg',
        title: 'Excellence in Education',
        description: 'Nurturing the next generation of global leaders with a future-ready curriculum.',
        alt: 'Students studying in a modern classroom at Chanakya International School',
    },
    {
        image: '/Campus View.avif',
        title: 'Inspiring Environment',
        description: 'A serene and safe space where curiosity meets opportunity.',
        alt: 'Aerial view of Chanakya International School campus in Palghar',
    },
    {
        image: '/Chanakya_The_Global_School_For_Intellectuals_5205_Dance_UA_1.jpg',
        title: 'Vibrant Extra-Curriculars',
        description: 'Promoting talent beyond academics through arts, sports, and culture.',
        alt: 'Students performing a traditional dance at Chanakya International School annual event',
    },
];

const HeroCarousel = () => {
    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, []);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide, isHovered]);

    return (
        <section
            className="relative h-[70vh] lg:h-[85vh] w-full overflow-hidden bg-slate-100"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Slides */}
            <div className="relative h-full w-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        <div className="absolute inset-0 bg-black/30 z-10" />
                        <Image
                            src={slide.image}
                            alt={slide.alt || slide.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />

                        {/* Overlay Content */}
                        <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
                            <div className="max-w-4xl text-center text-white">
                                <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg tracking-tight">
                                    {slide.title}
                                </h2>
                                <p className="text-lg md:text-xl font-medium opacity-90 mb-8 drop-shadow-md max-w-2xl mx-auto">
                                    {slide.description}
                                </p>
                                <div className="flex justify-center space-x-4">
                                    <Link
                                        href="/#culture-section"
                                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg active:scale-95 flex items-center"
                                    >
                                        Learn More
                                    </Link>
                                    <Link
                                        href="/campuses"
                                        className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/50 px-8 py-3 rounded-full font-bold transition-all active:scale-95 flex items-center"
                                    >
                                        Our Facilities
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white transition-all active:scale-90"
                aria-label="Previous slide"
            >
                <ChevronLeft size={32} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white transition-all active:scale-90"
                aria-label="Next slide"
            >
                <ChevronRight size={32} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === current
                            ? 'bg-emerald-500 w-8'
                            : 'bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroCarousel;
