import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const classesData = [
    {
        title: 'Cambridge Primary',
        description: 'A strong foundation for young learners focusing on literacy, numeracy, and curiosity-driven learning.',
        image: '/Campus View.avif', // Placeholder image from public folder
        bgColor: 'bg-[#F2AE40]', // Vibrant School Yellow
        textColor: 'text-slate-800',
        descColor: 'text-slate-700',
        accentColor: 'text-[#5B5FC7]'
    },
    {
        title: 'Cambridge Lower Secondary',
        description: 'An engaging programme that builds critical thinking, creativity, and subject understanding.',
        image: '/14072022012942_0_456814_Chanakya-The-Global-School-For-Intellectuals-Palghar-(1).jpg', // Placeholder
        bgColor: 'bg-blue-100', // Light Blue
        textColor: 'text-slate-800',
        descColor: 'text-slate-700',
        accentColor: 'text-[#5B5FC7]'
    },
    {
        title: 'Cambridge Board',
        description: 'A globally recognized qualification preparing students for higher education and future success.',
        image: '/14072022015320_8033_Chanakya-The-Global-School-For-Intellectuals-Palghar-(7).jpg', // Placeholder
        bgColor: 'bg-[#5B5FC7]', // School Blue
        textColor: 'text-white',
        descColor: 'text-blue-50',
        accentColor: 'text-white underline decoration-2 underline-offset-4'
    },
];

const ClassesSection = () => {
    return (
        <section className="relative pt-32 pb-24 lg:py-24 bg-white overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="hidden md:block absolute top-[5%] right-[-10%] w-[400px] h-[400px] bg-[#5B5FC7] rounded-full opacity-[0.05] z-0" />
            <div className="hidden md:block absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] bg-slate-200 rounded-full opacity-[0.08] z-0" />
            <div className="hidden lg:block absolute top-[40%] left-[-8%] w-[250px] h-[250px] bg-[#5B5FC7] rounded-full opacity-[0.03] z-0" />
            <div className="hidden lg:block absolute top-[15%] left-[20%] w-[120px] h-[120px] bg-[#5B5FC7] rounded-full opacity-[0.04] z-0" />
            <div className="hidden md:block absolute bottom-[20%] right-[15%] w-[180px] h-[180px] bg-indigo-200 rounded-full opacity-[0.06] z-0" />
            <div className="hidden lg:block absolute top-[60%] right-[10%] w-[100px] h-[100px] bg-[#5B5FC7] rounded-full opacity-[0.02] z-0" />

            {/* New Colored Shapes */}
            <div className="hidden md:block absolute top-[25%] right-[5%] w-[150px] h-[150px] bg-[#F2AE40] rounded-full opacity-[0.06] z-0" />
            <div className="hidden lg:block absolute bottom-[15%] left-[10%] w-[200px] h-[200px] bg-blue-200 rounded-full opacity-[0.07] z-0" />
            <div className="hidden md:block absolute top-[70%] left-[5%] w-[80px] h-[80px] bg-[#F2AE40] rounded-full opacity-[0.04] z-0" />

            {/* Half-moon / Blob-like shape */}
            <div className="hidden md:block absolute bottom-[10%] right-[-5%] w-[200px] h-[200px] bg-indigo-100 rounded-full opacity-[0.1] z-0 border-[40px] border-transparent border-l-indigo-50 border-t-indigo-50 rotate-45" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-poppins text-slate-900 uppercase tracking-widest inline-block relative">
                        SCHOOL CLASSES
                        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#5B5FC7] rounded-full"></span>
                    </h2>
                </div>

                {/* 3-Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-12">
                    {classesData.map((item, index) => (
                        <div
                            key={index}
                            className={`group flex flex-col ${item.bgColor} rounded-[24px] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:-translate-y-2 border border-slate-100/10`}
                        >
                            {/* Card Image Container */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Card Content Area */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className={`text-2xl font-bold font-poppins ${item.textColor} mb-4 transition-colors duration-300`}>
                                    {item.title}
                                </h3>
                                <p className={`${item.descColor} font-inter leading-relaxed mb-6 flex-grow font-medium`}>
                                    {item.description}
                                </p>

                                <Link
                                    href="#"
                                    className={`inline-flex items-center ${item.accentColor} font-bold font-inter group/link`}
                                >
                                    Learn More
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClassesSection;
