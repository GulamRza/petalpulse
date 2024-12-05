import Link from 'next/link'
import React from 'react'


function Footer() {
    return (
        <footer className="bg-green-800 dark:bg-green-900 text-white py-10">
            <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* About Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">About Plant Lovers</h3>
                    <p className="text-sm text-gray-300">
                        Plant Lovers is a community dedicated to connecting plant enthusiasts,
                        sharing care tips, and fostering a love for greenery. Join us to
                        nurture your passion!
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#hero" className="hover:text-green-400 transition">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-green-400 transition">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#events" className="hover:text-green-400 transition">
                                Events & Challenges
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-green-400 transition">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <Link href="/privacy-policy" className="hover:text-green-400 transition">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <a href="#faq" className="hover:text-green-400 transition">
                                FAQs
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                    <p className="text-sm text-gray-300 mb-4">
                        Subscribe to our newsletter for plant care tips, event updates, and
                        more!
                    </p>
                    <form className="flex flex-col space-y-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-lg text-gray-800 focus:outline-none"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-green-600 hover:bg-green-500 transition text-white py-2 px-4 rounded-lg font-semibold"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-green-700 mt-8"></div>

            {/* Bottom Section */}
            <div className="text-center py-4">
                <div className="flex justify-center space-x-4 mb-4">
                    {/* Social Media Icons */}
                    <a href="#" className="text-gray-300 hover:text-green-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.337v21.325C0 23.4.6 24 1.337 24H12v-9.3H9.3v-3.7H12V8.1c0-2.3 1.3-4.3 4.3-4.3 1 0 1.9.1 2.3.2v2.7h-1.7c-1.3 0-1.7.7-1.7 1.7v2.3h3.7l-.5 3.7h-3.2V24h6.2c.8 0 1.3-.6 1.3-1.3V1.337C24 .6 23.4 0 22.675 0z" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-green-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path d="M24 4.6c-.9.4-1.8.6-2.7.8 1-.6 1.7-1.4 2-2.4-.9.5-1.9.9-2.9 1.1C19.7 3.3 18.7 3 17.6 3c-2.2 0-4.1 2-4.1 4.4 0 .3 0 .6.1.9C9 7.9 4.8 5.9 2.2 2.8c-.4.7-.6 1.5-.6 2.3 0 1.5.7 2.8 1.8 3.6-.6 0-1.2-.2-1.7-.5v.1c0 2.1 1.4 3.8 3.3 4.2-.3.1-.7.2-1.1.2-.3 0-.5 0-.8-.1.6 2 2.3 3.4 4.3 3.4-1.6 1.3-3.6 2-5.7 2-.4 0-.8 0-1.1-.1 2.1 1.5 4.6 2.4 7.3 2.4 8.8 0 13.6-7.3 13.6-13.6v-.6c1-.8 1.7-1.4 2.3-2.2z" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-green-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path d="M24 12c0-6.6-5.4-12-12-12S0 5.4 0 12c0 5.8 4.1 10.6 9.5 11.8v-8.3H6.8v-3.5h2.7V9.8c0-2.7 1.6-4.3 4-4.3 1.2 0 2.5.2 2.5.2v2.8h-1.4c-1.4 0-1.8.9-1.8 1.7v2.1h3.1l-.5 3.5h-2.6v8.3C19.9 22.6 24 17.8 24 12z" />
                        </svg>
                    </a>
                </div>
                <p className="text-sm text-gray-400">
                    &copy; 2024 PetalPulse. All Rights Reserved.
                </p>
            </div>
        </footer>

    )
}

export default Footer