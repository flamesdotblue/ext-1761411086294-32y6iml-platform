import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2" aria-label="Cake Shop Home">
          <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-tr from-[#F8BBD0] via-[#E1BEE7] to-[#BBDEFB]"></span>
          <span className="font-semibold tracking-tight text-lg">SweetSlice Cakes</span>
        </a>
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          <a href="#catalog" className="hover:text-pink-600 transition-colors">Cakes</a>
          <a href="#testimonials" className="hover:text-pink-600 transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-pink-600 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="rounded-full px-4 py-2 text-sm font-medium bg-gradient-to-tr from-[#BBDEFB] to-[#E1BEE7] text-slate-800 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#BBDEFB]">
            Sign In
          </button>
          <button className="relative rounded-full p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F8BBD0]" aria-label="Open cart">
            <span className="i">🛒</span>
            <span className="absolute -top-1 -right-1 text-xs bg-pink-500 text-white rounded-full px-1.5 py-0.5">2</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
