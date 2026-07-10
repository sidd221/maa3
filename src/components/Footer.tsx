import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="bg-primary text-neutral-light pt-16 pb-32 lg:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden shrink-0 bg-white">
                <img src="/logo_maahomeoclinic.jpeg" alt="Maa Homoeo Clinic Logo" className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
              <span className="text-2xl font-serif font-bold">Maa Homoeo Clinic</span>
            </div>
            <p className="text-neutral-light/80 mb-6 leading-relaxed">
              The best Homoeopathic Clinic in Patna dedicated to holistic health and wellness. Experience Homoeopathy Treatment in Patna that is safe, natural, and root-cause focused.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="/#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="/#treatments" className="hover:text-accent transition-colors">Treatments</a></li>
              <li><a href="/#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
              <li><a href="/#contact" className="hover:text-accent transition-colors">Book Appointment</a></li>
              <li><a href="/#contact" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="/#faq" className="hover:text-accent transition-colors">FAQs</a></li>
              <li><a href="/sitemap.html" className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">Sitemap</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Clinic Info</h3>
            <ul className="space-y-4 text-neutral-light/80">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 mt-1" size={20} />
                <span>House No - 2, Road Number - 2, near, Atal Path, Indrapuri, Patna, Bihar 800024.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0" size={20} />
                <span>+91 9431008188</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0" size={20} />
                <span>maahomoeoclinic4@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-light/60 gap-4">
          <p className="text-center md:text-left">© 2026 Maa Homoeo Clinic | Dr. Pradip Kumar</p>
          <div className="flex items-center gap-6 md:mr-12 mb-8 md:mb-0">
            <div className="uppercase tracking-widest text-[10px] text-center">
              Designed By: Siddhant Sinha
            </div>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isInView && (
          <motion.button 
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="fixed bottom-3 right-10 z-[60] w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center hover:bg-accent/80 transition-colors shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
