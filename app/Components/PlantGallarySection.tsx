import React from 'react'
import Link from 'next/link'
import { prisma } from '../utils/prisma'


async function PlantGallarySection() {
    const plants = await prisma.plant.findMany({ skip : 6, take: 6 });

    return (
        <section id="gallery" className="bg-green-50 dark:bg-gray-800 py-16">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-bold text-green-800 dark:text-green-500">
                        <Link href='/plants' className='hover:underline'>Plant Gallery</Link>
                    </h2>
                    <p className="mt-4 text-gray-700 dark:text-gray-200">
                        Explore a variety of plants from our community members. Get inspired to grow your own!
                    </p>
                </div>

                {/* Plant Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plants.map(plant => <PlantCard plant={plant} key={plant.name} />)}
                </div>
            </div>
        </section>

    )
}

export default PlantGallarySection

export function PlantCard({ plant }: { plant: any }) {
    return (
        <div
            className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border-green-200 dark:border-green-800 border transition"
        >
            <div className=' dark:bg-gray-800 p-4'>
                <img
                    src={plant.imgUrl}
                    // src={'/thumbnail-image.png'}
                    alt={plant.name || "plant-name"}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover rounded-lg"
                />
            </div>
            <div className="p-4">
                <p className='text-gray-600'>{plant.type.join(', ')}</p>
                <h3 className="text-lg font-bold text-green-800 dark:text-green-500">
                    <Link href={`/plants/${plant.id}`}>{plant.name}</Link>
                </h3>
            </div>
        </div>
    )
}