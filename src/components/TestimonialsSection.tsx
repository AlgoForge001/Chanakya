"use client";

import React, { useState } from 'react';
import { User, Mail, GraduationCap, MessageSquare, Send, Quote, Star, CheckCircle2, AlertCircle } from 'lucide-react';
import { submitFeedback } from '@/app/actions/feedback';

const testimonialsData = [
    {
        name: "Mrs. Khan",
        grade: "Parent of Grade 4 Student",
        text: "The academic structure at Chanakya is incredible. My son has developed a genuine love for learning and curiosity that I haven't seen elsewhere.",
        color: "#BAE6FD", // Deeper blue
        pinColor: "#3B82F6",
        rotate: "-2deg",
        x: "5%",
        y: "0"
    },
    {
        name: "Mr. Sharma",
        grade: "Parent of Grade 2 Student",
        text: "The focus on critical thinking and the Cambridge Pathway has prepared my daughter for international standards. We couldn't be happier with the progress.",
        color: "#BBF7D0", // Deeper green
        pinColor: "#22C55E",
        rotate: "3deg",
        x: "60%",
        y: "40px"
    },
    {
        name: "Mrs. Gupta",
        grade: "Parent of Grade 7 Student",
        text: "A warm and welcoming environment. The teachers are dedicated and provide personalized attention to every child. It feels like a large family.",
        color: "#FED7AA", // Deeper orange
        pinColor: "#F97316",
        rotate: "-1deg",
        x: "10%",
        y: "280px"
    },
    {
        name: "Mr. Patel",
        grade: "Parent of Grade 1 Student",
        text: "The campus is safe and children-friendly. Very satisfied with the curriculum and the extracurricular activities offered here.",
        color: "#E9D5FF", // Deeper lavender
        pinColor: "#A855F7",
        rotate: "2deg",
        x: "65%",
        y: "320px"
    },
    {
        name: "Mrs. Singh",
        grade: "Parent of Grade 5 Student",
        text: "Excellent focus on creative thinking. My daughter has improved so much in her confidence and communication skills.",
        color: "#FECDD3", // Deeper rose
        pinColor: "#F43F5E",
        rotate: "-3deg",
        x: "38%",
        y: "550px"
    },
    {
        name: "Mr. Reddy",
        grade: "Parent of Grade 3 Student",
        text: "The school really understands the balance between academics and sports. My child is happy and healthy.",
        color: "#E0F2FE", // Deeper sky blue
        pinColor: "#0EA5E9",
        rotate: "1.5deg",
        x: "5%",
        y: "750px"
    },
    {
        name: "Mrs. Verma",
        grade: "Parent of Grade 6 Student",
        text: "International standards with traditional values. The best choice we made for our son's education.",
        color: "#FEF08A", // Deeper yellow
        pinColor: "#EAB308",
        rotate: "-1.5deg",
        x: "62%",
        y: "780px"
    },
    {
        name: "Mr. Joshi",
        grade: "Parent of Grade 8 Student",
        text: "Highly professional staff and a great focus on individual student growth. I highly recommend to todos parents.",
        color: "#D1FAE5", // Deeper emerald
        pinColor: "#10B981",
        rotate: "2.5deg",
        x: "35%",
        y: "1000px"
    }
];

const PushPin = ({ color }: { color: string }) => (
    <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 z-20 group-hover:rotate-12 transition-transform duration-300">
        <div
            className="w-4 h-4 rounded-full shadow-md relative"
            style={{ backgroundColor: color, boxShadow: `inset -2px -2px 4px rgba(0,0,0,0.2), 2px 4px 6px rgba(0,0,0,0.1)` }}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white/40 rounded-full blur-[1px]" />
        </div>
        <div className="w-[2px] h-3 bg-slate-400 mx-auto -mt-1 shadow-sm" />
    </div>
);

const TestimonialCard = ({ t }: { t: typeof testimonialsData[0] }) => (
    <div
        className="relative p-7 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group w-full md:w-[380px] lg:absolute"
        style={{
            backgroundColor: t.color,
            transform: `rotate(${t.rotate})`,
            left: t.x,
            top: t.y
        }}
    >
        <PushPin color={t.pinColor} />
        <div className="flex flex-col h-full space-y-3">
            <div className="flex justify-between items-start">
                <Quote className="w-5 h-5 text-slate-400/50" />
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                </div>
            </div>
            <p className="text-slate-700 font-inter text-sm leading-relaxed italic">
                "{t.text}"
            </p>
            <div className="pt-2 border-t border-slate-900/5">
                <h4 className="font-bold text-slate-800 font-poppins text-sm">{t.name}</h4>
                <p className="text-[11px] text-slate-500 font-inter">{t.grade}</p>
            </div>
        </div>
    </div>
);

const TestimonialsSection = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        const formData = new FormData(e.currentTarget);

        try {
            const result = await submitFeedback(formData);
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
        <section className="relative py-12 md:py-24 bg-[#FAFAFA] overflow-hidden">
            {/* Grid Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #000 1px, transparent 1px),
                        linear-gradient(to bottom, #000 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Background Decorations */}
            <div className="absolute top-10 left-[-5%] w-[400px] h-[400px] bg-blue-100 rounded-full opacity-30 z-0 blur-3xl" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-peach-100/40 rounded-full opacity-40 z-0 blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">

                {/* Parents Testimonials Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-serif italic text-emerald-600 mb-2">
                        Voices of Chanakya
                    </h2>
                    <h3 className="text-xl md:text-2xl font-bold font-poppins text-slate-600 mb-8">
                        Parents Community
                    </h3>
                    <p className="text-lg text-slate-500 font-inter max-w-2xl mx-auto">
                        Discover why families trust us for their children's future through these heartfelt experiences.
                    </p>
                </div>

                {/* Pin-Board Area */}
                <div className="relative min-h-[1250px] mb-12 hidden lg:block">
                    {/* Journey Paths (Dotted Lines) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 1000 1200">
                        <path
                            d="M 150 80 Q 350 40 650 120 T 750 350 T 350 550 T 450 850 T 250 1100 T 500 1150"
                            fill="none"
                            stroke="#5B5FC7"
                            strokeWidth="3"
                            strokeDasharray="8 8"
                            strokeLinecap="round"
                        />
                    </svg>

                    {testimonialsData.map((t, i) => (
                        <TestimonialCard key={i} t={t} />
                    ))}
                </div>

                {/* Mobile Testimonials (Simplified Layout) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 lg:hidden">
                    {testimonialsData.map((t, i) => (
                        <div key={i} className="relative pt-4">
                            <TestimonialCard t={{ ...t, x: '0', y: '0', rotate: '0deg' }} />
                        </div>
                    ))}
                </div>

                <hr className="border-slate-200 mb-10 md:mb-20" />

                {/* Feedback Form Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-poppins text-slate-900 mb-4">
                        Share Your Experience
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:items-stretch">

                    {/* Feedback Form (Left Side) */}
                    <div className="w-full lg:w-1/2">
                        <div className="h-full bg-white p-8 md:p-10 rounded-2xl shadow-2xl shadow-blue-900/5 border border-slate-50 border-t-8 border-t-[#5B5FC7]">
                            <h3 className="text-2xl font-bold font-poppins text-slate-900 mb-2 text-center">
                                Feedback Form
                            </h3>
                            <p className="text-slate-500 text-center text-sm font-inter mb-8">
                                We value your feedback to keep improving.
                            </p>

                            {status === 'success' ? (
                                <div className="flex flex-col items-center justify-center py-10 space-y-4 animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                                        <CheckCircle2 size={48} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-900 font-poppins text-center">Thank You!</h4>
                                    <p className="text-slate-600 text-center font-inter max-w-xs">
                                        Your feedback has been received. It helps us grow better every day.
                                    </p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="text-emerald-600 font-bold hover:underline"
                                    >
                                        Send another response
                                    </button>
                                </div>
                            ) : (
                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="Full Name"
                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl font-inter focus:ring-2 focus:ring-[#5B5FC7]/20 transition-all outline-none text-slate-700"
                                        />
                                    </div>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="Email Address"
                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl font-inter focus:ring-2 focus:ring-[#5B5FC7]/20 transition-all outline-none text-slate-700"
                                        />
                                    </div>
                                    <div className="relative">
                                        <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                        <select
                                            name="grade"
                                            required
                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl font-inter focus:ring-2 focus:ring-[#5B5FC7]/20 transition-all outline-none text-slate-700 appearance-none"
                                        >
                                            <option value="">Select Child's Grade</option>
                                            <option value="Primary School">Primary School</option>
                                            <option value="Lower Secondary">Lower Secondary</option>
                                            <option value="IGCSE">IGCSE</option>
                                        </select>
                                    </div>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-6 text-slate-400 w-5 h-5" />
                                        <textarea
                                            name="message"
                                            required
                                            placeholder="Your Message"
                                            rows={4}
                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl font-inter focus:ring-2 focus:ring-[#5B5FC7]/20 transition-all outline-none text-slate-700 resize-none"
                                        ></textarea>
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
                                        className={`w-full py-4 ${status === 'loading' ? 'bg-slate-400' : 'bg-[#5B5FC7] hover:bg-[#4F52B0]'} text-white font-bold rounded-2xl shadow-lg shadow-indigo-900/20 transition-all flex items-center justify-center gap-2 group`}
                                    >
                                        {status === 'loading' ? 'Sending...' : 'Submit Feedback'}
                                        {status !== 'loading' && <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="relative h-full min-h-[300px] md:min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/appointment.jpg"
                                alt="Appointment"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;

