import { useState } from 'react';
import { motion } from 'motion/react';
import RetailerModal from './RetailerModal';

const flavors = [
  {
    id: 'original',
    name: 'Dr Pepper Original',
    profile: 'The classic 23 flavor blend. Sweet, spicy, and entirely unique.',
    color: 'from-[#BE0042] to-[#5A001F]',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop' // Placeholder can
  },
  {
    id: 'zero',
    name: 'Dr Pepper Zero Sugar',
    profile: 'Zero sugar, infinite flavor. The same 23 flavors you love.',
    color: 'from-[#1A1A1A] to-[#000000]',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop&grayscale=1'
  },
  {
    id: 'cherry',
    name: 'Dr Pepper Cherry',
    profile: 'A smooth kiss of cherry added to the iconic 23 flavors.',
    color: 'from-[#D9002C] to-[#8A001C]',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop&hue=330'
  },
  {
    id: 'strawberries-cream',
    name: 'Strawberries & Cream',
    profile: 'A decadent swirl of ripe strawberry and smooth cream.',
    color: 'from-[#FF6B8B] to-[#C2185B]',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop&hue=340'
  },
  {
    id: 'creamy-coconut',
    name: 'Creamy Coconut (2026)',
    profile: 'Limited Edition! Tropical coconut meets the 23 flavor blend.',
    color: 'from-[#F5E6D3] to-[#D7CCC8]',
    textColor: 'text-black',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop&sepia=1'
  },
  {
    id: 'blackberry',
    name: 'Dr Pepper Blackberry',
    profile: 'Dark, mysterious, and bursting with bold blackberry notes.',
    color: 'from-[#4A148C] to-[#1A0033]',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop&hue=280'
  }
];

export default function FlavorGrid() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <section id="flavors" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-black mb-4 uppercase tracking-tight"
        >
          Flavor <span className="text-drpepper">Discovery</span> Engine
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/70 max-w-2xl mx-auto"
        >
          Find your perfect remix. From the original 23 to our newest limited drops.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {flavors.map((flavor, index) => (
          <motion.div
            key={flavor.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className={`relative group rounded-3xl overflow-hidden bg-gradient-to-br ${flavor.color} p-1`}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
            
            <div className="relative h-full bg-[#0A0A0A]/40 backdrop-blur-sm rounded-[22px] p-8 flex flex-col items-center text-center border border-white/10">
              {/* Parallax Can Simulation */}
              <motion.div 
                className="w-32 h-48 mb-6 relative"
                whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl z-10" />
                <img 
                  src={flavor.image} 
                  alt={flavor.name}
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <h3 className={`text-2xl font-display font-bold mb-3 ${flavor.textColor || 'text-white'}`}>
                {flavor.name}
              </h3>
              <p className="text-white/80 mb-8 flex-grow text-sm leading-relaxed">
                {flavor.profile}
              </p>

              <button
                onClick={() => setSelectedProduct(flavor.name)}
                className="w-full py-4 rounded-full bg-white text-black font-bold uppercase tracking-wider hover:bg-drpepper hover:text-white transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <RetailerModal 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        productName={selectedProduct || ''} 
      />
    </section>
  );
}
