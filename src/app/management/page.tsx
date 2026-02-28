import React from 'react';
import Image from 'next/image';
import { Quote, Award, Target, BookOpen } from 'lucide-react';

const ManagementPage = () => {
    return (
        <main className="min-h-screen bg-[#FCF9F6] pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-[#0A2351] overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-[#0077B6] rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl text-white" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0077B6] rounded-full translate-x-1/2 translate-y-1/2 blur-3xl text-white" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-black font-poppins text-white mb-6">
                        OUR MANAGEMENT
                    </h1>
                    <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-inter">
                        Leading with vision, integrity, and a deep commitment to excellence in education.
                    </p>
                </div>
            </section>

            {/* Founder Secretary Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2 relative">
                        <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group">
                            <Image
                                src="/sandeep_tiwari.png"
                                alt="Shri Sandeep H. Tiwari"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#0077B6] rounded-3xl flex items-center justify-center text-white shadow-xl z-10">
                            <Quote size={40} />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <span className="text-[#0077B6] font-bold tracking-widest uppercase text-sm mb-4 block">Founder Secretary - Rishabh Education</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#0A2351] mb-6">Shri Sandeep H. Tiwari</h2>
                        <div className="space-y-6 text-slate-600 font-inter leading-relaxed">
                            <p>
                                With over 25+ years of experience in education, I’ve come to understand that quality education is the key to success, and every child deserves access to an education that nurtures both academic excellence and holistic development.
                            </p>
                            <p>
                                At Chanakya, we deeply value our rich academic heritage and are committed to passing it on to our students, helping them grow into responsible and informed global citizens.
                            </p>
                            <p className="font-medium text-[#0A2351]">
                                It is with great pleasure that I welcome you to the Chanakya family.
                            </p>
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-200">
                            <p className="text-[#0A2351] font-bold text-lg">Regards,</p>
                            <p className="text-slate-500 font-medium">Shri Sandeep H. Tiwari</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Principal Section */}
            <section className="py-24 px-6 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                        <div className="w-full md:w-1/2 relative">
                            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-8 border-[#FCF9F6] group">
                                <Image
                                    src="/rishabh_tiwari.png"
                                    alt="Rishabh Tiwari"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#0A2351] rounded-3xl flex items-center justify-center text-white shadow-xl z-10">
                                <Target size={40} />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <span className="text-[#0077B6] font-bold tracking-widest uppercase text-sm mb-4 block">Principal</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#0A2351] mb-6">Rishabh Tiwari</h2>
                            <div className="space-y-6 text-slate-600 font-inter leading-relaxed">
                                <p>
                                    We firmly believe in Chanakya that the future is brimming with opportunities. In this digital age, it is our responsibility to equip learners with the tools and resources they need to grow into independent, confident adults.
                                </p>
                                <p>
                                    At our school, we strive to give purpose to learning, nurturing students to become thinkers, innovators, and problem-solvers. Everything we do at Chanakya The Global School for Intellectuals is directed towards teaching learners <em className="text-[#0077B6] font-semibold">how to think</em> rather than simply <em className="text-[#0077B6] font-semibold">what to think.</em>
                                </p>
                                <p>
                                    Our curriculum, academic programs, co-curricular activities, and various initiatives are thoughtfully designed to empower students to understand and apply concepts, assess situations creatively, analyze data, and develop insightful, innovative solutions to challenges.
                                </p>
                                <p className="font-medium text-[#0A2351]">
                                    I warmly invite you and your child to join us at Chanakya The Global School for Intellectuals – <em className="text-[#0077B6] font-bold">The School of Thought.</em> Together, we can prepare today’s learners to become tomorrow’s thinkers, innovators, and leaders.
                                </p>
                            </div>
                            <div className="mt-8 pt-8 border-t border-slate-200">
                                <p className="text-[#0A2351] font-bold text-lg text-right md:text-left">Rishabh Tiwari</p>
                                <p className="text-slate-500 font-medium text-right md:text-left">Principal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold font-poppins text-[#0A2351] mb-12">Our Commitment</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
                        <Award className="w-12 h-12 text-[#0077B6] mx-auto mb-6" />
                        <h3 className="text-xl font-bold text-[#0A2351] mb-4">Academic Excellence</h3>
                        <p className="text-slate-600">Dedication to the highest standards of intellectual and academic growth.</p>
                    </div>
                    <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
                        <BookOpen className="w-12 h-12 text-[#0077B6] mx-auto mb-6" />
                        <h3 className="text-xl font-bold text-[#0A2351] mb-4">Holistic Development</h3>
                        <p className="text-slate-600">Nurturing the character, personality, and life skills of every child.</p>
                    </div>
                    <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
                        <Target className="w-12 h-12 text-[#0077B6] mx-auto mb-6" />
                        <h3 className="text-xl font-bold text-[#0A2351] mb-4">Future Readiness</h3>
                        <p className="text-slate-600">Preparing students to lead and thrive in a dynamic, globalized world.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ManagementPage;
