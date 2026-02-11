import { Link } from "react-router-dom";
import { ArrowRight, MapPin, School, TrendingUp, DollarSign } from "lucide-react";
import { Card, CardContent, Button } from "@/components/ui";
import { motion } from "framer-motion";
import { useState } from "react";

const destinations = [
  {
    id: "uk",
    country: "United Kingdom",
    // flag removed
    tagline: "Home of World-Class Education",
    description: "Study at prestigious universities like Oxford, Cambridge, and Imperial College. Experience rich culture and history while earning globally recognized degrees.",
    universities: "150+ Partner Universities",
    popular: ["Business", "Engineering", "Arts", "Medicine"],
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800", // London/UK campus image
    avgTuition: "Â£15,000 - Â£38,000/year",
    popularCities: ["London", "Oxford", "Cambridge", "Edinburgh"],
  },
  {
    id: "usa",
    country: "United States",
    // flag removed
    tagline: "Land of Opportunities",
    description: "Access cutting-edge research facilities and diverse academic programs. Build a global network and explore endless career opportunities in the world's largest economy.",
    universities: "200+ Partner Universities",
    popular: ["STEM", "Business", "Healthcare", "Arts"],
    image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=800", // US campus image
    avgTuition: "$20,000 - $55,000/year",
    popularCities: ["New York", "Boston", "California", "Texas"],
  },
  {
    id: "canada",
    country: "Canada",
    // flag removed
    tagline: "Quality Education, Great Lifestyle",
    description: "Enjoy affordable education with excellent post-study work options. Canada welcomes international students with pathways to permanent residency.",
    universities: "100+ Partner Universities",
    popular: ["IT", "Healthcare", "Engineering", "Business"],
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800", // Canadian campus image
    avgTuition: "CAD 15,000 - 35,000/year",
    popularCities: ["Toronto", "Vancouver", "Montreal", "Calgary"],
  },
  {
    id: "australia",
    country: "Australia",
    // flag removed
    tagline: "Innovation Meets Adventure",
    description: "World-renowned universities in stunning locations. Benefit from a strong economy, multicultural society, and excellent work opportunities for students.",
    universities: "80+ Partner Universities",
    popular: ["Engineering", "Medicine", "Business", "IT"],
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800", // Sydney/Australian campus
    avgTuition: "AUD 20,000 - 45,000/year",
    popularCities: ["Sydney", "Melbourne", "Brisbane", "Perth"],
  },
  {
    id: "new-zealand",
    country: "New Zealand",
    // flag removed
    tagline: "Learn in Paradise",
    description: "Quality British-style education in a safe, friendly environment. Experience breathtaking landscapes while building your international career.",
    universities: "30+ Partner Universities",
    popular: ["Agriculture", "Tourism", "IT", "Healthcare"],
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800", // New Zealand landscape/campus
    avgTuition: "NZD 22,000 - 32,000/year",
    popularCities: ["Auckland", "Wellington", "Christchurch"],
  },
  {
    id: "europe",
    country: "Europe",
    // flag removed
    tagline: "Diverse Culture, Rich Heritage",
    description: "Study in Germany, France, Ireland, and more. Many programs offer affordable or free education with exposure to multiple cultures and languages.",
    universities: "150+ Partner Universities",
    popular: ["Engineering", "Arts", "Business", "Sciences"],
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800", // European city/campus
    avgTuition: "â‚¬0 - â‚¬20,000/year",
    popularCities: ["Berlin", "Paris", "Amsterdam", "Dublin"],
  },
];

export function Programs() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("All");
  
  const popularFields = ["All", "Business", "Engineering", "IT", "Medicine", "Arts"];
  
  return (
    <section className="bg-white py-20 lg:py-28">
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
            Study Destinations
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose Your Dream Destination
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore top study abroad destinations and find the perfect country 
            for your academic journey. We partner with leading universities worldwide.
          </p>
        </motion.div>

        {/* Interactive Filter Buttons */}
        <motion.div 
          className="mt-12 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {popularFields.map((field) => (
            <button
              key={field}
              onClick={() => setSelectedFilter(field)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedFilter === field
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {field}
            </button>
          ))}
        </motion.div>

        {/* Destinations Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinations
            .filter(dest => selectedFilter === "All" || dest.popular.includes(selectedFilter))
            .map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer h-full"
                onClick={() => setExpandedCard(expandedCard === destination.id ? null : destination.id)}
              >
                {/* Destination Image - REPLACE WITH YOUR IMAGES */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img 
                    src={destination.image}
                    alt={`Study in ${destination.country}`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    {/* flag removed */}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">
                      {destination.country}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {destination.tagline}
                    </p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-sm leading-relaxed text-gray-600 mb-4">
                    {destination.description}
                  </p>

                  {/* Quick Info Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <School className="h-4 w-4 text-primary-600" />
                        <span className="text-xs font-medium text-gray-600">Universities</span>
                      </div>
                      <p className="text-sm font-semibold text-gray-900">{destination.universities}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <DollarSign className="h-4 w-4 text-primary-600" />
                        <span className="text-xs font-medium text-gray-600">Avg. Tuition</span>
                      </div>
                      <p className="text-xs font-semibold text-gray-900">{destination.avgTuition}</p>
                    </div>
                  </div>

                  {/* Popular Fields */}
                  <div className="mb-4">
                    <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                      Popular Fields
                    </span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {destination.popular.map((field) => (
                        <span
                          key={field}
                          className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 hover:bg-primary-100 transition-colors"
                        >
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Section */}
                  <motion.div
                    initial={false}
                    animate={{ height: expandedCard === destination.id ? 'auto' : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-gray-200">
                      <div className="mb-3">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="h-4 w-4 text-primary-600" />
                          <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                            Popular Cities
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {destination.popularCities.map((city) => (
                            <span key={city} className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                              {city}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* CTA */}
                  <Link
                    to={`/programs#${destination.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="mt-4 flex items-center justify-center gap-2 w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors group"
                  >
                    Explore Programs
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link to="/programs">
            <Button size="lg">
              View All Destinations
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

