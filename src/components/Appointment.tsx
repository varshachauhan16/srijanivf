import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const locations = [
  { title: "Delhi", desc: "Shop No.2, Khasra No. 585, Mayur Vihar Phase 1, Delhi 110091" },
  { title: "Indirapuram", desc: "Plot No-7, Abhay Khand 1, Ghaziabad, UP 201014" },
  { title: "Varanasi", desc: "Heiwel Hospital, NH 56, Airport Road, Varanasi" },
  { title: "Srinagar", desc: "Sonwar Bagh, opposite Amar Singh Club, Srinagar" },
];

const today = new Date().toISOString().split("T")[0];

type FormState = {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  doctor: string;
  date: string;
  message: string;
};

type ErrorState = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "", phone: "", email: "", treatment: "", doctor: "", date: "", message: "",
};

const Appointment = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<ErrorState>({});
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSuccess(false);
  };

 const validate = (): ErrorState => {
    const newErrors: ErrorState = {};

    // Name: required, only letters & spaces, min 2 chars
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]{2,}$/.test(form.name.trim())) {
      newErrors.name = "Name must contain letters only (min 2 characters)";
    }

    // Phone: required, exactly 10 digits, starts with 7/8/9, no extra chars
    const rawPhone = form.phone.replace(/[\s\-\+]/g, "").replace(/^91/, "");
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(rawPhone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    } else if (!/^[789]/.test(rawPhone)) {
      newErrors.phone = "Phone number must start with 7, 8, or 9";
    }

    // Email
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email (e.g. you@email.com)";
    }

    // Date
    if (!form.date) {
      newErrors.date = "Date is required";
    } else if (form.date < today) {
      newErrors.date = "Please select today's or a future date";
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
    console.log("Form submitted:", form);
    setSuccess(true);
    setForm(initialForm);
    setErrors({});
  };

  return (
    <section className="py-24 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto px-6 max-w-6xl">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-pink-600">Book Appointment</h2>
          <p className="text-gray-400 mt-3 text-base">We're here for you — reach out at any of our centres</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* LEFT */}
          <div className="flex flex-col gap-4 h-full">
            <div className="grid grid-cols-2 gap-4 flex-1">
              {locations.map((loc) => (
                <div key={loc.title} className="bg-white border border-pink-100 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md hover:border-pink-300 transition-all duration-200">
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

          {/* RIGHT */}
          <div className="bg-white border border-pink-100 rounded-3xl p-8 shadow-lg flex flex-col justify-between h-full">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Fill in your details</h3>

            {success && (
              <div className="mb-4 px-4 py-3 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm font-medium">
                ✅ Appointment booked successfully! We'll contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 flex-1">

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-medium">Name *</label>
<input
  name="name"
  value={form.name}
  onChange={(e) => {
    // Numbers aur special characters type hi nahi hone dega
    const val = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(val)) {
      handleChange(e);
    }
  }}
  placeholder="Your name"
  className={`border rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none transition
    ${errors.name ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-pink-400"}`}
/>                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-medium">Phone *</label>
<input
  name="phone"
  value={form.phone}
  onChange={(e) => {
    // Sirf numbers type hone dega, max 10 digits
    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
    handleChange({ ...e, target: { ...e.target, name: "phone", value: val } });
  }}
  placeholder="XXXXXXXXXX"
  maxLength={10}
  className={`border rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none transition
    ${errors.phone ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-pink-400"}`}
/>                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-medium">Email *</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className={`border rounded-xl px-4 py-2.5 text-sm text-gray-700 outline-none transition
                      ${errors.email ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-pink-400"}`}
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-medium">Treatment</label>
                  <select
                    name="treatment"
                    value={form.treatment}
                    onChange={handleChange}
                    className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-500 outline-none focus:border-pink-400 transition bg-white"
                  >
                    <option value="">-- Choose Treatment --</option>
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
                  <select
                    name="doctor"
                    value={form.doctor}
                    onChange={handleChange}
                    className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-500 outline-none focus:border-pink-400 transition bg-white"
                  >
                    <option value="">-- Choose Doctor --</option>
                    <option>Dr. Pallavi Singh</option>
                    <option>Dr. Santosh Kumar Arjun</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-400 font-medium">Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    min={today}
                    className={`border rounded-xl px-4 py-2.5 text-sm text-gray-500 outline-none transition
                      ${errors.date ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-pink-400"}`}
                  />
                  {errors.date && <p className="text-xs text-red-500">{errors.date}</p>}
                </div>
              </div>

              <div className="flex flex-col gap-1 flex-1">
                <label className="text-xs text-gray-400 font-medium">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
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