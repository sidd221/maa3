import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, HeartPulse, Stethoscope, Droplets, Baby, Brain, Activity, User, ChevronRight, Star, Leaf } from 'lucide-react';
import SplitText from '../components/SplitText';
import ShinyText from '../components/ShinyText';

const conditions = [
  { icon: Droplets, name: 'Skin Disorders' },
  { icon: User, name: 'Hair Loss' },
  { icon: Activity, name: 'Respiratory' },
  { icon: HeartPulse, name: 'Women\'s Health' },
  { icon: Baby, name: 'Child Health' },
  { icon: ShieldCheck, name: 'Arthritis' },
  { icon: Brain, name: 'Mental Wellness' },
  { icon: Stethoscope, name: 'Digestive' },
];

function Counter({ end, suffix = "" }: { end: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let accumulatedScroll = 0;
    const scrollSpeed = 0.3; // Adjust this value to make it slower

    const scroll = () => {
      if (scrollContainer) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth - 1) {
          scrollContainer.scrollLeft = 0;
        } else {
          accumulatedScroll += scrollSpeed;
          if (accumulatedScroll >= 1) {
            scrollContainer.scrollLeft += Math.floor(accumulatedScroll);
            accumulatedScroll -= Math.floor(accumulatedScroll);
          }
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const pauseScroll = () => cancelAnimationFrame(animationId);
    const resumeScroll = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', pauseScroll);
    scrollContainer.addEventListener('mouseleave', resumeScroll);
    scrollContainer.addEventListener('touchstart', pauseScroll);
    scrollContainer.addEventListener('touchend', resumeScroll);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', pauseScroll);
      scrollContainer.removeEventListener('mouseleave', resumeScroll);
      scrollContainer.removeEventListener('touchstart', pauseScroll);
      scrollContainer.removeEventListener('touchend', resumeScroll);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden flex items-center">
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero_section_bg_new.jpeg" 
            alt="Maa Homoeo Clinic - Homeopathic Clinic in Patna" 
            className="w-full h-full object-cover object-center opacity-60" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-light/90 via-neutral-light/70 to-neutral-light/30"></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row pt-28 md:pt-24 max-w-7xl mx-auto h-full w-full">
          <div className="md:w-3/5 px-4 sm:px-8 py-12 md:p-16 flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider w-max border border-primary/20">
              Classical Homeopathy
            </div>
          </div>
          
          <div className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
            <ShinyText
              text="Healing Naturally. Living Fully."
              speed={3}
              color="#004B87" /* primary color */
              shineColor="#80C4FF" /* light blue shine */
              direction="right"
              yoyo={true}
            />
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg sm:text-xl text-text-dark/70 mb-8 sm:mb-10 max-w-lg leading-relaxed"
          >
            The leading Homeopathic Clinic in Patna, specializing in chronic conditions, pediatric care & holistic wellness through personalized solutions.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-10">
            <a href="tel:+919431008188">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-accent text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-accent/20 transition-all"
              >
                Book Consultation
              </motion.button>
            </a>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1 }}
            className="flex items-center gap-6"
          >
            <p className="text-sm sm:text-base text-text-dark/60">
              <strong className="text-text-dark text-lg sm:text-xl">10,000+</strong> Patients treated<br/>with 98% satisfaction rate.
            </p>
          </motion.div>
        </div>

        <div className="md:w-2/5 relative flex items-center justify-center p-6 sm:p-8 md:p-12 min-h-[300px] md:min-h-[400px]">
          <div className="absolute inset-6 sm:inset-8 md:inset-12 bg-secondary/20 rounded-[30px] md:rounded-[40px] rotate-3 hidden md:block"></div>
          <div className="relative w-full h-full bg-gradient-to-br from-primary via-primary to-primary/80 rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl -rotate-1 min-h-[300px] md:min-h-[400px] flex flex-col items-center justify-center p-6 sm:p-8 text-center border shadow-[inset_0_0_80px_rgba(0,0,0,0.2)]">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
            
            <div className="relative flex items-center justify-center mb-6 mt-8">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border-4 border-white/30 z-10 shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] group-hover:scale-105 [transform-style:preserve-3d] perspective-[1000px]">
                <img src="/d2.jpeg" alt="Dr. Pradip Kumar" className="w-full h-full object-cover rounded-full transition-transform duration-500 transform hover:scale-110 hover:-translate-z-10" />
                <div className="absolute inset-0 rounded-full border border-white/50 scale-105 pointer-events-none opacity-50"></div>
              </div>
            </div>
            
            <div className="relative z-10 mt-4 group flex flex-col items-center">
              <h3 className="text-3xl md:text-4xl font-bold font-serif text-white mb-2 tracking-tight">Dr. Pradip Kumar</h3>
              <p className="text-white/90 font-medium text-lg">B.H.M.S (B.U)</p>
              <div className="flex items-center gap-2 mt-3 text-white/70">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className="text-sm font-semibold tracking-wide uppercase">30+ Years Experience</span>
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-primary/10 py-10 flex items-center bg-transparent">
        <div className="grid grid-cols-2 md:grid-cols-4 w-full md:divide-x divide-primary/10 max-w-7xl mx-auto gap-y-8 md:gap-y-0">
          <div className="px-6 md:px-8 text-center md:text-left">
            <div className="text-primary text-3xl font-bold mb-1"><Counter end={30} suffix="+" /></div>
            <div className="text-xs font-bold text-text-dark/50 uppercase tracking-widest">Years Experience</div>
          </div>
          <div className="px-6 md:px-8 text-center md:text-left">
            <div className="text-primary text-3xl font-bold mb-1"><Counter end={200} suffix="+" /></div>
            <div className="text-xs font-bold text-text-dark/50 uppercase tracking-widest">Conditions Treated</div>
          </div>
          <div className="px-6 md:px-8 flex items-center justify-center md:justify-start gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex shrink-0 items-center justify-center text-secondary">
               <ShieldCheck size={20} />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-primary">No Side Effects</div>
              <div className="text-[10px] text-text-dark/60">100% Natural Potency</div>
            </div>
          </div>
          <div className="px-6 md:px-8 flex items-center justify-center md:justify-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex shrink-0 items-center justify-center text-accent">
               <User size={20} />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-primary">Personalized Care</div>
              <div className="text-[10px] text-text-dark/60">Tailored Case Studies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Homeopathy? */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">Why Homeopathy?</h2>
          <p className="text-lg text-text-dark/70 max-w-2xl mx-auto">A natural approach to healing that stimulates your body's own defense mechanisms.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "No Side Effects", desc: "Completely safe, natural remedies suitable for all ages including infants and pregnant women.", icon: ShieldCheck },
            { title: "Root-Cause Treatment", desc: "We don't just suppress symptoms, we identify and treat the underlying cause of your illness.", icon: HeartPulse },
            { title: "Personalized Care", desc: "Every prescription is customized based on your unique physical, mental, and emotional profile.", icon: User }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div
                className="-inset-px pointer-events-none absolute rounded-[inherit] border-2 border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
              >
                <motion.div
                  className="absolute aspect-square bg-gradient-to-r from-transparent via-primary to-primary"
                  animate={{
                    offsetDistance: ["0%", "100%"],
                  }}
                  style={{
                    width: 20,
                    offsetPath: `rect(0 auto auto 0 round 16px)`,
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 5,
                    ease: "linear",
                  }}
                />
              </div>
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6 relative z-10">
                <feature.icon size={32} />
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3 relative z-10">{feature.title}</h3>
              <p className="text-text-dark/70 leading-relaxed relative z-10">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="bg-transparent py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-serif font-bold text-primary mb-4">Conditions We Treat</h2>
              <p className="text-lg text-text-dark/70 max-w-xl">Effective, long-lasting solutions for acute and chronic conditions.</p>
            </div>
            <a href="#treatments" className="group flex items-center text-secondary font-medium mt-6 hover:text-primary transition-colors">
              View all conditions <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {conditions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl text-center group hover:bg-primary hover:text-white transition-colors cursor-pointer shadow-sm border border-gray-100"
              >
                <item.icon size={40} className="mx-auto mb-4 text-primary group-hover:text-accent transition-colors" />
                <h3 className="font-semibold text-lg">{item.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (Google Reviews) */}
      <section className="bg-transparent py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">Google Reviews</h2>
          <p className="text-lg text-text-dark/70 max-w-2xl mx-auto">See what our patients have to say about us on Google.</p>
        </div>
        
        {/* Scrolling Cards */}
        <div className="relative max-w-7xl mx-auto">
          {/* Left/Right Fades */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 hidden md:block"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 hidden md:block"></div>
          
          <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-8 pt-4 px-4 md:px-12 hide-scrollbar">
            {[
              { text: "Dr.Pradip Kumar possesses a gratitude behaviour and listens to the problems in detail & calmly and results are just WOW...The doctor assure guaranteed results for skin diseases within short span of time!!!", name: "kumar mitul", date: "12 Jun 2021", initial: "k", color: "bg-yellow-500" },
              { text: "Dr Pradeep is a brilliant doctor. Listening problems carefully and Prescribed appropriate homeopathy medicine We shall be thankful to him I came from Bangalore for treatment of my wife and happy", name: "RAJU Saha", date: "12 Apr 2025", initial: "R", color: "bg-red-500" },
              { text: "Best treatment of chronic diseases.", name: "Sushil Kumar", date: "16 Jul 2023", initial: "S", color: "bg-blue-400" },
              { text: "Very satisfied . the way he diagnose the problem and appropriate medicine advice us is incredible", name: "Manish Kumar", date: "41 weeks ago", initial: "M", color: "bg-teal-600" },
              { text: "The best Homeopathic Clinic in Patna. Very patient with children and the root cause approach really works. Highly recommended.", name: "Priya M.", date: "4 months ago", initial: "P", color: "bg-blue-500" },
              { text: "excellent service and Doctor knowledge is super.", name: "amit", date: "1 week ago", initial: "a", color: "bg-green-500" },
              { text: "Last 20 days medicine start, but my back pain, could and cough 100% relief. Thanks Dr.Pradeep sir.", name: "Vikash Kumar", date: "41 weeks ago", initial: "V", color: "bg-purple-500" },
              { text: "Warm and welcoming environment. I felt heard for the first time in years. Highly recommended for chronic issues.", name: "Vikram Singh", date: "1 year ago", initial: "V", color: "bg-orange-500" },
              { text: "Remarkable recovery from my respiratory issues. The treatment is gentle and incredibly effective.", name: "Neha Roy", date: "1 year ago", initial: "N", color: "bg-teal-500" },
              { text: "Dr. Pradip Kumar is a lifesaver. His medicines cured my persistent acidity problem that allopathic doctors couldn't solve.", name: "Suresh P.", date: "1 month ago", initial: "S", color: "bg-indigo-500" },
              { text: "Very logical and methodical approach. He takes time to understand the complete history before prescribing. Wonderful experience.", name: "Anjali D.", date: "3 months ago", initial: "A", color: "bg-pink-500" },
              { text: "My thyroid levels are absolutely normal now, totally relying on his homeopathic remedies. Super grateful!", name: "Manoj T.", date: "5 months ago", initial: "M", color: "bg-yellow-500" },
              { text: "The wait time is a bit long sometimes, but the treatment is 100% worth it. My kid's immunity has improved drastically.", name: "Ritu S.", date: "8 months ago", initial: "R", color: "bg-red-400" },
              { text: "Genuine, honest, and highly experienced. He doesn't prescribe unnecessary medicines. True master of his craft.", name: "Kundan K.", date: "11 months ago", initial: "K", color: "bg-blue-600" },
              { text: "I had given up on my chronic back pain until I started treatment here. The difference is night and day. Thank you so much.", name: "Shikha G.", date: "1 year ago", initial: "S", color: "bg-emerald-500" },
              { text: "The clinic has a very calming atmosphere. The doctor is incredibly knowledgeable and patient.", name: "Nitin M.", date: "2 months ago", initial: "N", color: "bg-slate-500" },
              { text: "Was skeptical about homeopathy at first, but the results speak for themselves. Very satisfied.", name: "Poonam R.", date: "4 months ago", initial: "P", color: "bg-fuchsia-500" },
              { text: "The medicines are very effective. My son's asthma has significantly improved over the last 6 months.", name: "Alok B.", date: "6 months ago", initial: "A", color: "bg-cyan-500" },
              { text: "Affordable and highly effective treatment. The doctor actually listens to all your problems.", name: "Meera K.", date: "7 months ago", initial: "M", color: "bg-rose-500" },
              { text: "Best decision to switch to homeopathy here. No side effects and holistic healing.", name: "Riya C.", date: "9 months ago", initial: "R", color: "bg-amber-500" },
              { text: "My migraines have significantly reduced since I started taking treatment from Dr. Pradip. Highly recommend his clinic.", name: "Aarti S.", date: "2 months ago", initial: "A", color: "bg-indigo-400" },
              { text: "The consultation was very thorough. He took note of every small detail before starting the medication.", name: "Rahul Verma", date: "5 months ago", initial: "R", color: "bg-blue-500" },
              { text: "I was suffering from chronic sinusitis for years. His medication gave me relief within a few weeks.", name: "Deepak Chaurasia", date: "8 months ago", initial: "D", color: "bg-green-600" },
              { text: "He is a very polite and understanding doctor. The homeopathic remedies worked wonders for my skin allergies.", name: "Simran Kaur", date: "1 year ago", initial: "S", color: "bg-pink-400" },
              { text: "My daughter had recurrent tonsillitis. Since we started his treatment, she hasn't had a single episode. Very thankful.", name: "Manoj Tiwari", date: "3 months ago", initial: "M", color: "bg-purple-600" },
              { text: "Excellent experience. The clinic is clean, and the staff is helpful. Most importantly, the treatment is very effective.", name: "Neha Sharma", date: "10 months ago", initial: "N", color: "bg-red-500" },
              { text: "Dr. Pradip is truly an expert in homeopathy. He cured my digestive issues completely.", name: "Amitabh Raj", date: "6 months ago", initial: "A", color: "bg-teal-500" },
              { text: "I have been visiting Maa Homoeo Clinic for my family's health issues for years. Always reliable and safe treatment.", name: "Sunil Pandey", date: "2 years ago", initial: "S", color: "bg-orange-600" },
              { text: "The wait time can be a little long sometimes, but the doctor's diagnosis and treatment are spot on.", name: "Kavita Yadav", date: "4 months ago", initial: "K", color: "bg-cyan-600" },
              { text: "I am amazed at how fast the homeopathic medicines worked for my joint pain. Truly grateful to Dr. Kumar.", name: "Rajendra Prasad", date: "7 months ago", initial: "R", color: "bg-emerald-600" },
            ].map((test, i) => (
              <div
                key={i}
                className="shrink-0 w-80 md:w-96 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-lg shrink-0 ${test.color}`}>
                    {test.initial}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight">{test.name}</h4>
                    <p className="text-gray-500 text-xs mt-0.5">{test.date}</p>
                  </div>
                  <div className="shrink-0">
                    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      <path d="M1 1h22v22H1z" fill="none"/>
                    </svg>
                  </div>
                </div>
                
                <div className="flex gap-0.5 mb-3 text-yellow-400">
                  {[...Array(5)].map((_, idx) => <svg key={idx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" /></svg>)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">"{test.text}"</p>
                
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="https://search.google.com/local/writereview?placeid=ChIJZSU-KLtX7TkRlSeReQuhtgI" target="_blank" rel="noopener noreferrer">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white border border-gray-200 text-gray-800 rounded-lg font-medium shadow-sm hover:shadow-md transition-all inline-flex items-center justify-center gap-3 mx-auto"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                <path d="M1 1h22v22H1z" fill="none"/>
              </svg>
              Write a Review on Google
            </motion.button>
          </a>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-transparent py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Ready to start your healing journey?</h2>
        <p className="text-lg text-text-dark/70 mb-8 max-w-2xl mx-auto">Get personalized Homeopathy Treatment in Patna from the city's most trusted clinic. Safe, effective, and tailored just for you.</p>
        <a href="#contact">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-accent text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-accent/20 transition-all"
          >
            Book Your Consultation Today
          </motion.button>
        </a>
      </section>
    </div>
  );
}
