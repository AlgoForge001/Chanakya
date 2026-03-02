'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, PartyPopper, Trophy, Microscope, Download, FileText, ArrowRight, Star, Sparkles } from 'lucide-react';

const eventCards = [
    {
        title: "Annual Day Extravaganza",
        date: "December 20, 2025",
        description: "A grand celebration of talent and culture. Our students take to the stage with breathtaking performances in dance, drama, and music, showcasing the vibrant spirit of Chanakya.",
        image: "/annual.jpg",
        icon: <PartyPopper className="w-8 h-8" />,
        color: "bg-red-500",
    },
    {
        title: "Annual Sports Meet",
        date: "January 15, 2026",
        description: "A day of energy and competition. From high-speed sprints to collaborative relay races, our students demonstrate their athletic prowess and sportsmanship on the professional track.",
        image: "/annual_sports_meet.jpg",
        icon: <Trophy className="w-8 h-8" />,
        color: "bg-blue-600",
    },
    {
        title: "Science & Innovation Fair",
        date: "February 28, 2026",
        description: "Curiosity takes flight! An interactive exhibition where young scientists present their innovative projects and experiments, bridging the gap between theory and practical innovation.",
        image: "/aci_innovation.jpg",
        icon: <Microscope className="w-8 h-8" />,
        color: "bg-emerald-600",
    }
];

export default function EventsPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 relative overflow-hidden bg-white">
            {/* Background Decorative Circles */}
            <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-red-400/5 rounded-full blur-[80px] animate-pulse" />
            <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[80px] animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-lime/5 rounded-full blur-[60px]" />

            {/* Hero Section */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 mb-24">
                <div className="max-w-4xl">
                    <span className="inline-block text-brand-lime font-black uppercase tracking-[0.3em] text-sm mb-6 font-outfit">
                        Life at Chanakya
                    </span>
                    <h1 className="text-5xl md:text-8xl font-black text-brand-blue font-outfit leading-none mb-10 tracking-tight">
                        Vibrant <br />
                        <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                            Moments
                        </span> & Events
                    </h1>
                    <p className="text-xl text-slate-600 font-inter max-w-2xl leading-relaxed">
                        Beyond academics, we celebrate the holistic development of our students through a myriad of events that foster creativity, sportsmanship, and innovation.
                    </p>
                </div>
            </section>

            {/* Events Grid */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 mb-32">
                <div className="space-y-20">
                    {eventCards.map((event, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center group`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-3/5 relative aspect-video rounded-[50px] overflow-hidden shadow-2xl border-4 border-white">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className={`absolute top-8 ${idx % 2 === 0 ? 'right-8' : 'left-8'} w-20 h-20 ${event.color} rounded-3xl flex items-center justify-center text-white shadow-2xl rotate-3 group-hover:rotate-12 transition-transform duration-500`}>
                                    {event.icon}
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full lg:w-2/5 space-y-6">
                                <div className="flex items-center gap-3 text-brand-lime font-black uppercase tracking-widest text-sm font-outfit">
                                    <Calendar size={18} />
                                    {event.date}
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-brand-blue font-outfit leading-tight">
                                    {event.title}
                                </h2>
                                <p className="text-lg text-slate-500 font-inter leading-relaxed">
                                    {event.description}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Annual Report Section - Compact Artistic Design */}
            <section className="relative z-10 max-w-4xl mx-auto px-6 py-12 mb-20 overflow-hidden">
                <div className="bg-[#0A2351] rounded-[40px] p-8 md:p-12 relative overflow-hidden group shadow-2xl border border-white/5">
                    {/* Decorative Circles inside the container */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-sea-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-lime/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-brand-lime/20 rounded-full flex items-center justify-center text-brand-lime mb-6 border border-brand-lime/30">
                            <Star size={32} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white font-outfit mb-4 leading-tight">
                            Our Journey of <span className="text-brand-lime italic">Excellence</span>
                        </h2>
                        <p className="text-lg text-blue-100/70 max-w-xl font-inter mb-8">
                            Download our latest Annual Report for a detailed overview of our achievements and strategic vision.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <a
                                href="/Chanakya the Global School of Intellectuals.pdf"
                                download
                                className="w-full md:w-auto inline-flex items-center justify-center bg-brand-lime hover:bg-white text-brand-blue px-8 py-4 rounded-full text-lg font-black transition-all shadow-xl scale-100 hover:scale-105 active:scale-95 group/dl font-outfit tracking-tight whitespace-nowrap"
                            >
                                <Download className="mr-2 w-5 h-5 transition-transform group-hover/dl:-translate-y-1" />
                                presented by jinal dasgupta
                                <FileText className="ml-2 w-5 h-5 opacity-50" />
                            </a>

                            <a
                                href="/Annual Report_.pdf"
                                download
                                className="w-full md:w-auto inline-flex items-center justify-center bg-white hover:bg-brand-lime text-[#0A2351] px-8 py-4 rounded-full text-lg font-black transition-all shadow-xl scale-100 hover:scale-105 active:scale-95 group/dl font-outfit tracking-tight whitespace-nowrap"
                            >
                                <Download className="mr-2 w-5 h-5 transition-transform group-hover/dl:-translate-y-1" />
                                Download School Profile
                                <FileText className="ml-2 w-5 h-5 opacity-50" />
                            </a>
                        </div>

                        <p className="mt-8 text-white/30 text-[10px] font-inter uppercase tracking-widest">
                            PDF Documents • Official Downloads
                        </p>
                    </div>
                </div>
            </section>

            {/* Floating Sparkles in Background */}
            <div className="absolute top-[20%] right-[15%] text-brand-lime/20 animate-spin-slow">
                <Sparkles size={120} />
            </div>
            <div className="absolute bottom-[10%] left-[5%] text-brand-blue/10">
                <Sparkles size={80} />
            </div>
        </main>
    );
}
