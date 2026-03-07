import type { Metadata } from 'next';
import Image from 'next/image';
import { GraduationCap, Target, Heart, BookOpen, Users, Camera } from 'lucide-react';

export const metadata: Metadata = {
    title: "About Us | Chanakya International School Palghar",
    description: "Learn about Chanakya International School's philosophy, vision, and mission. Our dedicated educators provide a global hub for intellectual development in Palghar.",
    keywords: ["About Chanakya School", "School Philosophy Palghar", "Education Mission Palghar", "Chanakya School Faculty"],
};
// Navbar and Footer are removed because they are in layout.tsx

const facultyData = [
    { name: 'Rishabh Tiwari', role: 'Principal', image: '/princiapl.jpg' },
    { name: 'Mrs. Sunita Verma', role: 'Science Head', image: '/sci_head.png' },
    { name: 'Mr. Amit Patel', role: 'Maths Coordinator', image: '/maths_coord.avif' },
    { name: 'Ms. Priya Singh', role: 'Primary Coordinator', image: '/pri_coord.jpg' },
];

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-[#FCF9F6]">

            {/* 1. Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <Image
                    src="/14072022012942_0_456814_Chanakya-The-Global-School-For-Intellectuals-Palghar-(1).jpg"
                    alt="School Campus"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A2351]/90 to-[#0A2351]/40" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center">
                    <h1 className="text-4xl md:text-6xl font-black font-poppins mb-6 tracking-tight">
                        ABOUT OUR SCHOOL
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto font-inter text-white/90">
                        Empowering Minds, Shaping Future Leaders. A legacy of educational excellence and holistic development.
                    </p>
                </div>
            </section>

            {/* 2. Content Section - Two Column */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Philosophy Block */}
                    <div className="bg-white p-10 rounded-3xl shadow-xl shadow-[#0A2351]/5 border border-slate-100">
                        <div className="w-12 h-12 bg-[#0077B6]/10 rounded-2xl flex items-center justify-center text-[#0077B6] mb-6">
                            <BookOpen size={28} />
                        </div>
                        <h2 className="text-3xl font-bold font-poppins text-[#0A2351] mb-4">Our Philosophy</h2>
                        <p className="text-slate-600 leading-relaxed font-inter">
                            At Chanakya, we believe in nurturing not just students, but future citizens of the world. Our educational philosophy is rooted in critical thinking, curiosity, and the development of a balanced personality. We combine traditional values with modern global curriculum standards.
                        </p>
                    </div>

                    {/* Mission/Vision Block */}
                    <div className="bg-white p-10 rounded-3xl shadow-xl shadow-[#0A2351]/5 border border-slate-100">
                        <div className="w-12 h-12 bg-[#0077B6]/10 rounded-2xl flex items-center justify-center text-[#0077B6] mb-6">
                            <Target size={28} />
                        </div>
                        <h2 className="text-3xl font-bold font-poppins text-[#0A2351] mb-4">Our Vision & Mission</h2>
                        <p className="text-slate-600 leading-relaxed font-inter">
                            <strong className="text-[#0A2351]">Vision:</strong> To be a global hub for intellectual development and character building.<br /><br />
                            <strong className="text-[#0A2351]">Mission:</strong> To provide a safe, challenging learning environment that inspires students to achieve their full potential in academics, sports, and life skills.
                        </p>
                    </div>
                </div>
            </section>

            {/* Curriculum In-Depth Section */}
            <section className="py-24 px-6 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#0A2351] mb-6">About Chanakya</h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            At Chanakya The Global School for Intellectuals we follow the globally-renowned Cambridge Curriculum which provides a clear framework surrounding the knowledge, skills and abilities that young people would need on their journey to becoming globally educated citizens.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Assessment Card */}
                        <div className="bg-[#FCF9F6] p-8 rounded-3xl border border-slate-100 group hover:shadow-xl transition-all duration-300">
                            <div className="w-10 h-10 bg-[#0077B6] text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#0077B6]/20">
                                <GraduationCap size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#0A2351] mb-4">Assessment & Progress</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                The Cambridge Curriculum is divided into blocks of years and students are formally assessed at the end of each Key Stage to see how they compare to the expected attainment levels. The Scheme of Work provides teachers a clear overview of a student’s academic progress and come up with solutions to help each student achieve their desired academic goals.
                            </p>
                        </div>

                        {/* Learning Methodology Card */}
                        <div className="bg-[#FCF9F6] p-8 rounded-3xl border border-slate-100 group hover:shadow-xl transition-all duration-300">
                            <div className="w-10 h-10 bg-[#0077B6] text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#0077B6]/20">
                                <Users size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#0A2351] mb-4">Methodology</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Our Primary years curriculum is broad and balanced with a strong focus on child centered learning. As students mature, the curriculum evolves to become more specialized, but we incorporate inquiry-based learning methodology to analyze, synthesize, and evaluate information or new understandings and encourage higher levels of thinking.
                            </p>
                        </div>

                        {/* Approach Card */}
                        <div className="bg-[#FCF9F6] p-8 rounded-3xl border border-slate-100 group hover:shadow-xl transition-all duration-300">
                            <div className="w-10 h-10 bg-[#0077B6] text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#0077B6]/20">
                                <Heart size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#0A2351] mb-4">Holistic Learning</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Homework is assigned as an extension of learning to consolidate what has been taught. Students should be able to complete it with minimal parental support. Taking advantage of our spacious green campus, lessons frequently take place outdoors as the weather allows, fostering a connection with nature.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Asymmetrical Image Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                    <div className="flex items-center justify-center space-x-2 text-[#0077B6] mb-4">
                        <Camera size={20} />
                        <span className="font-bold tracking-widest uppercase text-sm">Our Story in Frames</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#0A2351]">Life at Chanakya</h2>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 h-[600px] md:h-[800px]">
                    <div className="relative col-span-2 row-span-2 rounded-3xl overflow-hidden group shadow-lg">
                        <Image src="/Chanakya_The_Global_School_For_Intellectuals_5205_Dance_UA_1.jpg" alt="Dance" fill className="object-cover transition-transform group-hover:scale-105" />
                    </div>
                    <div className="relative rounded-3xl overflow-hidden group shadow-lg">
                        <Image src="/14072022015320_8033_Chanakya-The-Global-School-For-Intellectuals-Palghar-(7).jpg" alt="Classroom" fill className="object-cover transition-transform group-hover:scale-105" />
                    </div>
                    <div className="relative rounded-3xl overflow-hidden group shadow-lg">
                        <Image src="/positive_learning.jpg" alt="Active Learning" fill className="object-cover transition-transform group-hover:scale-105" />
                    </div>
                    <div className="relative col-span-2 rounded-3xl overflow-hidden group shadow-lg h-[250px] md:h-auto">
                        <Image src="/Campus View.avif" alt="Campus Life" fill className="object-cover transition-transform group-hover:scale-105" />
                    </div>
                </div>
            </section>

            {/* 4. Educators Section */}
            <section className="py-24 px-6 bg-[#FCF9F6]">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <div className="flex items-center justify-center space-x-2 text-[#0077B6] mb-4">
                        <Users size={20} />
                        <span className="font-bold tracking-widest uppercase text-sm">Professional Team</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#0A2351]">Meet Our Educators</h2>
                    <p className="mt-4 text-slate-600 font-inter">Dedicated professionals Committed to Academic Excellence</p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {facultyData.map((teacher, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[40px] text-center shadow-lg shadow-[#0A2351]/5 border border-slate-100 group hover:-translate-y-2 transition-all">
                            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#0077B6]/20">
                                <Image src={teacher.image} alt={teacher.name} fill className="object-cover" />
                            </div>
                            <h3 className="text-xl font-bold font-poppins text-[#0A2351] group-hover:text-[#0077B6] transition-colors">{teacher.name}</h3>
                            <p className="text-[#0077B6] font-medium text-sm mt-1">{teacher.role}</p>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
};

export default AboutPage;
