import React, { SyntheticEvent } from 'react'
import Image from 'next/image'

function PlantGallarySection() {
    return (
        <section id="gallery" className="bg-green-50 dark:bg-gray-800 py-16">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-bold text-green-800 dark:text-green-500">
                        Plant Gallery
                    </h2>
                    <p className="mt-4 text-gray-700 dark:text-gray-200">
                        Explore a variety of plants from our community members. Get inspired to grow your own!
                    </p>
                </div>

                {/* Plant Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Plant Card */}
                    {[
                        { name: "Monstera Deliciosa", img: "/monstera.png" },
                        { name: "Snake Plant", img: "/snake-plant.png" },
                        { name: "Peace Lily", img: "/peace-lily.png" },
                        { name: "Pothos", img: "/pothos.png" },
                        { name: "Spider Plant", img: "/spider-plant.png" },
                        { name: "Fiddle Leaf Fig", img: "/fiddle-leaf-fig.png" },
                    ].map((plant, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden border-green-200 dark:border-green-800 border transition"
                        >
                            <div className='bg-green-100 dark:bg-gray-800'>
                                <Image
                                    // src={plant.img}
                                    src={'/thumbnail-image.png'}
                                    alt={plant.name}
                                    width={400}
                                    height={400}   
                                    className="w-full h-48 object-cover opacity-20 "
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-green-800 dark:text-green-500">{plant.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default PlantGallarySection