import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const mockTikToks = [
  { id: 1, user: '@sodamaker', views: '1.2M', desc: 'The ultimate Creamy Coconut Dirty Soda hack! 🥥🥤 #DrPepper #DirtySoda' },
  { id: 2, user: '@flavorremix', views: '850K', desc: 'Strawberries & Cream + Vanilla Syrup = Heaven 🍓☁️ #TreatYourself' },
  { id: 3, user: '@zeroguilt', views: '2.1M', desc: 'Zero Sugar, 100% vibes. My daily setup. #Newstalgia' },
  { id: 4, user: '@pepperfanatic', views: '500K', desc: 'Trying the 2026 limited editions! 🤯 #DrPepper' },
];

export default function SocialProof() {
  return (
    <section id="social" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-black mb-4 uppercase">
              The <span className="text-drpepper">Dirty Soda</span> Trend
            </h2>
            <p className="text-xl text-white/70">
              See how Fansville is remixing their 23 flavors.
            </p>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-bold uppercase text-sm tracking-wider">
            Follow @DrPepper
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockTikToks.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[9/16] bg-[#1A1A1A] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Placeholder for Video Thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10" />
              <img 
                src={`https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&auto=format&fit=crop&hue=${i * 40}`} 
                alt="TikTok Thumbnail" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                  <Play className="text-white fill-white ml-1" size={24} />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-30">
                <p className="font-bold text-sm mb-1">{video.user}</p>
                <p className="text-xs text-white/80 line-clamp-2 mb-2">{video.desc}</p>
                <div className="flex items-center gap-1 text-xs font-semibold text-drpepper">
                  <Play size={12} className="fill-drpepper" />
                  {video.views}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
