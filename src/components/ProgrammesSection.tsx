"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, Minus, ChevronRight } from 'lucide-react';

const programmeItems = [
    {
        id: 'first-step',
        title: "Chanakya's First Step",
        subtitle: 'Age 3+',
        image: '/appointment.jpg',
        content: 'A play-based programme with a holistic curriculum, engaging resources, and support to measure progress.',
        domains: [
            'Languages and Literacy',
            'Numerics and Logic',
            'Physical Development',
            'Creative Development',
            'Aesthetic Development'
        ],
        description: 'Chanakya’s First Step understands that curiosity and discovery are the prime motivators behind a toddler’s learning. Our Pre-Primary Program is based on experiential and social learning and helps your child learn in a fun-filled space. At the Nursery level, the curriculum revolves around 5 key facets of development – Being Literate, Being Numerate, Being Expressive, Being Healthy and Being Knowledgeable. Literacy includes learning languages, writing and communication, while numeracy includes math, problem solving skills and cognitive development. The wide array of activities undertaken in this program encourages our learners to express themselves through various media like dance, movement, music and art. At the K-1/ 2 Programme, our curriculum is augmented with additional activities and learning tools with enhanced focus on complex concepts like independent reasoning and problem solving.'
    },
    {
        id: 'primary',
        title: 'Cambridge Primary',
        subtitle: 'Age 5+',
        href: '/programmes/primary',
        image: '/appointment.jpg',
        content: 'Clear, adaptable curriculum and flexible assessment options to stretch, challenge and inspire your child.'
    },
    {
        id: 'secondary',
        title: 'Cambridge Lower Secondary',
        subtitle: 'Age 11+',
        href: '/programmes/secondary',
        image: '/appointment.jpg',
        description: "Our lower secondary programme is designed to provide a diverse range of educational experiences aimed at fostering personal growth and the development of each student. Recognizing the unique developmental needs of every learner, we customize our teaching methods to accommodate these differences. We value and respect various learning styles, acknowledging that each child has a distinct approach to comprehending and mastering new knowledge.\n\nAt this stage, we introduce our students to challenging concepts that enhance their cognitive abilities. Our educators empower students to cultivate their own learning strategies, promoting long-term benefits and encouraging the discovery of their individual strengths. Our goal is to cultivate independent thinking among students, guiding them to formulate their own thoughts, ideas, and beliefs with confidence in their knowledge and skills.\n\nBeyond the classroom, we advocate for holistic development by integrating outdoor play, sports, dance, music, and various other enriching activities. Our goal is to not only foster academic growth but also to cultivate well-rounded individuals who are equipped with the skills and confidence to navigate the complexities of the world around them.",
        content: 'Stretch, challenge and inspire your child.',
        highlights: [
            "Engages students in their own learning, supported by resources and textbooks.",
            "All Cambridge Lower Secondary subjects include a set of learning objectives that provide a structure for teaching and learning.",
            "Reference for us to check your child's attainment and skills against.",
            "Ensures a smooth progression throughout Cambridge Lower Secondary and onwards into Cambridge Upper Secondary and beyond."
        ]
    },
    {
        id: 'igcse',
        title: 'Cambridge Board',
        subtitle: 'Age 14+',
        href: '/programmes/igcse',
        image: '/appointment.jpg',
        description: "Our upper secondary programme is crafted to provide a comprehensive curriculum that equips learners for their future academic pursuits at colleges and universities of their choice. With a robust and demanding academic framework, we aim to refine and enhance the knowledge and skills of our students through consistent practice and dedicated effort.\n\nDuring these crucial formative years, we challenge our students to apply the skills they have honed throughout their earlier academic journey. As educators, we deeply appreciate the significance of this academic phase and are committed to supporting our students in achieving their aspirations.\n\nFurthermore, we emphasize the importance of holistic development by encouraging students to actively participate in co-curricular activities such as sports and arts. We believe that such engagement fosters all-round growth and nurtures well-rounded individuals poised for success in both academic and personal pursuits.",
        content: 'Comprehensive curriculum to equip learners for future academic pursuits.',
        highlights: [
            "Over 70 subjects including 30 languages.",
            "Reflective and innovative learning model.",
            "Intellectual and social engagement.",
            "Official Cambridge International curriculum."
        ]
    },
    {
        id: 'advanced',
        title: 'Cambridge Advanced',
        subtitle: 'Age 16+',
        image: '/appointment.jpg',
        content: 'In-depth curriculum and fair assessment to predict university performance. Includes Cambridge International AS & A Level (55 subjects), Cambridge AICE, and IPQ.'
    }
];

const ProgrammesSection = () => {
    const [openItem, setOpenItem] = useState<string | null>('first-step');
    const [displayImage, setDisplayImage] = useState('/appointment.jpg');
    const [isImageFading, setIsImageFading] = useState(false);

    useEffect(() => {
        const item = programmeItems.find(i => i.id === openItem);
        if (item && item.image !== displayImage) {
            setIsImageFading(true);
            const timer = setTimeout(() => {
                setDisplayImage(item.image);
                setIsImageFading(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [openItem, displayImage]);

    return (
        <section id="programmes" className="relative w-full bg-white py-24 overflow-hidden">
            {/* Background Abstract Shapes */}
            <div className="absolute top-10 left-[-5%] w-[300px] h-[300px] bg-gray-100 rounded-full opacity-50 z-0" />
            <div className="absolute top-[-50px] left-[30%] w-[150px] h-[150px] bg-[#5B5FC7] rounded-full opacity-20 z-0" />
            <div className="absolute bottom-[-10%] left-[40%] w-[400px] h-[400px] bg-[#5B5FC7] rounded-full opacity-10 z-0" />
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-gray-100 rounded-full opacity-40 z-0" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 mb-4 bg-[#5B5FC7]/10 text-[#5B5FC7] rounded-full text-sm font-bold tracking-widest uppercase">
                        Educational Excellence
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black font-poppins text-slate-900 leading-tight">
                        Our Programmes
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
                    {/* Left: Accordion Area */}
                    <div className="w-full lg:w-3/5 space-y-4">
                        {programmeItems.map((item) => (
                            <div
                                key={item.id}
                                id={item.id}
                                className={`border-2 rounded-[32px] transition-all duration-300 overflow-hidden ${openItem === item.id
                                    ? 'border-[#5B5FC7] bg-[#5B5FC7]/[0.02] shadow-xl shadow-[#5B5FC7]/5'
                                    : 'border-slate-100 bg-white hover:border-slate-200'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
                                    className="w-full px-8 py-6 flex items-center justify-between text-left group"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${openItem === item.id ? 'bg-[#5B5FC7] text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'
                                            }`}>
                                            {openItem === item.id ? <Minus size={24} /> : <Plus size={24} />}
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-bold font-poppins transition-colors ${openItem === item.id ? 'text-[#5B5FC7]' : 'text-slate-900'
                                                }`}>
                                                {item.title}
                                            </h3>
                                            <p className="text-xs text-slate-400 font-bold tracking-widest uppercase mt-1">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    {openItem === item.id && (
                                        <div className="hidden md:block">
                                            <ChevronRight className="text-[#5B5FC7] opacity-20" size={24} />
                                        </div>
                                    )}
                                </button>

                                <div className={`transition-all duration-500 ease-in-out ${openItem === item.id ? 'max-h-[1200px] opacity-100 mb-8' : 'max-h-0 opacity-0 overflow-hidden'
                                    }`}>
                                    <div className="px-8 ml-[72px] space-y-6">
                                        <p className="text-slate-600 font-inter leading-relaxed text-lg max-w-xl">
                                            {item.content}
                                        </p>

                                        {/* Learning Domains (First Step specific) */}
                                        {(item as any).domains && (
                                            <div className="animate-in fade-in slide-in-from-top-2 duration-500">
                                                <h4 className="text-[#0A2351] font-bold text-sm uppercase tracking-widest mb-4">Learning Domains</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                    {(item as any).domains.map((domain: string) => (
                                                        <div key={domain} className="flex items-center gap-3 text-slate-500 font-medium text-sm">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-[#5B5FC7]" />
                                                            {domain}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Programme Highlights (Primary specific) */}
                                        {(item as any).highlights && (
                                            <div className="animate-in fade-in slide-in-from-top-2 duration-500 space-y-3">
                                                {(item as any).highlights.map((point: string, idx: number) => (
                                                    <div key={idx} className="flex items-start gap-3 text-slate-500 font-medium text-sm">
                                                        <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-[#5B5FC7]/10 flex items-center justify-center">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-[#5B5FC7]" />
                                                        </div>
                                                        {point}
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Description Paragraphs (Supports newline) */}
                                        {(item as any).description && (
                                            <div className="text-slate-500 font-inter leading-relaxed text-sm max-w-2xl pt-6 border-t border-slate-100 whitespace-pre-line">
                                                {item.description}
                                            </div>
                                        )}

                                        {item.href ? (
                                            <Link href={item.href} className="mt-8 flex w-fit items-center gap-2 text-[#5B5FC7] font-bold text-sm cursor-pointer hover:underline group/link">
                                                Learn more about {item.title}
                                                <ChevronRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                                            </Link>
                                        ) : (
                                            <div className="mt-8 flex items-center gap-2 text-[#5B5FC7] font-bold text-sm cursor-pointer hover:underline">
                                                Learn more about {item.title}
                                                <ChevronRight size={16} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Visual Image Container */}
                    <div className="w-full lg:w-2/5 flex justify-center lg:justify-end sticky top-32">
                        <div className="relative group w-full max-w-[450px] aspect-[4/5]">
                            {/* Artistic Background Frames */}
                            <div className="absolute inset-0 bg-[#E6C1BC] rounded-[40px] md:rounded-[60px] translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 shadow-xl" />
                            <div className="absolute inset-0 bg-[#F2AE40] rounded-[40px] md:rounded-[60px] -translate-x-4 -translate-y-4 opacity-20" />

                            {/* Main Image Container */}
                            <div className="relative w-full h-full rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl border-white border-8 md:border-[12px] bg-white">
                                <div className={`relative w-full h-full transition-opacity duration-300 ${isImageFading ? 'opacity-0' : 'opacity-100'}`}>
                                    <Image
                                        src={displayImage}
                                        alt="Cambridge Pathway Programmes"
                                        fill
                                        unoptimized
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2351]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Decorative badge */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0A2351] rounded-full shadow-2xl flex flex-col items-center justify-center text-white border-8 border-white group-hover:scale-110 transition-transform">
                                <span className="text-2xl font-black">100%</span>
                                <span className="text-[8px] font-black uppercase tracking-widest text-blue-200">Excellence</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgrammesSection;
