import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Target, Brain, Users, Sparkles, BookOpen, Microscope, Recycle, HeartPulse, GraduationCap, Palette, Trophy } from 'lucide-react';

const objectives = [
    { title: 'Stretch & Inspire', desc: 'A programme to stretch, challenge and inspire your child.', icon: Sparkles },
    { title: 'Engaged Students', desc: 'Designed to engage students in their own learning.', icon: Brain },
    { title: 'Global Standards', desc: 'Checked against international attainment and skills.', icon: Target },
    { title: 'Clear Foundation', desc: 'Structured learning objectives for teaching success.', icon: BookOpen }
];

const highlights = [
    { name: 'Literacy & Math', icon: BookOpen },
    { name: 'Science Wonders', icon: Microscope },
    { name: 'Digital Literacy', icon: Sparkles },
    { name: 'Environmental Awareness', icon: Recycle },
    { name: 'Outdoor Play', icon: Trophy },
    { name: 'Arts & Music', icon: Palette }
];

export default function PrimaryPage() {
    return (
        <main className="flex min-h-screen flex-col pt-[72px] lg:pt-[88px]">
            {/* Hero Section */}
            <div className="relative bg-[#0A2351] py-24 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0077B6] rounded-full translate-x-1/2 -translate-y-1/2 opacity-15 blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#5B5FC7] rounded-full -translate-x-1/2 translate-y-1/2 opacity-15 blur-[100px]" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <div className="inline-block px-4 py-1.5 mb-6 bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 rounded-full text-xs font-bold tracking-widest uppercase">
                                Cambridge Pathway
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-poppins text-white mb-8 leading-[1.1]">
                                Cambridge <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
                                    Primary Stage
                                </span>
                            </h1>
                            <p className="text-xl text-blue-100/70 font-inter leading-relaxed max-w-xl mb-10">
                                Igniting the spark of curiosity in young minds through an immersive, dynamic, and hands-on learning environment.
                            </p>
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center bg-[#5B5FC7] hover:bg-white hover:text-[#0A2351] text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-2xl hover:scale-105 active:scale-95 group"
                            >
                                Start the Journey
                                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                                <div className="absolute inset-0 bg-[#5B5FC7] rounded-[80px] rotate-6 opacity-20 scale-105" />
                                <div className="absolute inset-0 bg-blue-400 rounded-[80px] -rotate-3 opacity-20 scale-105" />
                                <div className="relative w-full h-full rounded-[80px] overflow-hidden border-[12px] border-white/10 shadow-3xl bg-slate-900">
                                    <Image
                                        src="/appointment.jpg"
                                        alt="Cambridge Primary Students"
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
                            <span className="text-[#5B5FC7] font-black uppercase tracking-[0.2em] text-sm mb-4 block">Our Approach</span>
                            <h2 className="text-3xl md:text-5xl font-black text-[#0A2351] mb-8 font-poppins leading-tight">
                                Igniting Curiosity <br />Through Exploration
                            </h2>
                            <div className="space-y-6 text-slate-600 font-inter leading-relaxed text-lg">
                                <p>
                                    In our lower primary program, we're dedicated to igniting the spark of curiosity in young minds by creating an immersive and dynamic learning environment. We believe in the power of hands-on exploration, where children are actively encouraged to discover, experiment, and engage in meaningful discussions.
                                </p>
                                <p>
                                    Our focus is on nurturing literacy, mathematics, and digital literacy skills, alongside introducing them to the wonders of science, environmental awareness, personal development, and health education. We recognize and celebrate the diversity in learning styles and developmental paces among children, tailoring our approach to ensure each child flourishes at their own rhythm.
                                </p>
                            </div>
                        </div>
                        <div className="bg-blue-50/50 rounded-[40px] p-12 lg:p-16 border border-blue-100 italic relative">
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#0077B6] rounded-3xl flex items-center justify-center text-white shadow-xl">
                                <Sparkles size={32} />
                            </div>
                            <p className="text-2xl text-[#0A2351] leading-relaxed font-poppins font-medium">
                                "Beyond the classroom, we advocate for holistic development by integrating outdoor play, sports, dance, music, and various other enriching activities. Our goal is to cultivate well-rounded individuals."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum Highlights */}
            <section className="py-24 bg-slate-50 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-[#0A2351] mb-16 font-poppins">Comprehensive Foundation</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {highlights.map((item) => (
                            <div key={item.name} className="flex flex-col items-center group">
                                <div className="w-20 h-20 bg-white rounded-3xl shadow-sm border border-slate-100 flex items-center justify-center text-[#5B5FC7] mb-4 group-hover:scale-110 group-hover:bg-[#5B5FC7] group-hover:text-white transition-all duration-300">
                                    <item.icon size={32} />
                                </div>
                                <span className="text-sm font-bold text-slate-600 text-center">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Model */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-7xl mx-auto h-[600px] bg-[#5B5FC7] rounded-[60px] relative overflow-hidden flex items-center px-12 lg:px-24">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_80%,#FFFFFF,transparent)]" />
                    <div className="grid lg:grid-cols-2 gap-16 relative z-10 w-full">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 font-poppins leading-tight">
                                Excellence in <br />Learning Outcomes
                            </h2>
                            <p className="text-blue-50/70 mb-12 text-lg">
                                All Cambridge Primary subjects include a set of learning objectives that provide a structure for teaching and learning, and a reference for us to check your child's attainment against.
                            </p>
                            <Link href="/admission" className="text-white font-bold flex items-center gap-2 hover:gap-4 transition-all">
                                How to Apply <ChevronRight />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {objectives.map((obj) => (
                                <div key={obj.title} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl">
                                    <obj.icon className="text-blue-200 mb-4" size={24} />
                                    <h4 className="text-white font-bold mb-2">{obj.title}</h4>
                                    <p className="text-xs text-blue-50/50 leading-relaxed">{obj.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Progression */}
            <section className="py-24 bg-slate-50 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-white border-[12px] bg-white">
                                <Image
                                    src="/appointment.jpg"
                                    alt="Primary Progression"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <h2 className="text-3xl md:text-5xl font-black text-[#0A2351] mb-8 font-poppins leading-tight">
                                Smooth Progression
                            </h2>
                            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                                Our curriculum ensures a smooth progression throughout Cambridge Primary and onwards into Cambridge Lower Secondary and beyond. We prepare individuals who are equipped with the skills and confidence to navigate the world.
                            </p>
                            <Link
                                href="/programmes"
                                className="text-[#5B5FC7] font-bold flex items-center gap-2"
                            >
                                View Other Programmes <ChevronRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}
