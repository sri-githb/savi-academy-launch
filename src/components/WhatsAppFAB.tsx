import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FormData {
  name: string;
  educationLevel: string;
  status: string;
}

const WhatsAppFAB = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    educationLevel: '',
    status: '',
  });

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('whatsapp_form_data');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFormData(parsed);
      } catch (e) {
        console.error('Error parsing localStorage data');
      }
    }
  }, []);

  const isFormValid = formData.name.trim() && formData.educationLevel && formData.status;

  const handleSubmit = () => {
    if (!isFormValid) return;

    // Save to localStorage
    localStorage.setItem('whatsapp_form_data', JSON.stringify(formData));

    // Construct WhatsApp message
    const message = `Hello, I'm ${formData.name}.
Education Level: ${formData.educationLevel}
Status: ${formData.status}

I visited your website and want information about CA courses at SAVI Academy.`;

    // WhatsApp number with country code
    const phoneNumber = '919790901921';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* FAB Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.button>

      {/* Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              className="fixed left-1/2 top-1/2 z-50 w-[92%] max-w-[400px]"
              initial={{ 
                opacity: 0, 
                scale: 0,
                transform: "translate(-50%, -50%) scale(0)"
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transform: "translate(-50%, -50%) scale(1)"
              }}
              exit={{ 
                opacity: 0, 
                scale: 0,
                transform: "translate(-50%, -50%) scale(0)"
              }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 300,
                duration: 0.4
              }}
            >
              <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-6 sm:p-8 shadow-2xl dark:bg-gradient-to-br dark:from-navy/60 dark:to-background/80 dark:border-white/10 dark:backdrop-blur-2xl">
                {/* Decorative gradient orbs */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#25D366]/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gold/20 rounded-full blur-3xl" />
                
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 rounded-full p-2 bg-secondary hover:bg-secondary/80 text-foreground/70 hover:text-foreground transition-all duration-200 dark:bg-white/10 dark:hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Header */}
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366] shadow-lg shadow-[#25D366]/30">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Chat with us</h3>
                    <p className="text-sm text-foreground/60">We typically reply instantly</p>
                  </div>
                </div>

                {/* Form */}
                <div className="space-y-6">
                  {/* Step 1: Name */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-foreground/90">Hi! May I know your name please?</Label>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 rounded-xl border border-input bg-background text-foreground placeholder:text-foreground/40 focus:border-[#25D366] focus:outline-none focus:ring-0 transition-all dark:border-white/10 dark:bg-white/10"
                    />
                  </div>

                  {/* Step 2: Education Level */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-foreground/90">Are you a</Label>
                    <Select
                      value={formData.educationLevel}
                      onValueChange={(value) => setFormData({ ...formData, educationLevel: value })}
                    >
                      <SelectTrigger className="h-12 rounded-xl border border-input bg-background text-foreground focus:border-[#25D366] focus:outline-none dark:border-white/10 dark:bg-white/10">
                        <SelectValue placeholder="Select education level" />
                      </SelectTrigger>
                      <SelectContent className="z-[100] rounded-xl border border-border bg-popover text-popover-foreground shadow-xl dark:border-gray-600 dark:bg-gray-900">
                        <SelectItem value="11th" className="rounded-lg">11th</SelectItem>
                        <SelectItem value="12th" className="rounded-lg">12th</SelectItem>
                        <SelectItem value="Bachelors" className="rounded-lg">Bachelors</SelectItem>
                        <SelectItem value="Masters Degree" className="rounded-lg">Masters Degree</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Step 3: Status */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-foreground/90">Status</Label>
                    <RadioGroup
                      value={formData.status}
                      onValueChange={(value) => setFormData({ ...formData, status: value })}
                      className="flex gap-4"
                    >
                      <label className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${formData.status === 'Completed' ? 'bg-[#25D366]/20 border-[#25D366] text-foreground' : 'bg-secondary/60 border-border/60 text-foreground/70 hover:bg-secondary/80 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10'}`}>
                        <RadioGroupItem value="Completed" id="completed" className="sr-only" />
                        <span className="text-sm font-medium">Completed</span>
                      </label>
                      <label className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${formData.status === 'Pursuing' ? 'bg-[#25D366]/20 border-[#25D366] text-foreground' : 'bg-secondary/60 border-border/60 text-foreground/70 hover:bg-secondary/80 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10'}`}>
                        <RadioGroupItem value="Pursuing" id="pursuing" className="sr-only" />
                        <span className="text-sm font-medium">Pursuing</span>
                      </label>
                    </RadioGroup>
                  </div>

                  {/* Submit Button */}
                  <Button
                    onClick={handleSubmit}
                    disabled={!isFormValid}
                    className="w-full h-12 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold shadow-lg shadow-[#25D366]/30 disabled:opacity-40 disabled:shadow-none disabled:cursor-not-allowed transition-all duration-200"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat with us on WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppFAB;
