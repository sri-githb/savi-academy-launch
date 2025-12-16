import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Mail, Award } from 'lucide-react';
import caGokul from '@/assets/CA_GOKUL.png';
import caBhuvan from '@/assets/CA_BHUVAN.png';
import caVishal from '@/assets/CA_VISHAL.png';
import caDhana from '@/assets/CA_DHANA.png';

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isDark, setIsDark] = useState(true);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const handleEmailClick = (email: string, name: string) => {
    const mailtoLink = `mailto:${email}?subject=Inquiry from SAVI Academy Website&body=Hi ${name},%0D%0A%0D%0AI came across your profile on the SAVI Academy website and would like to connect with you regarding...`;
    
    // Try to open mail client
    window.location.href = mailtoLink;
    
    // Fallback: copy email to clipboard and show notification
    setTimeout(() => {
      navigator.clipboard.writeText(email).then(() => {
        setCopiedEmail(email);
        setTimeout(() => setCopiedEmail(null), 3000);
      });
    }, 1000);
  };

  const team = [
    {
      name: 'CA GOKULNATH R',
      image: caGokul,
      qualification: 'CA',
      role: 'Faculty',
      expertise: 'Financial Accounting, Taxation',
      experience: 'Expert CA Professional',
      description: 'Dedicated to nurturing future CAs with simplified teaching methodology and practical insights.',
      email: 'ca.gokulnath@saviacademy.com',
      linkedin: '#',
    },
    {
      name: 'CA VISHAL V S',
      image: caVishal,
      qualification: 'CA',
      role: 'Faculty',
      expertise: 'Corporate Laws, Business Laws',
      experience: 'Expert CA Professional',
      description: 'Specialist in legal frameworks with comprehensive knowledge of corporate and business laws.',
      email: 'ca.vishal@saviacademy.com',
      linkedin: '#',
    },
    {
      name: 'CA BHUVAN KUMAR K',
      image: caBhuvan,
      qualification: 'CA',
      role: 'Faculty',
      expertise: 'Cost Accounting, Management Accounting',
      experience: 'Expert CA Professional',
      description: 'Expert in cost management and strategic decision-making frameworks.',
      email: 'ca.bhuvan@saviacademy.com',
      linkedin: '#',
    },
    {
      name: 'CA DHANASEKARAN V',
      image: caDhana,
      qualification: 'CA',
      role: 'Faculty',
      expertise: 'Auditing, Direct & Indirect Tax',
      experience: 'Expert CA Professional',
      description: 'Combines practical audit experience with teaching excellence and exam-focused strategies.',
      email: 'ca.dhanasekaran@saviacademy.com',
      linkedin: '#',
    },
  ];

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-background via-secondary/10 to-background' : 'bg-gradient-to-b from-background via-primary/5 to-background'}`} />
      <motion.div
        className={`absolute bottom-1/4 left-0 w-80 h-80 rounded-full blur-3xl ${isDark ? 'bg-primary/5' : 'bg-primary/3'}`}
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
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-4">
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
              className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              {/* Member Photo */}
              <div className={`relative overflow-hidden ${isDark ? 'bg-gradient-to-br from-secondary to-navy-light' : 'bg-gradient-to-br from-primary/10 to-primary/20'}`}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-auto object-contain"
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
                  <span className="text-xs text-primary font-medium">{member.qualification}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-3">{member.description}</p>
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
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isDark ? 'bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10' : 'bg-primary/10 text-primary/70 hover:text-primary hover:bg-primary/20'}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`${member.name} LinkedIn profile`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    onClick={(e) => {
                      e.preventDefault();
                      handleEmailClick(member.email, member.name);
                    }}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isDark ? 'bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10' : 'bg-primary/10 text-primary/70 hover:text-primary hover:bg-primary/20'} relative`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                    {copiedEmail === member.email && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs px-2 py-1 rounded whitespace-nowrap z-50"
                      >
                        Email copied!
                      </motion.div>
                    )}
                  </motion.a>
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