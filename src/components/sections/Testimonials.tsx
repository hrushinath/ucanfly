import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "MS Computer Science, USA",
    university: "Stanford University",
    image: null,
    quote: "UCAN FLY made my dream of studying at Stanford a reality. Their guidance on SOP writing and visa interview preparation was exceptional. I couldn't have done it without them!",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "MBA, UK",
    university: "London Business School",
    image: null,
    quote: "The team's in-depth knowledge of UK universities helped me secure admission to LBS with a scholarship. Their personalized approach sets them apart from other consultants.",
    rating: 5,
  },
  {
    name: "Anjali Reddy",
    role: "Bachelor of Engineering, Canada",
    university: "University of Toronto",
    image: null,
    quote: "From university selection to visa approval, UCAN FLY was with me every step. Their 24/7 support gave me confidence throughout the process. Highly recommend!",
    rating: 5,
  },
  {
    name: "Karthik Menon",
    role: "MS Data Science, Australia",
    university: "University of Melbourne",
    image: null,
    quote: "The education loan guidance and scholarship support from UCAN FLY helped me fund my education. They truly care about making study abroad accessible.",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "Master's in Management, Germany",
    university: "TU Munich",
    image: null,
    quote: "I was confused about blocked account requirements for Germany. UCAN FLY simplified everything and even helped me find accommodation before landing!",
    rating: 5,
  },
  {
    name: "Arjun Krishnan",
    role: "PhD in Biotechnology, New Zealand",
    university: "University of Auckland",
    image: null,
    quote: "Their expertise in research program applications is outstanding. They connected me with the right professors and helped craft a compelling research proposal.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join thousands of students who achieved their study abroad dreams with UCAN FLY. 
            Here's what they have to say about their journey with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-10 w-10 text-primary-100" />

                {/* Rating */}
                <div className="mt-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mt-4 text-gray-600 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="mt-6 flex items-center gap-4 border-t border-gray-100 pt-6">
                  {/* Avatar */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-primary-600 font-medium">
                      {testimonial.university}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

