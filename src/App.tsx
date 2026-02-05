import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "@/components/layout";
import { About, Contact, Home, ProgramsPage, ServicesPage } from "./pages";


function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-gradient-to-b from-white via-gray-50 to-white">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
