import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '/src/components/logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img src={logo} alt="Logo" className={`h-8 w-8 ${isScrolled ? 'text-emerald-600' : 'text-white'}`} />
            </Link>
            <span className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              MounTrip
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#" isScrolled={isScrolled}>Home</NavLink>
            <NavLink href="#packages" isScrolled={isScrolled}>Packages</NavLink>
            <NavLink href="/about" isScrolled={isScrolled}>About</NavLink>
            <NavLink href="#contact" isScrolled={isScrolled}>Contact</NavLink>
            <button className={`px-6 py-2 rounded-full transition transform hover:scale-105 ${
              isScrolled 
                ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                : 'bg-white text-gray-900 hover:bg-gray-100'
            }`}>
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen 
              ? <X className={isScrolled ? 'text-gray-900' : 'text-white'} /> 
              : <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="#">Home</MobileNavLink>
            <MobileNavLink href="#packages">Packages</MobileNavLink>
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
            <Link to="/about" className={`text-lg ${isScrolled ? 'text-gray-900' : 'text-white'}`}>About Us</Link>
            <button className="w-full text-center px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition">
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children, isScrolled }: { href: string; children: React.ReactNode; isScrolled: boolean }) {
  return (
    <a 
      href={href}
      className={`font-medium transition-colors ${
        isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/90 hover:text-white'
      }`}
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href}
      className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md"
    >
      {children}
    </a>
  );
}