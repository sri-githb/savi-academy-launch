import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star, Sparkles } from 'lucide-react';

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: 'CA Foundation',
      price: '₹25,000',
      duration: 'Complete Course',
      description: 'Comprehensive preparation for CA Foundation exam',
      features: [
        'All 4 Papers Covered',
        'Complete Study Materials',
        'Regular Mock Tests',
        'Doubt Clearing Sessions',
        'Practice Question Banks',
        'Previous Year Papers',
        'Performance Tracking',
        'Flexible Batch Timings',
      ],
      highlight: false,
      badge: null,
    },
    {
      name: 'CA Intermediate',
      price: '₹60,000',
      duration: 'Both Groups',
      description: 'Complete CA Intermediate preparation for all 8 papers',
      features: [
        'All 8 Papers (Group I & II)',
        'Detailed Study Materials',
        'Weekly Assessments',
        'One-on-One Doubt Sessions',
        'Case Study Discussions',
        'Exam Strategy Sessions',
        'Mock Exams with Analysis',
        'Career Guidance',
        'Articleship Assistance',
        'Alumni Network Access',
      ],
      highlight: true,
      badge: 'Most Popular',
    },
    {
      name: 'CA Inter Single Group',
      price: '₹35,000',
      duration: 'Per Group',
      description: 'Focus on Group I or Group II separately',
      features: [
        'Either Group I or Group II',
        'Complete Study Materials',
        'Regular Mock Tests',
        'Doubt Clearing Sessions',
        'Performance Analysis',
        'Exam Preparation Tips',
        'Flexible Schedule',
        'Revision Classes',
      ],
      highlight: false,
      badge: null,
    },
  ];

  const paymentOptions = [
    'Cash Payment',
    'Bank Transfer (NEFT/IMPS)',
    'UPI Payment',
    'EMI Options Available',
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy/30 to-background" />
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
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
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Course Fees & <span className="text-gold-gradient">Details</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Invest in your future with our competitively priced comprehensive CA coaching programs.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`glass-card overflow-hidden relative ${
                plan.highlight ? 'border-primary/50 lg:scale-105' : ''
              }`}
              whileHover={{ y: -8 }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className={`p-8 ${plan.highlight ? 'bg-primary/5' : ''}`}>
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gold-gradient">{plan.price}</span>
                  <span className="text-muted-foreground">/ {plan.duration}</span>
                </div>
              </div>

              {/* Features */}
              <div className="p-8 pt-0">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  className={`w-full mt-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.highlight
                      ? 'btn-primary'
                      : 'glass-button text-foreground hover:text-foreground'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Enroll Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Payment Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Payment Options</h3>
              <p className="text-muted-foreground">Multiple payment methods available for your convenience</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {paymentOptions.map((option) => (
                <span
                  key={option}
                  className="px-4 py-2 rounded-full bg-secondary/50 text-sm text-foreground"
                >
                  {option}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border/30 flex items-center justify-center gap-2">
            <Star className="w-5 h-5 text-primary" />
            <p className="text-muted-foreground text-center">
              <span className="text-primary font-semibold">Special Discount:</span> 10% off for early bird registrations & sibling enrollments
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
