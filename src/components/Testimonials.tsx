import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Anjali & Vikram",
    city: "Mumbai",
    text: "After 7 years of trying, Srijan IVF gave us our miracle. Dr. Priya treated us like family every step of the way. Words can never repay this gift.",
  },
  {
    name: "Sneha & Arjun",
    city: "Delhi",
    text: "The team's calm, science-first approach made all the difference. Our twins are now 8 months old and a constant reminder that hope is everything.",
  },
  {
    name: "Reema & Karan",
    city: "Bangalore",
    text: "We were exhausted from failed cycles elsewhere. Srijan's personalized protocol worked the very first time. We are forever grateful.",
  },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  const r = reviews[i];
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">Stories of Hope</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold">
            From our <span className="text-gradient not-italic">families</span>
          </h2>
        </div>

        <div className="mt-12 relative bg-card rounded-[2rem] p-10 md:p-14 shadow-card">
          <Quote className="h-14 w-14 text-primary/15 absolute top-6 left-6" />
          <div className="flex justify-center gap-1 mb-5">
            {[...Array(5)].map((_, k) => <Star key={k} className="h-5 w-5 fill-primary text-primary" />)}
          </div>
          <p className="text-center font-display text-2xl md:text-3xl leading-relaxed text-foreground/90 not-italic">
            “{r.text}”
          </p>
          <div className="text-center mt-6">
            <div className="font-semibold">{r.name}</div>
            <div className="text-sm text-muted-foreground">{r.city}</div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            <button onClick={() => setI((i - 1 + reviews.length) % reviews.length)} className="h-11 w-11 rounded-full border border-border hover:bg-primary-soft hover:border-primary/40 grid place-items-center transition-all" aria-label="prev">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, k) => (
                <button key={k} onClick={() => setI(k)} className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2 bg-border"}`} aria-label={`review ${k + 1}`} />
              ))}
            </div>
            <button onClick={() => setI((i + 1) % reviews.length)} className="h-11 w-11 rounded-full border border-border hover:bg-primary-soft hover:border-primary/40 grid place-items-center transition-all" aria-label="next">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
