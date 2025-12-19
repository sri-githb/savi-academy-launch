import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Award } from 'lucide-react';
import caGokul from '@/assets/CA_GOKUL.png';
import caBhuvan from '@/assets/CA_BHUVAN.png';
import caVishal from '@/assets/CA_VISHAL.png';
import caDhana from '@/assets/CA_DHANA.png';

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isDark, setIsDark] = useState(true);
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const getInitial = (name: string) => {
    const cleaned = name.replace(/^CA\s+/i, '').trim();
    return (cleaned[0] || '').toUpperCase();
  };

  const team = [
    {
      name: 'CA Gogulnath R',
      image: caGokul,
      qualification: 'CA',
      role: 'Faculty',
      expertise: 'Financial Accounting, Taxation',
      experience: 'Expert CA Professional',
      description: 'Dedicated to nurturing future CAs with simplified teaching methodology and practical insights.',
      linkedin: 'https://www.linkedin.com/in/gokulnath-r-12345678',
    },
    {
      name: 'CA VISHAL V S',
      image: caVishal,
      qualification: 'CA',
      role: 'Faculty',
      expertise: 'Corporate Laws, Business Laws',
      experience: 'Expert CA Professional',
      description: 'Specialist in legal frameworks with comprehensive knowledge of corporate and business laws.',
      linkedin: 'https://www.linkedin.com/in/vishal-vs-12345678',
    },
    {
      name: 'CA BHUVAN KUMAR K',
      image: caBhuvan,
      qualification: 'CA',
      role: 'Faculty',
      expertise: 'Cost Accounting, Management Accounting',
      experience: 'Expert CA Professional',
      description: 'Expert in cost management and strategic decision-making frameworks.',
      linkedin: 'https://www.linkedin.com/in/bhuvan-kumar-12345678',
    },
    {
      name: 'CA DHANASEKARAN V',
      image: caDhana,
      qualification: 'CA',
      role: 'Faculty',
      expertise: 'Auditing, Direct & Indirect Tax',
      experience: 'Expert CA Professional',
      description: 'Combines practical audit experience with teaching excellence and exam-focused strategies.',
      linkedin: 'https://www.linkedin.com/in/dhanasekaran-v-12345678',
    },
  ];

  return (
    <section id="team" className="py-24 relative overflow-hidden light-accent-section">
      {/* Background */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-background via-secondary/10 to-background' : 'bg-gradient-to-b from-background via-secondary/10 to-background'}`} />
      <motion.div
        className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full blur-3xl bg-primary/5"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
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
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 glass-card text-primary">
            Our Faculty
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Meet Our Expert <span className="text-gold-gradient">CA Professionals</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Learn from the best in the industry. Our faculty comprises experienced Chartered Accountants dedicated to your success.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="overflow-hidden group transition-all duration-300 rounded-2xl border glass-card hover:border-primary/30"
              whileHover={{ y: -8 }}
              onMouseEnter={() => setHoveredMember(member.name)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Member Photo */}
              <div className="relative overflow-hidden bg-gradient-to-br from-secondary to-background">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  initial={false}
                  animate={
                    hoveredMember === member.name
                      ? { opacity: 1, scale: 1, rotate: 0 }
                      : { opacity: 0, scale: 0.92, rotate: -8 }
                  }
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <span
                    className={`font-extrabold leading-none select-none text-transparent bg-clip-text bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.45)_2px,transparent_0)] bg-[length:16px_16px] text-[190px] sm:text-[230px] md:text-[260px]`}
                    style={{ transform: 'translateZ(0)' }}
                  >
                    {getInitial(member.name)}
                  </span>
                </motion.div>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-auto object-contain relative z-10"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background to-transparent"
                  initial={{ opacity: 0.3 }}
                  whileHover={{ opacity: 0.5 }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-primary">{member.qualification}</span>
                </div>
                <h3 className="text-lg font-bold mb-1 text-foreground">{member.name}</h3>
                <p className="text-sm font-medium mb-3 text-primary">{member.role}</p>
                <p className="text-sm mb-3 text-muted-foreground">{member.description}</p>
                <div className="space-y-1.5">
                  <p className="text-xs text-muted-foreground">
                    <span className="text-foreground">Expertise:</span> {member.expertise}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-foreground">Experience:</span> {member.experience}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/30">
                  {member.linkedin && (
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`${member.name} LinkedIn profile`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;