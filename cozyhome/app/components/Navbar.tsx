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
                            <Link href="/cart" className='text-white font-bold'>
                                Cart
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/#" className='text-white font-bold'>
                                    Home
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='relative flex'>
                        <input 
                        type="search"
                        className='relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-gray-800 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary'
                        placeholder='Search' 
                        />
                        <span
                        className='flex items-center whitespace-nowrap px-3 py-[0.25rem] text-white dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5'>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="text-white">
                                <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" 
                                />
                            </svg>
                        </span>
                    </div>
                    <div className="hidden md:block flex-row">
                        <div className="ml-4 flex items-center md:ml-6">
                            <Link href="/loginPage" className='text-white font-bold'>
                                Login
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
                    <Link href="/#" className='text-white font-bold'>
                        Home
                    </Link>
                    <Link href="/loginPage" className='text-white font-bold'>
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
