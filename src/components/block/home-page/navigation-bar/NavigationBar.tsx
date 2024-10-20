import React from 'react';

export const NavigationBar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="text-xl font-bold ">HIAWARE</a>
                    </div>

                    {/* Links */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#" className="text-gray-800 hover:text-blue-600">Home</a>
                        <a href="#" className="text-gray-800 hover:text-blue-600">About</a>
                        <a href="#" className="text-gray-800 hover:text-blue-600">Contact</a>
                    </div>

                    {/* Hamburger Icon for Mobile */}
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-800 hover:text-blue-600 focus:outline-none">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
