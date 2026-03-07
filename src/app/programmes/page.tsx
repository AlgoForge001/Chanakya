import type { Metadata } from "next";
import ProgrammesSection from '@/components/ProgrammesSection';

export const metadata: Metadata = {
    title: "Our Programmes | Cambridge Curriculum School Palghar",
    description: "Explore the diverse educational programmes at Chanakya International School, from primary to upper secondary, following the prestigious Cambridge curriculum.",
    keywords: ["School Programmes Palghar", "Cambridge Curriculum Palghar", "IGCSE Courses Palghar", "Educational Pathways"],
};

export default function ProgrammesPage() {
    return (
        <main className="flex min-h-screen flex-col pt-[72px] lg:pt-[88px]">
            {/* Hero Section for Context */}
            <div className="bg-[#0A2351] py-16 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0077B6] rounded-full translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl" />
                <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
                    <h1 className="text-3xl md:text-5xl font-black font-poppins text-white mb-4">
                        Educational Programmes
                    </h1>
                    <p className="text-blue-100/60 font-inter text-sm md:text-base uppercase tracking-[0.3em]">
                        Chanakya The Global School for Intellectuals
                    </p>
                </div>
            </div>

            {/* Reused Programmes Section */}
            <ProgrammesSection />

            {/* Additional CTA or Detail could go here later */}
        </main>
    );
}
