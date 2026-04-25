import { Phone, ArrowRight, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-couple.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden gradient-hero">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" aria-hidden />
      <div className="absolute top-40 -left-20 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" aria-hidden />

      <div className="container mx-auto relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" /> Trusted by 10,000+ happy parents
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
            Your Parenthood <br />
            Journey <span className="text-gradient italic">Starts Here</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Compassionate, world-class fertility care backed by 20+ years of experience and an industry-leading 90% success rate. Let us walk this journey with you.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="cta" size="xl" asChild>
              <a href="#appointment">
                Book Free Consultation <ArrowRight className="ml-1 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="tel:+919999999999">
                <Phone className="mr-1 h-5 w-5" /> Call Now
              </a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-8">
            <div>
              <div className="font-display text-3xl font-bold text-primary">20+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Years of Care</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="font-display text-3xl font-bold text-primary">90%</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Success Rate</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="font-display text-3xl font-bold text-primary">10K+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">IVF Babies</div>
            </div>
          </div>
        </div>

        {/* Right: image + form card */}
        <div className="relative animate-scale-in">
          <div className="relative rounded-[2rem] overflow-hidden shadow-glow">
            <img
              src={heroImg}
              alt="Happy expecting couple"
              width={1536}
              height={1024}
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-card p-4 flex items-center gap-3 animate-float">
            <div className="h-10 w-10 rounded-xl bg-primary-soft grid place-items-center">
              <Heart className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">This year</div>
              <div className="font-semibold">2,400+ Pregnancies</div>
            </div>
          </div>

          <HeroForm />
        </div>
      </div>
    </section>
  );
};

const HeroForm = () => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      window.location.hash = "#appointment";
    }}
    className="absolute -bottom-16 lg:-bottom-12 right-0 lg:-right-6 bg-card/95 backdrop-blur rounded-2xl shadow-card p-5 w-72 hidden md:block border border-border/50"
  >
    <div className="text-sm font-semibold mb-3">Quick Enquiry</div>
    <input required placeholder="Your name" className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm mb-2" />
    <input required type="tel" placeholder="Phone number" className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm mb-2" />
    <select className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm mb-3">
      <option>Select Treatment</option>
      <option>IVF</option><option>IUI</option><option>ICSI</option><option>Egg Freezing</option>
    </select>
    <Button variant="cta" size="sm" className="w-full">Request Callback</Button>
  </form>
);

export default Hero;
