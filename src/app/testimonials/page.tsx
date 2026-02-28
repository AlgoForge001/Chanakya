"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Quote, Star, User, Mail, GraduationCap, MessageSquare, Send, Heart, CheckCircle2, AlertCircle } from 'lucide-react';
import { submitTestimonial } from '@/app/actions/feedback';

const testimonialsData = [
    {
        name: "Mrs. Khan",
        grade: "Parent of Grade 4 Student",
        text: "The academic structure at Chanakya is incredible. My son has developed a genuine love for learning and curiosity that I haven't seen elsewhere.",
        color: "#E0F2FE", // sky-100
        tapeColor: "#38BDF8", // sky-400
        rotation: "-2deg"
    },
    {
        name: "Mr. Sharma",
        grade: "Parent of Grade 2 Student",
        text: "The focus on critical thinking and the Cambridge Pathway has prepared my daughter for international standards. We couldn't be happier with the progress.",
        color: "#DCFCE7", // green-100
        tapeColor: "#4ADE80", // green-400
        rotation: "3deg"
    },
    {
        name: "Mrs. Gupta",
        grade: "Parent of Grade 7 Student",
        text: "A warm and welcoming environment. The teachers are dedicated and provide personalized attention to every child. It feels like a large family.",
        color: "#FFEDD5", // orange-100
        tapeColor: "#FB923C", // orange-400
        rotation: "-1deg"
    },
    {
        name: "Mr. Patel",
        grade: "Parent of Grade 1 Student",
        text: "The campus is safe and children-friendly. Very satisfied with the curriculum and the extracurricular activities offered here.",
        color: "#F3E8FF", // purple-100
        tapeColor: "#C084FC", // purple-400
        rotation: "2deg"
    },
    {
        name: "Mrs. Singh",
        grade: "Parent of Grade 5 Student",
        text: "Excellent focus on creative thinking. My daughter has improved so much in her confidence and communication skills.",
        color: "#FFE4E6", // rose-100
        tapeColor: "#FB7185", // rose-400
        rotation: "-3deg"
    },
    {
        name: "Mr. Reddy",
        grade: "Parent of Grade 3 Student",
        text: "The school really understands the balance between academics and sports. My child is happy and healthy.",
        color: "#DBEAFE", // blue-100
        tapeColor: "#60A5FA", // blue-400
        rotation: "1.5deg"
    },
    {
        name: "Mrs. Verma",
        grade: "Parent of Grade 6 Student",
        text: "International standards with traditional values. The best choice we made for our son's education.",
        color: "#FEF9C3", // yellow-100
        tapeColor: "#FACC15", // yellow-400
        rotation: "-1.5deg"
    },
    {
        name: "Mr. Joshi",
        grade: "Parent of Grade 8 Student",
        text: "Highly professional staff and a great focus on individual student growth. I highly recommend to todos parents.",
        color: "#D1FAE5", // emerald-100
        tapeColor: "#34D399", // emerald-400
        rotation: "2.5deg"
    }
];

const TapeElement = ({ color }: { color: string }) => {
    const [rotation, setRotation] = useState(0);

    React.useEffect(() => {
        setRotation(Math.random() * 4 - 2);
    }, []);

    return (
        <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8 z-20 opacity-80"
            style={{
                backgroundColor: color,
                clipPath: 'polygon(5% 0%, 10% 5%, 15% 0%, 20% 5%, 25% 0%, 30% 5%, 35% 0%, 40% 5%, 45% 0%, 50% 5%, 55% 0%, 60% 5%, 65% 0%, 70% 5%, 75% 0%, 80% 5%, 85% 0%, 90% 5%, 95% 0%, 100% 10%, 95% 90%, 100% 100%, 95% 95%, 90% 100%, 85% 95%, 80% 100%, 75% 95%, 70% 100%, 65% 95%, 60% 100%, 55% 95%, 50% 100%, 45% 95%, 40% 100%, 35% 95%, 30% 100%, 25% 95%, 20% 100%, 15% 95%, 10% 100%, 5% 95%, 0% 100%, 5% 10%)',
                transform: `rotate(${rotation}deg) scale(1.1)`,
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
        >
            <div className="absolute inset-0 bg-white/10 mix-blend-overlay opacity-50" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.1) 5px, rgba(255,255,255,0.1) 10px)' }} />
        </div>
    );
};

const TestimonialCard = ({ t, index }: { t: typeof testimonialsData[0], index: number }) => (
    <div
        className="relative group w-full mb-16 px-4"
        style={{ transform: `rotate(${t.rotation})` }}
    >
        <TapeElement color={t.tapeColor} />
        <div
            className="p-8 pb-10 rounded-2xl shadow-lg border border-slate-200/50 hover:shadow-2xl transition-all duration-300 relative"
            style={{ backgroundColor: t.color }}
        >
            <div className="text-2xl font-black text-slate-400/20 mb-4 font-poppins">
                {`{${index + 1}}`}
            </div>

            <h3 className="text-xl font-bold text-slate-800 font-poppins mb-4 leading-snug">
                {t.text.split('. ')[0]}.
            </h3>

            <p className="text-slate-600 font-inter text-sm md:text-base leading-relaxed mb-8">
                {t.text.substring(t.text.indexOf('.') + 1).trim()}
            </p>

            <div className="flex items-center gap-3 pt-6 border-t border-slate-900/5">
                <div className="w-10 h-10 bg-white/50 rounded-full flex items-center justify-center text-slate-700 font-bold text-sm shadow-sm">
                    {t.name.split(' ')[t.name.split(' ').length - 1].charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 text-sm font-poppins">{t.name}</h4>
                    <p className="text-[11px] text-slate-500 font-inter uppercase tracking-wider">{t.grade}</p>
                </div>
            </div>
        </div>
    </div>
);

const TestimonialsPage = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        const formData = new FormData(e.currentTarget);

        try {
            const result = await submitTestimonial(formData);
            if (result.success) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setErrorMessage(result.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Failed to connect to the server.');
        }
    };

    return (
        <main className="min-h-screen bg-[#FCF9F6] pt-20 relative overflow-hidden">
            {/* Aesthetic Grid Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.05] z-0"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Hero Section */}
            <section className="relative py-24 z-10">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-block px-4 py-1.5 bg-[#0077B6]/10 text-[#0077B6] rounded-full text-xs font-black tracking-[0.2em] uppercase mb-6">
                        Community Voices
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black font-poppins text-[#0A2351] mb-8 leading-tight">
                        Our Journey <br />
                        <span className="text-[#0077B6]">Through Your Eyes</span>
                    </h1>
                    <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-inter">
                        Real stories and heartfelt experiences shared by the wonderful parents who make up the Chanakya family.
                    </p>
                </div>
            </section>

            {/* Testimonials Journey Section */}
            <section className="relative py-12 px-6 max-w-7xl mx-auto z-10">
                {/* Connection Path Overlay (Desktop) */}
                <div className="absolute inset-0 pointer-events-none hidden lg:block opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 1200 1600" fill="none">
                        <path
                            d="M 600 50 Q 1000 200 800 500 Q 200 800 600 1100 Q 1000 1400 600 1550"
                            stroke="#0A2351"
                            strokeWidth="4"
                            strokeDasharray="12 12"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                {/* Cards Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
                    {testimonialsData.map((t, i) => (
                        <TestimonialCard key={i} t={t} index={i} />
                    ))}
                </div>
            </section>

            {/* Submission Form Section */}
            <section className="py-24 px-6 relative z-10 bg-white/50 backdrop-blur-sm mt-12 border-t border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black font-poppins text-[#0A2351] mb-8">Tell Your Story</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-12">
                                We believe every child's journey is unique. Share your experience with us and help other parents discover the difference a Chanakya education can make.
                            </p>

                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-50 relative group">
                            <TapeElement color="#0A2351" />

                            {status === 'success' ? (
                                <div className="flex flex-col items-center justify-center py-10 space-y-4 animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                                        <CheckCircle2 size={48} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-[#0A2351] font-poppins text-center">Story Received!</h4>
                                    <p className="text-slate-600 text-center font-inter max-w-xs">
                                        Thank you for sharing your experience. We truly appreciate your contribution to our community.
                                    </p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="text-[#0077B6] font-bold hover:underline"
                                    >
                                        Share another story
                                    </button>
                                </div>
                            ) : (
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="space-y-2">
                                        <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest ml-1">Full Identity</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-transparent rounded-2xl text-slate-700 placeholder:text-slate-300 focus:bg-white focus:border-[#0077B6]/20 transition-all outline-none"
                                                placeholder="What is your name?"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest ml-1">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-transparent rounded-2xl text-slate-700 placeholder:text-slate-300 focus:bg-white focus:border-[#0077B6]/20 transition-all outline-none"
                                                placeholder="How can we reach you?"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest ml-1">Message Content</label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-4 top-6 text-slate-300 w-5 h-5" />
                                            <textarea
                                                name="message"
                                                required
                                                rows={4}
                                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-transparent rounded-2xl text-slate-700 placeholder:text-slate-300 focus:bg-white focus:border-[#0077B6]/20 transition-all outline-none resize-none"
                                                placeholder="Write your testimonial here..."
                                            />
                                        </div>
                                    </div>

                                    {status === 'error' && (
                                        <div className="flex items-center gap-2 text-red-500 bg-red-50 p-4 rounded-xl text-sm font-medium">
                                            <AlertCircle size={18} />
                                            {errorMessage}
                                        </div>
                                    )}

                                    <button
                                        disabled={status === 'loading'}
                                        type="submit"
                                        className={`w-full py-5 ${status === 'loading' ? 'bg-slate-400' : 'bg-[#0A2351] hover:bg-[#0077B6]'} text-white font-black rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3 group active:scale-95`}
                                    >
                                        {status === 'loading' ? 'SHARING...' : 'SHARE EXPERIENCE'}
                                        {status !== 'loading' && <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TestimonialsPage;
