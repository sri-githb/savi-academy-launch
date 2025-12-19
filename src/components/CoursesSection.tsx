import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Calculator, FileText, Scale, Clock, Users, CheckCircle } from 'lucide-react';

const CoursesSection = () => {
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

  const courses = [
    {
      title: 'CA Foundation',
      description: 'Comprehensive coaching for students preparing to enter the CA profession. Build a strong foundation in core accounting principles.',
      duration: '4 Months',
      students: '4 Papers',
      icon: BookOpen,
      subjects: [
        'Paper 1: Accounting',
        'Paper 2: Business Laws',
        'Paper 3: Quantitative Aptitude',
        'Paper 4: Business Economics',
        'Corrigendum: Include wherever applicable',
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
      duration: '9 Months',
      students: '8 Papers',
      icon: Calculator,
      subjects: [
        'Paper 1: Advanced Accounting',
        'Paper 2: Corporate and Other Laws',
        'Paper 3: Taxation (Section A: Income-tax Law)',
        'Paper 3: Taxation (Section B: Goods and Services Tax)',
        'Corrigendum: GST Section B',
        'Paper 4: Cost and Management Accounting',
        'Paper 5: Auditing and Ethics',
        'Paper 6: Section A: Financial Management',
        'Paper 6: Section B: Strategic Managemen',
      ],
      features: [
        'In-depth subject coverage',
        'Case study discussions',
        'Regular assessments',
        'Exam-oriented preparation',
        'Articleship training assistance (2 years)',
      ],
    },
  ];

  return (
    <section id="courses" className={`py-24 relative overflow-hidden ${!isDark ? 'bg-[hsl(220,25%,94%)]' : ''}`}>
      {/* Background */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-background via-secondary/10 to-background' : 'bg-gradient-to-b from-[hsl(220,30%,92%)] via-[hsl(220,25%,96%)] to-[hsl(220,25%,94%)]'}`} />
      <motion.div
        className={`absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl ${isDark ? 'bg-primary/5' : 'bg-primary/10'}`}
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
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${isDark ? 'glass-card text-primary' : 'bg-primary/10 border border-primary/20 text-primary'}`}>
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
        <div className="grid grid-cols-1 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`overflow-hidden group rounded-xl sm:rounded-2xl border ${isDark ? 'glass-card' : 'bg-white shadow-sm sm:shadow-lg border-border/30'}`}
            >
              {/* Course Header */}
              <div className="p-5 sm:p-6 md:p-8 border-b border-border/30">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <course.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 ml-3">
                    <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-secondary/50 text-xs sm:text-sm">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span className="whitespace-nowrap">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-secondary/50 text-xs sm:text-sm">
                      <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      <span className="whitespace-nowrap">{course.students}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">{course.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">{course.description}</p>
                <a 
                  href="#contact" 
                  className="inline-block w-full sm:w-auto text-center px-6 py-3 bg-primary text-white text-sm sm:text-base rounded-lg font-medium hover:bg-primary/90 transition-colors hover:shadow-lg hover:-translate-y-0.5 transform transition-all duration-200"
                >
                  Enroll Now
                </a>
              </div>

              {/* Subjects */}
              <div className="p-5 sm:p-6 md:p-8 border-b border-border/30">
                <h4 className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider mb-3 sm:mb-4">Subjects Covered</h4>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {course.subjects.map((subject, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-secondary/30">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Scale className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium leading-tight">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-24">
                <div className="text-center mb-12 md:mb-16">
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">What's Included</h4>
                  <div className="space-y-2">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-foreground/90 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
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
          className={`mt-12 p-6 flex items-center justify-center gap-4 rounded-2xl border ${isDark ? 'glass-card' : 'bg-white shadow-md border-border/50'}`}
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
