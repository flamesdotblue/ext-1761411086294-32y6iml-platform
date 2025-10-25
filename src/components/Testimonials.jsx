import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    name: "Amelia R.",
    text: "The Strawberry Bliss cake was a hit at my daughter's birthday! Moist, fresh, and beautifully decorated.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael S.",
    text: "Loved the vegan red velvet. It's hard to find good vegan cakes—this one exceeded expectations!",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya K.",
    text: "On-time delivery and the chocolate cake tasted divine. Will definitely order again.",
    rating: 4,
  },
];

const Stars = ({ n }) => (
  <div className="inline-flex" aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" className={`w-4 h-4 ${i < n ? "fill-yellow-400" : "fill-slate-300"}`}>
        <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.401 8.163L12 18.896l-7.335 3.865 1.401-8.163L.132 9.211l8.2-1.193L12 .587z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % data.length), 4000);
    return () => clearInterval(t);
  }, []);

  const go = (dir) => setIndex((i) => (i + dir + data.length) % data.length);

  return (
    <section id="testimonials" className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">Loved by Cake Lovers</h2>
        <p className="mt-2 text-center text-slate-600">Real stories from our happy customers</p>

        <div className="mt-8 relative">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/80 backdrop-blur">
            <div className="p-6 sm:p-8 text-center min-h-[180px] flex flex-col items-center justify-center">
              <Stars n={data[index].rating} />
              <blockquote className="mt-3 text-slate-700 leading-relaxed max-w-2xl">“{data[index].text}”</blockquote>
              <figcaption className="mt-3 font-medium">— {data[index].name}</figcaption>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2" role="tablist" aria-label="Testimonials navigation">
            {data.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={i === index}
                aria-controls={`testimonial-${t.id}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${i === index ? "bg-pink-500" : "bg-slate-300 hover:bg-slate-400"}`}
              />
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              onClick={() => go(-1)}
              className="rounded-full px-3 py-1.5 text-sm border border-slate-200 bg-white/80 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-300"
              aria-label="Previous testimonial"
            >
              ← Prev
            </button>
            <button
              onClick={() => go(1)}
              className="rounded-full px-3 py-1.5 text-sm border border-slate-200 bg-white/80 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-300"
              aria-label="Next testimonial"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
