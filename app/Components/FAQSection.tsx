import React from 'react'

function FAQSection() {
    return (
        <section id="faq" className="bg-white dark:bg-gray-900 py-16">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-green-800">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                        Have questions? We’ve got answers! Check out some of the most commonly asked questions.
                    </p>
                </div>

                {/* FAQs Accordion */}
                <div className="max-w-4xl mx-auto">
                    {[
                        {
                            question: "How do I join the plant lovers' community?",
                            answer:
                                "Joining is simple! Just sign up using the 'Get Started' button at the top of the page. You’ll gain access to events, tips, and our supportive community.",
                        },
                        {
                            question: "What are the best plants for beginners?",
                            answer:
                                "Some of the best plants for beginners include pothos, snake plants, and succulents. They’re hardy and easy to care for.",
                        },
                        {
                            question: "How can I participate in events?",
                            answer:
                                "You can participate in events by registering through our Events & Challenges section. Stay updated by following our announcements!",
                        },
                        {
                            question: "Are there any fees for joining?",
                            answer:
                                "No, joining the community is absolutely free. However, some events may have a small participation fee.",
                        },
                    ].map((faq, index) => (
                        <details
                            key={index}
                            className="group border-b dark:border-gray-700 py-4 cursor-pointer"
                        >
                            <summary className="flex justify-between items-center font-semibold text-green-700 group-hover:text-green-800 transition">
                                {faq.question}
                                <span className="group-open:rotate-180 transition-transform duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </span>
                            </summary>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default FAQSection