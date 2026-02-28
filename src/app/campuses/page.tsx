'use client';

import React from 'react';
import Image from 'next/image';
import { GraduationCap, ArrowUpRight } from 'lucide-react';

const facilities = [
    {
        title: "Global Infrastructure",
        username: "@chanakya.building",
        time: "2m ago",
        image: "/building.png",
    },
    {
        title: "Interactive Learning",
        username: "@chanakya.classroom",
        time: "5m ago",
        image: "/classroom.png",
    },
    {
        title: "Digital Library",
        username: "@chanakya.library",
        time: "12m ago",
        image: "/library.png",
    },
    {
        title: "Eco Canteen",
        username: "@chanakya.canteen",
        time: "45m ago",
        image: "/new_canteen.png",
    },
    {
        title: "Secure Transport",
        username: "@chanakya.transport",
        time: "1h ago",
        image: "/transportation.png",
    },
    {
        title: "Activity Hub",
        username: "@chanakya.activities",
        time: "3h ago",
        image: "/activity.png",
    },
];

export default function CampusesPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-white font-sans antialiased selection:bg-brand-lime selection:text-brand-blue">
            {/* Subtle Background Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#CFE7F2]/30 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] bg-[#B8CFA8]/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Section */}
                <header className="mb-20 text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 shadow-sm animate-fade-in">
                        <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Campus Live Update</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-brand-blue tracking-tighter font-outfit">
                        Designed for <br />
                        <span className="text-slate-300 italic">Inspiration</span>
                    </h1>
                </header>

                {/* Apple-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((fac, idx) => (
                        <div
                            key={idx}
                            className="group relative h-[500px] w-full bg-white rounded-[32px] overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.08)] hover:shadow-[0px_30px_60px_rgba(0,0,0,0.15)] transition-all duration-700 cursor-pointer border border-white/50"
                        >
                            {/* Background Image with Zoom */}
                            <div className="absolute inset-0">
                                <Image
                                    src={fac.image}
                                    alt={fac.title}
                                    fill
                                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 ease-out"
                                />
                            </div>

                            {/* Subtler Gradient Overlay (Green -> Blue -> Transparent) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#B8CFA8]/50 via-[#CFE7F2]/20 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-90" />

                            {/* Top Center Content */}
                            <div className="absolute top-10 left-0 right-0 text-center space-y-1 transform group-hover:translate-y-[-4px] transition-transform duration-500">
                                <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)] font-outfit uppercase">
                                    {fac.title}
                                </h3>
                                <div className="flex items-center justify-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 border border-white/20 animate-spin-slow" />
                                    <p className="text-[10px] font-light text-white/80 uppercase tracking-[0.3em]">Connecting Feed</p>
                                </div>
                            </div>

                            {/* Bottom Layout Container */}
                            <div className="absolute bottom-10 left-8 right-8 flex items-center justify-between">
                                {/* User Info (Bottom Left) - Full Width when button is removed */}
                                <div className="flex items-center gap-3 animate-fade-in-up">
                                    <div className="w-10 h-10 rounded-full border-2 border-white/40 overflow-hidden bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg">
                                        <GraduationCap className="text-white w-5 h-5" />
                                    </div>
                                    <div className="space-y-0.5">
                                        <p className="text-xs font-bold text-white tracking-tight opacity-100">{fac.username}</p>
                                        <p className="text-[10px] text-white/60 font-medium">{fac.time}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[32px] pointer-events-none" />
                        </div>
                    ))}
                </div>

                {/* Footer Link */}
                <div className="mt-20 text-center">
                    <button className="inline-flex items-center gap-2 group px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-sm hover:bg-slate-800 transition-all shadow-xl">
                        Explore Full Campus Map
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </main>
    );
}
