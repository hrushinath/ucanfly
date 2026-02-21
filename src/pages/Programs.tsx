import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle, GraduationCap, Briefcase, DollarSign, Globe, MapPin, Users, Award } from "lucide-react";
import { Button, Card, CardContent, Badge } from "@/components/ui";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { destinations } from "@/data/destinationData";

export function ProgramsPage() {

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

export function DestinationDetailPage() {
  const { id } = useParams<{ id: string }>();
  const destination = destinations.find((d) => d.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!destination) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4">
        <h1 className="text-3xl font-bold text-gray-900">Destination Not Found</h1>
        <p className="text-gray-600">The destination you are looking for does not exist.</p>
        <Link to="/programs">
          <Button>
            <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
            Back to All Destinations
          </Button>
        </Link>
      </main>
    );
  }

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={destination.image} alt={destination.country} className="w-full h-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/programs" className="inline-flex items-center gap-2 text-primary-200 hover:text-white transition-colors mb-6 text-sm">
              <ArrowRight className="h-4 w-4 rotate-180" />
              All Destinations
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Study in {destination.country}
            </h1>
            <p className="mt-4 text-xl text-primary-100">{destination.tagline}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" variant="white">
                  Apply Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 bg-transparent">
                  Get Free Counseling
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Destination Hero Image */}
          <motion.div
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={destination.image}
              alt={`Study in ${destination.country}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-8">
              <p className="text-2xl font-bold text-white">{destination.country}</p>
              <p className="text-gray-200">{destination.tagline}</p>
            </div>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-3">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <p className="text-lg leading-relaxed text-gray-600">{destination.description}</p>
              </motion.div>

              {/* Highlights */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">Why Choose {destination.country}?</h2>
                <ul className="space-y-3">
                  {destination.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary-600 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Popular Programs */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">Popular Programs</h2>
                <div className="flex flex-wrap gap-3">
                  {destination.popular.map((program) => (
                    <span key={program} className="rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
                      {program}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Featured Universities */}
              {destination.universityImages && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-5">Featured Universities</h2>
                  <div className="grid grid-cols-3 gap-4">
                    {destination.universityImages.map((uni, idx) => (
                      <div key={idx} className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                        <div className="aspect-video">
                          <img src={uni.image} alt={uni.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <p className="text-white text-sm font-semibold">{uni.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Popular Cities */}
              {destination.cityImages && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary-600" />
                    Popular Study Cities
                  </h2>
                  <div className="grid grid-cols-3 gap-4">
                    {destination.cityImages.map((city, idx) => (
                      <motion.div
                        key={idx}
                        className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="aspect-[4/3]">
                          <img src={city.image} alt={city.name} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
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
                </motion.div>
              )}

              {/* Entry Requirements */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">Entry Requirements</h2>
                <ul className="space-y-2">
                  {destination.requirements.map((req) => (
                    <li key={req} className="flex items-center gap-2 text-gray-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-600 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
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
                    <Button className="w-full">Get Free Counseling</Button>
                  </Link>
                  <Link to="/programs" className="block">
                    <Button variant="outline" className="w-full">All Destinations</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Ready to Study in {destination.country}?
              </h2>
              <p className="mt-2 text-primary-100">
                Our expert counselors will guide you through every step of the process.
              </p>
            </div>
            <Link to="/contact">
              <Button size="lg" variant="white">
                Book Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

