import { useState } from "react";
import { Phone, ArrowRight, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-couple.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden gradient-hero">
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
              <a href="tel:+918851762433">
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

type HeroFormState = {
  name: string;
  phone: string;
  treatment: string;
};

type HeroFormErrors = Partial<Record<keyof HeroFormState, string>>;

const initialState: HeroFormState = { name: "", phone: "", treatment: "" };

const HeroForm = () => {
  const [form, setForm] = useState<HeroFormState>(initialState);
  const [errors, setErrors] = useState<HeroFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(val)) {
      setForm((prev) => ({ ...prev, name: val }));
      setErrors((prev) => ({ ...prev, name: "" }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
    setForm((prev) => ({ ...prev, phone: val }));
    setErrors((prev) => ({ ...prev, phone: "" }));
  };

  const handleTreatmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, treatment: e.target.value }));
    setErrors((prev) => ({ ...prev, treatment: "" }));
  };

  const validate = (): HeroFormErrors => {
    const newErrors: HeroFormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!form.phone) {
      newErrors.phone = "Phone number is required";
    } else if (form.phone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    } else if (!/^[789]/.test(form.phone)) {
      newErrors.phone = "Phone number must start with 7, 8, or 9";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
    setForm(initialState);
    setErrors({});
  };

  const ErrMsg = ({ msg }: { msg?: string }) =>
    msg ? <p className="text-[11px] text-red-500 mt-0.5 ml-1">{msg}</p> : null;

  if (submitted) {
    return (
      <div className="absolute -bottom-16 lg:-bottom-12 right-0 lg:-right-6 bg-card/95 backdrop-blur rounded-2xl shadow-card p-5 w-72 border border-border/50 text-center">
        <div className="text-green-600 font-semibold text-lg mb-2">
          Thank You!
        </div>

        <p className="text-sm text-muted-foreground mb-3">
          Our agent will contact you within <b>15 minutes</b>.
        </p>

        <p className="text-sm mb-4">
          Or you can call us directly:
        </p>

        <a
          href="tel:+918851762433"
          className="block w-full bg-primary text-white py-2 rounded-xl text-sm font-medium hover:opacity-90 transition"
        >
          Call Now: 8851762433
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="absolute -bottom-16 lg:-bottom-12 right-0 lg:-right-6 bg-card/95 backdrop-blur rounded-2xl shadow-card p-5 w-72 hidden md:block border border-border/50"
    >
      <div className="text-sm font-semibold mb-3">Quick Enquiry</div>

      <div className="mb-2">
        <input
          value={form.name}
          onChange={handleNameChange}
          placeholder="Your name"
          className={`w-full px-3 py-2 rounded-xl border bg-background text-sm outline-none transition
            ${errors.name ? "border-red-400 focus:border-red-400" : "border-input focus:border-primary"}`}
        />
        <ErrMsg msg={errors.name} />
      </div>

      <div className="mb-2">
        <input
          value={form.phone}
          onChange={handlePhoneChange}
          placeholder="Phone number"
          maxLength={10}
          inputMode="numeric"
          className={`w-full px-3 py-2 rounded-xl border bg-background text-sm outline-none transition
            ${errors.phone ? "border-red-400 focus:border-red-400" : "border-input focus:border-primary"}`}
        />
        <ErrMsg msg={errors.phone} />
      </div>

      <select
        value={form.treatment}
        onChange={handleTreatmentChange}
        className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm mb-3 outline-none focus:border-primary transition"
      >
        <option value="">Select Treatment</option>
        <option>IVF</option>
        <option>IUI</option>
        <option>ICSI</option>
        <option>Egg Freezing</option>
      </select>

      <Button variant="cta" size="sm" className="w-full">
        Request Callback
      </Button>
    </form>
  );
};

export default Hero;