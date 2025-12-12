import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('savi-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else if (savedTheme === 'dark' || prefersDark) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('savi-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('savi-theme', 'light');
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full p-1 transition-colors duration-500 overflow-hidden"
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, hsl(220 50% 12%), hsl(220 40% 18%))' 
          : 'linear-gradient(135deg, hsl(220 70% 30%), hsl(220 80% 20%))'
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Stars background for dark mode */}
      <AnimatePresence>
        {isDark && (
          <>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.1 }}
              className="absolute top-1.5 right-2 w-1 h-1 bg-primary rounded-full"
            />
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-3 right-4 w-0.5 h-0.5 bg-primary/80 rounded-full"
            />
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.15 }}
              className="absolute bottom-2 right-3 w-0.5 h-0.5 bg-primary/60 rounded-full"
            />
          </>
        )}
      </AnimatePresence>

      {/* Clouds background for light mode */}
      <AnimatePresence>
        {!isDark && (
          <>
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 0.6, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ delay: 0.1 }}
              className="absolute top-1 right-1 w-3 h-1.5 bg-white/50 rounded-full"
            />
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 0.4, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-1.5 right-2 w-2 h-1 bg-white/40 rounded-full"
            />
          </>
        )}
      </AnimatePresence>

      {/* Toggle circle with icon */}
      <motion.div
        layout
        className="relative w-6 h-6 rounded-full flex items-center justify-center shadow-lg"
        style={{
          background: isDark 
            ? 'linear-gradient(135deg, hsl(45 100% 50%), hsl(40 100% 40%))' 
            : 'linear-gradient(135deg, hsl(0 0% 100%), hsl(210 40% 96%))'
        }}
        animate={{
          x: isDark ? 0 : 22,
          rotate: isDark ? 0 : 360,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="w-3.5 h-3.5 text-navy" fill="currentColor" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Sun className="w-3.5 h-3.5 text-primary" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sun rays animation for light mode */}
        <AnimatePresence>
          {!isDark && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.6 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ delay: 0.1 + i * 0.03 }}
                  className="absolute w-0.5 h-1 bg-primary rounded-full"
                  style={{
                    transform: `rotate(${i * 45}deg) translateY(-10px)`,
                    transformOrigin: 'center center',
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;