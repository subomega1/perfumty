"use client"
import React, { useState, useEffect } from 'react';
import { ShoppingBasket, User, Search, Menu, X } from 'lucide-react';
import  Link from 'next/link';
// NavLink component for desktop
const NavLink = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="text-white hover:text-gray-200 text-sm uppercase tracking-[0.2em] relative group transition-colors duration-300"
    >
      {children}
      <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
    </a>
  );
};

// NavLink component for mobile
const MobileNavLink = ({ href, children, onClick }) => {
  return (
    <a 
      href={href} 
      className="text-white hover:text-gray-200 text-lg uppercase tracking-[0.2em] text-center transition-colors duration-300"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

// Icon button component
const IconButton = ({ children, onClick }) => {
  return (
    <button 
      className="text-white hover:text-gray-200 transition-colors duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#D7A6A1]/95 backdrop-blur-sm shadow-lg py-3' : 'bg-[#D7A6A1] py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
        <div className="w-52 h-16">
                <img 
                  src="/perfumty1.png" 
                  alt="Logo" 
                  className="w-92 object-contain" 
                />
              </div> 
          

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-gray-200" 
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <NavLink href="/">home</NavLink>
            <NavLink href="/story">story</NavLink>
            <NavLink href="/collection">our collection</NavLink>
            <NavLink href="/flowers">Our flowers</NavLink>
            <NavLink href="/survey">customizing</NavLink>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <IconButton>
              <Search size={20} />
            </IconButton>
            <Link href="/sing-in">
            <IconButton>
              <User size={20} />
            </IconButton>
            </Link>
            <Link href="/cart">
            <IconButton>
              <ShoppingBasket size={20} />
            </IconButton>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#D7A6A1]/95 backdrop-blur-sm absolute left-0 right-0 top-full pt-6 pb-8 px-4 shadow-lg">
            <nav className="flex flex-col space-y-6 mb-8">
              <MobileNavLink href="/" onClick={toggleMobileMenu}>home</MobileNavLink>
              <MobileNavLink href="/story" onClick={toggleMobileMenu}>story</MobileNavLink>
              <MobileNavLink href="/collection" onClick={toggleMobileMenu}>our collection</MobileNavLink>
              <MobileNavLink href="/customize" onClick={toggleMobileMenu}>customizing</MobileNavLink>
              <MobileNavLink href="/flowers" onClick={toggleMobileMenu}>Our flowers</MobileNavLink>

            </nav>
            <div className="flex justify-around px-2">
              <IconButton onClick={toggleMobileMenu}>
                <Search size={20} />
              </IconButton>
              <IconButton onClick={toggleMobileMenu}>
                <User size={20} />
              </IconButton>
              <IconButton onClick={toggleMobileMenu}>
                <ShoppingBasket size={20} />
              </IconButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};



export default Header;