import Link from 'next/link';
import { useState } from 'react';
import {
//   Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <a className="text-white text-xl font-bold">MyLogo</a>
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/">
                                    <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                </Link>
                                <Link href="/about">
                                    <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                                </Link>
                                <Link href="/services">
                                    <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
                                </Link>
                                <Link href="/contact">
                                    <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <Link href="/login">
                                <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</a>
                            </Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/">
                        <a className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                    </Link>
                    <Link href="/about">
                        <a className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
                    </Link>
                    <Link href="/services">
                        <a className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
                    </Link>
                    <Link href="/contact">
                        <a className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                    </Link>
                    <Link href="/login">
                        <a className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
