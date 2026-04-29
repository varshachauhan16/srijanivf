import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="pt-20 pb-8 text-white" style={{ backgroundColor: "#e1658a" }}>
    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div>
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-2xl bg-white text-[#e1658a] grid place-items-center font-bold">
            S
          </div>
          <span className="text-xl font-semibold">Srijan IVF</span>
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

      <div>
        <h4 className="font-semibold mb-4">Quick Links</h4>
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

      <div>
        <h4 className="font-semibold mb-4">Centres</h4>
        <ul className="space-y-2 text-sm text-white/80">
          {["Delhi", "Indirapuram"].map((l) => (
            <li key={l}>
              <a href="#centres" className="hover:text-white transition">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Get in Touch</h4>
        <ul className="space-y-3 text-sm text-white/80">

          <li className="flex gap-3">
            <MapPin className="h-4 w-4 mt-0.5 text-white shrink-0" />
            Mayur Vihar Phase I, Delhi - 110091
          </li>

          <li className="flex gap-3">
            <Phone className="h-4 w-4 mt-0.5 text-white shrink-0" />
            <a href="tel:+918851762433" className="hover:underline">
              +91 8851762433
            </a>
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

    <div className="container mx-auto border-t border-white/20 mt-14 pt-6 text-center text-sm text-white/70">
      © {new Date().getFullYear()} Srijan IVF. All rights reserved.
    </div>
  </footer>
);

export default Footer;