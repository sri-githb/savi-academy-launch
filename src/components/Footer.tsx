import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Heart } from 'lucide-react';
import saviLogo from '@/assets/savi-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
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

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Our Team', href: '#team' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  const courses = [
    { label: 'CA Foundation', href: '#courses' },
    { label: 'CA Intermediate', href: '#courses' },
    { label: '11th & 12th Commerce', href: '#courses' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`relative pt-20 pb-8 overflow-hidden ${isDark ? '' : 'bg-navy'}`}>
      {/* Background */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-background to-navy' : 'bg-navy'}`} />
      <div className={`absolute top-0 left-0 right-0 h-px ${isDark ? 'bg-gradient-to-r from-transparent via-primary/50 to-transparent' : 'bg-white/20'}`} />

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="block mb-6"
            >
              <img src={saviLogo} alt="SAVI Academy" className="h-12 w-auto" />
            </a>
            <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-muted-foreground' : 'text-white/70'}`}>
              Your trusted partner in achieving CA excellence. Premier coaching for CA Foundation & Intermediate in Thanjavur.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isDark 
                      ? 'bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10' 
                      : 'bg-white/10 text-white/70 hover:text-white hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-6 ${isDark ? 'text-foreground' : 'text-white'}`}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`text-sm animated-underline inline-block transition-colors ${
                      isDark 
                        ? 'text-muted-foreground hover:text-primary' 
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className={`text-lg font-semibold mb-6 ${isDark ? 'text-foreground' : 'text-white'}`}>Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.label}>
                  <a
                    href={course.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(course.href);
                    }}
                    className={`text-sm animated-underline inline-block transition-colors ${
                      isDark 
                        ? 'text-muted-foreground hover:text-primary' 
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {course.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`text-lg font-semibold mb-6 ${isDark ? 'text-foreground' : 'text-white'}`}>Contact Info</h4>
            <div className={`space-y-3 text-sm ${isDark ? 'text-muted-foreground' : 'text-white/70'}`}>
              <p>123 Main Road, Thanjavur</p>
              <p>Tamil Nadu - 613001</p>
              <p className={isDark ? 'text-primary' : 'text-white font-medium'}>+91 98765 43210</p>
              <p className={isDark ? 'text-primary' : 'text-white font-medium'}>info@saviacademy.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t ${isDark ? 'border-border/30' : 'border-white/20'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className={`text-sm text-center md:text-left ${isDark ? 'text-muted-foreground' : 'text-white/70'}`}>
              © {currentYear} SAVI Academy. All rights reserved.
            </p>
            <p className={`text-sm flex items-center gap-1 ${isDark ? 'text-muted-foreground' : 'text-white/70'}`}>
              Made with <Heart className={`w-4 h-4 ${isDark ? 'text-primary' : 'text-white'}`} /> in Thanjavur
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className={`text-sm transition-colors ${isDark ? 'text-muted-foreground hover:text-primary' : 'text-white/70 hover:text-white'}`}>
                Privacy Policy
              </a>
              <a href="#" className={`text-sm transition-colors ${isDark ? 'text-muted-foreground hover:text-primary' : 'text-white/70 hover:text-white'}`}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;