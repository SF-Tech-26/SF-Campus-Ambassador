import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    // Navigation links data
    const navLinks = [
        { name: 'HOME', href: '#home', active: true },
        { name: 'ABOUT US', href: '#aboutus' },
        { name: 'CA PROGRAM', href: '#caprogram' },
        { name: 'PERKS', href: '#perks' },
        { name: 'RESPONSIBILITY', href: '#responsibility' },
        { name: 'TESTIMONIALS', href: '#testimonials' },
        { name: 'TEAM', href: '#ourteam' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <nav className="font-jaro fixed top-0 left-0 right-0 z-50">
<<<<<<< HEAD
            {/* Horizontal navbar for lg screens and up */}
            <div className="hidden lg:block bg-black text-white py-4 border-b border-gray-700 animate-slideDown"  >
=======
            {/* Horizontal navbar for xl2 screens (1220px) and up */}
            <div className="hidden xl2:block bg-black text-white py-4 border-b border-gray-700 animate-slideDown"  >
>>>>>>> 27beed2bca4faab9d4a8c24b8955f2b694df18b8
                <div className="w-full flex items-center justify-between px-8">
                    <div className="flex items-center space-x-8 text-xl text-gray-300">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`nav-link-hover hover:text-[#E83030] px-3 py-2 ${link.active ? 'nav-link-active text-[#E83030]' : ''
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
                        <button

<<<<<<< HEAD
                            className="inline-block text-m font-medium bg-white text-black px-4 py-2 rounded-md shadow-sm hover:bg-[#CABC8E] transition-colors cur"
=======
                            className="inline-block text-m font-medium bg-white text-black px-4 py-2 rounded-md shadow-sm hover:bg-[#CABC8E] transition-colors cursor-pointer"
>>>>>>> 27beed2bca4faab9d4a8c24b8955f2b694df18b8
                            style={{
                                animation: 'slideDown 0.5s ease-out forwards',
                                animationDelay: `${navLinks.length * 100}ms`,
                                opacity: 0,
                                transform: 'translateY(-20px)'
                            }}
                            onClick={() => {
                                navigate("/signin")
                            }}
                        >
                            Login / SignUp
                        </button>
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

<<<<<<< HEAD
            {/* Mobile/Tablet sidebar content (below lg breakpoint) */}
            <div className="lg:hidden">
=======
            {/* Mobile/Tablet sidebar content (below 1220px breakpoint) */}
            <div className="xl2:hidden">
>>>>>>> 27beed2bca4faab9d4a8c24b8955f2b694df18b8
                {/* Hamburger button */}
                <button
                    id="menu-toggle"
                    className={`fixed top-4 left-4 z-50 p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 bg-black text-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                    aria-label="Toggle menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <HamburgerIcon />
                </button>

                {/* Login button for mobile - top right corner */}
                <button
                    className="fixed top-4 right-4 10 text-xs sm:text-sm font-medium bg-white text-black px-3 py-2 sm:px-4 sm:py-2 cursor-pointer rounded-md shadow-sm hover:bg-[#CABC8E] transition-colors"
                    onClick={() => {
                        navigate("/signin")
                    }}
                >
                    Login / SignUp
                </button>


                {/* Sidebar container */}
                <div
                    className={`${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                        } fixed top-0 left-0 h-full w-[220px] bg-black/40 backdrop-blur-md text-white transition-transform duration-300 ease-in-out z-40 shadow-lg pointer-events-auto`}
                    style={{
                        borderRight: '1px solid rgba(255, 255, 255, 0.1)', // optional subtle edge line
                    }}
                >
                    {/* Sidebar content */}
                    <div className="flex flex-col h-full py-8 px-5">
                        {/* Navigation Links */}
                        <div className="flex flex-col space-y-3 text-lg text-gray-300">
                            {navLinks.map((link, index) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`hover:text-[#E83030] px-2 py-2 rounded-md transition-all
            ${isMenuOpen
                                            ? 'translate-x-0 opacity-100'
                                            : '-translate-x-8 opacity-0'
                                        } 
            ${link.active ? 'text-[#E83030] bg-white/10' : ''}`}
                                    style={{
                                        fontWeight: 500,
                                        transition: 'opacity 300ms, transform 300ms',
                                        transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms',
                                    }}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>



                {/* Overlay for mobile - closes sidebar when clicking outside */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-30 transition-opacity duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    ></div>
                )}

            </div>
        </nav>
    );
};

export default Navbar