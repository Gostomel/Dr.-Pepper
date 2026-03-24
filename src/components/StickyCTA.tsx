import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift } from 'lucide-react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="md:hidden fixed bottom-6 left-4 right-4 z-40"
        >
          <button 
            onClick={() => document.getElementById('perks')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full bg-drpepper text-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(190,0,66,0.4)] flex items-center justify-between font-bold uppercase tracking-wider active:scale-95 transition-transform"
          >
            <span className="flex items-center gap-2">
              <Gift size={20} />
              Join Pepper Perks
            </span>
            <span className="bg-white text-drpepper px-3 py-1 rounded-full text-xs">
              Free
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
