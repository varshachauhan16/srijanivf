import {
  HeartPulse,
  IndianRupee,
  BadgeCheck,
  Stethoscope,
  ScanLine,
  CreditCard,
} from "lucide-react";
import benefitsImg from "@/assets/banefits-newV8.webp";

const benefits = [
  { icon: HeartPulse, title: "Expert Care" },
  { icon: IndianRupee, title: "Affordable Solutions" },
  { icon: BadgeCheck, title: "Affordable IVF Packages" },
  { icon: Stethoscope, title: "Free Doctor Consultation" },
  { icon: CreditCard, title: "0% EMI Options" },
  { icon: ScanLine, title: "Free Ultrasound & TVS Scan" },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-pink-50">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center max-w-6xl">

        {/* LEFT — Image */}
        <div className="flex justify-center relative">
          <img
            src={benefitsImg}
            alt="Benefits"
            className="w-[320px] sm:w-[360px] md:w-[400px] object-cover rounded-[140px_140px_140px_48px] border-[7px] border-pink-200"
          />
          <div className="absolute bottom-8 left-6 bg-pink-600 text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-md">
            Trusted by 10,000+ Families
          </div>
        </div>

        {/* RIGHT — Cards only */}
        <div className="grid grid-cols-2 gap-4">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-pink-100 rounded-2xl px-5 py-4 flex items-center gap-4 hover:shadow-lg hover:shadow-pink-100 hover:border-pink-300 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-pink-600" />
              </div>
              <span className="text-sm md:text-base font-semibold text-pink-900 leading-snug">
                {item.title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;