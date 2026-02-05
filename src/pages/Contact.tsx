import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Facebook,
  Instagram,
  Twitter,
  Building2,
  Users,
  Award,
} from "lucide-react";
import {
  Button,
  Input,
  Label,
  Textarea,
  Card,
  CardContent,
} from "@/components/ui";
import { motion } from "framer-motion";

const interests = [
  "Study in UK",
  "Study in USA",
  "Study in Canada",
  "Study in Australia",
  "Study in New Zealand",
  "Study in Europe",
  "Other",
];

const faqs = [
  {
    question: "How do I start my study abroad journey?",
    answer: "Simply fill out the contact form or call us to book a free consultation. Our expert counselors will evaluate your profile and guide you through the entire process.",
  },
  {
    question: "What are your consultation fees?",
    answer: "Our initial consultation is completely free. We discuss fees for comprehensive services only after understanding your specific requirements and goals.",
  },
  {
    question: "How long does the entire process take?",
    answer: "The timeline varies by country and intake. Generally, we recommend starting 8-12 months before your intended start date for the best university and visa outcomes.",
  },
  {
    question: "Do you help with scholarships and education loans?",
    answer: "Yes! We identify scholarship opportunities for eligible students and have partnerships with leading banks for education loan assistance with competitive rates.",
  },
  {
    question: "What is your visa success rate?",
    answer: "We're proud of our 98% visa success rate, achieved through thorough documentation preparation and comprehensive interview coaching.",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    education: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <main>
      {/* Hero Section with Office Background */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-20 lg:py-28 overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 opacity-15">
          <div className="grid grid-cols-2 gap-2 h-full">
            <motion.img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
              alt="Office space"
              className="w-full h-full object-cover"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1560439513-74b037a25d84?w=800"
              alt="Team meeting"
              className="w-full h-full object-cover"
              animate={{ scale: [1.05, 1, 1.05] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-100">
              Ready to start your study abroad journey? Reach out to us for a free 
              consultation. Our expert counselors are here to answer all your questions 
              and guide you towards your international education goals.
            </p>
          </div>
        </div>
      </section>

      {/* Office Locations Gallery - REPLACE WITH YOUR IMAGES */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Office Locations
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Visit us at any of our conveniently located offices for in-person consultation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
                city: "Hyderabad Office",
                address: "Kothapet, Hyderabad - 500035",
                phone: "834-153-1524",
              },
              {
                image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800",
                city: "Bangalore Office",
                address: "Coming Soon",
                phone: "Contact us for details",
              },
              {
                image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800",
                city: "Mumbai Office",
                address: "Coming Soon",
                phone: "Contact us for details",
              },
            ].map((office, idx) => (
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
                    src={office.image}
                    alt={office.city}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="h-5 w-5 text-primary-400" />
                    <h3 className="text-xl font-bold text-white">{office.city}</h3>
                  </div>
                  <p className="text-sm text-gray-200">{office.address}</p>
                  <p className="text-sm text-primary-300 mt-1">{office.phone}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
              <p className="mt-4 text-gray-600">
                Visit us at our office or reach out through any of the following channels.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Address</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      No: 539, 5th Floor<br />
                      PVT Market Building<br />
                      Kothapet, Hyderabad - 500035
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      <a href="tel:8341531524" className="hover:text-primary-600">
                        834-153-1524 (Mobile)
                      </a>
                      <br />
                      <a href="tel:+914035684809" className="hover:text-primary-600">
                        040-3568-4809 (Landline)
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      <a href="mailto:info@ucanfly.in" className="hover:text-primary-600">
                        info@ucanfly.in
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Working Hours</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Monday - Saturday<br />
                      10:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900">Follow Us</h3>
                <div className="mt-4 flex gap-3">
                  <a
                    href="https://www.facebook.com/UCANFly.StudyAbroad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:bg-primary-600 hover:text-white"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/ucanfly.studyabroad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:bg-primary-600 hover:text-white"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com/Intl_Studies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:bg-primary-600 hover:text-white"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.link/yo5ix5"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block"
              >
                <Button variant="secondary" size="lg" className="gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6 sm:p-8">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                        <CheckCircle className="h-10 w-10 text-green-600" />
                      </div>
                      <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                        Thank You for Reaching Out!
                      </h3>
                      <p className="mt-4 text-gray-600 max-w-md">
                        We've received your inquiry. One of our expert counselors will 
                        contact you within 24 hours to discuss your study abroad goals.
                      </p>
                      <Button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            interest: "",
                            education: "",
                            message: "",
                          });
                        }}
                        variant="outline"
                        className="mt-8"
                      >
                        Submit Another Inquiry
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">
                          Book Your Free Consultation
                        </h2>
                        <p className="mt-2 text-gray-600">
                          Fill in your details below and our team will get back to you within 24 hours.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                          <div>
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="Enter your full name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="mt-1.5"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="you@example.com"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="mt-1.5"
                            />
                          </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="+91 XXXXX XXXXX"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="mt-1.5"
                            />
                          </div>
                          <div>
                            <Label htmlFor="interest">Interested In *</Label>
                            <select
                              id="interest"
                              name="interest"
                              value={formData.interest}
                              onChange={handleChange}
                              required
                              className="mt-1.5 flex h-11 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 transition-colors duration-200 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                            >
                              <option value="">Select destination</option>
                              {interests.map((interest) => (
                                <option key={interest} value={interest}>
                                  {interest}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="education">Current Education Level *</Label>
                          <select
                            id="education"
                            name="education"
                            value={formData.education}
                            onChange={handleChange}
                            required
                            className="mt-1.5 flex h-11 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 transition-colors duration-200 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                          >
                            <option value="">Select education level</option>
                            <option value="12th">12th / Higher Secondary</option>
                            <option value="bachelors">Bachelor's Degree (Pursuing)</option>
                            <option value="bachelors-complete">Bachelor's Degree (Completed)</option>
                            <option value="masters">Master's Degree (Pursuing)</option>
                            <option value="masters-complete">Master's Degree (Completed)</option>
                            <option value="working">Working Professional</option>
                          </select>
                        </div>

                        <div>
                          <Label htmlFor="message">Your Message (Optional)</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your study abroad goals, preferred courses, or any specific questions..."
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="mt-1.5"
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full sm:w-auto">
                          Submit Inquiry
                          <Send className="h-4 w-4" />
                        </Button>

                        <p className="text-xs text-gray-500">
                          By submitting this form, you agree to our privacy policy. 
                          We'll never share your information with third parties.
                        </p>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Gallery - REPLACE WITH YOUR IMAGES */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Meet Our Expert Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Experienced counselors dedicated to helping you achieve your study abroad goals
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600", name: "Rajesh Kumar", role: "Senior Counselor" },
              { image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600", name: "Priya Sharma", role: "Visa Specialist" },
              { image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600", name: "Amit Patel", role: "Academic Advisor" },
              { image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600", name: "Sneha Reddy", role: "Document Expert" },
              { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600", name: "Karthik Nair", role: "UK Specialist" },
              { image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600", name: "Lakshmi Iyer", role: "USA Specialist" },
              { image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600", name: "Rohan Desai", role: "Canada Specialist" },
              { image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600", name: "Anjali Menon", role: "Australia Specialist" },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                className="group text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4">
                  <div className="aspect-square relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-primary-600 mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, value: "15+", label: "Expert Counselors" },
              { icon: Award, value: "10+ Years", label: "Industry Experience" },
              { icon: Building2, value: "3+", label: "Office Locations" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center p-6 rounded-2xl bg-gray-50"
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

      {/* Office Interiors Gallery - REPLACE WITH YOUR IMAGES */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Office & Facilities
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A welcoming space designed for your comfort and success
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600", caption: "Reception Area" },
              { image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600", caption: "Consultation Rooms" },
              { image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600", caption: "Team Workspace" },
              { image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600", caption: "Resource Library" },
              { image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600", caption: "Meeting Room" },
              { image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600", caption: "Open Office Space" },
              { image: "https://images.unsplash.com/photo-1560439513-74b037a25d84?w=600", caption: "Counselor Desk" },
              { image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=600", caption: "Waiting Lounge" },
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

      {/* Map Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.397476289037!2d78.5311!3d17.3699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKothapet%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="UCAN FLY Office Location"
              className="grayscale hover:grayscale-0 transition-all duration-300"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <span className="ml-4 flex-shrink-0">
                    {expandedFaq === index ? (
                      <span className="text-2xl text-primary-600">âˆ’</span>
                    ) : (
                      <span className="text-2xl text-gray-400">+</span>
                    )}
                  </span>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

