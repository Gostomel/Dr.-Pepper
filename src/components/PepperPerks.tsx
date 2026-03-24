import { motion } from 'motion/react';
import { Gift, Star, Zap } from 'lucide-react';

export default function PepperPerks() {
  const perks = [
    {
      icon: <Star className="w-8 h-8 text-[#FFD700]" />,
      title: "Earn Points",
      desc: "Scan receipts or buy direct to earn points on every sip."
    },
    {
      icon: <Gift className="w-8 h-8 text-[#FF4D85]" />,
      title: "Exclusive Merch",
      desc: "Unlock limited edition 2026 apparel and collectibles."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#00E5FF]" />,
      title: "Early Access",
      desc: "Be the first to taste new flavor remixes like Creamy Coconut."
    }
  ];

  return (
    <section id="perks" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-drpepper-dark/20 skew-y-3 origin-top-left z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-black mb-6 uppercase leading-none">
              Pepper <br/>
              <span className="text-drpepper">Perks 2.0</span>
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-lg">
              The most rewarding way to treat yourself. Join the ultimate loyalty program and turn your cravings into exclusive rewards.
            </p>
            
            <div className="space-y-8 mb-10">
              {perks.map((perk, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    {perk.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{perk.title}</h4>
                    <p className="text-white/60">{perk.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="px-8 py-4 rounded-full bg-white text-black font-bold uppercase tracking-wider hover:bg-drpepper hover:text-white transition-all transform hover:scale-105">
              Join For Free
            </button>
          </motion.div>

          {/* Gamified Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
            
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative z-10 w-64 h-64 bg-gradient-to-tr from-drpepper to-[#FF4D85] rounded-full blur-2xl opacity-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            
            <div className="relative z-20 text-center">
              <div className="text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-4">
                2300
              </div>
              <div className="text-xl font-bold uppercase tracking-widest text-drpepper">
                Points Balance
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
