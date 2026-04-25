import { MapPin, Phone, Mail } from "lucide-react";

const locations = [
  { title: "Delhi", desc: "Shop No.2, Khasra No. 585, Mayur Vihar Phase 1, Delhi 110091" },
  { title: "Indirapuram", desc: "Plot No-7, Abhay Khand 1, Ghaziabad, UP 201014" },
  { title: "Varanasi", desc: "Heiwel Hospital, NH 56, Airport Road, Varanasi" },
  { title: "Srinagar", desc: "Sonwar Bagh, opposite Amar Singh Club, Srinagar" },
];

const Appointment = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-600">Book Appointment</h2>
          <p className="text-gray-400 mt-3 text-base">We're here for you — reach out at any of our centres</p>
        </div>

        {/* Equal height both sides */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* LEFT — Info, full height flex col */}
          <div className="flex flex-col gap-4 h-full">

            {/* 4 location cards — flex-1 so they fill space */}
            <div className="grid grid-cols-2 gap-4 flex-1">
              {locations.map((loc) => (
                <div
                  key={loc.title}
                  className="bg-white border border-pink-100 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md hover:border-pink-300 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">{loc.title}</h3>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">{loc.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact + Email — fixed bottom row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-pink-100 rounded-2xl p-5 flex gap-3 items-center hover:shadow-md hover:border-pink-300 transition-all duration-200">
                <div className="w-9 h-9 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-pink-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Call Us</p>
                  <p className="text-sm font-semibold text-pink-600 mt-0.5">+91-8851762433</p>
                </div>
              </div>
              <div className="bg-white border border-pink-100 rounded-2xl p-5 flex gap-3 items-center hover:shadow-md hover:border-pink-300 transition-all duration-200">
                <div className="w-9 h-9 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-pink-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Email Us</p>
                  <p className="text-sm font-semibold text-pink-600 mt-0.5 break-all">info@srijnivfcentre.com</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT — Form, full height */}
          <div className="bg-white border border-pink-100 rounded-3xl p-8 shadow-lg flex flex-col justify-between h-full">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Fill in your details</h3>

            <form className="flex flex-col gap-4 flex-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-medium">Name*</label>
                  <input placeholder="Your name" className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-pink-400 transition" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-medium">Phone*</label>
                  <input placeholder="+91 XXXXX XXXXX" className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-pink-400 transition" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-medium">Email*</label>
                  <input placeholder="you@email.com" className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-pink-400 transition" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-medium">Treatment</label>
                  <select className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-500 outline-none focus:border-pink-400 transition bg-white">
                    <option>-- Choose Treatment --</option>
                    <option>IVF</option>
                    <option>IUI</option>
                    <option>ICSI</option>
                    <option>PCOS</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-medium">Doctor</label>
                  <select className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-500 outline-none focus:border-pink-400 transition bg-white">
                    <option>-- Choose Doctor --</option>
                    <option>Dr. Pallavi Singh</option>
                    <option>Dr. Santosh Kumar Arjun</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-medium">Date</label>
                  <input type="date" className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-500 outline-none focus:border-pink-400 transition" />
                </div>
              </div>

              <div className="flex flex-col gap-1 flex-1">
                <label className="text-xs text-gray-400 font-medium">Message</label>
                <textarea
                  placeholder="Any additional information..."
                  className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-pink-400 transition resize-none flex-1 min-h-[80px]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl transition shadow-md shadow-pink-100"
              >
                Book Appointment
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Appointment;