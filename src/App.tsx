/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Treatments from './pages/Treatments';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import PageLoader from './components/PageLoader';

import CallButton from './components/CallButton';

function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="flex flex-col">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} id="home" className="scroll-mt-24"><Home /></motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} transition={{ duration: 0.6, delay: 0.1 }} id="about" className="scroll-mt-24"><About /></motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.01 }} transition={{ duration: 0.6 }} id="treatments" className="scroll-mt-24"><Treatments /></motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} transition={{ duration: 0.6 }} id="gallery" className="scroll-mt-24"><Gallery /></motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} transition={{ duration: 0.6 }} id="faq" className="scroll-mt-24"><FAQ /></motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} transition={{ duration: 0.6 }} id="contact" className="scroll-mt-24"><Contact /></motion.div>
        </div>
      } />
    </Routes>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent browser from restoring scroll position on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (window.location.hash) {
        setTimeout(() => {
          const id = window.location.hash.substring(1);
          const element = document.getElementById(id);
          if (element) {
            const offset = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({
              top: Math.max(0, offset),
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        setTimeout(() => window.scrollTo(0, 0), 10);
      }
    }
  }, [isLoading]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <main className="flex-grow bg-gradient-to-b from-primary/10 via-white to-primary/5">
          <AnimatedRoutes />
        </main>
        <Footer />
        <WhatsAppButton />
        <CallButton />
      </div>
    </BrowserRouter>
  );
}
