import React from 'react';
import Image from 'next/image';

const CultureSection = () => {
    return (
        <section id="culture-section" className="relative w-full bg-[#4F56C0] pt-20 pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
                {/* Centered Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight text-white uppercase tracking-wider">
                        Learn More About Our Work <br className="hidden md:block" />
                        And Our Cultural Activities
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left: Description Content */}
                    <div className="w-full lg:w-1/2">
                        <p className="text-lg md:text-xl font-inter leading-relaxed text-white font-medium text-center lg:text-left">
                            Chanakya The Global School for Intellectuals is
                            driven by the philosophy of <span className="font-bold underline">"NURTURING
                                CURIOSITY."</span> We believe that every learner
                            deserves the freedom to explore their own
                            thoughts and ideas, questioning and discovering in
                            a supportive environment.<br /><br />
                            This philosophy is brought to life through a school
                            culture led by passionate educators, a thoughtfully
                            designed curriculum, and innovative programs.
                        </p>
                    </div>

                    {/* Right: Circular Image Container */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px]">
                            {/* Decorative background circles to match the 'layers' effect in rough.png */}
                            <div className="absolute inset-0 rounded-full border-[15px] md:border-[25px] border-white/20 translate-x-6 translate-y-6" />

                            <div className="absolute inset-0 rounded-full bg-white border-[12px] md:border-[20px] lg:border-[24px] border-white shadow-2xl overflow-hidden z-10">
                                <Image
                                    src="/14072022015320_8033_Chanakya-The-Global-School-For-Intellectuals-Palghar-(7).jpg"
                                    alt="Student Cultural Activity"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hybrid Transition: Desktop Triangles / Mobile Glassmorphism */}
            <div className="absolute bottom-0 left-0 w-full z-20">
                {/* Desktop: Sawtooth Separator */}
                <div className="hidden md:block w-full h-12 md:h-16 relative overflow-hidden translate-y-[1px]">
                    <svg
                        viewBox="0 0 1440 48"
                        className="w-full h-full"
                        preserveAspectRatio="none"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 0L48 48L96 0L144 48L192 0L240 48L288 0L336 48L384 0L432 48L480 0L528 48L576 0L624 48L672 0L720 48L768 0L816 48L864 0L912 48L960 0L1008 48L1056 0L1104 48L1152 0L1200 48L1248 0L1296 48L1344 0L1392 48L1440 0V48H0Z"
                            fill="#ffffff"
                        />
                    </svg>
                </div>

                {/* Mobile: Glassmorphism Gradient Transition */}
                <div className="block md:hidden relative w-full h-32 pointer-events-none -mb-16">
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent" />
                    <div className="absolute inset-0 backdrop-blur-md bg-white/5" />
                </div>
            </div>
        </section>
    );
};

export default CultureSection;
