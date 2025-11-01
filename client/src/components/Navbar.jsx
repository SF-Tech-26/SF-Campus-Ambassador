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
        <nav className="font-jaro fixed top-0 left-0 right-0 z-50">
            {/* Horizontal navbar for lg screens and up */}
            <div className="hidden lg:block bg-black text-white py-4 border-b border-gray-700 animate-slideDown"  >
                <div className="w-full flex items-center justify-between px-8">
                    <div className="flex items-center space-x-8 text-xl text-gray-300">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`nav-link-hover hover:text-[#E83030] px-3 py-2 ${
                                    link.active ? 'nav-link-active text-[#E83030]' : ''
                                }`}
                                style={{
                                    fontWeight: 500,
                                    animation: 'slideDown 0.5s ease-out forwards',
                                    animationDelay: '200ms',
                                    opacity: 0,
                                    transform: 'translateY(-20px)'
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    {/* Desktop Login on the right */}
                    <div className="flex-shrink-0">
                        <a
                            href="#"
                            className="inline-block text-m font-medium bg-white text-black px-4 py-2 rounded-md shadow-sm hover:bg-[#CABC8E] transition-colors"
                            style={{
                                animation: 'slideDown 0.5s ease-out forwards',
                                animationDelay: `${navLinks.length * 100}ms`,
                                opacity: 0,
                                transform: 'translateY(-20px)'
                            }}
                            Navigate
                        >
                            Login / SignUp
                        </a>
                    </div>
                </div>
            </div>

            <style>
                {`
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                `}
            </style>

            {/* Mobile/Tablet sidebar content (below lg breakpoint) */}
            <div className="lg:hidden">
                {/* Hamburger button */}
                <button
                    id="menu-toggle"
                    className={`fixed top-4 left-4 z-50 p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 bg-black text-white transition-opacity duration-300 ${
                        isMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                    aria-label="Toggle menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <HamburgerIcon />
                </button>

                {/* Sidebar container */}
                <div
                    className={`${
                        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } fixed top-0 left-0 h-full w-64 bg-black text-white transition-transform duration-300 ease-in-out z-40 shadow-lg`}
                >
                    {/* Links container */}
                    <div className="flex flex-col h-full py-8 px-4">
                        {/* Navigation Links */}
                        <div className="flex flex-col space-y-4 text-2xl text-gray-300">
                            {navLinks.map((link, index) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`hover:text-[#E83030] px-2 py-3 rounded-md 
                                    ${isMenuOpen 
                                        ? 'translate-x-0 opacity-100' 
                                        : '-translate-x-8 opacity-0'
                                    } ${
                                        link.active ? 'text-[#E83030] bg-gray-900' : ''
                                    }`}
                                    style={{
                                        fontWeight: 500,
                                        transition: 'opacity 300ms, transform 300ms',
                                        transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms'
                                    }}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Login button at bottom */}
                        <div className="mt-auto">
                            <a
                                href="#"
                                className="block text-sm font-medium bg-white text-black px-4 py-2 rounded-md shadow-sm hover:bg-gray-200 transition-colors text-center"
                            >
                                Login / SignUp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Overlay for mobile - closes sidebar when clicking outside */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-30"
                        onClick={() => setIsMenuOpen(false)}
                    ></div>
                )}
            </div>
        </nav>
    );
};

export default Navbar