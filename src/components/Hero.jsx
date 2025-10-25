import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F8BBD0]/60 via-[#E1BEE7]/40 to-transparent"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Celebrate Every Moment with Handcrafted Cakes
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From classic flavors to custom creations, our cakes are baked fresh daily with premium ingredients. Explore our delicious catalog tailored for birthdays, weddings, and every sweet occasion.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#catalog"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-tr from-pink-500 to-violet-500 shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-400"
            >
              Browse Cakes
            </a>
            <a
              href="#custom"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-white/70 backdrop-blur border border-white/60 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-300"
            >
              Custom Order
            </a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600" aria-label="Shop highlights">
            <li>✔️ Same-day local delivery</li>
            <li>✔️ Egg-free & gluten-free options</li>
            <li>✔️ Secure checkout</li>
          </ul>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1736959574670-a8ace9856e1c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbiUyMGVsZWdhbnQlMjBwYXN0ZWwlMjBjYWtlfGVufDB8MHx8fDE3NjE0MTE3MDF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80"
            alt="An elegant pastel cake decorated with berries and flowers"
            className="w-full h-80 sm:h-96 object-cover rounded-3xl shadow-xl"
          />
          <div className="absolute -bottom-4 -left-4 w-40 h-40 rounded-3xl bg-[#BBDEFB]/60 blur-xl -z-10" aria-hidden="true"></div>
          <div className="absolute -top-6 -right-6 w-48 h-48 rounded-full bg-[#F8BBD0]/60 blur-xl -z-10" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
