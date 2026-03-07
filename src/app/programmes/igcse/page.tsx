import type { Metadata } from "next";
import { ChevronRight, Globe, Zap, Heart, ShieldCheck, BookOpen, Microscope, Sparkles, GraduationCap, Users2, Languages, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
    title: "Cambridge Upper Secondary | IGCSE School in Palghar",
    description: "Our Cambridge Upper Secondary (IGCSE) programme in Palghar prepares students for higher education with a global perspective and flexible subject choices.",
    keywords: ["IGCSE Palghar", "Cambridge Upper Secondary Palghar", "Secondary Education Palghar", "IGCSE Subjects"],
};

const impactPoints = [
    { title: 'Reflective & Innovative', desc: 'Confidence to embrace new information, ideas and challenges.', icon: Zap },
    { title: 'Intellectually Engaged', desc: 'Ready to make a positive impact socially and intellectually.', icon: Users2 },
    { title: 'Global attributes', desc: 'Attributes that ensure Cambridge learners are ready for the world.', icon: Globe },
    { title: 'Responsible Citizens', desc: 'Respectful of others and socially conscious.', icon: ShieldCheck }
];

export default function IgcsePage() {
    return (
        <main className="flex min-h-screen flex-col pt-[72px] lg:pt-[88px]">
            {/* Hero Section */}
            <div className="relative bg-[#0A2351] py-24 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E6C1BC] rounded-full translate-x-1/2 -translate-y-1/2 opacity-15 blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#5B5FC7] rounded-full -translate-x-1/2 translate-y-1/2 opacity-15 blur-[100px]" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <div className="inline-block px-4 py-1.5 mb-6 bg-white/10 backdrop-blur-md border border-white/20 text-[#E6C1BC] rounded-full text-xs font-bold tracking-widest uppercase">
                                Cambridge Pathway
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-poppins text-white mb-8 leading-[1.1]">
                                Cambridge <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6C1BC] to-[#F2AE40]">
                                    Upper Secondary
                                </span>
                            </h1>
                            <p className="text-xl text-blue-100/70 font-inter leading-relaxed max-w-xl mb-10">
                                A comprehensive curriculum equipping learners for excellence at the world's leading colleges and universities.
                            </p>
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center bg-[#F2AE40] hover:bg-white hover:text-[#0A2351] text-[#0A2351] px-8 py-4 rounded-full text-lg font-bold transition-all shadow-2xl hover:scale-105 active:scale-95 group"
                            >
                                Apply for Excellence
                                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                                <div className="absolute inset-0 bg-[#F2AE40] rounded-[60px] md:rounded-[80px] rotate-6 opacity-20 scale-105" />
                                <div className="absolute inset-0 bg-[#E6C1BC] rounded-[60px] md:rounded-[80px] -rotate-3 opacity-20 scale-105" />
                                <div className="relative w-full h-full rounded-[60px] md:rounded-[80px] overflow-hidden border-[12px] border-white/10 shadow-3xl bg-slate-900">
                                    <Image
                                        src="/appointment.jpg"
                                        alt="Cambridge Board Students"
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

            {/* Content Section: Academic Philosophy */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-[#F2AE40] font-black uppercase tracking-[0.2em] text-sm mb-4 block">Academic Excellence</span>
                            <h2 className="text-3xl md:text-5xl font-black text-[#0A2351] mb-8 font-poppins leading-tight">
                                Preparation for <br />Higher Education
                            </h2>
                            <div className="space-y-6 text-slate-600 font-inter leading-relaxed text-lg">
                                <p>
                                    Our upper secondary programme is crafted to provide a comprehensive curriculum that equips learners for their future academic pursuits at colleges and universities of their choice. With a robust and demanding academic framework, we aim to refine and enhance the knowledge and skills of our students through consistent practice and dedicated effort.
                                </p>
                                <p>
                                    During these crucial formative years, we challenge our students to apply the skills they have honed throughout their earlier academic journey. As educators, we deeply appreciate the significance of this academic phase and are committed to supporting our students in achieving their aspirations.
                                </p>
                            </div>
                        </div>
                        <div className="bg-slate-900 rounded-[40px] p-12 lg:p-16 text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F2AE40] opacity-10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:opacity-20 transition-opacity" />
                            <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#F2AE40] rounded-3xl flex items-center justify-center text-[#0A2351] shadow-xl">
                                <GraduationCap size={32} />
                            </div>
                            <p className="text-2xl text-blue-100 leading-relaxed font-poppins font-medium relative z-10">
                                "We recognize that this programme serves as a foundational step towards higher education, thus we inspire and motivate our learners towards achieving excellence in their academic endeavors."
                            </p>
                            <div className="mt-12 flex items-center gap-4 text-[#F2AE40] font-bold relative z-10">
                                <div className="w-12 h-[2px] bg-[#F2AE40]/30" />
                                <span>Future Ready</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-24 bg-slate-50 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-[#0A2351] mb-4 font-poppins">Learning with Lasting Impact</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">To thrive, learners must develop a broad range of skills, values, attitudes and behaviours.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {impactPoints.map((point) => (
                            <div key={point.title} className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                                <div className="w-16 h-16 bg-[#F2AE40]/10 text-[#F2AE40] rounded-2xl flex items-center justify-center mb-8">
                                    <point.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-[#0A2351] mb-4">{point.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{point.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subject Selection */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-7xl mx-auto h-[600px] bg-[#0A2351] rounded-[60px] relative overflow-hidden flex items-center px-12 lg:px-24">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#F2AE40,transparent)]" />
                    <div className="grid lg:grid-cols-2 gap-16 relative z-10 w-full">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 font-poppins leading-tight">
                                70+ Subjects <br />Infinite Pathways
                            </h2>
                            <p className="text-blue-100/70 mb-12 text-lg">
                                Your child can choose from over 70 subjects at Cambridge Board, including 30 languages—so they can study the subjects they enjoy and are best at.
                            </p>
                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 text-blue-200 text-sm font-bold">
                                    <Languages size={18} /> 30 Languages
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 text-blue-200 text-sm font-bold">
                                    <Microscope size={18} /> Sciences
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 text-blue-200 text-sm font-bold">
                                    <Sparkles size={18} /> Arts & Humanities
                                </div>
                            </div>
                            <a
                                href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-upper-secondary/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-[#F2AE40] font-bold hover:underline gap-2"
                            >
                                Official Cambridge Details <ExternalLink size={18} />
                            </a>
                        </div>
                        <div className="hidden lg:flex justify-end">
                            <div className="relative w-64 h-64 bg-white/5 backdrop-blur-3xl rounded-[60px] border border-white/10 flex items-center justify-center p-12">
                                <div className="text-white text-center">
                                    <div className="text-7xl font-black mb-2">70</div>
                                    <div className="text-xs uppercase tracking-widest font-bold text-[#F2AE40]">Subjects</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Holistic Dev */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-slate-100 border-8 transform rotate-1">
                                <Image
                                    src="/appointment.jpg"
                                    alt="Holistic Growth at Cambridge Board"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <h2 className="text-3xl md:text-5xl font-black text-[#0A2351] mb-8 font-poppins leading-tight">
                                Well-Rounded Success
                            </h2>
                            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                                We emphasize the importance of holistic development by encouraging students to actively participate in co-curricular activities such as sports and arts. We believe that such engagement fosters all-round growth and nurtures well-rounded individuals poised for success in both academic and personal pursuits.
                            </p>
                            <div className="flex gap-10">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-black text-[#0A2351]">100%</span>
                                    <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Growth focus</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-black text-[#F2AE40]">Global</span>
                                    <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Perspective</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}
