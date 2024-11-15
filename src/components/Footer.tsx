import React from 'react';
import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-emerald-500" />
              <span className="font-bold text-xl">MounTrip</span>
            </div>
            <p className="text-gray-400">
              Discover the beauty of the Himalayas with our expert-guided treks and tours.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} />
              <SocialLink href="https://www.instagram.com/mountrip.in?igsh=cjc5em9kazFxc2Z1" icon={<Instagram className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#packages">Our Packages</FooterLink>
              <FooterLink href="#gallery">Gallery</FooterLink>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
            </ul>
          </div>

          {/* Popular Treks */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Treks</h3>
            <ul className="space-y-2">
              <FooterLink href="#valley">Valley of Flowers</FooterLink>
              <FooterLink href="#kedarkantha">Kedarkantha Trek</FooterLink>
              <FooterLink href="#nanda">Nanda Devi Base Camp</FooterLink>
              <FooterLink href="#roopkund">Roopkund Trek</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <ContactInfo icon={<Phone className="h-5 w-5" />}>
                +91 98765 43210
              </ContactInfo>
              <ContactInfo icon={<Mail className="h-5 w-5" />}>
                info@mountrip.in
              </ContactInfo>
              <ContactInfo icon={<MapPin className="h-5 w-5" />}>
                 Mountain View, Dehradun, Uttarakhand, India
              </ContactInfo>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} MounTrip. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href}
      className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-emerald-600 transition"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a 
        href={href}
        className="text-gray-400 hover:text-emerald-500 transition"
      >
        {children}
      </a>
    </li>
  );
}

function ContactInfo({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center space-x-3 text-gray-400">
      {icon}
      <span>{children}</span>
    </div>
  );
}