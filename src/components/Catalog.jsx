import React, { useMemo, useState } from "react";

const cakesSeed = [
  {
    id: 1,
    name: "Strawberry Bliss",
    price: 32,
    flavor: "Strawberry",
    occasion: "Birthday",
    dietary: "Egg-free",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Chocolate Dream",
    price: 38,
    flavor: "Chocolate",
    occasion: "Any",
    dietary: "Standard",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Pastel Wedding Cake",
    price: 120,
    flavor: "Vanilla",
    occasion: "Wedding",
    dietary: "Gluten-free",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6cf7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Lemon Zest",
    price: 30,
    flavor: "Lemon",
    occasion: "Any",
    dietary: "Standard",
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1601972599720-b0d7174f2d9b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Vegan Velvet",
    price: 42,
    flavor: "Red Velvet",
    occasion: "Birthday",
    dietary: "Vegan",
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1599785209794-9e7c05f0e7a0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Blueberry Cloud",
    price: 36,
    flavor: "Blueberry",
    occasion: "Any",
    dietary: "Standard",
    rating: 4.4,
    img: "https://images.unsplash.com/photo-1616690710400-a16d146927c5?q=80&w=1200&auto=format&fit=crop",
  },
];

const Select = ({ label, value, onChange, children, id }) => (
  <label className="flex flex-col gap-1 text-sm" htmlFor={id}>
    <span className="font-medium">{label}</span>
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-xl border border-slate-200 bg-white/90 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
    >
      {children}
    </select>
  </label>
);

const Star = ({ filled }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className={`w-4 h-4 ${filled ? "fill-yellow-400" : "fill-slate-300"}`}
  >
    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.401 8.163L12 18.896l-7.335 3.865 1.401-8.163L.132 9.211l8.2-1.193L12 .587z" />
  </svg>
);

const ProductCard = ({ cake, onAdd, added }) => (
  <div className="group rounded-2xl border border-slate-200 bg-white/80 backdrop-blur overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <div className="relative">
      <img src={cake.img} alt={`${cake.name} cake`} className="h-44 w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
      <div className="absolute top-2 left-2 text-xs font-medium bg-white/90 rounded-full px-2 py-0.5 border border-white/70">{cake.dietary}</div>
    </div>
    <div className="p-4">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold leading-snug">{cake.name}</h3>
        <span className="font-semibold">${cake.price}</span>
      </div>
      <div className="mt-1 text-xs text-slate-600">{cake.flavor} • {cake.occasion}</div>
      <div className="mt-2 flex items-center gap-1" aria-label={`Rating ${cake.rating} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} filled={i < Math.round(cake.rating)} />
        ))}
        <span className="ml-1 text-xs text-slate-600">{cake.rating.toFixed(1)}</span>
      </div>
      <button
        onClick={() => onAdd(cake.id)}
        className={`mt-4 w-full rounded-xl px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
          added ? "bg-emerald-500 text-white focus-visible:ring-emerald-300" : "bg-gradient-to-tr from-[#F8BBD0] to-[#E1BEE7] text-slate-800 focus-visible:ring-pink-200"
        }`}
        aria-live="polite"
      >
        {added ? "Added!" : "Add to Cart"}
      </button>
    </div>
  </div>
);

const Catalog = () => {
  const [flavor, setFlavor] = useState("All");
  const [occasion, setOccasion] = useState("All");
  const [dietary, setDietary] = useState("All");
  const [price, setPrice] = useState("All");
  const [sort, setSort] = useState("popular");
  const [addedId, setAddedId] = useState(null);

  const filtered = useMemo(() => {
    let list = [...cakesSeed];
    if (flavor !== "All") list = list.filter((c) => c.flavor === flavor);
    if (occasion !== "All") list = list.filter((c) => c.occasion === occasion);
    if (dietary !== "All") list = list.filter((c) => c.dietary === dietary);
    if (price !== "All") {
      const [min, max] = price.split("-").map(Number);
      list = list.filter((c) => (isNaN(min) || c.price >= min) && (isNaN(max) || c.price <= max));
    }
    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        list.sort((a, b) => b.rating - a.rating);
    }
    return list;
  }, [flavor, occasion, dietary, price, sort]);

  const handleAdd = (id) => {
    setAddedId(id);
    window.clearTimeout(window.__addedTimer);
    window.__addedTimer = window.setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <section id="catalog" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Our Cakes</h2>
            <p className="mt-1 text-slate-600">Filter and sort to find your perfect cake.</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <label className="flex items-center gap-2">
              <span className="text-slate-600">Sort</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-xl border border-slate-200 bg-white/90 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                aria-label="Sort results"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </label>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          <Select id="flavor" label="Flavor" value={flavor} onChange={setFlavor}>
            <option>All</option>
            <option>Strawberry</option>
            <option>Chocolate</option>
            <option>Vanilla</option>
            <option>Lemon</option>
            <option>Blueberry</option>
            <option>Red Velvet</option>
          </Select>
          <Select id="occasion" label="Occasion" value={occasion} onChange={setOccasion}>
            <option>All</option>
            <option>Any</option>
            <option>Birthday</option>
            <option>Wedding</option>
          </Select>
          <Select id="dietary" label="Dietary" value={dietary} onChange={setDietary}>
            <option>All</option>
            <option>Standard</option>
            <option>Egg-free</option>
            <option>Gluten-free</option>
            <option>Vegan</option>
          </Select>
          <Select id="price" label="Price Range" value={price} onChange={setPrice}>
            <option>All</option>
            <option value="0-35">$0 - $35</option>
            <option value="35-60">$35 - $60</option>
            <option value="60-999">$60+</option>
          </Select>
          <button
            onClick={() => {
              setFlavor("All");
              setOccasion("All");
              setDietary("All");
              setPrice("All");
              setSort("popular");
            }}
            className="self-end h-[42px] rounded-xl px-4 py-2 text-sm font-medium border border-slate-200 bg-white/80 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-300"
            aria-label="Reset filters"
          >
            Reset
          </button>
        </div>

        <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((cake) => (
            <ProductCard key={cake.id} cake={cake} onAdd={handleAdd} added={addedId === cake.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
