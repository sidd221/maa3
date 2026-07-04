import { cn } from "../../lib/utils";
import { ProgressiveBlur } from "./progressive-blur";
import { useRef } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export const blocksDesign = [
  {
    id: "hero-section",
    name: "Hero Section",
    url: "/blocks/hero-section",
    des: "Beautiful hero layouts to start your landing page.",
    imgclass: "object-cover",
    textClass: "text-white",
    imgSrc:
      "https://images.unsplash.com/photo-1754630551378-e1ecffe9da6b?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: "faq-section",
    name: "FAQ Section",
    url: "/blocks/faq-section",
    des: "Beautiful FAQ layouts to start your landing page.",
    imgclass: "object-contain",
    textClass: "text-primary",
    imgSrc:
      "https://images.unsplash.com/photo-1755543041886-41944f3e08c8?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: "testimonial-section",
    name: "Testimonial Section",
    url: "/blocks/testimonial-section",
    des: "Beautiful testimonial layouts to start your landing page.",
    imgclass: "object-contain",
    textClass: "text-primary",
    imgSrc:
      "https://images.unsplash.com/photo-1750688650387-48fbdc7399b3?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: "newsletter-section",
    name: "Newsletter Section",
    url: "/blocks/newsletter",
    blocks: 16,
    des: "Beautiful newsletter layouts to start your landing page.",
    imgSrc:
      "https://images.unsplash.com/photo-1654649451086-dd75d8170a27?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: "carousel-section",
    name: "Carousel Section",
    url: "/blocks/carousel",
    blocks: 6,
    des: "Beautiful carousel layouts to start your landing page.",
    imgSrc:
      "https://images.unsplash.com/photo-1609323170444-197be3079778?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: "testimonial-section",
    name: "Testimonial Section",
    url: "/blocks/testimonial",
    blocks: 13,
    des: "Beautiful testimonials layouts to start your landing page.",
    imgSrc:
      "https://images.unsplash.com/photo-1635776062764-e025521e3df3?q=80&w=687&auto=format&fit=crop",
  },
];

export default function Others1() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };
  return (
    <div ref={timelineRef} className="bg-transparent w-full">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-6 pt-10">
          {blocksDesign.map((component, index) => {
            return (
              <motion.a
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  variants={revealVariants}
                  target="_blank"
                  href={component?.url}
                  className="transition-all aspect-video rounded-lg  backdrop-blur-sm overflow-hidden relative block"
                  rel="noreferrer"
                >
                  <figure className="relative h-full w-full m-0 p-0">
                    {component.imgSrc && (
                      <img
                        src={component.imgSrc}
                        alt="hero-sec"
                        className={cn("w-full h-full object-cover rounded-xl ")}
                      />
                    )}
                  </figure>
                  <ProgressiveBlur
                    className="pointer-events-none absolute bottom-0 left-0 h-[50%] w-full"
                    blurIntensity={0.5}
                  />
                  <div
                    className={cn(
                      "sm:py-2 py-1 sm:px-4 px-2 absolute bottom-2 left-2 z-10"
                    )}
                  >
                    <h1 className="2xl:text-xl xl:text-xl md:text-lg text-sm font-medium leading-[140%] capitalize text-white drop-shadow-md">
                      {component.name}
                    </h1>
                  </div>
              </motion.a>
            );
          })}
        </div>
    </div>
  );
}
