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
import header from "../public/header.jpg"

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Drone", href: "/drone" },
  { label: "Accessories", href: "/accessories" },
  { label: "About", href: "/about" },
];

export default function Header() {
  return (
    <header className="absolute z-20 w-full px-5 pt-5 sm:px-8 md:px-10">
      <div className="mx-auto w-full flex items-center justify-between rounded-full bg-white px-6 py-4 shadow-sm">
        {/* LEFT */}
        <div className="flex items-center gap-4 sm:gap-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-900">
              <Image
                src={header}
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
                className="text-sm font-semibold text-slate-900 hover:text-[#023020]"
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

          <button className="rounded-full bg-[#2B411C] px-8 py-3 text-sm font-semibold text-white">
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
                  <button className="mt-6 w-full rounded-full bg-[#2B411C] px-6 py-3 text-sm font-semibold text-white">
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
