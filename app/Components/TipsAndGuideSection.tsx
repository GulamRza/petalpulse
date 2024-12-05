import React from 'react'
import Image from 'next/image'

function TipsAndGuideSection() {
    return (
        <section id="tips" className="bg-white dark:bg-gray-900 py-16">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-bold text-green-800 dark:text-green-500">
                        Plant Care Tips & Guides
                    </h2>
                    <p className="mt-4 text-gray-700 dark:text-gray-100">
                        Learn how to care for your plants with expert tips and step-by-step guides.
                    </p>
                </div>

                {/* Tips Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Tip Card */}
                    {[
                        {
                            title: "How to Water Succulents",
                            excerpt: "Discover the best watering practices for keeping your succulents healthy and happy.",
                            img: "/watering-succulents.png",
                        },
                        {
                            title: "Top 5 Indoor Plants",
                            excerpt: "Find out which plants are perfect for sprucing up your indoor space.",
                            img: "/indoor-plants.png",
                        },
                        {
                            title: "Repotting Made Easy",
                            excerpt: "Step-by-step guide to safely repotting your plants for better growth.",
                            img: "/repotting.png",
                        },
                        // {
                        //     title: "Winter Plant Care Tips",
                        //     excerpt: "Protect your plants during the colder months with these tips.",
                        //     img: "/winter-care.png",
                        // },
                        // {
                        //     title: "Air-Purifying Plants",
                        //     excerpt: "Explore plants that improve indoor air quality while adding beauty to your home.",
                        //     img: "/air-purifying-plants.png",
                        // },
                        // {
                        //     title: "Herb Gardening 101",
                        //     excerpt: "Grow your own herbs with this beginner-friendly guide.",
                        //     img: "/herb-gardening.png",
                        // },
                    ].map((tip, index) => (
                        <div
                            key={index}
                            className="bg-green-50 dark:bg-gray-800 rounded-lg overflow-hidden transition border border-green-200 dark:border-green-800 hover:scale-105"
                        >
                            <Image
                                // src={tip.img}
                                src={'/thumbnail-image.png'}
                                alt={tip.title}
                                width={400}
                                height={400}
                                className="w-full h-48 object-cover opacity-50"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-green-800 dark:text-green-500">{tip.title}</h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">{tip.excerpt}</p>
                                <a
                                    href="#"
                                    className="mt-4 inline-block text-green-600 font-semibold hover:underline"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default TipsAndGuideSection