/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlavorGrid from './components/FlavorGrid';
import PepperPerks from './components/PepperPerks';
import SocialProof from './components/SocialProof';
import StickyCTA from './components/StickyCTA';

export default function App() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans selection:bg-drpepper selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <FlavorGrid />
        <PepperPerks />
        <SocialProof />
      </main>

      <footer className="bg-[#050505] py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-display font-black tracking-tighter">
            Dr <span className="text-drpepper">Pepper</span>
          </div>
          <div className="flex gap-6 text-sm text-white/50 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
          <div className="text-sm text-white/30">
            &copy; 2026 Dr Pepper/Seven Up, Inc.
          </div>
        </div>
      </footer>

      <StickyCTA />
    </div>
  );
}
