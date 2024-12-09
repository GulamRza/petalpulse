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
                            <Link href="/" className="hover:text-green-400 transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about-us" className="hover:text-green-400 transition">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/events" className="hover:text-green-400 transition">
                                Events & Challenges
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-green-400 transition">
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy" className="hover:text-green-400 transition">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/faqs" className="hover:text-green-400 transition">
                                FAQs
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Stay Updated*</h3>
                    <p className="text-sm text-gray-300 mb-4">
                        Subscribe to our newsletter for plant care tips, event updates, and
                        more!
                    </p>
                    <form className="flex flex-col space-y-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-lg text-gray-900 dark:text-gray-200 focus:outline-none"
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
                <p className="text-sm text-gray-400">
                    &copy; 2024 PetalPulse. All Rights Reserved.
                </p>
            </div>
        </footer>

    )
}

export default Footer