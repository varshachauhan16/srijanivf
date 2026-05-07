import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/srijanivf_logoNew.webp";

const links = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/treatments", label: "Treatments" },
  { href: "/doctors", label: "Doctors" },
  { href: "/centre", label: "Centre" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Srijan IVF"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </Link>
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label} className="relative group">

              {l.label === "Doctors" ? (
                <>
                  <span className="text-sm font-medium text-foreground/75 hover:text-primary cursor-pointer">
                    Doctors
                  </span>

                  <div className="absolute left-0 top-full mt-2 w-60 bg-white border border-pink-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

                    <Link
                      to="/doctor/pallavi-singh"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-t-xl"
                    >
                      Dr. Pallavi Singh
                    </Link>

                    <Link
                      to="/doctor/santosh-kumar"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-b-xl"
                    >
                      Dr. Santosh Kumar Arjun
                    </Link>

                  </div>
                </>
              ) : l.href.startsWith("/") ? (
                <Link
                  to={l.href}
                  className="text-sm font-medium text-foreground/75 hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  href={l.href}
                  className="text-sm font-medium text-foreground/75 hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+918851762433"
            className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary"
          >
            <Phone className="h-4 w-4" /> +91 8851762433
          </a>

          <Button variant="cta" size="sm" asChild>
            <a href="#appointment">Book Free Consultation</a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-xl hover:bg-muted"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <ul className="container mx-auto py-4 flex flex-col gap-1">

            <li>
              <Link to="/" onClick={() => setOpen(false)} className="block py-3 px-3">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about-us" onClick={() => setOpen(false)} className="block py-3 px-3">
                About
              </Link>
            </li>

            <li>
              <Link to="/treatments" onClick={() => setOpen(false)} className="block py-3 px-3">
                Treatments
              </Link>
            </li>

            {/* DOCTORS */}
            <li className="px-3 pt-2 text-xs text-gray-400">Doctors</li>

            <li>
              <Link to="/doctor/pallavi-singh" onClick={() => setOpen(false)} className="block py-2 px-4">
                Dr. Pallavi Singh
              </Link>
            </li>

            <li>
              <Link to="/doctor/santosh-kumar" onClick={() => setOpen(false)} className="block py-2 px-4">
                Dr. Santosh Kumar Arjun
              </Link>
            </li>

            <li>
              <Link to="/centre" onClick={() => setOpen(false)} className="block py-3 px-3">
                Centre
              </Link>
            </li>
            <li>
              <Link to="/testimonials" onClick={() => setOpen(false)} className="block py-3 px-3">
                Testimonials
              </Link>
            </li>

            <li>
              <Link to="/contact-us" onClick={() => setOpen(false)} className="block py-3 px-3">
                Contact Us
              </Link>
            </li>

            <li className="pt-2">
              <Button variant="cta" className="w-full" asChild>
                <Link to="/appointment" onClick={() => setOpen(false)}>
                  Book Free Consultation
                </Link  >
              </Button>
            </li>

          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;