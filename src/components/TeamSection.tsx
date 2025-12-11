import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Mail, Award } from 'lucide-react';

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const team = [
    {
      name: 'CA Saravanan K',
      qualification: 'CA, FCA',
      role: 'Founder & Principal',
      expertise: 'Financial Accounting, Taxation',
      experience: '15+ years of teaching & industry experience',
      description: 'Expert in advanced accounting concepts with a passion for nurturing future CAs. Known for simplified teaching methodology.',
    },
    {
      name: 'CA Vijayalakshmi R',
      qualification: 'CA, M.Com',
      role: 'Senior Faculty - Law',
      expertise: 'Corporate Laws, Business Laws',
      experience: '12+ years in CA education',
      description: 'Specialist in legal frameworks with comprehensive knowledge of corporate and business laws. Makes complex topics easy to understand.',
    },
    {
      name: 'CA Murugesh S',
      qualification: 'CA, CMA',
      role: 'Senior Faculty - Costing',
      expertise: 'Cost Accounting, Management Accounting',
      experience: '10+ years in professional education',
      description: 'Dual-qualified professional with expertise in cost management and strategic decision-making frameworks.',
    },
    {
      name: 'CA Priya M',
      qualification: 'CA, B.Com',
      role: 'Faculty - Audit & Taxation',
      expertise: 'Auditing, Direct & Indirect Tax',
      experience: '8+ years teaching experience',
      description: 'Combines practical audit experience with teaching excellence. Known for exam-focused preparation strategies.',
    },
  ];

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <motion.div
        className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
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
              {/* Avatar Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-secondary to-navy-light overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-4xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background to-transparent"
                  initial={{ opacity: 0 }}
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
                    href="#"
                    className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail className="w-4 h-4" />
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
