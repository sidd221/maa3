import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, ChevronDown, Send } from 'lucide-react';
import SplitText from '../components/SplitText';

const faqs = [];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);

    const accessKey = "c2c0a419-5237-4c53-af20-273144281806";
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setShowToast(true);
        (e.target as HTMLFormElement).reset();
      } else {
        console.error("Error submitting form:", data);
        alert("There was an error sending your message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error sending your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setShowToast(false), 5000);
    }
  };

  return (
    <div className="w-full bg-transparent border-t border-gray-100">
      <section className="bg-primary pt-24 pb-32 px-4 text-center text-white">
        <SplitText
          tag="h1"
          text="Get in Touch"
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
          We're here to answer your questions and guide you on your journey to natural wellness.
        </motion.p>
      </section>

      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto -mt-20 relative z-10 mb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            { icon: Phone, title: "Call Us", pt1: "+91 9431008188", pt2: "" },
            { icon: Mail, title: "Email Us", pt1: "maahomoeoclinic4@gmail.com", pt2: "" },
            { icon: MapPin, title: "Visit Us", pt1: "House No - 2, Road Number - 2", pt2: "near Atal Path, Indrapuri, Patna, Bihar 800024" }
          ].map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="relative group rounded-3xl h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-40 group-hover:opacity-60 animate-border-gradient rounded-3xl blur-md transition-opacity duration-500"></div>
              <div className="relative h-full bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6">
                  <info.icon size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-4">{info.title}</h3>
                <p className="text-text-dark/70">{info.pt1}</p>
                <p className="text-text-dark/70">{info.pt2}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto pb-24">
        {/* Contact Form */}
        <div>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Send us a Message</h2>
            <p className="text-text-dark/70">Have a specific medical query or need help with directions? Drop us a line.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence>
              {showToast && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center flex flex-col items-center relative"
                  >
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-2">Details Sent!</h3>
                    <p className="text-text-dark/70 mb-8">Thank you for reaching out. We will get back to you shortly.</p>
                    <button
                      onClick={() => setShowToast(false)}
                      type="button"
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
                    >
                      Continue
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-dark/80 mb-2">Name *</label>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-40 group-focus-within:opacity-80 animate-border-gradient rounded-lg blur transition-opacity duration-500" />
                  <input required type="text" name="name" className="relative w-full px-4 py-3 rounded-lg border border-transparent focus:border-transparent outline-none transition-all bg-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-dark/80 mb-2">Email *</label>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-40 group-focus-within:opacity-80 animate-border-gradient rounded-lg blur transition-opacity duration-500" />
                  <input required type="email" name="email" className="relative w-full px-4 py-3 rounded-lg border border-transparent focus:border-transparent outline-none transition-all bg-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-dark/80 mb-2">Phone Number *</label>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-40 group-focus-within:opacity-80 animate-border-gradient rounded-lg blur transition-opacity duration-500" />
                  <input required type="tel" name="phone" pattern="[0-9+\-\s()]+" title="Please enter a valid phone number" onKeyDown={(e) => { if (!/[0-9+\-\s()]/.test(e.key) && !['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'].includes(e.key)) e.preventDefault(); }} className="relative w-full px-4 py-3 rounded-lg border border-transparent focus:border-transparent outline-none transition-all bg-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-dark/80 mb-2">Age *</label>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-40 group-focus-within:opacity-80 animate-border-gradient rounded-lg blur transition-opacity duration-500" />
                  <input required type="text" inputMode="numeric" pattern="[0-9]*" name="age" maxLength={3} onKeyDown={(e) => { if (!/[0-9]/.test(e.key) && !['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'].includes(e.key)) e.preventDefault(); }} className="relative w-full px-4 py-3 rounded-lg border border-transparent focus:border-transparent outline-none transition-all bg-white" />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark/80 mb-2">Message *</label>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-40 group-focus-within:opacity-80 animate-border-gradient rounded-lg blur transition-opacity duration-500" />
                <textarea required rows={5} name="message" className="relative w-full px-4 py-3 rounded-lg border border-transparent focus:border-transparent outline-none transition-all resize-none bg-white"></textarea>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto h-12"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Directions Section */}
      <section className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto pb-24">
        <div className="bg-white rounded-3xl p-4 md:p-8 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-1/2 h-[450px] rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14389.071732279312!2d85.08248585115722!3d25.62923158796957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57bb283e2565%3A0x2b6a10b79912795!2sMaa%20Homeo%20Clinic%20*21%20Dr%20Pradeep%20Kumar%20B.H.M.S%20(%20B.U%20)!5e0!3m2!1sen!2sin!4v1781602632574!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-4">Find Your Way to Healing</h2>
            <p className="text-lg text-text-dark/70 mb-8 leading-relaxed max-w-lg">Visit our clinic for a personalised consultation. We are centrally located in Patna, easily accessible for all your holistic healthcare needs.</p>

            <div className="bg-neutral-light rounded-2xl p-6 mb-8 border border-gray-100 max-w-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg mb-1">Clinic Address</h4>
                  <p className="text-text-dark/80 font-medium">Maa Homeo Clinic</p>
                  <p className="text-text-dark/70 mt-1 leading-relaxed">Dr. Pradip Kumar B.H.M.S ( B.U )<br />Patna, Bihar, House No - 2, Road Number - 2, near, Atal Path, Indrapuri, Patna, Bihar 800024.</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/1sYHjbyj1hBuW5Zk7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all font-bold text-lg"
            >
              <MapPin size={24} />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
