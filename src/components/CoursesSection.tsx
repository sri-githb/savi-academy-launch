import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Calculator, FileText, Scale, Clock, Users, CheckCircle } from 'lucide-react';

const CoursesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const courses = [
    {
      title: 'CA Foundation',
      description: 'Comprehensive coaching for students preparing to enter the CA profession. Build a strong foundation in core accounting principles.',
      duration: '8 Months',
      students: '4 Papers',
      icon: BookOpen,
      subjects: [
        'Principles of Accounting',
        'Business Laws & Business Correspondence',
        'Business Mathematics & Statistics',
        'Business Economics',
      ],
      features: [
        'Conceptual clarity sessions',
        'Practice tests & mock exams',
        'Doubt clearing sessions',
        'Study materials provided',
      ],
    },
    {
      title: 'CA Intermediate',
      description: 'Advanced coaching for students progressing to intermediate-level knowledge in accounting, financial management, and taxation.',
      duration: '12 Months',
      students: '8 Papers',
      icon: Calculator,
      subjects: [
        'Advanced Accounting',
        'Corporate & Other Laws',
        'Cost & Management Accounting',
        'Taxation (Direct & Indirect)',
        'Auditing & Assurance',
        'Financial Management',
        'Enterprise Information Systems',
        'Strategic Management',
      ],
      features: [
        'In-depth subject coverage',
        'Case study discussions',
        'Regular assessments',
        'Exam-oriented preparation',
      ],
    },
  ];

  return (
    <section id="courses" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
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
            Our Courses
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Comprehensive <span className="text-gold-gradient">CA Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the right path for your Chartered Accountancy journey. Our expert-designed courses cover every aspect of CA preparation.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card overflow-hidden group"
            >
              {/* Course Header */}
              <div className="p-8 border-b border-border/30">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <course.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex gap-3">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/50 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/50 text-sm">
                      <FileText className="w-4 h-4 text-primary" />
                      {course.students}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{course.title}</h3>
                <p className="text-muted-foreground">{course.description}</p>
              </div>

              {/* Subjects */}
              <div className="p-8 border-b border-border/30">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Subjects Covered</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {course.subjects.map((subject) => (
                    <div key={subject} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Scale className="w-4 h-4 text-primary shrink-0" />
                      {subject}
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="p-8">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">What's Included</h4>
                <div className="space-y-2">
                  {course.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 glass-card p-6 flex items-center justify-center gap-4"
        >
          <Users className="w-6 h-6 text-primary shrink-0" />
          <p className="text-muted-foreground text-center">
            <span className="text-foreground font-medium">Mode of Learning:</span> Currently offering{' '}
            <span className="text-primary font-semibold">Onsite Classes Only</span> at our Thanjavur campus.
            Online courses will be available soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
