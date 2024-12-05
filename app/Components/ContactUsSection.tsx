import React from 'react'

function ContactUsSection() {
    return (
        <section id="contact" className="bg-green-50 dark:bg-gray-800 py-16 dark:text-white">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-green-800 dark:text-green-500">
                        Get in Touch
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                        Have questions or want to share your plant journey? We’d love to hear from you!
                    </p>
                </div>

                {/* Contact Form */}
                <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 border-2 border-green-200 dark:border-green-900 rounded-2xl p-8">
                    <form className="grid grid-cols-1 gap-6">
                        {/* Name Input */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 ml-2"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                className="mt-1 w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none dark:focus:bg-green-900"
                                required
                            />
                        </div>
                        {/* Email Input */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 ml-2"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="mt-1 w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:bg-green-100 focus:outline-none dark:focus:bg-green-900"
                                required
                            />
                        </div>
                        {/* Message Textarea */}
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 ml-2"
                            >
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Write your message here..."
                                className="mt-1 w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 focus:bg-green-100 dark:focus:bg-green-900 focus:outline-none"
                                required
                            ></textarea>
                        </div>
                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-green-500 dark:bg-green-800 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default ContactUsSection