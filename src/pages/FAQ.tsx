import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import SplitText from '../components/SplitText';

const faqs = [
  { q: "Is homoeopathy safe for children & infants?", a: "Yes, completely! Homoeopathic medicines are non-toxic, have zero side effects, and are highly effective for children. In fact, kids love the sweet pills, making medicine administration very easy." },
  { q: "How long does the treatment take?", a: "This depends heavily on whether your condition is acute (like a recent cold) or chronic (like psoriasis present for 10 years). Acute conditions resolve rapidly in days, while deep-seated chronic issues may take several months to cure completely from the root." },
  { q: "Are the remedies purely natural?", a: "Yes. Our remedies are prepared from natural substances (plants, minerals, etc.) using a highly specialized mathematical process of dilution and potentization, rendering them completely safe and free from crude chemicals." },
  { q: "Can homoeopathy cure anal fistula?", a: "Yes. Homoeopathy offers an effective, non-surgical treatment for anal fistula. It helps in closing the tract naturally, reducing pain and discharge, and preventing recurrence without the complications of surgery." },
  { q: "Does Homoeopathy Really Work for Anxiety and Stress?", a: "Yes, homoeopathy is highly effective for managing anxiety and stress. Instead of prescribing sedatives that may cause dependency, homoeopathy treats the individual as a whole. Remedies are selected based on the specific symptoms, triggers, and physical manifestations of stress, helping to restore mental and emotional balance naturally." },
  { q: "What should I bring on my first visit?", a: "Please bring all your past medical records, blood reports, X-rays/MRIs, and a list of any allopathic medications you are currently taking. Most importantly, bring a detailed observation of your own symptoms." },
  { q: "Do I need to stop my allopathic medicines during homoeopathic treatment?", a: "No, you do not need to abruptly stop your ongoing allopathic medications. Homoeopathy works well alongside them. As your condition improves under homoeopathic care, your physician can gradually reduce the dosage of your conventional medicines." },
  { q: "Can Homoeopathy Help with Chronic Pain Management?", a: "Yes, homoeopathy is very effective in managing and treating chronic pain conditions such as arthritis, sciatica, migraines, and fibromyalgia. Instead of acting as a temporary painkiller, homoeopathic remedies target the underlying inflammation, nerve irritation, or structural imbalance causing the pain, providing long-lasting relief and improving mobility without side effects." },
  { q: "Are there any dietary restrictions while taking homoeopathic medicines?", a: "Generally, you can maintain your regular diet. However, we advise avoiding strong-smelling substances like raw onion, garlic, or strong coffee right before and after taking the medicine, as strong odors can interfere with the effect of the homoeopathic pills." },
  { q: "How do homoeopathic medicines actually work?", a: "Homoeopathy operates on the principle of 'like cures like'. The medicines stimulate the body's vital force and natural healing mechanisms, helping the immune system to recognize and fight the disease from within, rather than just suppressing the symptoms temporarily." },
  { q: "Is it safe for pregnant women to take homoeopathic medicines?", a: "Yes, homoeopathy is exceptionally safe during pregnancy. It can be very effective for common pregnancy-related issues like morning sickness, acidity, and mood swings without posing any risk to the mother or the developing baby." },
  { q: "Do homoeopathic medicines have an expiry date?", a: "Homoeopathic pills, if stored properly in a cool, dry place away from direct sunlight and strong odors, remain effective for a very long time. However, it is always recommended to use the freshly dispensed medicines as prescribed for the duration of your treatment." }
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full bg-transparent border-t border-gray-100">
      <section className="bg-primary pt-24 pb-32 px-4 text-center text-white">
        <SplitText
          tag="h1"
          text="Frequently Asked Questions"
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
          Clear your doubts about homoeopathic treatment and our clinic's processes.
        </motion.p>
      </section>

      <section className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto -mt-20 relative z-10 pb-24">
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-neutral-light transition-colors"
              >
                <span className="font-serif font-semibold text-lg pr-8">{faq.q}</span>
                <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} className="text-secondary shrink-0">
                  <ChevronDown />
                </motion.div>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-neutral-light/30"
                  >
                    <div className="px-6 pb-5 pt-2 text-text-dark/80 leading-relaxed border-t border-gray-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
