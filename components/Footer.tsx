"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Reveal } from "./Animations";

export default function Footer() {
  return (
    <footer className="bg-brand-primary-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <Reveal delay={100}>
            <div>
              <h2 className="mb-4 text-2xl font-black">Arcanum Space</h2>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We design and manufacture advanced UAV systems for defense, surveillance, and industrial applications. Built for precision. Powered for mission success.
              </p>

              {/* Social */}
              <div className="flex gap-4 mt-6">
                <Facebook className="cursor-pointer hover:text-gray-300" />
                <Instagram className="cursor-pointer hover:text-gray-300" />
                <Twitter className="cursor-pointer hover:text-gray-300" />
                <Linkedin className="cursor-pointer hover:text-gray-300" />
              </div>
            </div>
          </Reveal>

          {/* Quick Links */}
          <Reveal delay={200}>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li className="hover:text-white cursor-pointer">Home</li>
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">Products</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
              </ul>
            </div>
          </Reveal>

          {/* Services */}
          <Reveal delay={300}>
            <div>
              <h3 className="font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li className="hover:text-white cursor-pointer">Aerial Surveillance</li>
                <li className="hover:text-white cursor-pointer">Agriculture Drones</li>
                <li className="hover:text-white cursor-pointer">Drone Mapping</li>
                <li className="hover:text-white cursor-pointer">Custom Drone Build</li>
              </ul>
            </div>
          </Reveal>

          {/* Contact */}
          <Reveal delay={400}>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li>1101, AH Tower,</li>
                <li>Antriksh Heights, Sector 81</li>
                <li>Gurgaon, India</li>
                <li className="mt-2">Email: info@arcanumspace.com</li>
                <li>Phone: +91 98765 43210</li>
              </ul>
            </div>
          </Reveal>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom */}
        <Reveal delay={500} className="flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} Arcanum Space. All rights reserved.</p>
        </Reveal>

      </div>
    </footer>
  );
}
