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

import header from "../public/header.jpg";

const navLinks = [
  { label: "Capabilities", href: "/features" },
  { label: "Solutions", href: "/drone" },
  { label: "Components", href: "/accessories" },
  { label: "About", href: "/about" },
];

export default function Header() {
  return (
    <header className="absolute z-20 w-full px-4 pt-4 sm:px-6 md:px-8">
      <div className="mx-auto w-full flex items-center justify-between rounded-full bg-white px-4 sm:px-6 py-3 shadow-sm">

        {/* LEFT */}
        <div className="flex items-center gap-3 sm:gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 sm:h-10 sm:w-10 overflow-hidden rounded-full bg-slate-900">
              <Image
                src={header}
                alt="logo"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-base sm:text-lg font-extrabold text-slate-900">
              Techie
            </span>
          </Link>

          {/* NAV (>=768px) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-sm font-semibold text-slate-900 
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-0.5 after:w-0 after:bg-brand-primary-dark
                after:transition-all after:duration-300
                hover:after:w-full hover:text-brand-primary-dark"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* RIGHT (>=768px) */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Icons only on large screens */}
          <div className="hidden lg:flex items-center gap-4">
            <Phone size={18} />
            <Mail size={18} />
            <MapPin size={18} />
          </div>

          <button className="rounded-full bg-brand-primary px-5 lg:px-8 py-2 lg:py-3 text-sm font-semibold text-white transition-all hover:bg-brand-primary-dark active:scale-95">
            Shop Now
          </button>
        </div>

        {/* MOBILE (<768px) */}
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
                  <button className="mt-6 w-full rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white active:scale-95">
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