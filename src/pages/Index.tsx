import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import Reviews from "@/components/Reviews.tsx"
import Appointment from "@/components/Appointment";
import Doctors from "@/components/Doctors";
import Testimonials from "@/components/customer-testimonials";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/callbtn";
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
    <Testimonials />
    <Appointment />
    <Footer />
    <WhatsAppButton />
    <CallButton />
    <LeadPopup />
  </main>
);

export default Index;
