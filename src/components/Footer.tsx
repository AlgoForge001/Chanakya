"use client";

import React from 'react';
import Link from 'next/link';
import {
    Facebook,
    Instagram,
    Youtube,
    Mail,
    Phone,
    MapPin,
    Clock,
    ArrowRight
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-slate-900 text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/Campus View.avif"
                    alt="School Campus"
                    className="w-full h-full object-cover blur-[2px] opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-950 opacity-100" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-10">
                {/* Branding Area */}
                <div className="flex flex-col md:flex-row items-center justify-between border-b border-white/10 pb-12 mb-12">
                    <div className="flex items-center space-x-4 mb-6 md:mb-0 group cursor-pointer">
                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform overflow-hidden">
                            <img src="/school_logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold font-poppins tracking-tight">
                                CHANAKYA
                            </h2>
                            <p className="text-[10px] md:text-xs text-emerald-400 font-inter uppercase tracking-[0.2em]">
                                The Global School for Intellectuals
                            </p>
                        </div>
                    </div>
                    <div className="text-center md:text-right">
                        <span className="inline-block px-4 py-1.5 bg-emerald-600/20 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-wider">
                            Proposed Cambridge IGCSE Board
                        </span>
                    </div>
                </div>

                {/* Footer Content Layout (4-column grid) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Column 1 – About School */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold font-poppins relative inline-block">
                            About School
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-emerald-600 rounded-full" />
                        </h3>
                        <p className="text-slate-400 font-inter text-sm leading-relaxed">
                            Dedicated to academic excellence and holistic development, Chanakya provides a nurturing environment where children discover their true potential and prepare for international standards.
                        </p>
                    </div>

                    {/* Column 2 – Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold font-poppins relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-emerald-600 rounded-full" />
                        </h3>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Academics', 'Admissions', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-slate-400 hover:text-white hover:translate-x-1 transition-all flex items-center group text-sm"
                                    >
                                        <ArrowRight className="w-3 h-3 mr-2 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 – Contact Information */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold font-poppins relative inline-block">
                            Contact info
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-emerald-600 rounded-full" />
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3 group">
                                <MapPin className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                                <span className="text-slate-400 text-sm font-inter">Near Chanakya Circle, Sector 4, Bangalore</span>
                            </div>
                            <div className="flex items-center space-x-3 group">
                                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-slate-400 text-sm font-inter">+91 98765 43210</span>
                            </div>
                            <div className="flex items-center space-x-3 group">
                                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-slate-400 text-sm font-inter underline">contact@chanakya.school</span>
                            </div>
                            <div className="flex items-center space-x-3 group text-emerald-500/80">
                                <Clock className="w-5 h-5 flex-shrink-0" />
                                <span className="text-xs font-bold uppercase tracking-wider">Mon - Sat: 8:00 AM - 4:00 PM</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 4 – Social & Trust Elements */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold font-poppins relative inline-block">
                            Follow Us
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-emerald-600 rounded-full" />
                        </h3>
                        <div className="flex space-x-4">
                            {[Facebook, Instagram, Youtube].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all shadow-lg"
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                        <div className="pt-4">
                            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Affiliation</p>
                                <p className="text-sm font-bold text-white font-poppins">Cambridge IGCSE</p>
                                <p className="text-[10px] text-emerald-400">Proposed Academic Pathway</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs space-y-4 md:space-y-0">
                    <p>© 2026 Chanakya – The Global School for Intellectuals. All Rights Reserved.</p>
                    <div className="flex space-x-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
