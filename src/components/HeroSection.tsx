import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Award } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Users, value: '500+', label: 'Students Enrolled' },
    { icon: Award, value: '95%', label: 'Success Rate' },
    { icon: Star, value: '4.9', label: 'Student Rating' },
  ];

  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center overflow-hidden ${!isDark ? 'bg-[hsl(220,60%,12%)]' : ''}`}>
      {/* Background */}
      <div className={`absolute inset-0 ${isDark ? 'bg-hero-pattern' : 'bg-gradient-to-b from-[hsl(220,60%,10%)] via-[hsl(220,55%,15%)] to-[hsl(220,60%,12%)]'}`} />
      <div 
        className={`absolute inset-0 ${isDark ? 'opacity-20' : 'opacity-15'}`}
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlays */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-background via-transparent to-background' : 'bg-gradient-to-b from-[hsl(220,60%,10%)]/80 via-transparent to-[hsl(220,60%,12%)]/80'}`} />
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-background/80 via-transparent to-background/80' : 'bg-gradient-to-r from-[hsl(220,60%,10%)]/60 via-transparent to-[hsl(220,60%,10%)]/60'}`} />
      
      {/* Animated Glow Effects */}
      <motion.div
        className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-primary/10' : 'bg-blue-400/10'}`}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl ${isDark ? 'bg-secondary/20' : 'bg-blue-500/15'}`}
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Content */}
      <div className="section-container relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Free Consultation Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold mb-4 ${isDark ? 'bg-primary/20 border-primary/40 text-primary' : 'bg-blue-500/20 border-blue-400/40 text-blue-300'}`}
          >
            <span className={`w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-primary' : 'bg-blue-400'}`} />
            FREE CONSULTATION AVAILABLE
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 ${isDark ? 'glass-card text-primary' : 'bg-white/10 backdrop-blur-sm border border-white/20 text-blue-300'}`}
          >
            <span className={`w-2 h-2 rounded-full animate-pulse-glow ${isDark ? 'bg-primary' : 'bg-blue-400'}`} />
            Premier CA Coaching in Thanjavur
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 ${!isDark ? 'text-white' : ''}`}
          >
            Achieve Your{' '}
            <span className={isDark ? 'text-gold-gradient' : 'text-blue-400'}>CA Dream</span>
            <br />
            with SAVI Academy
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={`text-lg sm:text-xl max-w-2xl mx-auto mb-4 ${isDark ? 'text-muted-foreground' : 'text-blue-100/80'}`}
          >
            Top Coaching from Experienced CA Professionals to Help You Excel in CA Foundations & Intermediate.
          </motion.p>

          {/* Caption */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className={`font-medium text-lg mb-10 ${isDark ? 'text-primary' : 'text-blue-300'}`}
          >
            "Your Pathway to Becoming a Chartered Accountant Starts Here."
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.button
              onClick={() => scrollToSection('#courses')}
              className={`flex items-center gap-2 text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${isDark ? 'btn-primary' : 'bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/30'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className={`flex items-center gap-2 text-lg px-6 py-3 rounded-xl font-medium border transition-all duration-300 ${isDark ? 'glass-button text-foreground' : 'bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className={`w-5 h-5 ${isDark ? 'text-primary' : 'text-blue-400'}`} />
              Book Free Consultation
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className={`p-4 sm:p-6 text-center rounded-2xl border ${isDark ? 'glass-card' : 'bg-white/10 backdrop-blur-sm border-white/20'}`}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className={`w-6 h-6 mx-auto mb-2 ${isDark ? 'text-primary' : 'text-blue-400'}`} />
                <div className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-gold-gradient' : 'text-blue-300'}`}>{stat.value}</div>
                <div className={`text-xs sm:text-sm ${isDark ? 'text-muted-foreground' : 'text-blue-100/70'}`}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className={`w-6 h-10 rounded-full border-2 flex items-start justify-center p-2 ${isDark ? 'border-muted-foreground/30' : 'border-white/30'}`}>
          <motion.div
            className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-primary' : 'bg-blue-400'}`}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;