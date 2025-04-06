'use client';

import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  id: string;
  label: string;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems: NavItem[] = [
    { id: 'home', label: 'ראשי' },
    { id: 'menu', label: 'תפריט' },
    { id: 'about', label: 'אודות' },
    { id: 'gallery', label: 'גלריה' },
    { id: 'contact', label: 'צור קשר' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      
      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
      
      // Add shadow to header when scrolled
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
  };

  return (
    <header 
      className={`fixed top-0 right-0 left-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-md py-2' : 'py-4'
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-primary">
            <span className="text-secondary">מסעדה</span> גמא
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 space-x-reverse">
          {navItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={`cursor-pointer text-lg font-medium transition-colors hover:text-primary ${
                activeSection === item.id ? 'text-primary font-bold' : 'text-gray-700'
              }`}
            >
              {item.label}
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-primary focus:outline-none"
            aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
          >
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden fixed top-[60px] right-0 h-screen w-64 bg-white shadow-lg z-40"
          >
            <div className="flex flex-col py-4">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={closeMenu}
                  className={`px-6 py-3 text-lg font-medium transition-colors hover:bg-gray-100 ${
                    activeSection === item.id ? 'text-primary font-bold' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;