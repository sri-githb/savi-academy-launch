import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: 'Priyanka',
      course: 'CA Foundation',
      rating: 5,
      text: 'SAVI Academy transformed my understanding of accounting fundamentals. The faculty\'s dedication and personalized attention helped me clear CA Foundation in my first attempt!',
      result: 'Cleared in 1st Attempt',
    },
    {
      name: 'Vijay kumar',
      course: 'CA Intermediate',
      rating: 5,
      text: 'The structured approach and comprehensive study materials at SAVI Academy are exceptional. The mock tests and doubt sessions were instrumental in my success.',
      result: 'AIR 89',
    },
    {
      name: 'Anitha Rajan',
      course: 'CA Foundation',
      rating: 5,
      text: 'As a working professional, I appreciated the flexible batch timings. The faculty made complex topics simple and the support system is outstanding.',
      result: 'Distinction',
    },
    {
      name: 'Karthik Venkat',
      course: 'CA Intermediate',
      rating: 5,
      text: 'The best decision I made was joining SAVI Academy. The case study discussions and practical approach to learning gave me confidence for the exams.',
      result: 'Cleared Both Groups',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy/20 to-background" />
      <motion.div
        className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
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
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-gold-gradient">Students Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from our successful students who achieved their CA dreams with SAVI Academy.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {testimonial.result}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
