import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Leaf } from 'lucide-react';
import { HoverButton } from './ui/hover-button';

const navLinks = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Treatments', path: '#treatments' },
  { name: 'Gallery', path: '#gallery' },
  { name: 'FAQ', path: '#faq' },
  { name: 'Contact', path: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      if (isScrollingRef.current) return;

      const sections = navLinks.map(link => document.querySelector(link.path));
      let current = '#home';
      for (const section of sections) {
        if (section && window.scrollY >= (section as HTMLElement).offsetTop - 150) {
          current = '#' + section.id;
        }
      }
      setActiveHash(current);
      if (window.location.hash !== current) {
         window.history.replaceState(null, '', current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setActiveHash(hash);
    
    isScrollingRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
    
    // Update URL hash gracefully
    window.history.pushState(null, '', hash);

    // Defer the scroll logic slightly to ensure any layout changes settle
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        const offset = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top: Math.max(0, offset),
          behavior: 'smooth'
        });
      }
    }, 10);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-md' : 'bg-white/70 backdrop-blur-lg'
      }`}
    >
      <div 
        className={`w-full transition-all duration-300 border-b border-white/20 ${
          isScrolled ? 'h-20' : 'h-24'
        }`}
      >
        <div className="h-full px-4 sm:px-8 flex items-center justify-between mx-auto max-w-7xl">
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-2 md:gap-3 group min-w-0 mr-2 sm:mr-4">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform shrink-0">
            <img src="/logo_maahomeoclinic.jpeg" alt="Maa Homoeo Clinic Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-primary font-serif truncate">Maa Homoeo Clinic</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 font-medium text-sm text-text-dark/80">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.path}
              onClick={(e) => handleLinkClick(e, link.path)}
              className={`relative px-4 py-2 rounded-full transition-colors ${
                activeHash === link.path ? 'text-primary font-semibold' : 'hover:text-primary'
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              {activeHash === link.path && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-0 bg-white/50 backdrop-blur-md border border-gray-100/50 shadow-sm rounded-full z-0"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
          <a href="tel:+919431008188">
            <HoverButton 
              className="ml-4 px-6 py-2.5 bg-accent text-white rounded-lg font-semibold shadow-lg shadow-accent/20 hover:scale-105 transition-transform"
            >
              Book Appointment
            </HoverButton>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary p-2 shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg absolute w-full left-0 origin-top"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`block px-4 py-3 rounded-lg text-lg font-medium ${
                    activeHash === link.path ? 'bg-secondary/10 text-secondary' : 'text-text-dark hover:bg-neutral-light'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-4">
                <a href="tel:+919431008188" className="block">
                  <button className="w-full bg-accent text-white py-3 rounded-lg font-medium text-lg shadow-md">
                    Book Now
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
