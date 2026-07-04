import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Calendar, MessageCircle, CheckCircle, HeartPulse, Camera } from 'lucide-react';
import InteractiveSelector from '../components/ui/interactive-selector';
import SplitText from '../components/SplitText';

export default function Gallery() {
  return (
    <div className="w-full">
      <section className="bg-primary pt-16 pb-24 px-4 text-center text-white">
        <SplitText
          tag="h1"
          text="Gallery"
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6"
          delay={50}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-50px"
        />
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/80 max-w-2xl mx-auto"
        >
          Take a look at our clinic, patients, and the holistic healing environment we nurture.
        </motion.p>
      </section>

      <section className="py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto -mt-10 relative z-10">
        <div className="mt-8">
          <InteractiveSelector />
        </div>
      </section>
    </div>
  );
}

