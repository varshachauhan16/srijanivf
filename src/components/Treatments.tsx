import { useState } from "react";
import { Sparkles, HeartPulse, Baby } from "lucide-react";

const treatmentCategories = [
  {
    title: "IVF & Infertility",
    icon: Sparkles,
    items: [
      "IVF",
      "IUI",
      "ICSI",
      "Hysteroscopy",
      "Male Infertility",
      "TESA/PESA",
      "PICSI",
      "LAH",
      "ERA",
      "Semen Analysis",
      "Blastocyst Culture",
    ],
  },
  {
    title: "Gynecology",
    icon: HeartPulse,
    items: [
      "Laparoscopic Gynecology",
      "General Gynecology",
      "Robotic Gynecology",
      "Adolescent Care",
      "Menopause",
      "PCOS",
      "Endometriosis",
    ],
  },
  {
    title: "Obstetrics",
    icon: Baby,
    items: [
      "Caesarean Section",
      "High-Risk Pregnancy",
      "Low-Risk Pregnancy",
      "Normal Delivery",
    ],
  },
];

const Treatments = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Our <span className="text-pink-500 italic">Treatments</span>
          </h2>
          <p className="mt-4 text-gray-500">
            Personalized care designed for your journey to parenthood.
          </p>
        </div>

        {/* Category Cards */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {treatmentCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                onClick={() => setActive(index)}
                className={`cursor-pointer group relative p-8 rounded-3xl border transition-all duration-300 text-center
                ${
                  active === index
                    ? "bg-pink-500 text-white shadow-2xl scale-105"
                    : "bg-white hover:bg-pink-500 hover:text-white hover:shadow-xl hover:-translate-y-2"
                }`}
              >
                {/* Icon */}
                <div className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-pink-100 group-hover:bg-white/20 flex items-center justify-center transition">
                  <Icon className="h-7 w-7 text-pink-500 group-hover:text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold">{cat.title}</h3>
              </div>
            );
          })}
        </div>

        {/* Treatments Panel */}
        <div className="mt-16 p-10 rounded-3xl bg-white shadow-xl border">
          <h3 className="text-2xl font-semibold mb-8 text-pink-500 text-center">
            {treatmentCategories[active].title}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatmentCategories[active].items.map((item) => (
              <div
                key={item}
                className="group p-6 rounded-2xl border bg-white hover:bg-pink-500 hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Treatments;