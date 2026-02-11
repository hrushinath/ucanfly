import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, GraduationCap, Briefcase, DollarSign, Globe, MapPin, Users, Award } from "lucide-react";
import { Button, Card, CardContent, Badge } from "@/components/ui";
import { motion } from "framer-motion";
import { useState } from "react";

const destinations = [
  {
    id: "uk",
    country: "United Kingdom",
    // flag removed
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200",
    tagline: "Home of World-Class Education",
    cityImages: [
      { name: "London", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600" },
      { name: "Oxford", image: "https://images.unsplash.com/photo-1583225214464-9296029427aa?w=600" },
      { name: "Cambridge", image: "https://images.unsplash.com/photo-1581367439862-6d6e6e971921?w=600" },
    ],
    universityImages: [
      { name: "Oxford University", image: "https://images.unsplash.com/photo-1583225214464-9296029427aa?w=400" },
      { name: "Cambridge University", image: "https://images.unsplash.com/photo-1581367439862-6d6e6e971921?w=400" },
      { name: "Imperial College", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400" },
    ],
    description: "The United Kingdom has a rich academic heritage with some of the world's oldest and most prestigious universities. From the historic halls of Oxford and Cambridge to modern research institutions, the UK offers exceptional education across all disciplines.",
    highlights: [
      "World-renowned universities with global recognition",
      "1-2 year master's programs (shorter than most countries)",
      "Graduate Route visa for 2 years post-study work",
      "Rich cultural experience and travel opportunities",
    ],
    stats: {
      universities: "150+",
      avgTuition: "Â£15,000 - Â£35,000/year",
      workPermit: "20 hrs/week during studies",
      postStudy: "2 years",
    },
    popular: ["Business & Management", "Engineering", "Law", "Medicine", "Arts & Design"],
    requirements: [
      "IELTS 6.0-7.0 or equivalent",
      "Bachelor's degree for PG programs",
      "Statement of Purpose",
      "Letters of Recommendation",
      "Financial documentation",
    ],
  },
  {
    id: "usa",
    country: "United States",
    // flag removed
    image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=1200",
    tagline: "Land of Opportunities",
    cityImages: [
      { name: "New York", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600" },
      { name: "San Francisco", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600" },
      { name: "Boston", image: "https://images.unsplash.com/photo-1554488877-2215e31c6a5a?w=600" },
    ],
    universityImages: [
      { name: "Harvard", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400" },
      { name: "MIT", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400" },
      { name: "Stanford", image: "https://images.unsplash.com/photo-1592280332281-2f3e2d30d398?w=400" },
    ],
    description: "The United States is home to some of the most innovative and diverse higher education institutions in the world. With cutting-edge research facilities, flexible curriculum options, and extensive networking opportunities, studying in the USA opens doors to global careers.",
    highlights: [
      "Flexibility to change majors and explore subjects",
      "World-leading research and innovation",
      "Extensive scholarship opportunities",
      "OPT and STEM OPT work authorization",
    ],
    stats: {
      universities: "200+",
      avgTuition: "$20,000 - $55,000/year",
      workPermit: "20 hrs/week on campus",
      postStudy: "1-3 years (OPT/STEM)",
    },
    popular: ["STEM", "Business Administration", "Computer Science", "Healthcare", "Finance"],
    requirements: [
      "TOEFL 80-100 or IELTS 6.5-7.5",
      "GRE/GMAT for graduate programs",
      "Statement of Purpose",
      "Letters of Recommendation",
      "Financial proof (I-20 requirement)",
    ],
  },
  {
    id: "canada",
    country: "Canada",
    // flag removed
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200",
    tagline: "Quality Education, Great Lifestyle",
    cityImages: [
      { name: "Toronto", image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600" },
      { name: "Vancouver", image: "https://images.unsplash.com/photo-1559511260-66a654ae982a?w=600" },
      { name: "Montreal", image: "https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?w=600" },
    ],
    universityImages: [
      { name: "University of Toronto", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400" },
      { name: "UBC", image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400" },
      { name: "McGill", image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=400" },
    ],
    description: "Canada combines world-class education with excellent quality of life and welcoming immigration policies. Known for its diverse, multicultural society and safe cities, Canada offers outstanding value for international students with pathways to permanent residency.",
    highlights: [
      "Affordable tuition compared to US/UK",
      "Post-Graduation Work Permit (PGWP) up to 3 years",
      "Pathway to Permanent Residency",
      "Safe, multicultural, and welcoming society",
    ],
    stats: {
      universities: "100+",
      avgTuition: "CAD 15,000 - 35,000/year",
      workPermit: "20 hrs/week during studies",
      postStudy: "Up to 3 years",
    },
    popular: ["Information Technology", "Business Analytics", "Engineering", "Healthcare", "Hospitality"],
    requirements: [
      "IELTS 6.0-6.5 or equivalent",
      "Academic transcripts",
      "Statement of Purpose",
      "Proof of funds (GIC + tuition)",
      "Medical examination",
    ],
  },
  {
    id: "australia",
    country: "Australia",
    // flag removed
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200",
    tagline: "Innovation Meets Adventure",
    cityImages: [
      { name: "Sydney", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600" },
      { name: "Melbourne", image: "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=600" },
      { name: "Brisbane", image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600" },
    ],
    universityImages: [
      { name: "University of Melbourne", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400" },
      { name: "Sydney University", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400" },
      { name: "ANU", image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400" },
    ],
    description: "Australia offers a unique combination of high-quality education, stunning natural beauty, and excellent post-study work opportunities. With a strong economy and high standard of living, Australian qualifications are recognized and respected worldwide.",
    highlights: [
      "8 universities in world's top 100",
      "Generous post-study work rights",
      "High quality of life and safety",
      "Stunning natural environment",
    ],
    stats: {
      universities: "80+",
      avgTuition: "AUD 20,000 - 45,000/year",
      workPermit: "48 hrs/fortnight",
      postStudy: "2-4 years",
    },
    popular: ["Engineering", "Nursing & Healthcare", "Business", "IT & Data Science", "Environmental Science"],
    requirements: [
      "IELTS 6.0-7.0 or PTE 50-65",
      "Academic qualifications",
      "Genuine Temporary Entrant (GTE)",
      "Financial capacity proof",
      "Health insurance (OSHC)",
    ],
  },
  {
    id: "new-zealand",
    country: "New Zealand",
    // flag removed
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1200",
    tagline: "Learn in Paradise",
    cityImages: [
      { name: "Auckland", image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600" },
      { name: "Wellington", image: "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?w=600" },
      { name: "Christchurch", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600" },
    ],
    universityImages: [
      { name: "University of Auckland", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400" },
      { name: "Victoria University", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400" },
      { name: "University of Otago", image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=400" },
    ],
    description: "New Zealand offers quality British-style education in one of the world's most beautiful and safest countries. With a practical, hands-on approach to learning and strong industry connections, NZ is perfect for students seeking a balanced lifestyle.",
    highlights: [
      "Safe, peaceful, and welcoming",
      "Practical, hands-on education approach",
      "Post-study work visa up to 3 years",
      "Stunning natural environment",
    ],
    stats: {
      universities: "30+",
      avgTuition: "NZD 22,000 - 35,000/year",
      workPermit: "20 hrs/week",
      postStudy: "1-3 years",
    },
    popular: ["Agriculture & Viticulture", "Tourism & Hospitality", "IT", "Healthcare", "Environmental Science"],
    requirements: [
      "IELTS 6.0-6.5 or equivalent",
      "Academic transcripts",
      "Statement of Purpose",
      "Financial documentation",
      "Health and character certificates",
    ],
  },
  {
    id: "europe",
    country: "Europe",
    // flag removed
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200",
    tagline: "Diverse Culture, Rich Heritage",
    cityImages: [
      { name: "Berlin, Germany", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600" },
      { name: "Paris, France", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600" },
      { name: "Amsterdam", image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=600" },
    ],
    universityImages: [
      { name: "TU Munich", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400" },
      { name: "Sorbonne Paris", image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=400" },
      { name: "TU Delft", image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400" },
    ],
    description: "Europe offers diverse study options across multiple countries, from tuition-free education in Germany to world-class business schools in France. Experience rich culture, multiple languages, and easy travel while earning internationally recognized degrees.",
    highlights: [
      "Low or no tuition fees in many countries",
      "Exposure to multiple cultures and languages",
      "Easy travel across Schengen countries",
      "Strong industry connections in Germany, Netherlands",
    ],
    stats: {
      universities: "150+",
      avgTuition: "â‚¬0 - â‚¬20,000/year",
      workPermit: "Varies by country",
      postStudy: "6-18 months",
    },
    popular: ["Engineering (Germany)", "Business (France/Netherlands)", "Arts (Italy)", "Medicine (Eastern Europe)", "Sciences"],
    requirements: [
      "IELTS/TOEFL or local language proof",
      "APS certificate (for Germany)",
      "Blocked account (Germany)",
      "Academic documents",
      "Country-specific requirements",
    ],
  },
];

export function ProgramsPage() {
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <main>
      {/* Hero Section with Image Gallery */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-20 lg:py-28 overflow-hidden">
        {/* Background Images Collage - REPLACE WITH YOUR IMAGES */}
        <div className="absolute inset-0 grid grid-cols-6 gap-2 opacity-10">
          {[
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400",
            "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400",
            "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400",
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400",
            "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=400",
            "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400",
          ].map((img, i) => (
            <div key={i} className="h-full">
              <img src={img} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                22+ Countries Available
              </Badge>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Study Abroad Destinations
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-100">
                Explore our comprehensive guide to top study destinations worldwide. 
                Find the perfect country for your academic journey with detailed information 
                on universities, costs, requirements, and opportunities.
              </p>
            </motion.div>
          </div>
          
          {/* Quick Country Navigation with Images */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {destinations.slice(0, 6).map((dest, index) => (
              <motion.a
                key={dest.id}
                href={`#${dest.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={dest.country}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <div className="text-2xl mb-1">{dest.flag}</div>
                             {/* flag removed */}
                  <p className="text-white text-sm font-semibold">{dest.country}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {destinations.map((destination, index) => (
              <div
                key={destination.id}
                id={destination.id}
                className="scroll-mt-24"
              >
                {/* Destination Hero Image - REPLACE WITH YOUR IMAGES */}
                <motion.div 
                  className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img 
                    src={destination.image} 
                    alt={`Study in ${destination.country}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-6xl">{destination.flag}</span>
                                 {/* flag removed */}
                      <div>
                        <h2 className="text-4xl font-bold text-white">
                          Study in {destination.country}
                        </h2>
                        <p className="text-xl text-gray-200">{destination.tagline}</p>
                      </div>
                    </div>
                    <Link to="/contact">
                      <Button size="lg" variant="white">
                        Apply Now
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>

                {/* Content Grid */}
                <div className="mt-10 grid gap-8 lg:grid-cols-3">
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-8">
                    <p className="text-lg leading-relaxed text-gray-600">
                      {destination.description}
                    </p>

                    {/* Highlights */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Why Choose {destination.country}?</h3>
                      <ul className="mt-4 space-y-3">
                        {destination.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-3 text-gray-600">
                            <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary-600 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Popular Programs */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Popular Programs</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {destination.popular.map((program) => (
                          <span
                            key={program}
                            className="rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700"
                          >
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Popular Universities Gallery - REPLACE WITH YOUR IMAGES */}
                    {destination.universityImages && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Featured Universities</h3>
                        <div className="mt-4 grid grid-cols-3 gap-4">
                          {destination.universityImages.map((uni, idx) => (
                            <motion.div
                              key={idx}
                              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
                              whileHover={{ y: -5 }}
                            >
                              <div className="aspect-video">
                                <img 
                                  src={uni.image} 
                                  alt={uni.name}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 p-3">
                                <p className="text-white text-sm font-semibold">{uni.name}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Popular Cities Gallery - REPLACE WITH YOUR IMAGES */}
                    {destination.cityImages && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-primary-600" />
                          Popular Study Cities
                        </h3>
                        <div className="mt-4 grid grid-cols-3 gap-4">
                          {destination.cityImages.map((city, idx) => (
                            <motion.div
                              key={idx}
                              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <div className="aspect-[4/3]">
                                <img 
                                  src={city.image} 
                                  alt={city.name}
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                              </div>
                              <div className="absolute inset-0 flex items-end p-4">
                                <div className="text-white">
                                  <p className="font-bold text-lg">{city.name}</p>
                                  <p className="text-sm text-gray-200">Study Destination</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Requirements */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Entry Requirements</h3>
                      <ul className="mt-4 space-y-2">
                        {destination.requirements.map((req) => (
                          <li key={req} className="flex items-center gap-2 text-gray-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary-600"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Stats Sidebar */}
                  <div>
                    <Card className="sticky top-24">
                      <CardContent className="p-6 space-y-6">
                        <h3 className="text-lg font-semibold text-gray-900">Quick Facts</h3>
                        
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                              <GraduationCap className="h-5 w-5 text-primary-600" />
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Partner Universities</div>
                              <div className="font-semibold text-gray-900">{destination.stats.universities}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                              <DollarSign className="h-5 w-5 text-primary-600" />
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Avg. Tuition</div>
                              <div className="font-semibold text-gray-900">{destination.stats.avgTuition}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                              <Briefcase className="h-5 w-5 text-primary-600" />
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Work During Study</div>
                              <div className="font-semibold text-gray-900">{destination.stats.workPermit}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                              <Globe className="h-5 w-5 text-primary-600" />
                            </div>
                            <div>
                              <div className="text-sm text-gray-500">Post-Study Work</div>
                              <div className="font-semibold text-gray-900">{destination.stats.postStudy}</div>
                            </div>
                          </div>
                        </div>

                        <Link to="/contact" className="block">
                          <Button className="w-full">
                            Get Free Counseling
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {index < destinations.length - 1 && (
                  <div className="mt-16 border-b border-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life Gallery - REPLACE WITH YOUR IMAGES */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Life as an International Student
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See what studying abroad looks like through the eyes of our successful students
            </p>
          </motion.div>

          {/* Image Grid Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600", caption: "Graduation Day" },
              { image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600", caption: "Campus Life" },
              { image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600", caption: "Group Study" },
              { image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600", caption: "Campus Tour" },
              { image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600", caption: "Conference" },
              { image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600", caption: "Studying" },
              { image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600", caption: "Library" },
              { image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600", caption: "Team Work" },
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
                  <p className="text-white font-semibold">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Banner with Icons */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Users, value: "10,000+", label: "Students Placed" },
              { icon: GraduationCap, value: "500+", label: "Universities" },
              { icon: Globe, value: "22+", label: "Countries" },
              { icon: Award, value: "98%", label: "Visa Success" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
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
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Not Sure Which Country to Choose?
              </h2>
              <p className="mt-2 text-primary-100">
                Our expert counselors can help you find the perfect destination based on your profile.
              </p>
            </div>
            <Link to="/contact">
              <Button size="lg" variant="white">
                Get Expert Guidance
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

