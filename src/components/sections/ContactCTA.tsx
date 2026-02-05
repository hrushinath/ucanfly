import { useState } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { Button, Input, Label, Textarea, Card, CardContent } from "@/components/ui";

const interests = [
  "Study in UK",
  "Study in USA",
  "Study in Canada",
  "Study in Australia",
  "Study in Europe",
  "Other",
];

export function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-indigo-900 to-primary-800 py-20 lg:py-28">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-secondary-400 to-accent-400 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full blur-3xl animate-pulse-soft"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-white bg-white/10 backdrop-blur-sm rounded-full shadow-soft">
              Get Started Today
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl drop-shadow-lg">
              Ready to Begin Your Study Abroad Journey?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-primary-100">
              Take the first step towards your international education dream. 
              Fill out the form and our expert counselors will get in touch 
              with you within 24 hours for a free consultation.
            </p>

            {/* Contact Info */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4 text-primary-100 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-secondary-400 group-hover:to-accent-400 transition-all duration-300 shadow-soft group-hover:shadow-colored-secondary">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-primary-300">Call us at</div>
                  <a href="tel:8341531524" className="font-medium text-white hover:text-secondary-400 transition-colors">
                    834-153-1524
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-primary-100 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-secondary-400 group-hover:to-accent-400 transition-all duration-300 shadow-soft group-hover:shadow-colored-secondary">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-primary-300">Email us at</div>
                  <a href="mailto:info@ucanfly.in" className="font-medium text-white hover:text-secondary-400 transition-colors">
                    info@ucanfly.in
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-primary-100 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-secondary-400 group-hover:to-accent-400 transition-all duration-300 shadow-soft group-hover:shadow-colored-secondary">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-primary-300">Visit us at</div>
                  <span className="font-medium text-white">
                    Kothapet, Hyderabad
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <Card className="overflow-hidden shadow-large border-0">
            <CardContent className="p-6 sm:p-8 bg-white/95 backdrop-blur-lg">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    Thank You!
                  </h3>
                  <p className="mt-2 text-gray-600">
                    We've received your inquiry. Our team will contact you within 24 hours.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
                    }}
                    variant="outline"
                    className="mt-6"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Free Consultation
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Fill in your details and we'll reach out shortly.
                    </p>
                  </div>

                  <div className="space-y-4">
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

                    <div className="grid gap-4 sm:grid-cols-2">
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
                        <option value="">Select your interest</option>
                        {interests.map((interest) => (
                          <option key={interest} value={interest}>
                            {interest}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your study abroad goals..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="mt-1.5"
                      />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Get Free Consultation
                    <Send className="h-4 w-4" />
                  </Button>

                  <p className="text-center text-xs text-gray-500">
                    By submitting, you agree to our privacy policy. We'll never share your information.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

