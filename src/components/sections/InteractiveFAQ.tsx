import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "How do I start my study abroad journey?",
        answer: "Begin with a free profile evaluation. Our counselors will assess your academic background, career goals, and preferences to recommend the best study destinations and universities. Book a consultation online or visit our office.",
      },
      {
        question: "Which countries can I apply to through UCanFly?",
        answer: "We assist students for 22+ countries including USA, UK, Canada, Australia, New Zealand, Germany, Ireland, France, Netherlands, Singapore, and more. We have partnerships with 500+ universities worldwide.",
      },
      {
        question: "How much does your service cost?",
        answer: "We offer various service packages to suit different needs. Basic counseling starts from affordable rates, while comprehensive packages include end-to-end support. Contact us for detailed pricing. Many services are included for free with application packages.",
      },
    ],
  },
  {
    category: "Applications",
    questions: [
      {
        question: "How long does the application process take?",
        answer: "The timeline varies by country and university, but typically takes 3-6 months from application submission to receiving an offer letter. We recommend starting 8-12 months before your intended intake to allow time for preparations, exams, and visa processing.",
      },
      {
        question: "What documents do I need for my application?",
        answer: "Common requirements include: academic transcripts, English proficiency test scores (IELTS/TOEFL/PTE), letters of recommendation, statement of purpose, resume/CV, passport copy, and financial documents. Specific requirements vary by university and program.",
      },
      {
        question: "Can you help with scholarship applications?",
        answer: "Yes! We guide students through scholarship opportunities including merit-based, need-based, and university-specific scholarships. We help identify suitable scholarships and assist with application essays and documentation.",
      },
    ],
  },
  {
    category: "Visa & Finance",
    questions: [
      {
        question: "What is your visa success rate?",
        answer: "We maintain a 98% visa success rate across all destinations. Our experienced team provides thorough visa documentation support, mock interviews, and guidance to maximize your chances of approval.",
      },
      {
        question: "How much money do I need to show for visa?",
        answer: "Financial requirements vary by country: USA typically requires proof of funds for first year tuition + living expenses (~$50,000-80,000), UK requires tuition + 9 months living expenses (~Â£30,000-40,000), Canada requires GIC (~CAD 20,635) + first year tuition. We provide country-specific guidance.",
      },
      {
        question: "Can you help with education loans?",
        answer: "Yes, we partner with leading banks and NBFCs to facilitate education loans. We assist with loan documentation, collateral requirements, and connecting you with lenders offering competitive interest rates for international education.",
      },
    ],
  },
  {
    category: "After Admission",
    questions: [
      {
        question: "What support do you provide after I get admission?",
        answer: "Our support continues with visa application, pre-departure orientation, travel arrangements, accommodation guidance, forex assistance, and post-landing support including airport pickup coordination, settling-in help, and ongoing counseling.",
      },
      {
        question: "Can I work while studying abroad?",
        answer: "Yes, most countries allow part-time work for international students: USA (20 hours/week on-campus), UK (20 hours/week during term), Canada (20 hours/week), Australia (48 hours/fortnight). We provide guidance on work rights and job opportunities.",
      },
      {
        question: "What about permanent residency options?",
        answer: "Countries like Canada, Australia, New Zealand, and Germany offer clear pathways to PR for international graduates. Post-study work visas duration varies: Canada (up to 3 years), Australia (2-4 years), UK (2 years). We provide guidance on immigration pathways.",
      },
    ],
  },
];

export function InteractiveFAQ() {
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const currentQuestions = faqData.find(cat => cat.category === selectedCategory)?.questions || [];

  const toggleQuestion = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mx-auto max-w-3xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="h-8 w-8 text-primary-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
              FAQ
            </span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about studying abroad. 
            Can't find what you're looking for? Contact our counselors.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          {/* Category Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {faqData.map((category) => (
              <motion.button
                key={category.category}
                onClick={() => {
                  setSelectedCategory(category.category);
                  setExpandedQuestion(null);
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category.category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.category}
              </motion.button>
            ))}
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {currentQuestions.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedQuestion === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {expandedQuestion === index ? (
                      <Minus className="h-6 w-6 text-primary-600" />
                    ) : (
                      <Plus className="h-6 w-6 text-primary-600" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedQuestion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="h-px bg-gray-200 mb-4"></div>
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            className="mt-12 text-center bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="text-primary-100 mb-6">
              Our expert counselors are here to help you with personalized guidance
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg"
              >
                Book Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Chat with Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

