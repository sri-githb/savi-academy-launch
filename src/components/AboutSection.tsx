import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Award, MapPin } from 'lucide-react';
import academyImage from '../assets/saviacademysite.jpeg';

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
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-background via-navy/30 to-background' : 'bg-gradient-to-b from-background via-secondary/10 to-background'}`} />
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl bg-primary/5"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div ref={ref} className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Building Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50"
          >
            <img
              src={academyImage}
              alt="SAVI Academy Campus"
              className="w-full h-full min-h-[300px] object-cover rounded-2xl"
              style={{ objectPosition: 'center 30%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Our Campus</h3>
              <p className="text-sm opacity-90">Modern learning environment in the heart of Thanjavur</p>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 glass-card text-primary">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gold-gradient">SAVI Academy</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              SAVI Academy is Thanjavur's premier CA coaching institute, dedicated to transforming aspiring accountants into certified professionals. With a team of experienced CA faculty and a proven track record of success, we provide comprehensive coaching for CA Foundation and CA Intermediate examinations.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-primary/5 p-4 rounded-xl border border-border/20">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Dedicated Faculty</div>
              </div>
              <div className="bg-primary/5 p-4 rounded-xl border border-border/20">
                <div className="text-2xl font-bold text-primary mb-1">1:1</div>
                <div className="text-sm text-muted-foreground">Mentorship</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 group transition-all duration-300 rounded-2xl border glass-card hover:border-primary/30"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors bg-primary/10 group-hover:bg-primary/20">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
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
          className="mt-12 p-8 text-center rounded-2xl border glass-card"
        >
          <p className="text-lg text-muted-foreground">
            <span className="font-semibold text-primary">Currently offering onsite learning</span> at our Thanjavur campus.
            <br />
            <span className="text-foreground">Online courses coming soon!</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
