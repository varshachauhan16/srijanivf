import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Callus from "@/components/callbtn";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogs, BlogCategory } from "@/blogs";
import { renderContent } from "@/lib/rendercontent";

const categoryColors: Record<BlogCategory, string> = {
  IVF: "bg-pink-100 text-pink-600",
  IUI: "bg-orange-100 text-orange-600",
  Doctors: "bg-purple-100 text-purple-600",
  "Women's Health": "bg-rose-100 text-rose-600",
  "Male Infertility": "bg-blue-100 text-blue-600",
};

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const blog = blogs.find((b) => b.id === slug);

  if (!blog) {
    return (
      <>
        <Navbar />
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
          <div className="text-6xl mb-4">😔</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">Blog Not Found</h1>
          <p className="text-gray-500 mb-6 text-sm">
            The blog post you're looking for doesn't exist or may have been removed.
          </p>
          <Link
            to="/Blogspage"
            className="bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-700 transition-colors duration-200 text-sm"
          >
            ← Back to All Blogs
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const related = blogs
    .filter((b) => b.id !== blog.id && b.category === blog.category)
    .slice(0, 2);

  return (
    <>
      <Navbar />

      <section className="relative w-full h-[40vh] md:h-[55vh] flex items-end justify-center">
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/65" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pb-8 md:pb-10">
          <Link
            to="/Blogspage"
            className="inline-flex items-center gap-2 text-pink-300 text-xs font-semibold tracking-widest uppercase mb-4 hover:text-pink-200 transition-colors"
          >
            ← Back to Blogs
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full bg-pink-600 text-white`}
            >
              {blog.category}
            </span>
            <span className="text-white/60 text-xs">{blog.date}</span>
          </div>
          <h1 className="text-xl md:text-4xl font-bold text-white leading-snug">
            {blog.title}
          </h1>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">

          <article className="flex-1 min-w-0">
            <div>{renderContent(blog.content)}</div>

            <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/Blogspage"
                className="inline-flex items-center gap-2 text-pink-600 font-semibold text-sm hover:text-pink-800 transition-colors"
              >
                ← All Blogs
              </Link>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 text-xs">Share:</span>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    blog.title + " " + window.location.href
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on WhatsApp"
                  className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold hover:bg-green-600 transition-colors"
                >
                  W
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    window.location.href
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold hover:bg-blue-700 transition-colors"
                >
                  f
                </a>
              </div>
            </div>
          </article>

          <aside className="w-full md:w-72 shrink-0 flex flex-col gap-5">

            <div className="bg-pink-600 rounded-2xl p-6 text-white">
              <h3 className="text-base font-bold mb-2">Book Free IVF Consultation</h3>
              <p className="text-pink-100 text-xs mb-4 leading-relaxed">
                Talk to our fertility specialists today. Take the first step toward parenthood.
              </p>
              <a
                href="tel:+918851762433"
                className="block w-full bg-white text-pink-600 font-bold text-sm text-center py-2.5 rounded-xl hover:bg-pink-50 transition-colors duration-200"
              >
                Call +91-8851762433
              </a>
            </div>

            {related.length > 0 && (
              <div className="border border-pink-100 rounded-2xl p-5">
                <h3 className="font-bold text-gray-800 mb-4 text-xs uppercase tracking-wider">
                  Related Posts
                </h3>
                <div className="flex flex-col gap-4">
                  {related.map((r) => (
                    <Link key={r.id} to={`/blog/${r.id}`} className="flex gap-3 group">
                      <img
                        src={r.image}
                        alt={r.title}
                        className="w-16 h-14 object-cover rounded-xl shrink-0"
                      />
                      <div>
                        <p className="text-xs font-semibold text-gray-700 leading-snug group-hover:text-pink-600 transition-colors line-clamp-2">
                          {r.title}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{r.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="border border-pink-100 rounded-2xl p-5">
              <h3 className="font-bold text-gray-800 mb-4 text-xs uppercase tracking-wider">
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(categoryColors) as BlogCategory[]).map((cat) => (
                  <Link
                    key={cat}
                    to="/Blogspage"
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity ${categoryColors[cat]}`}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border border-pink-100 rounded-2xl p-5">
              <h3 className="font-bold text-gray-800 mb-4 text-xs uppercase tracking-wider">
                All Blogs
              </h3>
              <div className="flex flex-col gap-3">
                {blogs
                  .filter((b) => b.id !== blog.id)
                  .slice(0, 5)
                  .map((b) => (
                    <Link
                      key={b.id}
                      to={`/blog/${b.id}`}
                      className="text-xs text-gray-600 hover:text-pink-600 transition-colors leading-snug line-clamp-2 border-b border-gray-50 pb-2 last:border-0"
                    >
                      → {b.title}
                    </Link>
                  ))}
              </div>
            </div>

          </aside>
        </div>
      </section>

      <Callus />
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default BlogDetailPage;