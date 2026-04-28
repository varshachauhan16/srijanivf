import { useEffect, useState } from "react";
import { X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const STORAGE_KEY = "lead_submitted_time";
const CLOSE_KEY = "lead_closed_time";

const FIFTEEN_MIN = 15 * 60 * 1000;
const ONE_DAY = 24 * 60 * 60 * 1000;

const LeadPopup = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // ✅ POPUP LOGIC
  useEffect(() => {
    const now = Date.now();

    const submittedTime = Number(localStorage.getItem(STORAGE_KEY) || 0);
    const closedTime = Number(localStorage.getItem(CLOSE_KEY) || 0);

    // If submitted → block 24h
    if (submittedTime && now - submittedTime < ONE_DAY) return;

    // If closed → wait 15 min
    if (closedTime && now - closedTime < FIFTEEN_MIN) return;

    // Show popup after small delay (better UX)
    const timer = setTimeout(() => setOpen(true), 3000);

    return () => clearTimeout(timer);
  }, []);

  // ✅ CLOSE
  const handleClose = () => {
    localStorage.setItem(CLOSE_KEY, Date.now().toString());
    setOpen(false);
  };

  // ✅ VALIDATION
  const validate = (name, phone) => {
    if (!name || name.length < 2) {
      return "Name must be at least 2 characters";
    }

    if (name.length > 50) {
      return "Name is too long";
    }

    if (!/^[a-zA-Z\s]+$/.test(name)) {
      return "Name should contain only letters";
    }

    if (!phone) {
      return "Phone number is required";
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      return "Enter valid 10-digit Indian phone number";
    }

    return null;
  };

  // ✅ SUBMIT
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();

    const error = validate(name, phone);

    if (error) {
      setLoading(false);
      return toast({ title: error });
    }

    // Save submission time
    localStorage.setItem(STORAGE_KEY, Date.now().toString());

    toast({ title: "Submitted successfully 🎉" });

    setTimeout(() => {
      setOpen(false);
      window.location.href = "/thank-you";
    }, 800);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 grid place-items-center"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="p-6 text-white" style={{ backgroundColor: "#e1658a" }}>
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            <span className="text-xs uppercase font-semibold">
              Limited Slots
            </span>
          </div>

          <h3 className="mt-3 text-2xl font-semibold">
            Get a Free IVF Consultation
          </h3>

          <p className="text-sm opacity-90 mt-1">
            Speak with expert — No cost, No commitment.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="p-6 space-y-3">
          <input
            name="name"
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-pink-400 outline-none"
          />

          <input
            name="phone"
            placeholder="Phone number"
            className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-pink-400 outline-none"
          />

          <select className="w-full px-4 py-3 rounded-xl border">
            <option>Select treatment</option>
            <option>IVF</option>
            <option>IUI</option>
            <option>ICSI</option>
          </select>

          <Button
            disabled={loading}
            className="w-full bg-[#e1658a] text-white hover:opacity-90"
          >
            {loading ? "Submitting..." : "Get Free Consultation"}
          </Button>

          <p className="text-xs text-center text-gray-400">
            100% confidential
          </p>
        </form>

      </div>
    </div>
  );
};

export default LeadPopup;