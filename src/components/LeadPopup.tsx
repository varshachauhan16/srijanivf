import { useEffect, useState } from "react";
import { X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const STORAGE_KEY = "nova_lead_submitted";

const LeadPopup = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setOpen(true), 15000);
    return () => clearTimeout(t);
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    if (!name || name.length > 100) return toast({ title: "Please enter your name" });
    if (!/^[+\d\s-]{7,20}$/.test(phone)) return toast({ title: "Please enter a valid phone number" });
    localStorage.setItem(STORAGE_KEY, "1");
    window.location.href = "/thank-you";
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-foreground/50 backdrop-blur-sm p-4 animate-fade-in" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-md bg-card rounded-3xl shadow-glow overflow-hidden animate-scale-in">
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 h-9 w-9 rounded-full bg-background hover:bg-muted grid place-items-center"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="gradient-primary p-6 text-primary-foreground">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            <span className="text-xs uppercase tracking-widest font-semibold">Limited Slots</span>
          </div>
          <h3 className="mt-3 font-display text-2xl font-semibold leading-tight">
            Get a Free IVF Consultation Today
          </h3>
          <p className="mt-2 text-primary-foreground/85 text-sm">
            Speak with a fertility expert, no cost & no commitment.
          </p>
        </div>
        <form onSubmit={onSubmit} className="p-6 space-y-3">
          <input name="name" required maxLength={100} placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-input bg-background" />
          <input name="phone" required type="tel" placeholder="Phone number" className="w-full px-4 py-3 rounded-xl border border-input bg-background" />
          <select name="treatment" className="w-full px-4 py-3 rounded-xl border border-input bg-background">
            <option>Select treatment</option>
            <option>IVF</option><option>IUI</option><option>ICSI</option>
            <option>Egg Freezing</option><option>Laparoscopy</option><option>Hysteroscopy</option>
          </select>
          <Button variant="cta" size="lg" className="w-full">Get Free Consultation</Button>
          <p className="text-xs text-center text-muted-foreground">100% confidential. No spam.</p>
        </form>
      </div>
    </div>
  );
};

export default LeadPopup;
