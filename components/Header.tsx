"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Drones", href: "#" },
  { label: "Cameras", href: "#" },
  { label: "Accessories", href: "#" },
  { label: "Support", href: "#" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full relative">
      <div className="mx-auto flex max-w-450 items-center justify-between rounded-full bg-white px-6 py-4 shadow-sm">
        
        {/* LEFT */}
        <div className="flex items-center gap-4 sm:gap-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=200&q=80"
                alt="logo"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-lg font-extrabold text-slate-900">
              Techie
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-900 hover:text-[#c8a9b7]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex items-center gap-5">
          <Phone size={18} />
          <Mail size={18} />
          <MapPin size={18} />

          <button className="rounded-full bg-[#d7bcc8] px-6 py-2 text-sm font-semibold text-white">
            Shop Now
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-slate-900"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="fixed inset-0 z-50">
          
          {/* OVERLAY */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* SIDEBAR */}
          <div className="absolute right-0 top-0 h-full w-65 bg-white p-6 shadow-lg flex flex-col">
            
            {/* CLOSE */}
            <div className="flex justify-end">
              <button onClick={() => setOpen(false)}>
                <X size={24} />
              </button>
            </div>

            {/* NAV LINKS */}
            <nav className="mt-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-semibold text-slate-900"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CONTACT + CTA */}
            <div className="mt-auto flex flex-col gap-5 pt-10">
              <div className="flex gap-4 text-slate-700">
                <Phone size={18} />
                <Mail size={18} />
                <MapPin size={18} />
              </div>

              <button className="rounded-full bg-[#d7bcc8] px-6 py-3 text-sm font-semibold text-white">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}