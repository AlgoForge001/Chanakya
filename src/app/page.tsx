import HeroCarousel from '@/components/HeroCarousel';
import FacilitiesSection from '@/components/FacilitiesSection';
import CultureSection from '@/components/CultureSection';
// Removed ProgrammesSection from home page
import ClassesSection from '@/components/ClassesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Link from 'next/link';

import { ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-[72px] lg:pt-[88px]">
      {/* Promotional Banner */}
      <Link
        href="/contact-us"
        className="bg-gradient-to-r from-[#0A2351] to-[#0077B6] py-3 px-6 text-center shadow-inner hover:brightness-110 transition-all cursor-pointer group flex items-center justify-center space-x-3"
      >
        <div className="flex items-center space-x-3">
          <img
            src="/logo_cambridge.jpg"
            alt="Cambridge Logo"
            className="h-8 md:h-10 w-auto object-contain rounded-md bg-white p-1"
          />
          <p className="text-white text-base md:text-lg lg:text-xl font-medium tracking-wide font-poppins drop-shadow-sm">
            Palghar’s Gateway to Cambridge International Education
          </p>
        </div>
        <ChevronRight className="text-white w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>

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
