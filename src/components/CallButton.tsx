import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export default function CallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down a bit (past most/all of hero section)
      const scrolledPastHero = window.scrollY > 300;
      const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200;

      if (scrolledPastHero && !isNearBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="tel:+919431008188"
          className="fixed bottom-36 right-4 md:right-8 z-50 w-14 h-14 flex items-center justify-center bg-primary text-white rounded-full shadow-xl hover:-translate-y-1 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <Phone size={24} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
