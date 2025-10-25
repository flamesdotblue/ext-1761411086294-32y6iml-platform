import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="mt-12 border-t border-white/60 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="font-semibold">SweetSlice Cakes</h3>
          <p className="mt-2 text-sm text-slate-600 max-w-xs">
            Freshly baked with love. We craft custom and classic cakes for birthdays, weddings, and special moments.
          </p>
        </div>
        <div>
          <h4 className="font-medium">Contact</h4>
          <ul className="mt-2 text-sm text-slate-600 space-y-1">
            <li><a className="hover:text-pink-600" href="mailto:hello@sweetslice.example">hello@sweetslice.example</a></li>
            <li><a className="hover:text-pink-600" href="tel:+123456789">+1 (234) 567-89</a></li>
            <li>123 Bakery Lane, Caketown</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Policies</h4>
          <ul className="mt-2 text-sm text-slate-600 space-y-1">
            <li><a className="hover:text-pink-600" href="#">Shipping & Delivery</a></li>
            <li><a className="hover:text-pink-600" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-pink-600" href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 py-6 border-t border-white/60">
        © {new Date().getFullYear()} SweetSlice Cakes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
