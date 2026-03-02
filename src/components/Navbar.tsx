'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Menu, X, GraduationCap, ChevronRight, ChevronDown, Phone, Instagram, Linkedin
} from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '#',
    subItems: [
      { name: 'About Chanakya', href: '/about-chanakya' },
      { name: 'Our Management', href: '/management' },
      { name: 'Parents Testimonial', href: '/testimonials' },
    ],
  },
  {
    name: 'Our Programmes',
    href: '/programmes',
    subItems: [
      { name: 'First Step', href: '/programmes#first-step' },
      { name: 'Cambridge Primary', href: '/programmes/primary' },
      { name: 'Cambridge Secondary', href: '/programmes/secondary' },
      { name: 'Cambridge Board', href: '/programmes/igcse' },
    ]
  },
  { name: 'Events', href: '/events' },
  { name: 'Campuses', href: '/campuses' },
  { name: 'Career', href: '/career' },
  { name: 'Contact Us', href: '/contact-us' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
        ? 'bg-[#0A2351]/95 backdrop-blur-md shadow-lg py-3'
        : 'bg-[#0A2351] py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow-lg transition-transform group-hover:scale-110 border border-white/20">
              <img src="/school_logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white leading-none">
                CHANAKYA
              </span>
              <span className="text-[10px] font-medium text-[#0077B6] tracking-widest uppercase">
                International School
              </span>
            </div>
          </Link>

          {/* Desktop Menu Wrapper */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.subItems && setActiveDropdown(item.name)}
                  onMouseLeave={() => item.subItems && setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center text-sm font-medium text-white/80 hover:text-[#0077B6] transition-colors py-2"
                  >
                    {item.name}
                    {item.subItems && <ChevronDown size={14} className="ml-1 opacity-50 group-hover:rotate-180 transition-transform" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.subItems && (
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 w-56 pt-2 transition-all duration-300 ${activeDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                      <div className="bg-[#0A2351] border border-white/10 rounded-2xl shadow-2xl overflow-hidden py-2 backdrop-blur-xl">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-6 py-3 text-sm text-white/80 hover:text-white hover:bg-[#0077B6]/20 transition-all font-medium"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  {!item.subItems && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0077B6] transition-all group-hover:w-full" />
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="flex items-center ml-8">
              <Link
                href="/contact-us"
                className="bg-[#0077B6] hover:bg-white hover:text-[#0A2351] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg flex items-center group border border-white/10 whitespace-nowrap"
              >
                Apply Now
                <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button - Outside Desktop Wrapper */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-[#0A2351] shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col p-6 space-y-4 border-t border-white/10 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.name} className="flex flex-col border-b border-white/5 pb-2">
              <div
                className="flex items-center justify-between py-3"
                onClick={() => item.subItems && setActiveDropdown(activeDropdown === item.name ? null : item.name)}
              >
                <Link
                  href={item.href}
                  onClick={() => !item.subItems && setIsOpen(false)}
                  className="text-xl font-semibold text-white hover:text-[#0077B6] transition-colors"
                >
                  {item.name}
                </Link>
                {item.subItems && (
                  <ChevronDown
                    size={20}
                    className={`text-white/50 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                  />
                )}
              </div>

              {/* Mobile Submenu Items */}
              {item.subItems && (
                <div className={`flex flex-col space-y-2 overflow-hidden transition-all duration-300 ${activeDropdown === item.name ? 'max-h-[300px] mt-2 mb-4' : 'max-h-0'}`}>
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base text-white/60 hover:text-[#0077B6] pl-4 py-2 flex items-center"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0077B6] mr-3" />
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="space-y-4 pt-4">
            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#0077B6] text-white px-6 py-4 rounded-2xl text-center font-bold shadow-md active:scale-95 transition-all block"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
