"use client";
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image';
import ThemeSwitcher from './ThemeSwitcher';
import { useSession } from 'next-auth/react';

import SignInButton from './auth/SignInButton';
import RegisterButton from './auth/RegisterButton';
import ProfileButton from './ProfileButton';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { data: session } = useSession();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md">
            <div className="max-w-7xl mx-auto px-6 lg:px-20 py-4 flex justify-between items-center">


                {/* Logo */}
                <div className="text-2xl flex items-center gap-4 font-extrabold text-green-800 dark:text-green-600 font-accent">
                    <Image
                        src={'/logo.png'}
                        width={400}
                        height={400}
                        alt='navbar-logo'
                        className='w-12 h-12'
                    />
                    <Link href="/">PetalPulse</Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-10 text-gray-800 dark:text-gray-300 items-center">
                    <Link href="/" className="  hover:text-green-600 dark:hover:text-green-500 transition">Home</Link>
                    <Link href="/about-us" className="  hover:text-green-600 dark:hover:text-green-500 transition">About</Link>
                    <Link href="/events" className="  hover:text-green-600 dark:hover:text-green-500 transition">Events</Link>
                    <Link href="/forum" className="  hover:text-green-600 dark:hover:text-green-500 transition">Forum</Link>
                    <Link href="/contact" className="  hover:text-green-600 dark:hover:text-green-500 transition">Contact</Link>

                    {session && <Link href="/checkup" className="  hover:text-green-600 dark:hover:text-green-500 transition">PCU</Link> }

                    
                    {!session ? (
                        <div className='space-x-2'>
                            <SignInButton />
                            <RegisterButton />
                        </div>
                    ) : (
                        <ProfileButton user={session?.user} />
                    )}

                    {/* <div className='fixed p-5 rounded-full bg-black z-50'> */}
                    <ThemeSwitcher />
                    {/* </div> */}

                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-green-800 focus:outline-none"
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${isMenuOpen ? 'block' : 'hidden'
                    } md:hidden bg-white dark:bg-gray-900 py-4 space-y-4 text-center fixed top-0 w-full min-h-svh z-50`}
            >
                <div className='flex justify-between px-6 lg:px-20'>
                    {/* Logo */}
                    <div className="text-2xl flex items-center gap-4 font-extrabold text-green-800 dark:text-green-600 font-accent">
                        <Image
                            src={'/logo.png'}
                            width={400}
                            height={400}
                            alt='navbar-logo'
                            className='w-12 h-12'
                        />
                        <Link href="/">PetalPulse</Link>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-green-800 focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <Link href="/" onClick={toggleMenu} className="text-lg text-gray-800 dark:text-gray-300 hover:text-green-600 transition block">Home</Link>
                <Link href="/about-us" onClick={toggleMenu} className="text-lg text-gray-800 dark:text-gray-300 hover:text-green-600 transition block">About</Link>
                <Link href="/checkup" onClick={toggleMenu} className="text-lg text-gray-800 dark:text-gray-300 hover:text-green-600 transition block">PCU</Link>
                <Link href="/events" onClick={toggleMenu} className="text-lg text-gray-800 dark:text-gray-300 hover:text-green-600 transition block">Events</Link>
                <Link href="/forum" onClick={toggleMenu} className="text-lg text-gray-800 dark:text-gray-300 hover:text-green-600 transition block">Forum</Link>
                <Link href="/contact" onClick={toggleMenu} className="text-lg text-gray-800 dark:text-gray-300 hover:text-green-600 transition block">Contact</Link>

                    
                {!session ? (
                    <div className='space-y-2 flex flex-col items-center'>
                        <SignInButton />
                        <RegisterButton />
                    </div>
                ) : (
                    <ProfileButton user={session?.user} />
                )}

                <ThemeSwitcher />

            </div>
            

            
        </nav>
    )
}

export default Navbar
