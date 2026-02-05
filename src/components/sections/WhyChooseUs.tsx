import { CheckCircle, Shield, Clock, HeartHandshake, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Over a decade of expertise in international education consulting.",
  },
  {
    icon: Shield,
    title: "98% Visa Success Rate",
    description: "Industry-leading visa approval rate with meticulous documentation.",
  },
  {
    icon: Users,
    title: "10,000+ Students Placed",
    description: "Successfully guided thousands of students to top universities worldwide.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Guidance",
    description: "One-on-one counseling tailored to your unique goals and circumstances.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance throughout your application journey.",
  },
  {
    icon: CheckCircle,
    title: "Transparent Process",
    description: "Clear communication and no hidden fees. Know exactly where you stand.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-b from-white via-primary-50/30 to-white py-20 lg:py-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-secondary-200 to-accent-200 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full shadow-soft">
              Why Choose Us
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-primary-900 to-gray-900 bg-clip-text text-transparent sm:text-4xl">
              Your One-Stop Destination for Studying Abroad
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Qualifying for a study abroad program can be challenging. We simplify 
              the process with our in-depth knowledge of admission criteria, deadlines, 
              and requirements across hundreds of universities worldwide.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              From finding the right program to visa processing and beyond, 
              we're with you every step of the way. Our experienced counselors 
              understand your aspirations and work tirelessly to make them a reality.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="relative">
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group rounded-xl border-2 border-gray-200 bg-white/80 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary-300 hover:shadow-large hover:bg-white cursor-pointer relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-transparent to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary-100 to-primary-50 text-primary-600 shadow-soft transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary-600 group-hover:to-primary-700 group-hover:text-white group-hover:shadow-colored-primary"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="h-6 w-6" />
                    </motion.div>
                    <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

