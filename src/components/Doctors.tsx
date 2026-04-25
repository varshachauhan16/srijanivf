import { useState } from "react";
import { ChevronLeft, ChevronRight, Stethoscope, GraduationCap, Building2, Star } from "lucide-react";
import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";

const doctors = [
  {
    img: doc1,
    name: "Dr. Pallavi Singh",
    exp: "23+ Years Experience",
    qualifications: "MBBS, DGO",
    hospital: "Delhi Fertility Centre",
    specializations: ["IVF", "IUI", "PCOS", "Male Infertility", "Female Infertility", "ICSI", "PICSI"],
    treats: ["Failed IVF Cycles", "Adolescent Health", "Menopause", "High-Risk Pregnancy", "Semen Analysis"],
    desc: "A Delhi-based infertility specialist empowering couples on their parenthood journey. Tackles complex cases with personalized care ensuring the well-being of both mother and child.",
  },
  {
    img: doc2,
    name: "Dr. Santosh Kumar Arjun",
    exp: "15+ Years Experience",
    qualifications: "MBBS, DNB (Radiodiagnosis)",
    hospital: "GB Pant Hospital & LBS Hospital",
    specializations: ["Radiodiagnosis", "Medical Imaging", "X-Ray", "CT Scan", "Ultrasound"],
    treats: ["Complex Diagnoses", "Scan Interpretation", "Treatment Planning"],
    desc: "A seasoned radiologist in Delhi with expertise in diagnosing and interpreting medical images, ensuring the highest quality patient care through meticulous analysis.",
  },
];

const Doctors = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? doctors.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === doctors.length - 1 ? 0 : c + 1));
  const d = doctors[current];

  return (
    <section id="doctors" className="py-24 bg-pink-50">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-pink-600 text-center mb-16">
          Meet Our Doctor's
        </h2>

        {/* Fixed height card */}
        <div className="bg-white rounded-[40px] shadow-lg border border-pink-100 flex flex-col md:flex-row h-[580px] overflow-hidden">

          {/* LEFT — Image */}
          <div className="md:w-[38%] w-full h-full shrink-0 bg-pink-100 overflow-hidden">
            <img
              src={d.img}
              alt={d.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* RIGHT — Breakdown content */}
          <div className="flex-1 h-full flex flex-col overflow-hidden">

            {/* Top header — fixed */}
            <div className="px-10 pt-8 pb-5 border-b border-pink-50 shrink-0">
              <p className="text-xs font-semibold text-pink-400 uppercase tracking-widest mb-1">
                Our Specialist
              </p>
              <h3 className="text-2xl font-bold text-gray-800">{d.name}</h3>

              <div className="flex flex-wrap gap-3 mt-3">
                {/* Exp badge */}
                <span className="inline-flex items-center gap-1.5 bg-pink-50 border border-pink-200 text-pink-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                  ⭐ {d.exp}
                </span>
                {/* Qualification badge */}
                <span className="inline-flex items-center gap-1.5 bg-purple-50 border border-purple-100 text-purple-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                  <GraduationCap className="w-3.5 h-3.5" /> {d.qualifications}
                </span>
              </div>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto px-10 py-5 flex flex-col gap-5">

              {/* Hospital */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4 text-pink-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-0.5">Associated Hospital</p>
                  <p className="text-sm font-semibold text-gray-700">{d.hospital}</p>
                </div>
              </div>

              {/* About */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 text-pink-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-1">About</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{d.desc}</p>
                </div>
              </div>

              {/* Specializations */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center shrink-0">
                  <Stethoscope className="w-4 h-4 text-pink-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-2">Specializations</p>
                  <div className="flex flex-wrap gap-2">
                    {d.specializations.map((s, i) => (
                      <span key={i} className="bg-pink-50 text-pink-700 text-xs font-medium px-3 py-1 rounded-full border border-pink-100">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Treats */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center shrink-0">
                  <Stethoscope className="w-4 h-4 text-rose-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-2">Also Treats</p>
                  <div className="flex flex-wrap gap-2">
                    {d.treats.map((t, i) => (
                      <span key={i} className="bg-rose-50 text-rose-600 text-xs font-medium px-3 py-1 rounded-full border border-rose-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border-2 border-pink-300 flex items-center justify-center text-pink-600 hover:bg-pink-100 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            {doctors.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-pink-600" : "w-2.5 bg-pink-200"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border-2 border-pink-300 flex items-center justify-center text-pink-600 hover:bg-pink-100 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Doctors;