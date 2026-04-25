import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";
import { ArrowRight } from "lucide-react";

const posts = [
  { img: b1, tag: "Guide", title: "Understanding Your IVF Journey: A Step-by-Step Guide", date: "Apr 10, 2025" },
  { img: b2, tag: "Science", title: "Latest Breakthroughs in Reproductive Medicine 2025", date: "Mar 28, 2025" },
  { img: b3, tag: "Lifestyle", title: "Nutrition for Fertility: Foods That Boost Your Chances", date: "Mar 14, 2025" },
];

const Blog = () => (
  <section id="blog" className="py-24 gradient-soft">
    <div className="container mx-auto">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">From the Journal</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">Insights & stories</h2>
        </div>
        <a href="#" className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">View all <ArrowRight className="h-4 w-4" /></a>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-7">
        {posts.map((p) => (
          <article key={p.title} className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all hover:-translate-y-1">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-xs">
                <span className="px-3 py-1 rounded-full bg-primary-soft text-primary font-medium">{p.tag}</span>
                <span className="text-muted-foreground">{p.date}</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold leading-snug group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                Read more <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
