import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Plus,
    ChevronRight,
    GraduationCap,
    Clock,
    Globe,
    Heart,
    Monitor,
    Mail,
    UserCheck
} from 'lucide-react';

const requirements = [
    {
        title: "Educational Qualification",
        desc: "Minimum of a Bachelor's degree in a relevant educational field.",
        icon: GraduationCap
    },
    {
        title: "Certification",
        desc: "Appropriate teaching certification is mandatory.",
        icon: UserCheck
    },
    {
        title: "Experience",
        desc: "At least two years of teaching experience, preferably in IGCSE.",
        icon: Clock
    },
    {
        title: "IT Proficiency",
        desc: "Strong proficiency in IT and modern educational tools.",
        icon: Monitor
    },
    {
        title: "International Mindset",
        desc: "Sensitivity to cross-cultural dynamics and an international outlook.",
        icon: Globe
    },
    {
        title: "Student Welfare",
        desc: "Deep commitment to student development and wellbeing.",
        icon: Heart
    }
];

export default function CareerPage() {
    return (
        <main className="flex min-h-screen flex-col pt-[72px] lg:pt-[88px]">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#0A2351]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A2351] via-[#0A2351]/80 to-transparent z-10" />
                    <Image
                        src="/campus-life.jpg" // Assuming existing image or fallback
                        alt="Chanakya Campus Life"
                        fill
                        className="object-cover opacity-40 grayscale"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-20 w-full text-center lg:text-left">
                    <div className="inline-block px-4 py-1.5 mb-6 bg-[#0077B6]/20 backdrop-blur-md border border-[#0077B6]/30 text-blue-300 rounded-full text-xs font-bold tracking-widest uppercase">
                        Work With Us
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black font-poppins text-white mb-6 leading-tight">
                        Nurture the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-[#0077B6]">
                            Next Generation
                        </span>
                    </h1>
                    <p className="text-xl text-blue-100/70 font-inter leading-relaxed max-w-2xl">
                        Join a culture of excellence dedicated to fostering innovation, collaboration, and exceptional educational practices.
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-black text-[#0A2351] font-poppins leading-tight">
                                Dedicated to <br />Intellectual Growth
                            </h2>
                            <div className="space-y-6 text-slate-600 font-inter leading-relaxed text-lg">
                                <p>
                                    Chanakya The Global School for Intellectuals is dedicated to fostering a culture of excellence and is actively seeking educators who are innovative, collaborative, and exceptional practitioners of the IGCSE curriculum.
                                </p>
                                <p>
                                    Ideal candidates will possess strong communication skills, including proficiency in IT, and a deep commitment to advancing the school's mission and vision. We believe in the power of professional synergy to create an environment where both students and teachers thrive.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#0A2351] p-12 rounded-[40px] text-white shadow-3xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0077B6] rounded-full translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl" />
                            <p className="text-2xl font-medium leading-relaxed italic mb-8 relative z-10 transition-transform">
                                "We challenge our students and ourselves to apply the skills honed throughout the academic journey, viewing this phase as a foundational step towards global excellence."
                            </p>
                            <div className="flex items-center gap-4 text-[#0077B6] font-bold">
                                <div className="w-12 h-[2px] bg-[#0077B6]/30" />
                                <span className="uppercase tracking-widest text-sm">Our Philosophy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Requirements Grid */}
            <section className="py-24 bg-blue-50/50 px-6 border-y border-blue-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-[#0A2351] font-poppins mb-4">What We Look For</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Specific criteria for joining our team of global educators.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {requirements.map((req) => (
                            <div key={req.title} className="bg-white p-10 rounded-[40px] shadow-sm border border-white hover:border-blue-200 transition-all group">
                                <div className="w-16 h-16 bg-blue-50 text-[#0A2351] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0077B6] group-hover:text-white transition-colors duration-300">
                                    <req.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-[#0A2351] mb-4">{req.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{req.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Commitment Section */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                                <div className="absolute inset-0 bg-blue-100 rounded-[60px] rotate-3" />
                                <div className="relative w-full h-full rounded-[60px] overflow-hidden border-[12px] border-white shadow-2xl">
                                    <Image
                                        src="/about-students.jpg" // Fallback to existing
                                        alt="International Educators"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-black text-[#0A2351] font-poppins leading-tight">
                                A Global Community
                            </h2>
                            <div className="space-y-6 text-slate-600 font-inter leading-relaxed text-lg">
                                <p>
                                    Candidates must demonstrate an understanding of the complexities of working in an international environment, with an international mindset and sensitivity to cross-cultural dynamics.
                                </p>
                                <p>
                                    We welcome applications from both local Indian teachers and international educators. Chanakya The Global School for Intellectuals is steadfast in its commitment to student development and the welfare of all students.
                                </p>
                                <div className="p-6 bg-slate-50 border-l-4 border-[#0A2351] rounded-r-2xl italic text-slate-500 text-base">
                                    Please note that verified references from previous employers will be required as part of our selection process.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application CTA */}
            <section className="py-24 bg-[#0A2351] px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0077B6] rounded-full translate-x-1/2 -translate-y-1/2 opacity-10 blur-[150px]" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 font-poppins leading-tight">
                        Ready to Shape the Future?
                    </h2>
                    <p className="text-xl text-blue-100/70 font-inter leading-relaxed mb-12">
                        Submit your profile and join a network of pioneering educators at one of India's most prestigious international schools.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="mailto:careers@chanakyaschool.com"
                            className="w-full sm:w-auto bg-[#0077B6] hover:bg-white hover:text-[#0077B6] text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl transition-all flex items-center justify-center gap-3 group"
                        >
                            <Mail className="group-hover:scale-110 transition-transform" />
                            Email Your CV
                        </Link>
                        <Link
                            href="/contact-us"
                            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:bg-white hover:text-[#0A2351] transition-all"
                        >
                            Inquire Now
                        </Link>
                    </div>
                    <p className="mt-12 text-blue-100/40 text-sm font-medium">
                        Chanakya The Global School for Intellectuals is an Equal Opportunity Employer.
                    </p>
                </div>
            </section>
        </main>
    );
}
