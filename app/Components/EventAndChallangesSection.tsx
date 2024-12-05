import React from 'react'

function EventAndChallangesSection() {
    return (
        <section id="events" className="bg-white dark:bg-gray-900 py-16">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-green-800 dark:text-green-500">
                        Events & Challenges
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-100">
                        Participate in exciting events and challenges to grow your love for plants!
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative border-l-2 border-green-500">
                    {[
                        {
                            title: "Plant Swap Meetup",
                            date: "December 10, 2024",
                            description:
                                "Join us for a plant swap event to exchange your plants and connect with fellow enthusiasts.",
                            img: "/plant-swap.png",
                        },
                        {
                            title: "Grow a Herb Garden Challenge",
                            date: "January 2025",
                            description:
                                "Take part in our monthly challenge to grow your own herb garden. Share your progress with the community!",
                            img: "/herb-garden.png",
                        },
                        {
                            title: "Online Plant Care Webinar",
                            date: "February 15, 2025",
                            description:
                                "Learn advanced plant care techniques in an interactive online session with experts.",
                            img: "/webinar.png",
                        },
                    ].map((event, index) => (
                        <div
                            key={index}
                            className="p-8 flex items-start group hover:bg-green-100  dark:hover:bg-gray-800 rounded-r-2xl transition"
                        >
                            {/* Event Icon */}
                            <div className="w-12 h-12 mr-5 hidden lg:flex items-center justify-center bg-green-700 text-white rounded-full  transition duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 8c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-4.35-4.35M18.63 13.63c.69-.89 1.37-2.33 1.37-3.63s-.69-2.33-1.37-3.63M5.37 13.63C4.69 14.52 4 15.96 4 17.26c0 1.3.69 2.33 1.37 3.63M12 4.5c3.25 0 6 2.75 6 6s-2.75 6-6 6-6-2.75-6-6 2.75-6 6-6z"
                                    />
                                </svg>
                            </div>
                            {/* Event Details */}
                            <div>
                                <h3 className="text-xl font-bold text-green-800 dark:text-green-500  transition duration-300">
                                    {event.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{event.date}</p>
                                <p className="text-sm text-gray-700 dark:text-gray-100 mt-2">{event.description}</p>
                                <a
                                    href="#"
                                    className="mt-4 inline-block text-sm font-semibold text-green-600 hover:text-green-700 transition duration-300 underline"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default EventAndChallangesSection