import HeroCarousel from '@/components/HeroCarousel';
import FacilitiesSection from '@/components/FacilitiesSection';
import CultureSection from '@/components/CultureSection';
// Removed ProgrammesSection from home page
import ClassesSection from '@/components/ClassesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Link from 'next/link';

import { ChevronRight, MapPin } from 'lucide-react';

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
            alt="Cambridge International Education Logo"
            className="h-12 md:h-16 w-auto object-contain rounded-md bg-white p-1"
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

      {/* Visit Our Campus Section - Local SEO Optimization */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0A2351] rounded-[60px] overflow-hidden relative shadow-2xl">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0077B6] opacity-20 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />

            <div className="flex flex-col lg:flex-row">
              {/* Content Side */}
              <div className="lg:w-1/2 p-12 lg:p-20 relative z-10">
                <span className="text-[#0077B6] font-black uppercase tracking-[0.3em] text-sm mb-6 block">Join Our Community</span>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 font-poppins leading-tight">
                  Visit Our <br />
                  <span className="text-[#0077B6]">Campus Today</span>
                </h2>
                <p className="text-blue-100/70 mb-10 text-lg leading-relaxed font-inter">
                  Experience why Chanakya is the <strong className="text-white">best school in Palghar</strong>. We invite parents and students to tour our modern facilities and meet our dedicated educators at the <strong className="text-white">top Cambridge school near you</strong>.
                </p>

                <div className="space-y-6 mb-12">
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-[#0077B6]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-bold text-white/40">Location</p>
                      <p className="font-medium">Shirgaon, New Satpati Road, Palghar (W)</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps?q=Chanakya+The+Global+School+for+Intellectuals+Palghar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#0077B6] hover:bg-white hover:text-[#0A2351] text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl group"
                >
                  Get Directions
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Image side - Map Preview */}
              <div className="lg:w-1/2 h-[400px] lg:h-auto relative">
                <iframe
                  src="https://www.google.com/maps?q=Chanakya%20The%20Global%20School%20for%20Intellectuals,%20Shirgaon,%20Palghar&output=embed"
                  className="w-full h-full grayscale opacity-70 hover:opacity-100 transition-opacity"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#0A2351] to-transparent hidden lg:block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parents Testimonials Section */}
      <TestimonialsSection />
    </main>
  );
}
