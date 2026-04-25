import { TrendingUp, UserCheck, Cpu, Wallet, HeartHandshake, Clock } from "lucide-react";

const features = [
  { icon: TrendingUp, title: "Industry-Leading Success", desc: "85–90% success rates across our IVF programs." },
  { icon: UserCheck, title: "Expert Doctors", desc: "World-renowned reproductive specialists." },
  { icon: Cpu, title: "Advanced Technology", desc: "State-of-the-art labs with the latest equipment." },
  { icon: Wallet, title: "Affordable Packages", desc: "Transparent pricing and flexible EMI options." },
  { icon: HeartHandshake, title: "Personalized Treatment", desc: "Plans tailored to your unique journey." },
  { icon: Clock, title: "24/7 Support", desc: "Care and guidance whenever you need it." },
];

const WhyChooseUs = () => (
  <section className="py-24 gradient-soft relative overflow-hidden">
    <div className="absolute top-1/2 -left-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" aria-hidden />
    <div className="container mx-auto relative">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">Why Choose Us</span>
        <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold">
          A different kind of <span className="text-gradient italic">fertility care</span>
        </h2>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => (
          <div key={f.title} className="bg-card/80 backdrop-blur rounded-3xl p-6 shadow-soft hover:shadow-card transition-all flex gap-4 items-start">
            <div className="h-12 w-12 rounded-2xl bg-primary-soft grid place-items-center shrink-0">
              <f.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
