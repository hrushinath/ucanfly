import { motion } from "framer-motion";
import { useState } from "react";
import { Star, MapPin, Award, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui";

// REPLACE THESE WITH YOUR ACTUAL UNIVERSITY IMAGES AND DATA
const universities = [
  {
    id: 1,
    name: "University of Oxford",
    country: "United Kingdom",
    flag: "ðŸ‡¬ðŸ‡§",
    image: "https://images.unsplash.com/photo-1583225214464-9296029427aa?w=800",
    ranking: "#2 World Ranking",
    students: "24,000+ Students",
    programs: "100+ Programs",
    acceptance: "17% Acceptance Rate",
  },
  {
    id: 2,
    name: "Harvard University",
    country: "United States",
    flag: "ðŸ‡ºðŸ‡¸",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
    ranking: "#3 World Ranking",
    students: "31,000+ Students",
    programs: "150+ Programs",
    acceptance: "5% Acceptance Rate",
  },
  {
    id: 3,
    name: "University of Toronto",
    country: "Canada",
    flag: "ðŸ‡¨ðŸ‡¦",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800",
    ranking: "#34 World Ranking",
    students: "91,000+ Students",
    programs: "700+ Programs",
    acceptance: "43% Acceptance Rate",
  },
  {
    id: 4,
    name: "University of Melbourne",
    country: "Australia",
    flag: "ðŸ‡¦ðŸ‡º",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800",
    ranking: "#37 World Ranking",
    students: "51,000+ Students",
    programs: "200+ Programs",
    acceptance: "70% Acceptance Rate",
  },
  {
    id: 5,
    name: "ETH Zurich",
    country: "Switzerland",
    flag: "ðŸ‡¨ðŸ‡­",
    image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800",
    ranking: "#9 World Ranking",
    students: "24,000+ Students",
    programs: "100+ Programs",
    acceptance: "27% Acceptance Rate",
  },
  {
    id: 6,
    name: "National University of Singapore",
    country: "Singapore",
    flag: "ðŸ‡¸ðŸ‡¬",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800",
    ranking: "#11 World Ranking",
    students: "40,000+ Students",
    programs: "80+ Programs",
    acceptance: "5% Acceptance Rate",
  },
];

export function UniversityShowcase() {
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-28">
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
            Partner Universities
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Study at World's Best Universities
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We partner with 500+ top-ranked universities worldwide. 
            Get expert guidance for admission to your dream institution.
          </p>
        </motion.div>

        {/* University Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {universities.map((university, index) => (
            <motion.div
              key={university.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -10 }}
            >
              <Card
                className="group overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedUniversity(selectedUniversity === university.id ? null : university.id)}
              >
                {/* University Image - REPLACE WITH YOUR IMAGES */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={university.image}
                    alt={university.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Country Flag */}
                  <div className="absolute top-4 right-4 text-4xl bg-white/90 rounded-full p-2 shadow-lg">
                    {university.flag}
                  </div>
                  
                  {/* Ranking Badge */}
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    {university.ranking}
                  </div>
                  
                  {/* University Name */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {university.name}
                    </h3>
                    <div className="flex items-center gap-1 text-gray-200 text-sm">
                      <MapPin className="h-4 w-4" />
                      {university.country}
                    </div>
                  </div>
                </div>

                {/* University Details */}
                <div className="p-5 bg-white">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Students</p>
                      <p className="text-sm font-semibold text-gray-900">{university.students}</p>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-600 mb-1">Programs</p>
                      <p className="text-sm font-semibold text-gray-900">{university.programs}</p>
                    </div>
                  </div>
                  
                  {/* Expandable Details */}
                  <motion.div
                    initial={false}
                    animate={{ height: selectedUniversity === university.id ? 'auto' : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-600">Acceptance Rate</span>
                        <span className="text-sm font-semibold text-primary-600">{university.acceptance}</span>
                      </div>
                      <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 text-sm font-semibold">
                        Apply Now
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-600 mb-4">Explore more universities from our network of 500+ partners</p>
          <button className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl">
            View All Partner Universities
          </button>
        </motion.div>
      </div>
    </section>
  );
}

