import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#BBDEFB]/40 via-[#E1BEE7]/30 to-[#F8BBD0]/30 text-slate-800">
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <Catalog />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
