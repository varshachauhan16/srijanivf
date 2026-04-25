import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="bg-foreground text-background pt-20 pb-8">
    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div>
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-2xl gradient-primary grid place-items-center font-display font-bold">S</div>
          <span className="font-display text-xl font-semibold">Srijan IVF</span>
        </div>
        <p className="mt-4 text-background/70 text-sm leading-relaxed">
          Compassionate, world-class fertility care helping families grow for over 20 years.
        </p>
        <div className="mt-5 flex gap-3">
          {[Facebook, Instagram, Youtube, Linkedin].map((I, i) => (
            <a key={i} href="#" aria-label="social" className="h-10 w-10 rounded-full bg-background/10 hover:bg-primary grid place-items-center transition-colors">
              <I className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm text-background/70">
          {["About", "Treatments", "Doctors", "Testimonials", "Blog"].map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">{l}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Treatments</h4>
        <ul className="space-y-2 text-sm text-background/70">
          {["IVF", "IUI", "ICSI", "Egg Freezing", "Laparoscopy", "Hysteroscopy"].map((l) => (
            <li key={l}><a href="#treatments" className="hover:text-primary transition-colors">{l}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Get in Touch</h4>
        <ul className="space-y-3 text-sm text-background/70">
          <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> 123 Wellness Avenue, Bandra West, Mumbai 400050</li>
          <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /> <a href="tel:+919999999999">+91 99999 99999</a></li>
          <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /> hello@novafertility.com</li>
          <li className="flex gap-3"><Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" /> Mon–Sat: 9am – 8pm<br />Sun: 10am – 4pm</li>
        </ul>
      </div>
    </div>

    <div className="container mx-auto border-t border-background/10 mt-14 pt-6 text-center text-sm text-background/50">
      © {new Date().getFullYear()} Nova Fertility. All rights reserved.
    </div>
  </footer>
);

export default Footer;
