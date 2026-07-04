import { motion } from 'motion/react';
import { Award, CheckCircle, Clock, Heart, Search, Pill, Activity } from 'lucide-react';
import SplitText from '../components/SplitText';

export default function About() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary pt-16 pb-24 px-4 text-center text-white">
        <SplitText
          tag="h1"
          text="About Our Clinic"
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
          Dedicated to providing holistic, natural, and root-cause healing to patients across Bihar and beyond.
        </motion.p>
      </section>

      {/* Doctor Bio */}
      <section className="py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto relative -mt-16 z-10">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-5/12 relative flex items-center justify-center bg-gray-50">
            <img 
              src="/d1.webp" 
              alt="Dr. Pradip Kumar" 
              className="w-full h-full object-cover md:object-contain object-center min-h-[300px] md:min-h-full" 
            />
          </div>
          <div className="md:w-7/12 p-6 sm:p-10 md:p-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-2">Dr. Pradip Kumar</h2>
            <p className="text-secondary font-medium text-lg mb-8">B.H.M.S (B.U) | Reg. No. 34737</p>
            
            <div className="space-y-6 text-text-dark/80 text-lg leading-relaxed">
              <p>
                Dr. Pradip Kumar is widely recognized as the Best Homeopathic Doctor in Patna, with over 30 years of clinical experience. At his Homeopathic Clinic in Patna, he has dedicated his life to advancing the practice of classical homeopathy and providing safe, side-effect-free treatments.
              </p>
              <p>
                "My philosophy is simple: treat the patient, not just the disease. Every individual is unique, and so are their physical and emotional responses to illness. We focus on stimulating the body's natural healing force."
              </p>
            </div>


          </div>
        </div>
      </section>

      {/* Certificates and Awards */}
      <section className="py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">Certificates & Awards</h2>
          <p className="text-text-dark/70 text-lg">Recognitions of our commitment to healthcare excellence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Guest of Honour Recognition – Eklavya S. P. Academy", org: "", year: "", image: "/c_1.webp", desc: "Awarded to Dr. Pradip Kumar as a Guest of Honour by Eklavya S. P. Academy (Dighwara, Saran) for sharing professional expertise and supporting institutional initiatives." },
            { title: "Memorial Seminar Award – Dr. (Prof.) Renu Singh Memorial Trust (2022)", org: "", year: "", image: "/c_2.webp", desc: "Presented to Dr. Pradip Kumar at the IMA Hall (Patna) seminar in recognition of medical professional excellence and valuable contributions to the healthcare community." },
            { title: "Certificate of Excellence in Homoeopathy – Ayush Directorate & Kent Pharmaceuticals", org: "", year: "", image: "/c_3.webp", desc: "Awarded to Dr. Pradip Kumar on World Homoeopathic Day for demonstrating extraordinary enthusiasm and outstanding contributions to the field of healthcare and humanity." },
            { title: "Radio City 'Thank You, Doctor' Recognition Certificate.", org: "", year: "", image: "/c_4.webp", desc: "Presented to Dr. Pradip Kumar (Maa Homoeo Clinic) by 91.1 FM Radio City in recognition of invaluable healthcare service and dedication to community well-being." },
            { title: "Special Recognition Award – Talent Hunt Exam (2023)", org: "", year: "", image: "/c_5.webp", desc: "Awarded to Dr. Pradip Kumar by the Baldev Memorial Educational & Welfare Society and Director's Club for outstanding support and contribution during the competitive event in Hajipur." },
            { title: "Certificate of Participation – 1st International Indo-Nepal Homoeopathic Scientific Seminar (2023)", org: "", year: "", image: "/c_6.webp", desc: "Awarded to Dr. Pradip Kumar for participating in the international scientific seminar organised by the Dr. Renu Singh Memorial Charitable Trust and the All Nepal Homoeopathic Association in Janakpur Dham, Nepal." }
          ].map((item, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="relative group rounded-2xl flex flex-col md:block h-full [perspective:1000px]"
             >
               {/* RGB Blur Effect */}
               <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-40 group-hover:opacity-60 animate-border-gradient rounded-2xl blur-md transition-opacity duration-500"></div>

               {/* Mobile View: Standard Layout */}
               <div className="relative z-10 md:hidden flex flex-col h-full overflow-hidden bg-white rounded-2xl shadow-sm border border-gray-100">
                 <div className="w-full h-56 relative overflow-hidden bg-gray-50 p-4 flex items-center justify-center">
                   <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain drop-shadow-md" />
                 </div>
                 <div className="p-6 flex flex-col flex-grow text-center items-center justify-center">
                   <h3 className="font-bold text-xl mb-2 text-text-dark">{item.title}</h3>
                   <p className="text-text-dark/80 text-sm">{item.desc}</p>
                 </div>
               </div>

               {/* Desktop View: Flip Card */}
               <div className="hidden md:block relative z-10 w-full h-[380px] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
                 {/* Front */}
                 <div className="absolute inset-0 [backface-visibility:hidden] flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                   <div className="w-full h-56 relative overflow-hidden bg-gray-50 p-4 flex items-center justify-center">
                     <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105" />
                   </div>
                   <div className="p-6 flex flex-col flex-grow text-center items-center justify-center">
                     <h3 className="font-bold text-xl mb-2 text-text-dark">{item.title}</h3>
                   </div>
                 </div>

                 {/* Back */}
                 <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center p-8 overflow-hidden">
                   <h3 className="font-bold text-xl mb-4 text-primary">{item.title}</h3>
                   <p className="text-text-dark/80 text-sm leading-relaxed">{item.desc}</p>
                 </div>
               </div>
             </motion.div>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-transparent py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Our Healing Approach</h2>
            <p className="text-lg text-text-dark/70 max-w-2xl mx-auto">A systematic, 4-step process designed to understand you completely and heal you thoroughly.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "1. Deep Consultation", desc: "A 45-minute profound discussion about your symptoms, lifestyle, emotional state, and medical history." },
              { icon: Search, title: "2. Root Diagnosis", desc: "Analyzing the collected information to identify the underlying cause of your condition, not just the superficial symptoms." },
              { icon: Pill, title: "3. Personalized Remedy", desc: "Selecting a specific homeopathic medicine tailored exactly to your unique constitution." },
              { icon: Activity, title: "4. Gentle Follow-up", desc: "Regular monitoring of your progress and adjusting the remedy potency as your health improves." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative group rounded-2xl h-full flex flex-col"
              >
                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50 text-center relative h-full flex flex-col items-center hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                   <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 shrink-0">
                      <step.icon size={32} />
                   </div>
                   <h3 className="text-2xl font-serif font-semibold mb-3">{step.title}</h3>
                   <p className="text-text-dark/70 leading-relaxed">{step.desc}</p>
                 </div>
                 {i < 3 && (
                   <div className="hidden md:block absolute top-16 -right-4 w-8 h-0.5 bg-gray-200 z-10 overflow-hidden">
                     <motion.div 
                       className="h-full bg-primary"
                       initial={{ width: 0 }}
                       whileInView={{ width: "100%" }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.5, delay: i * 0.2 + 0.4, ease: "easeOut" }}
                     />
                   </div>
                 )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* Clinic Milestones Section - Temporarily removed per user request
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-primary mb-16 text-center">Clinic Milestones</h2>
        <div className="space-y-12">
          {[
            { year: "1995", title: "Clinic Foundation", desc: "Started as a small consulting room in central Patna with a vision to provide authentic homeopathy." },
            { year: "2005", title: "Expansion to Full Facility", desc: "Moved to our current, larger premises to accommodate the growing number of patients and establish a modern pharmacy." },
            { year: "2012", title: "ISO Certification", desc: "Recognized for maintaining high standards in medicine dispensing and patient care management." },
            { year: "2020", title: "Digital Telemedicine Launch", desc: "Began offering online consultations to serve patients globally during the pandemic." }
          ].map((milestone, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -150 : 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex items-start gap-6 relative"
            >
              <div className="w-16 md:w-24 shrink-0 text-right font-serif font-bold text-xl md:text-2xl text-accent pt-1 md:pt-0">{milestone.year}</div>
              {i < 3 && (
                <div className="absolute left-[72px] md:left-[104px] top-3 bottom-[-48px] w-0.5 bg-gray-200 overflow-hidden">
                  <motion.div
                    className="w-full bg-primary"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.3 + 0.5, ease: "easeOut" }}
                  />
                </div>
              )}
              <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-secondary shrink-0 mt-2.5 md:mt-2 z-10 mx-2 md:mx-2 shadow-[0_0_0_4px_white]"></div>
              <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 flex-1 relative">
                <h3 className="text-lg md:text-xl font-bold mb-2">{milestone.title}</h3>
                <p className="text-sm md:text-base text-text-dark/70">{milestone.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      */}
    </div>
  );
}
