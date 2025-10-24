import React, { useState } from 'react';

/**
 * HamburgerIcon component for the mobile menu toggle.
 */
const HamburgerIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
);


/**
 * The main Navbar component.
 */
const Navbar = () => {
    // State to manage the mobile menu's open/closed status
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Navigation links data
    const navLinks = [
        { name: 'HOME', href: '#', active: true },
        { name: 'ABOUT US', href: '#' },
        { name: 'CA PROGRAM', href: '#' },
        { name: 'PERKS', href: '#' },
        { name: 'RESPONSIBILITY', href: '#' },
        { name: 'TESTIMONIALS', href: '#' },
        { name: 'TEAM', href: '#' },
        { name: 'FAQ', href: '#' },
    ];

    return (
        <nav className="bg-black text-white py-4 px-4 sm:px-8 border-b border-gray-700 font-jaro">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                

                {/* Mobile Menu Button (Hamburger) */}
                <button
                    id="menu-toggle"
                    className="md:hidden p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    aria-label="Toggle menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle state on click
                >
                    <HamburgerIcon />
                </button>

                {/* Navigation Links
                  - The 'hidden' class is applied conditionally based on 'isMenuOpen' state.
                */}
                <div 
                    id="menu" 
                    className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 lg:space-x-6 w-full md:w-auto mt-4 md:mt-0`}
                >
                    
                    {/* Main Nav Links - Mapped from array */}
                    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 lg:space-x-6 text-sm font-medium text-gray-300">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                // Apply active classes conditionally
                                className={`nav-link-hover hover:text-white px-2 py-1 ${link.active ? 'nav-link-active text-white' : ''}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Spacer */}
                    <div className="flex-grow hidden lg:block"></div>

                    {/* Login/SignUp Link */}
                    <div className="mt-4 md:mt-0 md:ml-6">
                        <a href="#" className="inline-block text-sm font-medium bg-white text-black px-4 py-2 rounded-md shadow-sm hover:bg-gray-200 transition-colors">
                            Login / SignUp
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar