/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import PageLoader from './components/PageLoader';

const About = lazy(() => import('./pages/About'));
const Treatments = lazy(() => import('./pages/Treatments'));
const Gallery = lazy(() => import('./pages/Gallery'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));

import CallButton from './components/CallButton';

function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="flex flex-col">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} id="home" className="scroll-mt-24"><Home /></motion.div>
          <Suspense fallback={<div className="min-h-screen" />}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} transition={{ duration: 0.6, delay: 0.1 }} id="about" className="scroll-mt-24"><About /></motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.01 }} transition={{ duration: 0.6 }} id="treatments" className="scroll-mt-24"><Treatments /></motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} transition={{ duration: 0.6 }} id="gallery" className="scroll-mt-24"><Gallery /></motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} transition={{ duration: 0.6 }} id="faq" className="scroll-mt-24"><FAQ /></motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }} transition={{ duration: 0.6 }} id="contact" className="scroll-mt-24"><Contact /></motion.div>
          </Suspense>
        </div>
      } />
    </Routes>
  );
}

export default function App() {
  useEffect(() => {
    // Prevent browser from restoring scroll position on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const offset = element.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({
            top: Math.max(0, offset),
            behaviour: 'smooth'
          });
        }
      }, 500);
    } else {
      setTimeout(() => window.scrollTo(0, 0), 10);
    }
  }, []);

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
