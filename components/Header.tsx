"use client";
import Image from "next/image";

import Link from "next/link";
import { Mail, MapPin, Phone, Menu } from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const navLinks = [
  { label: "Drones", href: "#" },
  { label: "Cameras", href: "#" },
  { label: "Accessories", href: "#" },
  { label: "Support", href: "#" },
];

export default function Header() {
  return (
    <header className="absolute z-20 w-full px-5 pt-5 sm:px-8 md:px-10">
      <div className="mx-auto w-full max-w-7xl flex items-center justify-between rounded-full bg-white px-6 py-4 shadow-sm">
        {/* LEFT */}
        <div className="flex items-center gap-4 sm:gap-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-900">
              <Image
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=200&q=80"
                alt="logo"
                width={40}
                height={40}
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

        {/* RIGHT DESKTOP */}
        <div className="hidden md:flex items-center gap-5">
          <Phone size={18} />
          <Mail size={18} />
          <MapPin size={18} />

          <button className="rounded-full bg-[#d7bcc8] px-8 py-3 text-sm font-semibold text-white">
            Shop Now
          </button>
        </div>

        {/* MOBILE DRAWER */}
        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <button>
                <Menu size={26} />
              </button>
            </DrawerTrigger>

            <DrawerContent className="p-6">
              <DrawerHeader>
                <DrawerTitle>Menu</DrawerTitle>
              </DrawerHeader>

              {/* NAV LINKS */}
              <nav className="mt-6 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <DrawerClose asChild key={link.label}>
                    <Link
                      href={link.href}
                      className="text-lg font-semibold text-slate-900"
                    >
                      {link.label}
                    </Link>
                  </DrawerClose>
                ))}
              </nav>

              {/* FOOTER */}
              <DrawerFooter className="mt-10">
                <div className="flex gap-4 text-slate-700 justify-center">
                  <Phone size={18} />
                  <Mail size={18} />
                  <MapPin size={18} />
                </div>

                <DrawerClose asChild>
                  <button className="mt-6 w-full rounded-full bg-[#d7bcc8] px-6 py-3 text-sm font-semibold text-white">
                    Shop Now
                  </button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
