import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Award, BookOpen, Calculator, FileText, Scale } from 'lucide-react';
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
    { icon: Users, value: '50+', label: 'Students Enrolled' },
    { icon: Award, value: '95%', label: 'Success Rate' },
    { icon: Star, value: '4.9', label: 'Student Rating' },
  ];

  const floatingIcons = [
    { Icon: BookOpen, left: '8%', top: '22%', size: 32, delay: 0 },
    { Icon: Calculator, left: '86%', top: '20%', size: 34, delay: 0.2 },
    { Icon: FileText, left: '10%', top: '72%', size: 30, delay: 0.4 },
    { Icon: Scale, left: '88%', top: '70%', size: 36, delay: 0.6 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden light-accent-section">
      {/* Background */}
      <div className={`absolute inset-0 ${isDark ? 'bg-hero-pattern' : 'bg-gradient-to-b from-background via-secondary/10 to-background'}`} />
      <div 
        className={`absolute inset-0 ${isDark ? 'opacity-25' : 'opacity-40'}`}
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: isDark ? 'none' : 'grayscale(40%) contrast(1.1) brightness(0.8)',
        }}
      />
      <div className={`absolute inset-0 ${isDark ? 'bg-navy/30' : 'bg-navy/40'}`} />

      {/* Extra overlay to ensure readability in light mode */}
      {!isDark && <div className="absolute inset-0 bg-white/15" />}
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-transparent to-background/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/25 via-transparent to-background/25" />
      
      {/* Animated Glow Effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-primary/10"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl bg-secondary/20"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Subtle floating icons for CA/coaching vibe */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map(({ Icon, left, top, size, delay }, idx) => (
          <motion.div
            key={idx}
            className={isDark ? 'absolute text-primary/10' : 'absolute text-white/12'}
            style={{ left, top }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, -14, 0], rotate: [-3, 3, -3] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay }}
          >
            <Icon style={{ width: size, height: size }} />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="section-container relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Free Consultation Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold mb-4 bg-primary/20 border-primary/40 text-primary"
          >
            <span className="w-2 h-2 rounded-full animate-pulse bg-primary" />
            FREE CONSULTATION AVAILABLE
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 glass-card text-primary"
          >
            <span className="w-2 h-2 rounded-full animate-pulse-glow bg-primary" />
            Premier CA Coaching in Thanjavur
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Achieve Your{' '}
            <span className="text-gold-gradient">CA Dream</span>
            <br />
            with SAVI Academy
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl max-w-2xl mx-auto mb-4 text-muted-foreground"
          >
            Top Coaching from Experienced CA Professionals to Help You Excel in CA Foundations & Intermediate.
          </motion.p>

          {/* Caption */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="font-medium text-lg mb-10 text-primary"
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
              className="flex items-center gap-2 text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="flex items-center gap-2 text-lg px-6 py-3 rounded-xl font-medium border transition-all duration-300 glass-button text-foreground"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5 text-primary" />
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
                className="p-4 sm:p-6 text-center rounded-2xl border glass-card"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-2xl sm:text-3xl font-bold text-gold-gradient">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
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
        <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2 border-muted-foreground/30">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;