import { FileSearch, FileText, Send, CheckCircle, Plane } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: FileSearch,
    step: "01",
    title: "Profile Evaluation",
    description: "Submit your academic details and career goals. Our experts analyze your profile and recommend suitable programs.",
  },
  {
    icon: FileText,
    step: "02",
    title: "University Selection",
    description: "Get personalized university recommendations based on your profile, preferences, budget, and career aspirations.",
  },
  {
    icon: Send,
    step: "03",
    title: "Application & Documents",
    description: "We guide you through applications, SOP writing, LORs, and document preparation for a strong submission.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Offer & Visa",
    description: "Receive admission offers and complete visa processing with our expert guidance and highest success rate.",
  },
  {
    icon: Plane,
    step: "05",
    title: "Pre-Departure & Beyond",
    description: "Get ready with pre-departure orientation and enjoy continued support even after you land abroad.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Journey to Study Abroad
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A simple, streamlined process to turn your study abroad dreams into reality. 
            We handle the complexity so you can focus on your future.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-16">
          {/* Desktop View - Horizontal */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-0 right-0 top-16 h-0.5 bg-primary-200"></div>
              
              <div className="grid grid-cols-5 gap-4">
                {steps.map((step, index) => (
                  <motion.div 
                    key={index} 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.4 }}
                  >
                    {/* Step Circle */}
                    <motion.div 
                      className="relative z-10 mx-auto flex h-32 w-32 flex-col items-center justify-center rounded-full bg-white shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-white"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <step.icon className="h-7 w-7" />
                      </motion.div>
                      <span className="mt-2 text-xs font-bold text-primary-600">
                        STEP {step.step}
                      </span>
                    </motion.div>
                    
                    {/* Content */}
                    <motion.div 
                      className="mt-6 text-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.2 }}
                    >
                      <h3 className="text-lg font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        {step.description}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet View - Vertical */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>
              
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <motion.div 
                    key={index} 
                    className="relative flex gap-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    {/* Step Circle */}
                    <motion.div 
                      className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white">
                        <step.icon className="h-6 w-6" />
                      </div>
                    </motion.div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <span className="text-xs font-bold text-primary-600">
                        STEP {step.step}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

