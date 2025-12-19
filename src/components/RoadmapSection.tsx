import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, BookOpen, FileText, Briefcase, Award, CheckCircle } from 'lucide-react';

const RoadmapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: GraduationCap,
      title: 'Schooling',
      subtitle: '11th & 12th Grade',
      description: 'Complete your higher secondary education with Commerce stream. Focus on building strong fundamentals in Accountancy, Economics, and Business Studies.',
      duration: '2 Years',
      milestone: 'Foundation Eligibility',
    },
    {
      icon: BookOpen,
      title: 'CA Foundation',
      subtitle: 'Entry Level',
      description: 'Clear the CA Foundation exam covering Accounting, Business Laws, Mathematics & Statistics, and Economics. Your first step into the CA profession.',
      duration: '4-8 Months',
      milestone: 'Foundation Pass',
    },
    {
      icon: FileText,
      title: 'CA Intermediate',
      subtitle: 'Professional Level',
      description: 'Master advanced concepts in Accounting, Law, Taxation, Auditing, and Financial Management. Complete 8 papers across two groups.',
      duration: '8-18 Months',
      milestone: 'Intermediate Pass',
    },
    {
      icon: Briefcase,
      title: 'Articleship Training',
      subtitle: 'Practical Experience',
      description: 'Gain 3 years of practical training under a practicing CA. Apply theoretical knowledge to real-world scenarios in auditing, taxation, and accounting.',
      duration: '3 Years',
      milestone: 'Training Complete',
    },
    {
      icon: Award,
      title: 'CA Final & Certification',
      subtitle: 'Professional Achievement',
      description: 'Clear the CA Final examination and become a certified Chartered Accountant. Join the prestigious ICAI membership and begin your professional career.',
      duration: '6-12 Months',
      milestone: 'CA Qualified',
    },
  ];

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      {/* Background with CA-themed pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy/20 to-background">
        <div className="absolute inset-0 opacity-5 dark:opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(45deg, currentColor 1px, transparent 1px),
            linear-gradient(-45deg, currentColor 1px, transparent 1px),
            linear-gradient(90deg, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
        }} />
      </div>
      <motion.div
        className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 7, repeat: Infinity }}
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
            Your Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Your Path to <span className="text-gold-gradient">Chartered Accountancy</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Follow the structured roadmap to become a Chartered Accountant. Each milestone brings you closer to your dream career.
          </p>
        </motion.div>

        {/* Roadmap */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                  index % 2 === 0 ? '' : 'lg:direction-rtl'
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12 lg:col-start-2'}`}>
                  <motion.div
                    className="glass-card p-6 lg:p-8 group hover:border-primary/30 transition-all duration-300 rounded-2xl"
                    whileHover={{ y: -5 }}
                  >
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <step.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                        <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                        <p className="text-sm text-primary font-medium">{step.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <div className={`flex items-center gap-4 flex-wrap ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      <span className="px-3 py-1 rounded-full bg-secondary/50 text-sm text-foreground">
                        {step.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-primary font-medium">
                        <CheckCircle className="w-4 h-4" />
                        {step.milestone}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node (Desktop) */}
                <motion.div
                  className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background border-4 border-primary items-center justify-center z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                >
                  <span className="text-primary font-bold">{index + 1}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Total Duration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="mt-16 glass-card p-8 text-center rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-2">Total Estimated Duration</h3>
            <p className="text-4xl font-bold text-gold-gradient mb-4">4.5 - 5 Years</p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With dedication and proper guidance from SAVI Academy, you can complete your CA journey and join the prestigious community of Chartered Accountants.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapSection;
