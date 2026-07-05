import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SplitText from '../components/SplitText';

const categories = ["All", "Chronic", "Pediatric", "Skin", "Women", "Men", "Mental"];

const treatments = [
  { id: 1, name: "Asthma & Bronchitis", category: "Chronic", duration: "6-12 Months", desc: "Holistic care to improve lung capacity, reduce dependence on inhalers, and prevent recurrent attacks by strengthening immunity.", fullDesc: "Our classical homeopathic approach focuses on identifying your specific allergy triggers. We prescribe medicines that desensitize the immune system slowly, reducing bronchial hyperreactivity and ensuring long-term relief from wheezing and breathlessness.", image: "/asthma.jpeg" },
  { id: 2, name: "Psoriasis & Eczema", category: "Skin", duration: "8-15 Months", desc: "Safe, non-steroidal treatment for chronic skin conditions, focusing on internal healing and preventing flare-ups.", fullDesc: "Skin conditions are often external manifestations of internal immune imbalances. We avoid topical suppressive ointments. Instead, we use constitutional medicines that correct the immune response, leading to gradual, permanent clearing of skin lesions.", image: "/Psoriasis & Eczema.jpeg" },
  { id: 3, name: "Migraine", category: "Chronic", duration: "4-8 Months", desc: "Identify and treat specific triggers of your migraine for permanent relief rather than temporary pain suppression.", fullDesc: "We analyze your specific headache patterns—whether triggered by stress, sun, hormones, or digestion. The customized medicine reduces the frequency and intensity of attacks until they completely stop.", image: "/Migrane.jpeg" },
  { id: 4, name: "PCOD & Fibroids", category: "Women", duration: "6-18 Months", desc: "Natural hormonal regulation without synthetic hormones or invasive surgeries.", fullDesc: "Homeopathy offers excellent results in dissolving cysts and regularizing menstrual cycles by correcting the endocrine axis. It also helps manage associated symptoms like weight gain, acne, and mood swings naturally.", image: "/PCOD & Fibroids.jpeg" },
  { id: 5, name: "Recurrent Infections", category: "Pediatric", duration: "3-6 Months", desc: "Build robust immunity in children who fall sick frequently with colds, tonsillitis, or ear infections.", fullDesc: "Instead of repeated antibiotic courses which weaken gut flora, we give sweet homeopathic pills that children love. These medicines stimulate the child's own immune defenses, making them resilient to seasonal changes and school viruses.", image: "/recurrent infections.jpeg" },
  { id: 6, name: "Anxiety & Depression", category: "Mental", duration: "6-12 Months", desc: "Gentle healing for mental distress without habit-forming sedatives or dulling of emotions.", fullDesc: "We understand that mental health is deeply connected to physical well-being. Our detailed psychiatric consultation helps find the simillimum—the exact remedy matching your grief, anxiety, or stress pattern, restoring emotional balance naturally.", image: "/Ansity and depression.jpeg" },
  { id: 7, name: "Thyroid Disorders", category: "Women", duration: "12-24 Months", desc: "Stimulate the thyroid gland to function optimally, helping reduce or eliminate artificial hormone dependence.", fullDesc: "Whether it's Hypo or Hyperthyroidism, our treatment targets the autoimmune or stress factors causing the glandular dysfunction, eventually aiming to restore natural thyroxine production.", image: "/thyoriod disorder.jpeg" },
  { id: 8, name: "Osteoarthritis", category: "Chronic", duration: "Ongoing Management", desc: "Pain relief, reduction of joint stiffness, and improvement in mobility for age-related joint wear and tear.", fullDesc: "While structural damage cannot be reversed, homeopathic remedies significantly reduce inflammation, arrest further cartilage degeneration, and manage pain effectively without NSAIDs.", image: "/osteoarthritis.jpeg" },
  { id: 9, name: "ADHD & Behavioral Issues", category: "Pediatric", duration: "8-16 Months", desc: "Improve concentration, reduce hyperactivity, and manage temper tantrums in a safe, child-friendly manner.", fullDesc: "We avoid strong psychiatric drugs for growing brains. Our remedies calm the nervous system and improve cognitive focus naturally, helping the child perform better socially and academically.", image: "/ADHD & Behavioral Issues.jpeg" },
  { id: 10, name: "Anal Diseases (Piles, Fissures, Fistula)", category: "Chronic", duration: "4-10 Months", desc: "Non-surgical, permanent relief from pain, bleeding, and discomfort associated with anorectal conditions.", fullDesc: "Homeopathy successfully treats hemorrhoids and fissures by addressing the underlying cause—usually chronic constipation and portal vein engorgement. The medicines reduce swelling, stop bleeding, and promote healing of the anal mucosa without any painful procedures.", image: "/Anal Diseases (Piles, Fissures, Fistula).jpg" },
  { id: 11, name: "Gastrointestinal Disorders", category: "Chronic", duration: "6-12 Months", desc: "Long-term resolution for IBS, acidity, and chronic indigestion by restoring optimal gut function.", fullDesc: "Digestive issues are deeply linked to stress and lifestyle. We treat the digestive tract systematically, eliminating chronic acidity, bloating, and irregular bowel habits without relying on daily antacids.", image: "/Gastrointestinal Disorders.jpeg" },
  { id: 12, name: "Alopecia & Hair Loss", category: "Skin", duration: "8-15 Months", desc: "Arrest hair fall, treat dandruff, and stimulate regrowth in cases of patterned hair loss.", fullDesc: "Our constitutional treatment targets hormonal imbalances, nutritional deficiencies, or autoimmune factors responsible for hair loss. It naturally stimulates hair follicles without generic topical chemicals.", image: "/Alopecia & Hair Loss.jpeg" },
  { id: 13, name: "Allergies & Rhinitis", category: "Chronic", duration: "3-8 Months", desc: "Long-term relief from frequent sneezing, runny nose, and seasonal allergies by boosting immunity.", fullDesc: "Allergic rhinitis often stems from an overactive immune system. Our homeopathic remedies work to desensitize the body to allergens naturally, reducing reliance on antihistamines and improving overall respiratory health.", image: "/Allergies & Rhinitis.jpeg" },
  { id: 14, name: "Vitiligo", category: "Skin", duration: "12-24 Months", desc: "Safe, holistic approach to address pigmentation loss by correcting underlying autoimmune triggers.", fullDesc: "Vitiligo is primarily an autoimmune condition. Homeopathy offers constitutional treatments that aim to stabilize the immune system, halt the progression of depigmentation, and stimulate melanocytes naturally.", image: "/vitiligo.jpeg" },
  { id: 15, name: "Menopause Issues", category: "Women", duration: "6-12 Months", desc: "Natural management of hot flashes, mood swings, and bone health without hormone replacement therapy.", fullDesc: "Menopause is a natural transition, but its symptoms can be disruptive. We provide carefully selected homeopathic remedies that balance hormones inherently, easing the transition and improving quality of life.", image: "/Menopause Issues.jpeg" },
  { id: 16, name: "Insomnia & Sleep Issues", category: "Mental", duration: "3-6 Months", desc: "Restore natural sleep cycles and deep rest without the grogginess of sleeping pills.", fullDesc: "Sleep disorders often originate from stress, anxiety, or lifestyle imbalances. Our treatments calm the nervous system, addressing the root cause of sleeplessness to promote deep, rejuvenating sleep naturally.", image: "/Insomnia & Sleep Issues.jpeg" },
  { id: 17, name: "Bedwetting (Enuresis)", category: "Pediatric", duration: "3-8 Months", desc: "Gentle correction of involuntary urination during sleep, treating both physical and emotional factors.", fullDesc: "Bedwetting can cause significant distress to both child and parents. Homeopathy treats this safely by addressing bladder sphincter tone and alleviating any underlying fears or anxieties.", image: "/Bedwetting (Enuresis).jpeg" },
  { id: 18, name: "Acne & Pimples", category: "Skin", duration: "4-8 Months", desc: "Clear cystic acne and prevent scarring by addressing hormonal imbalances and blood purification.", fullDesc: "Topical creams only offer temporary results. Homeopathic medicines work from within, regulating hormones, reducing sebum production, and clearing the skin to prevent future breakouts and scarring.", image: "/Acne & Pimples.jpeg" },
  { id: 19, name: "Rheumatoid Arthritis", category: "Chronic", duration: "12-24 Months", desc: "Manage autoimmune joint inflammation, reduce deformities, and improve daily function.", fullDesc: "Rheumatoid arthritis requires deep-acting constitutional remedies to correct the progressive autoimmune attack on the joints. Homeopathy provides relief from severe morning stiffness, pain, and swelling.", image: "/Rheumatoid Arthritis.jpeg" },
  { id: 20, name: "Sciatica & Back Pain", category: "Chronic", duration: "3-8 Months", desc: "Relief from sharp radiating nerve pain and chronic lower back discomfort.", fullDesc: "Sciatic nerve compression can cause debilitating radiating pain. Homeopathic treatment focuses on reducing inflammation around the nerve root and relieving muscle spasms naturally, promoting mobility.", image: "/Sciatica & Back Pain.jpeg" },
  { id: 21, name: "Warts & Corns", category: "Skin", duration: "2-6 Months", desc: "Permanent, painless removal of viral warts and corns without surgery or freezing.", fullDesc: "Warts are viral growths that often return after painful freezing or burning procedures. Homeopathic medicines act as systemic antiviral agents, causing the warts to naturally shrink and fall off without leaving scars.", image: "/Warts & Corns.jpeg" },
  { id: 22, name: "Tonsillitis", category: "Pediatric", duration: "3-6 Months", desc: "Permanent cure for recurrent throat infections and enlarged tonsils without surgery.", fullDesc: "Homeopathy offers a highly effective alternative to tonsillectomy. By enhancing the child's natural immunity, the medicines reduce the inflammation of the tonsils, preventing recurrent episodes of pain, fever, and difficulty swallowing.", image: "/tonsils.jpeg" },
  { id: 23, name: "Spondylitis", category: "Chronic", duration: "6-12 Months", desc: "Relief from neck and back pain, stiffness, and restricted movement caused by cervical or lumbar spondylosis.", fullDesc: "Degenerative changes in the spine can cause severe pain and nerve compression. Homeopathic medicines reduce inflammation in the spinal joints, relieve muscle spasms, and halt further degeneration.", image: "/spondylitis.jpeg" },
  { id: 24, name: "Liver Disorders", category: "Chronic", duration: "6-12 Months", desc: "Treatment for fatty liver, jaundice, and other hepatic conditions to restore normal liver function.", fullDesc: "The liver is a vital organ for detoxification and metabolism. Homeopathic remedies help reduce fat accumulation in cases of fatty liver, improve digestion, and support overall hepatic health.", image: "/Liver Disorders.jpeg" },
  { id: 25, name: "Prostate Issues (BPH)", category: "Men", duration: "6-12 Months", desc: "Manage symptoms of an enlarged prostate like frequent urination and poor flow naturally.", fullDesc: "Benign Prostatic Hyperplasia (BPH) is common in older men. Homeopathy provides effective relief from urinary urgency, hesitancy, and incomplete emptying by reducing prostate inflammation.", image: "/Prostate Issues.jpeg" },
  { id: 26, name: "Stomach & Gas Issues", category: "Chronic", duration: "3-6 Months", desc: "Relief from chronic acidity, bloating, indigestion, and frequent gas without daily antacids.", fullDesc: "Digestive discomforts often result from irregular eating habits and stress. Homeopathic treatment identifies the root cause and restores optimal digestive function naturally.", image: "/Stomach & Gas Issues.jpeg" },
  { id: 27, name: "UTI & Bladder Issues", category: "Women", duration: "2-4 Months", desc: "Effective treatment for recurrent urinary tract infections and burning sensation during urination.", fullDesc: "Frequent UTIs can be frustrating. Homeopathic medicines work to eliminate the underlying susceptibility to infections, providing lasting relief and preventing recurrences.", image: "/UTI & Bladder Issues.jpeg" },
  { id: 28, name: "Sexual Disorders", category: "Men", duration: "6-12 Months", desc: "Confidential and effective treatment for erectile dysfunction, premature ejaculation, and low libido.", fullDesc: "Sexual health issues often have both physical and psychological roots. Homeopathic remedies address performance anxiety, improve stamina, and restore vitality naturally.", image: "/Sexual Disorders.jpeg" },
  { id: 29, name: "Gallbladder Stones", category: "Chronic", duration: "6-12 Months", desc: "Non-surgical approach to naturally dissolve small gallstones and manage associated pain.", fullDesc: "Homeopathy offers gentle medicines that aid in dissolving smaller, non-obstructive gallstones and reducing gallbladder inflammation, thereby relieving colic and improving fat digestion.", image: "/Gallbladder Stones.jpeg" },
  { id: 30, name: "Varicose Veins", category: "Chronic", duration: "8-16 Months", desc: "Reduce pain and swelling in engorged veins, improving circulation safely.", fullDesc: "Treatment focuses on improving vein elasticity and preventing the progression of varicosities. Our remedies safely manage symptoms like heaviness in the legs and superficial skin ulcerations.", image: "/Varicose Veins.jpeg" }
];

function TreatmentCard({ treatment }: { treatment: typeof treatments[0], key?: import('react').Key }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="relative group rounded-2xl flex flex-col h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-40 group-hover:opacity-60 animate-border-gradient rounded-2xl blur-md transition-opacity duration-500"></div>
      <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
        <div className="w-full h-48 relative overflow-hidden shrink-0">
          <img src={treatment.image} alt={treatment.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" decoding="async" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-4 gap-4">
            <h3 className="text-xl font-serif font-bold text-primary">{treatment.name}</h3>
            <span className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shrink-0">
              {treatment.duration}
            </span>
          </div>
          <p className="text-text-dark/80 mb-4 flex-grow">{treatment.desc}</p>
          
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-4 mt-4 border-t border-gray-100 text-text-dark/70 text-sm leading-relaxed pb-2">
                  {treatment.fullDesc}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button 
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-accent font-medium mt-auto hover:text-primary transition-colors"
          >
            {expanded ? "Show Less" : "Learn More"}
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Treatments() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredTreatments = activeTab === "All" 
    ? treatments 
    : treatments.filter(t => t.category === activeTab);

  return (
    <div className="w-full bg-transparent">
      <section className="bg-primary pt-16 pb-24 px-4 text-center text-white">
        <SplitText
          tag="h1"
          text="Conditions We Treat"
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
          Comprehensive Homeopathy Treatment in Patna for over 200+ distinct medical conditions.
        </motion.p>
      </section>

      <section className="py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto -mt-10 relative z-10">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-white p-2 rounded-xl shadow-sm border border-gray-100 mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                activeTab === cat 
                  ? 'bg-secondary text-white shadow-md' 
                  : 'text-text-dark/70 hover:bg-neutral-light'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          <AnimatePresence mode="popLayout">
            {filteredTreatments.map(treatment => (
              <TreatmentCard key={treatment.id} treatment={treatment} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-transparent py-20 px-4 text-center border-t border-gray-100">
        <h2 className="text-3xl font-serif font-bold text-primary mb-4">Don't see your condition listed?</h2>
        <p className="text-lg text-text-dark/70 mb-8 max-w-2xl mx-auto">We treat over 200 different physical and psychological ailments. Discuss your specific case with our expert.</p>
        <a href="#contact">
          <button className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-bold text-lg hover:bg-accent hover:text-white transition-all">
            Ask Us A Question
          </button>
        </a>
      </section>
    </div>
  );
}
