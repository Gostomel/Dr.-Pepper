import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart, ExternalLink } from 'lucide-react';

interface RetailerModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export default function RetailerModal({ isOpen, onClose, productName }: RetailerModalProps) {
  const retailers = [
    { name: 'Amazon', color: 'bg-[#FF9900]', hover: 'hover:bg-[#E38800]' },
    { name: 'Walmart', color: 'bg-[#0071CE]', hover: 'hover:bg-[#005CB3]' },
    { name: 'Target', color: 'bg-[#CC0000]', hover: 'hover:bg-[#A30000]' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 z-50 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-drpepper/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="text-drpepper" size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Get Your Fix</h3>
              <p className="text-white/70">Select a retailer to buy <span className="text-drpepper font-semibold">{productName}</span></p>
            </div>

            <div className="space-y-3">
              {retailers.map((retailer) => (
                <button
                  key={retailer.name}
                  className={`w-full flex items-center justify-between p-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] ${retailer.color} ${retailer.hover}`}
                  onClick={() => {
                    // Simulate redirect
                    setTimeout(onClose, 500);
                  }}
                >
                  <span>{retailer.name}</span>
                  <ExternalLink size={20} />
                </button>
              ))}
            </div>
            
            <p className="text-center text-xs text-white/40 mt-6">
              Availability may vary by location and retailer.
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
