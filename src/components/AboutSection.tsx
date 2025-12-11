import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Award, MapPin } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy/30 to-background" />
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
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
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gold-gradient">SAVI Academy</span>
          </h2>
          <p className="text-lg text-muted-foreground">
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
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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
          className="mt-12 glass-card p-8 text-center"
        >
          <p className="text-lg text-muted-foreground">
            <span className="text-primary font-semibold">Currently offering onsite learning</span> at our Thanjavur campus.
            <br />
            <span className="text-foreground">Online courses coming soon!</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
