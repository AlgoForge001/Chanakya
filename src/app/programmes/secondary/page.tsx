import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Target, Brain, Users, Sparkles, BookOpen, Microscope, Recycle, HeartPulse, GraduationCap } from 'lucide-react';

const objectives = [
    { title: 'Academic Excellence', desc: 'Stretch, challenge and inspire your child.', icon: Target },
    { title: 'Engaged Learning', desc: 'Active participation supported by global resources.', icon: Brain },
    { title: 'Structured Teaching', desc: 'Clear learning objectives provide a solid framework.', icon: BookOpen },
    { title: 'Smooth Progression', desc: 'A seamless path towards Upper Secondary and beyond.', icon: GraduationCap }
];

const subjects = [
    { name: 'Literacy', icon: BookOpen },
    { name: 'Mathematics', icon: Brain },
    { name: 'Science', icon: Microscope },
    { name: 'Digital Literacy', icon: Sparkles },
    { name: 'Environmental Awareness', icon: Recycle },
    { name: 'Health Education', icon: HeartPulse }
];

export default function SecondaryPage() {
    return (
        <main className="flex min-h-screen flex-col pt-[72px] lg:pt-[88px]">
            {/* Hero Section */}
            <div className="relative bg-[#0A2351] py-24 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0077B6] rounded-full translate-x-1/2 -translate-y-1/2 opacity-10 blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#5B5FC7] rounded-full -translate-x-1/2 translate-y-1/2 opacity-10 blur-[100px]" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <div className="inline-block px-4 py-1.5 mb-6 bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 rounded-full text-xs font-bold tracking-widest uppercase">
                                Cambridge Pathway
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-poppins text-white mb-8 leading-[1.1]">
                                Cambridge <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
                                    Lower Secondary
                                </span>
                            </h1>
                            <p className="text-xl text-blue-100/70 font-inter leading-relaxed max-w-xl mb-10">
                                Empowering students to cultivate their own learning strategies and discover their individual strengths during a critical developmental stage.
                            </p>
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center bg-[#0077B6] hover:bg-white hover:text-[#0A2351] text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-2xl hover:scale-105 active:scale-95 group"
                            >
                                Secure a Bright Future
                                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                                <div className="absolute inset-0 bg-blue-500 rounded-[80px] rotate-6 opacity-20 scale-105" />
                                <div className="absolute inset-0 bg-blue-300 rounded-[80px] -rotate-3 opacity-20 scale-105" />
                                <div className="relative w-full h-full rounded-[80px] overflow-hidden border-[12px] border-white/10 shadow-3xl bg-slate-900">
                                    <Image
                                        src="/secondary.png"
                                        alt="Cambridge Lower Secondary Students"
                                        fill
                                        unoptimized
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section: Philosophy */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-[#5B5FC7] font-black uppercase tracking-[0.2em] text-sm mb-4 block">Our Philosophy</span>
                            <h2 className="text-3xl md:text-5xl font-black text-[#0A2351] mb-8 font-poppins leading-tight">
                                Personal Growth Through Diverse Experiences
                            </h2>
                            <div className="space-y-6 text-slate-600 font-inter leading-relaxed text-lg">
                                <p>
                                    Our lower secondary programme is designed to provide a diverse range of educational experiences aimed at fostering personal growth and the development of each student. Recognizing the unique developmental needs of every learner, we customize our teaching methods to accommodate these differences.
                                </p>
                                <p>
                                    At this stage, we introduce our students to challenging concepts that enhance their cognitive abilities. Our educators empower students to cultivate their own learning strategies, promoting long-term benefits and encouraging the discovery of their individual strengths.
                                </p>
                            </div>
                        </div>
                        <div className="bg-slate-50 rounded-[40px] p-12 lg:p-16 border border-slate-100 italic relative">
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#5B5FC7] rounded-3xl flex items-center justify-center text-white shadow-xl">
                                <Users size={32} />
                            </div>
                            <p className="text-2xl text-[#0A2351] leading-relaxed font-poppins font-medium">
                                "Our goal is to cultivate independent thinking among students, guiding them to formulate their own thoughts, ideas, and beliefs with confidence in their knowledge and skills."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Curriculum Grid */}
            <section className="py-24 bg-slate-50 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-[#0A2351] mb-4 font-poppins">What will your child learn?</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">A structured framework focusing on core competencies and environmental consciousness.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {subjects.map((subject) => (
                            <div key={subject.name} className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all group">
                                <div className="w-14 h-14 bg-blue-50 text-[#0077B6] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0077B6] group-hover:text-white transition-colors">
                                    <subject.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-[#0A2351]">{subject.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Objectives */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-7xl mx-auto h-[600px] bg-[#0A2351] rounded-[60px] relative overflow-hidden flex items-center px-12 lg:px-24">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_30%_20%,#FFFFFF,transparent)]" />
                    <div className="grid lg:grid-cols-2 gap-16 relative z-10 w-full">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 font-poppins leading-tight">
                                Structured Success
                            </h2>
                            <p className="text-blue-100/60 mb-12 text-lg">
                                Every subject including learning objectives that provide a structure for teaching and learning, and a reference for us to check your child's attainment.
                            </p>
                            <Link href="/admission" className="text-white font-bold flex items-center gap-2 hover:gap-4 transition-all">
                                Explore Admission Process <ChevronRight />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {objectives.map((obj) => (
                                <div key={obj.title} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-3xl">
                                    <obj.icon className="text-blue-400 mb-4" size={24} />
                                    <h4 className="text-white font-bold mb-2">{obj.title}</h4>
                                    <p className="text-xs text-blue-100/50 leading-relaxed">{obj.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Holistic Dev */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/school-life-3.jpg"
                                    alt="Holistic Activities"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <h2 className="text-3xl md:text-5xl font-black text-[#0A2351] mb-8 font-poppins leading-tight">
                                Beyond the Classroom
                            </h2>
                            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                                We advocate for holistic development by integrating outdoor play, sports, dance, music, and various other enriching activities. Our goal is to cultivate well-rounded individuals equipped with the skills and confidence to navigate the complexities of the world.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {['Sports', 'Dance', 'Music', 'Outdoor Play', 'Arts'].map(tag => (
                                    <span key={tag} className="px-5 py-2 bg-slate-50 border border-slate-100 rounded-full text-sm font-bold text-slate-500">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#5B5FC7] px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-12 font-poppins">
                        Ready to Join the Journey?
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/contact-us" className="w-full sm:w-auto bg-white text-[#5B5FC7] px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:bg-opacity-90 transition-all">
                            Apply for Admission
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto bg-[#0A2351] text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:bg-opacity-90 transition-all">
                            Visit our Campus
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
