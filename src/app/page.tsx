import HeroCarousel from '@/components/HeroCarousel';
import FacilitiesSection from '@/components/FacilitiesSection';
import CultureSection from '@/components/CultureSection';
// Removed ProgrammesSection from home page
import ClassesSection from '@/components/ClassesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-[72px] lg:pt-[88px]">
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-[#0A2351] to-[#0077B6] py-4 px-6 text-center shadow-inner">
        <p className="text-white text-lg md:text-xl font-medium tracking-wide font-poppins drop-shadow-sm">
          Palghar’s Gateway to Cambridge International Education
        </p>
      </div>

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Facilities Section */}
      <FacilitiesSection />

      {/* Culture Section */}
      <CultureSection />

      {/* Programmes Section moved to dedicated page */}

      {/* School Classes Section */}
      <ClassesSection />

      {/* Parents Testimonials Section */}
      <TestimonialsSection />
    </main>
  );
}
