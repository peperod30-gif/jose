import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="w-1/3 flex items-center">
            <button onClick={() => setMobileMenuOpen(true)} className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors cursor-pointer">
              <Menu size={24} />
              <span className="hidden md:block text-sm font-medium uppercase tracking-widest">Menu</span>
            </button>
          </div>
          <div className="w-1/3 flex justify-center">
            <a href="#" className="text-2xl font-serif font-bold tracking-wider text-white">VIVAX</a>
          </div>
          <div className="w-1/3 flex justify-end">
            <a href="#contact" className="hidden md:flex items-center gap-2 border border-white/30 rounded-full px-6 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-colors">
              Contact Us <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-black text-white flex flex-col"
          >
            <div className="p-6 md:p-12 flex justify-between items-center">
              <button onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors cursor-pointer">
                <X size={24} />
                <span className="text-sm font-medium uppercase tracking-widest">Close</span>
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-6 md:px-24">
              <nav className="flex flex-col gap-6 md:gap-10">
                {['Work', 'Media', 'Insights', 'About', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-4xl md:text-7xl font-serif hover:text-teal-300 transition-colors">
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[1.1] max-w-5xl"
        >
          Are you a disruptive<br />health brand?
        </motion.h1>
      </div>
    </section>
  );
};

const WhatsNew = () => {
  const posts = [
    {
      title: "Strategic Channel Integration for the Modern Health Brand",
      date: "February 20, 2026",
      readTime: "6 min read",
      category: "Featured",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "The Power of Brand Dominance: Why Cohesive Brands Win",
      date: "February 10, 2026",
      readTime: "9 min read",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#f2f2f2] text-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-4xl md:text-5xl font-serif mb-6">What's new?</h3>
              <p className="text-lg text-gray-600 mb-10">The world of health is always evolving and we never stop keeping up.</p>
              <a href="#insights" className="inline-flex items-center gap-2 border border-black rounded-full px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors">
                Explore Insights <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group cursor-pointer"
                >
                  <div className="overflow-hidden mb-6 aspect-[4/3]">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-4 text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                    <span>{post.date}</span>
                    <span>&bull;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-serif leading-snug mb-4 group-hover:text-teal-700 transition-colors">
                    {post.title}
                  </h4>
                  <span className="inline-block border border-gray-300 rounded-full px-3 py-1 text-xs font-medium text-gray-600">
                    {post.category}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Greetings = () => {
  return (
    <section className="py-32 md:py-48 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-sm md:text-base font-medium uppercase tracking-[0.2em] text-gray-400 mb-8">
            Greetings, we're Vivax.
          </h4>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight max-w-5xl mx-auto">
            We're the integrated agency for <span className="text-teal-300 italic">disruptive health brands.</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

const Work = () => {
  const projects = [
    {
      title: "Lumina Health",
      subtitle: "FINALLY.",
      tags: "STRATEGY / BRANDING & CAMPAIGN / AI PRODUCTION",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "NutriCore",
      subtitle: "Let's Make Healthcare Whole",
      tags: "STRATEGY / BRANDING & CAMPAIGN / PRODUCTION",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Aura Pharma",
      subtitle: "The Home of Health",
      tags: "STRATEGY / BRANDING & CAMPAIGN",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <section className="pb-24 md:pb-32 bg-black text-white -mt-12 md:-mt-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden aspect-[4/5] mb-6 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div>
                <h3 className="text-3xl font-serif mb-2">{project.title}</h3>
                <p className="text-lg mb-1">{project.subtitle}</p>
                <p className="text-xs text-gray-400 tracking-wider uppercase">{project.tags}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Clients = () => {
  const logos = [
    "Apple", "Fullscript", "Ascensia", "STAAR", "AirLiquide", "BlueCross", 
    "Astellas", "TELUS", "SickKids", "McKesson", "SEHealth", "Antidote"
  ];

  return (
    <section className="py-24 md:py-32 bg-[#f2f2f2] text-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="w-full md:w-1/3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Clients</h4>
              <h3 className="text-4xl md:text-5xl font-serif mb-6">Brands we've served</h3>
              <p className="text-lg text-gray-600">
                We're proud to work with some amazing clients and brands that are changing health.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 items-center">
          {logos.map((logo, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
            >
              <div className="h-12 flex items-center justify-center font-serif text-xl font-bold text-gray-400 hover:text-black">
                {logo}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Awards = () => {
  return (
    <section className="py-24 md:py-32 bg-[#f2f2f2] text-black border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Industry Recognition</h4>
              <h3 className="text-4xl md:text-5xl font-serif mb-6">Award winning</h3>
              <p className="text-lg text-gray-600">
                Our team has worked on some of the most <strong>successful</strong> and award-winning <strong>creative marketing</strong> in the world. We're proud to be recognized by <strong>industry leading</strong> award shows.
              </p>
            </motion.div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {['Cannes', 'One Show', 'Saniss', 'Clio'].map((award, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex justify-center"
                >
                  <div className="h-24 w-24 rounded-full border border-gray-300 flex items-center justify-center font-serif text-sm font-bold text-gray-500">
                    {award}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div>
            <h2 className="text-4xl font-serif font-bold tracking-wider mb-6">VIVAX</h2>
            <p className="text-gray-400 text-sm">
              The integrated agency for disruptive health brands.
            </p>
          </div>
          <div>
            <h6 className="text-sm font-bold uppercase tracking-widest mb-6">Locations</h6>
            <div className="space-y-6 text-gray-400 text-sm">
              <p>
                <strong className="text-white">New York</strong><br />
                5 Pennsylvania Plaza, 23rd Floor<br />
                New York, United States
              </p>
              <p>
                <strong className="text-white">Toronto</strong><br />
                80 Atlantic Avenue, 4th Floor<br />
                Toronto, Canada
              </p>
            </div>
          </div>
          <div>
            <h6 className="text-sm font-bold uppercase tracking-widest mb-6">Contact</h6>
            <div className="space-y-6 text-gray-400 text-sm">
              <p>
                <strong className="text-white">Inquiries</strong><br />
                Interested in working with us?<br />
                <a href="mailto:hello@vivaxagency.com" className="text-white hover:text-teal-300 transition-colors">hello@vivaxagency.com</a>
              </p>
              <p>
                <strong className="text-white">Careers</strong><br />
                Looking for a job opportunity?<br />
                <a href="mailto:careers@vivaxagency.com" className="text-white hover:text-teal-300 transition-colors">careers@vivaxagency.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Vivax Agency Inc.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-teal-300 selection:text-black">
      <Navbar />
      <Hero />
      <WhatsNew />
      <Greetings />
      <Work />
      <Clients />
      <Awards />
      <Footer />
    </div>
  );
}
