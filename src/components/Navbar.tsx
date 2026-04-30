import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#treatments", label: "Treatments" },
  { href: "#doctors", label: "Doctors" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
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
        scrolled ? "bg-background/85 backdrop-blur-lg shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-2xl gradient-primary grid place-items-center text-primary-foreground font-display font-bold text-lg shadow-soft">
            S
          </div>
          <span className="font-display text-xl font-semibold">Srijan<span className="text-primary">IVF</span></span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/75 hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+918851762433" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary">
            <Phone className="h-4 w-4" /> +91 8851762433
          </a>
          <Button variant="cta" size="sm" asChild>
            <a href="#appointment">Book Free Consultation</a>
          </Button>
        </div>

        <button className="lg:hidden p-2 rounded-xl hover:bg-muted" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <ul className="container mx-auto py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block py-3 px-3 rounded-xl hover:bg-primary-soft text-foreground/80 hover:text-primary font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button variant="cta" className="w-full" asChild>
                <a href="#appointment" onClick={() => setOpen(false)}>Book Free Consultation</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
