import { motion } from "framer-motion";
import { useState } from "react";
import { Check, X, DollarSign, Clock, Briefcase, Home, GraduationCap, TrendingUp, Globe } from "lucide-react";
import { Card } from "@/components/ui";

const countries = [
  {
    id: "usa",
    name: "United States",
    // flag removed
    image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=400",
    tuitionRange: "$20,000 - $55,000/year",
    livingCost: "$15,000 - $25,000/year",
    studyDuration: "2-4 years",
    workWhileStudy: "20 hrs/week on-campus",
    postStudyWork: "1-3 years OPT",
    prOpportunity: "H1B/EB pathway",
    popularCities: ["New York", "Boston", "California"],
    pros: ["World-class universities", "Diverse programs", "Research opportunities", "Global recognition"],
    cons: ["High tuition costs", "Visa complexity", "Healthcare expenses"],
    ranking: "Home to 50+ top universities",
  },
  {
    id: "uk",
    name: "United Kingdom",
    // flag removed
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400",
    tuitionRange: "Â£15,000 - Â£38,000/year",
    livingCost: "Â£12,000 - Â£18,000/year",
    studyDuration: "1-3 years",
    workWhileStudy: "20 hrs/week",
    postStudyWork: "2 years PSW",
    prOpportunity: "Skilled Worker visa",
    popularCities: ["London", "Oxford", "Edinburgh"],
    pros: ["Shorter duration", "Historic universities", "No IELTS for some", "Rich culture"],
    cons: ["Weather", "High city costs", "Brexit changes"],
    ranking: "4 universities in global top 10",
  },
  {
    id: "canada",
    name: "Canada",
    // flag removed
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400",
    tuitionRange: "CAD 15,000 - 35,000/year",
    livingCost: "CAD 12,000 - 18,000/year",
    studyDuration: "2-4 years",
    workWhileStudy: "20 hrs/week",
    postStudyWork: "Up to 3 years PGWP",
    prOpportunity: "Express Entry (High success)",
    popularCities: ["Toronto", "Vancouver", "Montreal"],
    pros: ["PR pathways", "Affordable", "Safe & multicultural", "Quality education"],
    cons: ["Cold weather", "Competitive admissions", "Remote locations"],
    ranking: "Top choice for quality of life",
  },
  {
    id: "australia",
    name: "Australia",
    // flag removed
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400",
    tuitionRange: "AUD 20,000 - 45,000/year",
    livingCost: "AUD 18,000 - 25,000/year",
    studyDuration: "2-4 years",
    workWhileStudy: "48 hrs/fortnight",
    postStudyWork: "2-4 years PSW",
    prOpportunity: "Skilled migration",
    popularCities: ["Sydney", "Melbourne", "Brisbane"],
    pros: ["Great lifestyle", "High wages", "Beautiful locations", "Research funding"],
    cons: ["Distance from home", "High living costs", "Strict visa rules"],
    ranking: "7 universities in top 100",
  },
  {
    id: "germany",
    name: "Germany",
    // flag removed
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400",
    tuitionRange: "â‚¬0 - â‚¬20,000/year",
    livingCost: "â‚¬10,000 - â‚¬12,000/year",
    studyDuration: "2-3 years",
    workWhileStudy: "20 hrs/week",
    postStudyWork: "18 months job search",
    prOpportunity: "Blue Card (EU work permit)",
    popularCities: ["Berlin", "Munich", "Frankfurt"],
    pros: ["Low/no tuition", "Strong economy", "Engineering excellence", "EU travel"],
    cons: ["German language", "Blocked account", "Bureaucracy"],
    ranking: "Free education at public universities",
  },
  {
    id: "ireland",
    name: "Ireland",
    // flag removed
    image: "https://images.unsplash.com/photo-1590086782792-42dd2350140d?w=400",
    tuitionRange: "â‚¬10,000 - â‚¬25,000/year",
    livingCost: "â‚¬10,000 - â‚¬15,000/year",
    studyDuration: "1-2 years",
    workWhileStudy: "20 hrs/week",
    postStudyWork: "1-2 years",
    prOpportunity: "Stamp 4 pathway",
    popularCities: ["Dublin", "Cork", "Galway"],
    pros: ["Tech hub", "English speaking", "Friendly people", "EU access"],
    cons: ["Limited universities", "Housing crisis", "Weather"],
    ranking: "European tech capital",
  },
];

export function CountryComparison() {
  const [selectedCountries, setSelectedCountries] = useState(["usa", "uk", "canada"]);

  const toggleCountry = (countryId) => {
    if (selectedCountries.includes(countryId)) {
      if (selectedCountries.length > 2) {
        setSelectedCountries(selectedCountries.filter(id => id !== countryId));
      }
    } else {
      if (selectedCountries.length < 3) {
        setSelectedCountries([...selectedCountries, countryId]);
      } else {
        setSelectedCountries([...selectedCountries.slice(1), countryId]);
      }
    }
  };

  const comparisonCountries = selectedCountries.map(id => countries.find(c => c.id === id));

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mx-auto max-w-3xl text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Compare Destinations
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Find Your Perfect Study Destination
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Compare costs, work opportunities, and immigration prospects across popular destinations.
            Select up to 3 countries to compare side-by-side.
          </p>
        </motion.div>

        {/* Country Selector */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {countries.map((country) => (
            <motion.button
              key={country.id}
              onClick={() => toggleCountry(country.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                selectedCountries.includes(country.id)
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* flag removed */}
              <span>{country.name}</span>
              {selectedCountries.includes(country.id) && (
                <Check className="h-4 w-4" />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[900px]">
            {/* Country Headers with Images */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider flex items-end pb-2">
                Criteria
              </div>
              {comparisonCountries.map((country) => (
                <motion.div
                  key={country.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative"
                >
                  <Card className="overflow-hidden">
                    {/* Country Image - REPLACE WITH YOUR IMAGES */}
                    <div className="relative h-32">
                      <img
                        src={country.image}
                        alt={country.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-3 left-3">
                        {/* flag removed */}
                        <h3 className="text-white font-bold">{country.name}</h3>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Comparison Rows */}
            <div className="space-y-3">
              {/* Tuition */}
              <ComparisonRow
                icon={<DollarSign className="h-5 w-5" />}
                label="Tuition Fees"
                values={comparisonCountries.map(c => c.tuitionRange)}
              />

              {/* Living Cost */}
              <ComparisonRow
                icon={<Home className="h-5 w-5" />}
                label="Living Cost"
                values={comparisonCountries.map(c => c.livingCost)}
              />

              {/* Duration */}
              <ComparisonRow
                icon={<Clock className="h-5 w-5" />}
                label="Study Duration"
                values={comparisonCountries.map(c => c.studyDuration)}
              />

              {/* Work Rights */}
              <ComparisonRow
                icon={<Briefcase className="h-5 w-5" />}
                label="Work While Study"
                values={comparisonCountries.map(c => c.workWhileStudy)}
              />

              {/* Post Study Work */}
              <ComparisonRow
                icon={<TrendingUp className="h-5 w-5" />}
                label="Post-Study Work"
                values={comparisonCountries.map(c => c.postStudyWork)}
              />

              {/* PR Opportunity */}
              <ComparisonRow
                icon={<Globe className="h-5 w-5" />}
                label="PR Pathway"
                values={comparisonCountries.map(c => c.prOpportunity)}
              />

              {/* Ranking */}
              <ComparisonRow
                icon={<GraduationCap className="h-5 w-5" />}
                label="Education Quality"
                values={comparisonCountries.map(c => c.ranking)}
              />
            </div>

            {/* Pros and Cons */}
            <div className="mt-8 grid grid-cols-4 gap-4">
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Pros & Cons
              </div>
              {comparisonCountries.map((country) => (
                <Card key={country.id} className="p-4">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-600 mb-2 flex items-center gap-1">
                      <Check className="h-4 w-4" />
                      Advantages
                    </h4>
                    <ul className="space-y-1">
                      {country.pros.map((pro, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-green-500 mt-0.5">â€¢</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-red-600 mb-2 flex items-center gap-1">
                      <X className="h-4 w-4" />
                      Challenges
                    </h4>
                    <ul className="space-y-1">
                      {country.cons.map((con, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                          <span className="text-red-500 mt-0.5">â€¢</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">
            Need help choosing the right destination for your profile?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
          >
            Get Personalized Counseling
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function ComparisonRow({ icon, label, values }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg p-3">
        <div className="text-primary-600">{icon}</div>
        {label}
      </div>
      {values.map((value, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: idx * 0.1 }}
          className="bg-white border border-gray-200 rounded-lg p-3 hover:border-primary-300 hover:shadow-md transition-all"
        >
          <p className="text-sm text-gray-900 font-medium">{value}</p>
        </motion.div>
      ))}
    </div>
  );
}

