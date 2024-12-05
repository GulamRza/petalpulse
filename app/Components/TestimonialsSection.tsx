import React from 'react'

function TestimonialsSection() {
    return (
        <section id="testimonials" className="bg-green-50 dark:bg-gray-800 py-16">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-green-800 dark:text-green-500">
                        What Our Members Say
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-200">
                        Real stories from our amazing plant-loving community.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Testimonial Card */}
                    {[
                        {
                            name: "Sarah J.",
                            feedback:
                                "Joining this community has been amazing! I've learned so much about plant care and made wonderful friends.",
                            img: "/member1.png",
                        },
                        {
                            name: "Michael T.",
                            feedback:
                                "The tips and guides are a game-changer. My indoor plants have never looked better!",
                            img: "/member2.png",
                        },
                        {
                            name: "Emily R.",
                            feedback:
                                "I love sharing my plant journey here. Everyone is so supportive and encouraging.",
                            img: "/member3.png",
                        },
                    ].map((testimonial, index) => (
                        <div
                            key={index}
                            className="group relative bg-white dark:bg-gray-900 shadow-sm rounded-lg p-6 hover:bg-green-100 dark:hover:bg-gray-800 transition duration-300"
                        >
                            {/* Hover Effect - Highlight */}
                            <div className="absolute inset-0 bg-green-200 dark:bg-green-500 opacity-0 group-hover:opacity-10 rounded-lg transition duration-300 pointer-events-none"></div>

                            {/* Profile Image */}
                            <img
                                // src={testimonial.img}
                                src={'/thumbnail-image.png'}
                                alt={testimonial.name}
                                className="w-16 h-16 mx-auto rounded-full object-cover mb-4 border-4 border-green-100 dark:border-gray-600 group-hover:border-green-500 transition duration-300"
                            />
                            {/* Member Name */}
                            <h3 className="text-lg font-bold text-green-800 dark:text-green-500 transition duration-300">
                                {testimonial.name}
                            </h3>
                            {/* Feedback */}
                            <p className="mt-3 text-sm text-gray-600 dark:text-gra italic group-hover:text-gray-800 dark:group-hover:text-gray-100 transition duration-300">
                                "{testimonial.feedback}"
                            </p>
                            {/* Interaction: Button */}
                            <button className="mt-4 text-sm font-semibold text-green-600 hover:text-green-700 transition duration-300 underline">
                                See More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>


    )
}

export default TestimonialsSection