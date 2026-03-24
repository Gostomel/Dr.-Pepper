import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const canRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const canY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(190,0,66,0.15)_0%,rgba(10,10,10,1)_70%)]" />
      
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-1.5 rounded-full border border-drpepper/50 text-drpepper text-sm font-bold uppercase tracking-widest bg-drpepper/10 backdrop-blur-sm">
            Newstalgia 2026
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-black uppercase tracking-tighter leading-[0.85] mb-6 text-balance"
        >
          The 23 Flavors <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-drpepper to-[#FF4D85]">
            Of You
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/70 max-w-2xl mb-10 font-medium"
        >
          Treat yourself to the ultimate flavor remix. Discover limited editions, craft dirty soda recipes, and earn rewards.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('flavors')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-10 py-5 rounded-full bg-drpepper text-white font-bold text-lg uppercase tracking-wider shadow-[0_0_40px_rgba(190,0,66,0.4)] hover:shadow-[0_0_60px_rgba(190,0,66,0.6)] transition-shadow"
        >
          Find Your Flavor
        </motion.button>
      </motion.div>

      {/* 3D Can Placeholder / Parallax Element */}
      <motion.div 
        style={{ y: canY, rotate: canRotate }}
        className="absolute bottom-[-10%] md:bottom-[-20%] left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[600px] md:h-[800px] pointer-events-none z-0 opacity-40 md:opacity-60"
      >
        <div className="w-full h-full bg-gradient-to-b from-drpepper to-black rounded-[100px] blur-3xl" />
      </motion.div>
    </section>
  );
}
