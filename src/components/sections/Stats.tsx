import { Users, Building2, Globe, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Students Enrolled",
    description: "Successfully placed worldwide",
  },
  {
    icon: Building2,
    value: "500+",
    label: "Top Universities",
    description: "Partner institutions globally",
  },
  {
    icon: Globe,
    value: "22+",
    label: "Countries",
    description: "Destinations to choose from",
  },
  {
    icon: FileCheck,
    value: "98%",
    label: "Visa Success",
    description: "Approval rate achieved",
  },
];

export function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-16 lg:py-20 overflow-hidden" ref={ref}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-secondary-400 to-accent-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl border border-gray-200 bg-white backdrop-blur-lg p-8 text-center transition-all duration-300 hover:border-primary-300 hover:shadow-2xl cursor-pointer overflow-hidden"
            >
              {/* Animated Background Gradient on Hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div 
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100 text-primary-600 shadow-soft transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-secondary-500 group-hover:text-white group-hover:shadow-colored-primary group-hover:scale-110"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="h-7 w-7" />
                </motion.div>
                
                {/* Value with Counter Effect */}
                <motion.div 
                  className="mt-4 text-4xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 bg-clip-text text-transparent"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                
                {/* Label */}
                <div className="mt-1 text-lg font-semibold text-gray-900">
                  {stat.label}
                </div>
                
                {/* Description */}
                <div className="mt-1 text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
              
              {/* Decorative Element */}
              <motion.div 
                className="absolute -right-2 -top-2 h-16 w-16 rounded-full bg-gradient-to-br from-secondary-400 to-accent-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

