import {
  FileSearch,
  Building2,
  FileCheck,
  PenTool,
  MessageSquare,
  Users,
  ClipboardList,
  Zap,
  Activity,
  GraduationCap,
  Wallet,
  MapPin,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    icon: FileSearch,
    title: "Profile Analysis",
    description: "Comprehensive evaluation of your academic background and career goals to recommend the best study options.",
  },
  {
    icon: Building2,
    title: "Top Colleges Recommendations",
    description: "Personalized university shortlisting based on your profile, preferences, and budget requirements.",
  },
  {
    icon: FileCheck,
    title: "Visa Processing",
    description: "Expert visa guidance with highest success rate. We handle documentation and interview preparation.",
  },
  {
    icon: PenTool,
    title: "SOP Support & Guidance",
    description: "Professional assistance in crafting compelling statements of purpose that stand out.",
  },
  {
    icon: MessageSquare,
    title: "Interview Guidance",
    description: "Mock interviews and coaching to help you confidently ace university and visa interviews.",
  },
  {
    icon: Users,
    title: "University Coordination",
    description: "Direct liaison with universities for admission queries, scholarship applications, and more.",
  },
  {
    icon: ClipboardList,
    title: "End-to-End Application",
    description: "Complete application management from document collection to submission and follow-ups.",
  },
  {
    icon: Zap,
    title: "Fast Track Processing",
    description: "Expedited application processing for urgent admission requirements and deadlines.",
  },
  {
    icon: Activity,
    title: "Real-Time Status Updates",
    description: "Stay informed with live tracking of your application progress across all stages.",
  },
  {
    icon: GraduationCap,
    title: "Scholarship Support",
    description: "Guidance on available scholarships and assistance with scholarship applications.",
  },
  {
    icon: Wallet,
    title: "Education Loan Support",
    description: "Connect with banking partners for competitive education loan options and documentation.",
  },
  {
    icon: MapPin,
    title: "Post Landing Support",
    description: "Continued assistance after arrival including accommodation, banking, and settling in.",
  },
];

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20 lg:py-28 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-secondary-200 to-accent-200 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full shadow-soft">
            Our Services
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-primary-900 to-gray-900 bg-clip-text text-transparent sm:text-4xl">
            12 Essentials in One
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Everything you need for your study abroad journey, all under one roof. 
            From profile analysis to post-landing support, we've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="group h-full overflow-hidden border-2 transition-all duration-300 hover:border-primary-300 hover:shadow-large hover:-translate-y-2 cursor-pointer relative">
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-50 via-transparent to-secondary-50 opacity-0 transition-opacity duration-300"
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                />
                <CardContent className="p-6 relative z-10">
                  <motion.div
                    className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 shadow-soft ${
                      hoveredIndex === index
                        ? 'bg-gradient-to-br from-primary-600 to-primary-700 scale-110 shadow-colored-primary'
                        : 'bg-gradient-to-br from-primary-100 to-primary-50'
                    }`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon 
                      className={`h-7 w-7 transition-colors ${
                        hoveredIndex === index ? 'text-white' : 'text-primary-600'
                      }`} 
                    />
                  </motion.div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <motion.div
                    className="mt-4 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: hoveredIndex === index ? '100%' : '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

