/**
 * Navigation component for site navigation
 * 
 * This component provides the main navigation menu with responsive design
 * and mobile menu functionality.
 */

"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * Navigation Component
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 */
export function Navigation({ className = "" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      label: "Applications",
      href: "/applications",
      submenu: [
        { label: "Apparel", href: "/applications/apparel" },
        { label: "Automotive", href: "/applications/automotive" },
        { label: "Filtration", href: "/applications/filtration" },
        { label: "Customised Nonwoven", href: "/applications/customised-nonwoven" },
      ]
    },
    {
      label: "Company",
      href: "/company",
      submenu: [
        { label: "Who We Are", href: "/who-we-are" },
        { label: "Global Competency", href: "/global-competency" },
        { label: "Innovation", href: "/innovation" },
        { label: "ESG Impact", href: "/esg-impact" },
      ]
    },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Careers", href: "/careers" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${className}`}>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
        {navigationItems.map((item, index) => (
          <div key={index} className="relative group">
            <Link
              href={item.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
            >
              {item.label}
            </Link>
            
            {/* Dropdown Menu */}
            {item.submenu && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {item.submenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t md:hidden z-50">
          <div className="py-2">
            {navigationItems.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                
                {/* Mobile Submenu */}
                {item.submenu && (
                  <div className="bg-gray-50">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block px-8 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
