import { Link } from "react-router-dom";
import {
  Award,
  Target,
  Heart,
  Users,
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Trophy,
  Star,
  Calendar,
} from "lucide-react";
import { Button, Card, CardContent } from "@/components/ui";
import { motion } from "framer-motion";

const values = [
  {
    icon: Target,
    title: "Student-Centric Approach",
    description: "Every recommendation we make is tailored to your unique profile, goals, and circumstances.",
  },
  {
    icon: Heart,
    title: "Passion for Education",
    description: "We're driven by a genuine desire to see students succeed and achieve their dreams.",
  },
  {
    icon: Award,
    title: "Excellence in Service",
    description: "We maintain the highest standards in counseling, documentation, and support services.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description: "We work alongside you as partners, not just service providers, throughout your journey.",
  },
];

const milestones = [
  { year: "2014", event: "Founded with a vision to democratize study abroad opportunities", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600" },
  { year: "2016", event: "Expanded to 10+ destination countries with 100+ university partnerships", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600" },
  { year: "2018", event: "Achieved 95% visa success rate and helped 5,000+ students", image: "https://images.unsplash.com/photo-1560439513-74b037a25d84?w=600" },
  { year: "2020", event: "Launched virtual counseling to serve students pan-India", image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600" },
  { year: "2022", event: "Reached 10,000+ successful placements across 22+ countries", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600" },
  { year: "2024", event: "Expanded services to include scholarship and loan support", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600" },
];

const team = [
  {
    name: "Expert Counselors",
    description: "Certified education counselors with years of experience in international admissions.",
    count: "15+",
  },
  {
    name: "Visa Specialists",
    description: "Dedicated visa experts who understand documentation requirements for every country.",
    count: "8+",
  },
  {
    name: "University Partners",
    description: "Direct relationships with admissions teams at top universities worldwide.",
    count: "500+",
  },
];

export function About() {
  return (
    <main>
      {/* Hero Section with Background Images */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-20 lg:py-28 overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-4 gap-2 h-full">
            <motion.img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600"
              alt="Graduation"
              className="w-full h-full object-cover"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
              alt="Team"
              className="w-full h-full object-cover"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1560439513-74b037a25d84?w=600"
              alt="Counseling"
              className="w-full h-full object-cover"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600"
              alt="Success"
              className="w-full h-full object-cover"
              animate={{ y: [0, 25, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              About UCAN FLY
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-100">
              We're a team of passionate education consultants dedicated to helping 
              students achieve their dreams of studying abroad. With over a decade 
              of experience, we've guided thousands of students to top universities 
              across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision with Images */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg mb-8">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                  alt="Our Mission"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm">
                  <Target className="h-7 w-7 text-primary-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                To make quality international education accessible to every deserving 
                student by providing comprehensive guidance, transparent processes, 
                and unwavering support throughout their study abroad journey.
              </p>
              <ul className="mt-6 space-y-3">
                {["Personalized guidance for every student", "Transparent and ethical practices", "End-to-end support from application to landing"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg mb-8">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
                  alt="Our Vision"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/90 backdrop-blur-sm">
                  <TrendingUp className="h-7 w-7 text-secondary-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                To be the most trusted name in international education consulting, 
                known for our student success rate, ethical practices, and 
                commitment to transforming lives through global education opportunities.
              </p>
              <ul className="mt-6 space-y-3">
                {["Leading consultant in South India", "98%+ visa success rate maintained", "Global network of university partnerships"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-secondary-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide everything we do at UCAN FLY.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From a small team with big dreams to a leading study abroad consultant.
            </p>
          </div>

          <div className="mt-16 relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 hidden w-0.5 -translate-x-1/2 bg-primary-200 lg:block"></div>
            
            <div className="space-y-8 lg:space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`relative flex flex-col lg:flex-row lg:items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                    <div className="relative overflow-hidden rounded-xl bg-white shadow-lg group hover:shadow-2xl transition-all">
                      {/* Milestone Image */}
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={milestone.image}
                          alt={milestone.year}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm">
                          <span className="text-2xl font-bold text-primary-600">
                            {milestone.year}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-700 font-medium">{milestone.event}</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 hidden h-6 w-6 -translate-x-1/2 rounded-full bg-primary-600 border-4 border-white shadow-lg lg:flex items-center justify-center">
                    <Calendar className="h-3 w-3 text-white" />
                  </div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Achievements Gallery - REPLACE WITH YOUR IMAGES */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Awards & Recognition
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Celebrating our achievements and industry recognition
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { image: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=600", title: "Best Consultant Award 2023" },
              { image: "https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?w=600", title: "Excellence in Service" },
              { image: "https://images.unsplash.com/photo-1624969862293-b749659ccc4e?w=600", title: "Top 10 Consultants" },
              { image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600", title: "Customer Satisfaction Award" },
              { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600", title: "Industry Leadership" },
              { image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600", title: "Innovation Award" },
              { image: "https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?w=600", title: "Partner Recognition" },
              { image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600", title: "Growth Excellence" },
            ].map((award, idx) => (
              <motion.div
                key={idx}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="aspect-square relative">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Trophy className="h-8 w-8 text-yellow-400" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm">{award.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture & Events - REPLACE WITH YOUR IMAGES */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Culture & Events
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Behind the scenes at UCAN FLY - celebrating success together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800", title: "Team Celebration", subtitle: "Celebrating student success" },
              { image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800", title: "Training Workshop", subtitle: "Continuous learning" },
              { image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800", title: "Student Meet", subtitle: "Orientation session" },
              { image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800", title: "Team Outing", subtitle: "Building bonds" },
              { image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800", title: "Annual Conference", subtitle: "Industry insights" },
              { image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800", title: "Success Stories", subtitle: "Happy students" },
            ].map((event, idx) => (
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
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                    <p className="text-sm text-gray-200 mt-1">{event.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Star, value: "4.9/5", label: "Client Rating" },
              { icon: Award, value: "15+", label: "Industry Awards" },
              { icon: Trophy, value: "98%", label: "Success Rate" },
              { icon: Users, value: "10,000+", label: "Happy Students" },
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

      {/* Team Stats */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A dedicated team of experts working together to make your dreams a reality.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-8 text-center shadow-sm"
              >
                <div className="text-5xl font-bold text-primary-600">
                  {member.count}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-2 text-gray-600">{member.description}</p>
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
                Ready to Start Your Journey?
              </h2>
              <p className="mt-2 text-primary-100">
                Book a free consultation with our expert counselors today.
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

