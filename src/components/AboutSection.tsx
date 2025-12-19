import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Award, MapPin } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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

  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide world-class CA coaching that empowers students to achieve their dreams of becoming Chartered Accountants through comprehensive education and personalized guidance.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading CA coaching institute in South India, known for producing successful Chartered Accountants who contribute meaningfully to the profession and society.',
    },
    {
      icon: Award,
      title: 'Our Commitment',
      description: 'We are committed to delivering excellence in CA education with experienced faculty, updated curriculum, and a supportive learning environment that nurtures future CA professionals.',
    },
    {
      icon: MapPin,
      title: 'Located in Thanjavur',
      description: 'Our state-of-the-art facility in the heart of Thanjavur provides students with a conducive learning environment equipped with modern amenities for focused preparation.',
    },
  ];

  return (
    <section id="about" className={`py-24 relative overflow-hidden ${!isDark ? 'bg-[hsl(220,60%,15%)]' : ''}`}>
      {/* Background Elements */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-background via-navy/30 to-background' : 'bg-gradient-to-b from-[hsl(220,60%,12%)] via-[hsl(220,55%,18%)] to-[hsl(220,60%,15%)]'}`} />
      <motion.div
        className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-primary/5' : 'bg-blue-400/10'}`}
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div ref={ref} className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${isDark ? 'glass-card text-primary' : 'bg-white/10 backdrop-blur-sm border border-white/20 text-blue-300'}`}>
            About Us
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${!isDark ? 'text-white' : ''}`}>
            About <span className={isDark ? 'text-gold-gradient' : 'text-blue-400'}>SAVI Academy</span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-muted-foreground' : 'text-blue-100/80'}`}>
            SAVI Academy is Thanjavur's premier CA coaching institute, dedicated to transforming aspiring accountants into certified professionals. With a team of experienced CA faculty and a proven track record of success, we provide comprehensive coaching for CA Foundation and CA Intermediate examinations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`p-8 group transition-all duration-300 rounded-2xl border ${isDark ? 'glass-card hover:border-primary/30' : 'bg-white/10 backdrop-blur-sm border-white/20 hover:border-blue-400/40'}`}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors ${isDark ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-blue-500/20 group-hover:bg-blue-500/30'}`}>
                  <feature.icon className={`w-7 h-7 ${isDark ? 'text-primary' : 'text-blue-400'}`} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-foreground' : 'text-white'}`}>{feature.title}</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-muted-foreground' : 'text-blue-100/70'}`}>{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`mt-12 p-8 text-center rounded-2xl border ${isDark ? 'glass-card' : 'bg-white/10 backdrop-blur-sm border-white/20'}`}
        >
          <p className={`text-lg ${isDark ? 'text-muted-foreground' : 'text-blue-100/80'}`}>
            <span className={`font-semibold ${isDark ? 'text-primary' : 'text-blue-300'}`}>Currently offering onsite learning</span> at our Thanjavur campus.
            <br />
            <span className={isDark ? 'text-foreground' : 'text-white'}>Online courses coming soon!</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
