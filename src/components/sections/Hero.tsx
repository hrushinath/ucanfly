import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button, Badge } from "@/components/ui";
import { motion } from "framer-motion";

export function Hero() {
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-indigo-900">
      {/* Background Image Overlay - REPLACE WITH YOUR IMAGE */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920')] bg-cover bg-center opacity-10"></div>
      
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      
      {/* Enhanced animated floating elements with gradients */}
      <motion.div
        className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full blur-2xl opacity-30"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-1/4 w-16 h-16 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full blur-2xl opacity-20"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-2xl opacity-25"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20">
                <Sparkles className="h-4 w-4 inline mr-2" />
                Trusted by 10,000+ Students
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Your Gateway to{" "}
              <span className="bg-gradient-to-r from-secondary-400 via-secondary-300 to-accent-400 bg-clip-text text-transparent inline-block hover:scale-110 transition-transform cursor-default drop-shadow-lg">
                Global Education
              </span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg leading-relaxed text-primary-100 sm:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Study abroad profiling and application process across 22+ countries. 
              We help you choose the right course and pursue your dream career with 
              end-to-end guidance and support.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/contact">
                <Button size="xl" variant="white" className="w-full sm:w-auto group shadow-large hover:shadow-colored-primary">
                  Start Your Journey
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/programs">
                <Button size="xl" variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 sm:w-auto backdrop-blur-sm">
                  Explore Destinations
                </Button>
              </Link>
            </motion.div>

          </motion.div>

          {/* Visual Element - Image Gallery */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="relative">
              {/* Main Featured Image - REPLACE WITH YOUR STUDENT IMAGE */}
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" 
                  alt="Students celebrating graduation" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-lg font-semibold">Join 10,000+ Students Worldwide</p>
                  <p className="text-primary-200 text-sm mt-1">Students placed in 22+ countries</p>
                </div>
              </motion.div>
              
              {/* Floating Student Success Cards */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 max-w-[200px]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  {/* REPLACE WITH ACTUAL STUDENT PHOTO */}
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" 
                    alt="Student" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm text-gray-900">Priya S.</p>
                    <p className="text-xs text-gray-600">UK - Oxford</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600">"Got admission to my dream university!"</p>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-secondary-400 rounded-xl shadow-xl p-4 max-w-[180px]"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  {/* REPLACE WITH ACTUAL STUDENT PHOTO */}
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" 
                    alt="Student" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm text-white">Rahul M.</p>
                    <p className="text-xs text-primary-100">Canada - UBC</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-yellow-300">⭐</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}

