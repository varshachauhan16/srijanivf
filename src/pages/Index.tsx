import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import Reviews from "@/components/Reviews.tsx"
import WhyChooseUs from "@/components/WhyChooseUs";
import Appointment from "@/components/Appointment";
import Doctors from "@/components/Doctors";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadPopup from "@/components/LeadPopup";
import Benefits from "@/components/Benefits";
import WhyChoose from "@/components/whyus";

const Index = () => (
  <main className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <About />
    <Benefits />
    <WhyChoose />
    <Doctors />
    <Treatments />
    <Reviews />
    <Blog />
    {/* <WhyChooseUs /> */}
    {/* <Doctors /> */}
    <Testimonials />
    <Appointment />
    <Footer />
    <WhatsAppButton />
    <LeadPopup />
  </main>
);

export default Index;
