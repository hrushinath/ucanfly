import { Link } from "react-router-dom";
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
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  TrendingUp,
} from "lucide-react";
import { Button, Card, CardContent, Badge } from "@/components/ui";
import { motion } from "framer-motion";

const services = [
  {
    icon: FileSearch,
    title: "Profile Analysis",
    description: "Comprehensive evaluation of your academic background, test scores, work experience, and career goals to recommend the best study options.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    features: [
      "Academic profile assessment",
      "Test score evaluation (IELTS, TOEFL, GRE, GMAT)",
      "Career goal alignment",
      "University eligibility check",
    ],
  },
  {
    icon: Building2,
    title: "University Selection",
    description: "Personalized university shortlisting based on your profile, preferences, budget, and career aspirations from our network of 500+ partner universities.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
    features: [
      "Course matching",
      "Location preference consideration",
      "Budget-friendly options",
      "Scholarship opportunity identification",
    ],
  },
  {
    icon: PenTool,
    title: "SOP & LOR Support",
    description: "Professional assistance in crafting compelling statements of purpose and obtaining strong letters of recommendation that make your application stand out.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
    features: [
      "SOP brainstorming and structuring",
      "Multiple draft reviews",
      "LOR guidance for recommenders",
      "Application essay support",
    ],
  },
  {
    icon: ClipboardList,
    title: "Application Management",
    description: "End-to-end application management from document collection to submission, ensuring accuracy and meeting all deadlines.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
    features: [
      "Document checklist preparation",
      "Application form assistance",
      "Deadline management",
      "Follow-up with universities",
    ],
  },
  {
    icon: FileCheck,
    title: "Visa Processing",
    description: "Expert visa guidance with the highest success rate in the industry. We handle all documentation and provide thorough interview preparation.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
    features: [
      "Document preparation",
      "Financial documentation guidance",
      "Mock visa interviews",
      "Visa tracking and follow-up",
    ],
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation",
    description: "Comprehensive mock interviews and coaching to help you confidently ace both university admission and visa interviews.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
    features: [
      "University interview coaching",
      "Visa interview preparation",
      "Common questions practice",
      "Confidence building sessions",
    ],
  },
  {
    icon: GraduationCap,
    title: "Scholarship Support",
    description: "Guidance on available scholarships and complete assistance with scholarship applications to help fund your international education.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
    features: [
      "Scholarship identification",
      "Application assistance",
      "Essay support for scholarships",
      "Merit and need-based options",
    ],
  },
  {
    icon: Wallet,
    title: "Education Loan Support",
    description: "Connect with our banking partners for competitive education loan options with favorable terms and complete documentation assistance.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
    features: [
      "Bank partner connections",
      "Loan eligibility assessment",
      "Documentation support",
      "Competitive interest rates",
    ],
  },
  {
    icon: MapPin,
    title: "Post-Landing Support",
    description: "Continued assistance even after you land abroad, including accommodation search, bank account setup, and local orientation.",
    features: [
      "Accommodation assistance",
      "Bank account guidance",
      "Local SIM and transport help",
      "Community connections",
    ],
  },
];

export function ServicesPage() {
  return (
    <main>
      {/* Hero Section with Background Images */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-20 lg:py-28 overflow-hidden">
        {/* Background Image Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-3 gap-2 h-full">
            <motion.img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600"
              alt="Counseling session"
              className="w-full h-full object-cover"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600"
              alt="Document processing"
              className="w-full h-full object-cover"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600"
              alt="Visa success"
              className="w-full h-full object-cover"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
              Comprehensive Support
            </Badge>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-100">
              From your first consultation to your first day abroad, we provide 
              end-to-end support to make your study abroad dream a reality. 
              Discover our comprehensive suite of services designed for your success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-gray-600">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <motion.div
                    className="relative overflow-hidden rounded-2xl shadow-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="aspect-[4/3] relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/30 to-transparent"></div>
                      <div className="absolute bottom-6 right-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm">
                        <service.icon className="h-8 w-8 text-primary-600" />
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-xl bg-secondary-500/20"></div>
                    <div className="absolute -left-4 -top-4 h-16 w-16 rounded-lg bg-primary-600/20"></div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Gallery - REPLACE WITH YOUR IMAGES */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Success Stories in Action
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Real moments from successful students who achieved their dreams with our support
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600", caption: "Visa Approval Celebration" },
              { image: "https://images.unsplash.com/photo-1560439513-74b037a25d84?w=600", caption: "Counseling Session" },
              { image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600", caption: "Document Verification" },
              { image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600", caption: "Team Celebration" },
              { image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600", caption: "Interview Coaching" },
              { image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600", caption: "Application Review" },
              { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600", caption: "Success Milestone" },
              { image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600", caption: "Virtual Consultation" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="aspect-square">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-white font-semibold text-sm">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office & Team Gallery - REPLACE WITH YOUR IMAGES */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Office & Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Meet our expert counselors and see where we work to make your dreams come true
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800", title: "Modern Office Space", subtitle: "Our workspace in the heart of the city" },
              { image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800", title: "Consultation Rooms", subtitle: "Private spaces for student meetings" },
              { image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800", title: "Team Collaboration", subtitle: "Expert counselors working together" },
              { image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800", title: "Resource Center", subtitle: "Library of study materials" },
              { image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800", title: "Reception Area", subtitle: "Welcoming environment for students" },
              { image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800", title: "Team at Work", subtitle: "Dedicated professionals" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-200 mt-1">{item.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Star, value: "4.9/5", label: "Client Rating" },
              { icon: Award, value: "98%", label: "Visa Success" },
              { icon: TrendingUp, value: "10,000+", label: "Students Placed" },
              { icon: Users, value: "15+", label: "Expert Counselors" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                    <stat.icon className="h-8 w-8 text-primary-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="mt-1 text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple Process, Exceptional Results
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our streamlined process ensures you get the best guidance at every step.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {[
              { step: "01", title: "Consult", description: "Free initial consultation to understand your goals" },
              { step: "02", title: "Plan", description: "Customized roadmap for your study abroad journey" },
              { step: "03", title: "Apply", description: "Expert assistance with applications and documentation" },
              { step: "04", title: "Fly", description: "Visa approval and pre-departure support" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Ready to Get Started?
              </h2>
              <p className="mt-2 text-primary-100">
                Book a free consultation and let's discuss your study abroad goals.
              </p>
            </div>
            <Link to="/contact">
              <Button size="lg" variant="white">
                Get Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

