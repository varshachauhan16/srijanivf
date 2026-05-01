import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin, ArrowRight } from "lucide-react";
import logo from "@/assets/srijanivf-footer-logo.webp";
import LeadPopup from "@/components/LeadPopup";

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <LeadPopup onClose={() => setShowPopup(false)} />}

      <footer id="contact" className="pt-14 pb-8 text-white" style={{ backgroundColor: "#e1658a" }}>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Logo + About — full width on mobile */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center">
              <img src={logo} alt="Srijan IVF" className="h-12 w-auto object-contain" />
            </div>
            <p className="mt-4 text-white/80 text-sm leading-relaxed">
              Delhi couples seeking to build their families find hope at Srijan IVF.
              We offer advanced treatments like IVF, IUI, ICSI and more.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/20 hover:bg-white hover:text-[#e1658a] grid place-items-center transition"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {["About", "Centres", "Doctors", "Testimonials", "Blog"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-white transition">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Centres */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Centres</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {["Delhi", "Indirapuram"].map((l) => (
                <li key={l}>
                  <a href="#centres" className="hover:text-white transition">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — full width on mobile */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold mb-4 text-sm">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-white shrink-0" />
                Shop No.2, Khasra No. 585, kalyan Vyas, 202/1, Khichripur Rd, Mayur Vihar Phase I, Kalyanvas, Kalyan Puri, Delhi, 110091
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-white shrink-0" />
                <a href="tel:+918851762433" className="hover:underline">+91 8851762433</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-white shrink-0" />
                info@srijanivfcentre.com
              </li>
              <li className="flex gap-3">
                <Clock className="h-4 w-4 mt-0.5 text-white shrink-0" />
                9:00am – 7:00pm
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright — extra bottom padding on mobile for sticky bar */}
        <div className="container mx-auto border-t border-white/20 mt-12 pt-6 text-center text-sm text-white/70 pb-20 md:pb-0">
          © {new Date().getFullYear()} Srijan IVF. All rights reserved.
        </div>
      </footer>

      {/* ── Sticky bottom bar — mobile only ── */}
      {/* z-40 — WhatsApp/Call floating btns z-50 pe hain, wo iske upar rahenge */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex md:hidden shadow-[0_-2px_12px_rgba(0,0,0,0.15)]">

        {/* Call Now — dark shade for contrast vs footer */}
        <a
          href="tel:+918851762433"
          className="flex-1 flex items-center justify-center gap-2 font-semibold text-sm py-4 transition active:opacity-80"
          style={{ backgroundColor: "#b5446a", color: "#fff" }}
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>

        <div className="w-px bg-white/40" />

        {/* Book Appointment — white for strong contrast */}
        <button
          onClick={() => setShowPopup(true)}
          className="flex-1 flex items-center justify-center gap-2 bg-white font-semibold text-sm py-4 transition active:bg-pink-50"
          style={{ color: "#e1658a" }}
        >
          Book Appointment
          <ArrowRight className="h-4 w-4" />
        </button>

      </div>
    </>
  );
};

export default Footer;