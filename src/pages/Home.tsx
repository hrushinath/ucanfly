import {
  Hero,
  Stats,
  Services,
  WhyChooseUs,
  Programs,
  UniversityShowcase,
  HowItWorks,
  Testimonials,
  GoogleReviews,
  CountryComparison,
  InteractiveFAQ,
  ContactCTA,
} from "@/components/sections";

export function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <Programs />
      <UniversityShowcase />
      <WhyChooseUs />
      <HowItWorks />
      <CountryComparison />
      <Testimonials />
      <GoogleReviews />
      <InteractiveFAQ />
      <ContactCTA />
    </main>
  );
}

