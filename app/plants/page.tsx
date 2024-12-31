import React from 'react';
import { Metadata } from 'next';
import { PlantCard } from '../Components/PlantGallarySection';
import { prisma } from '../utils/prisma';
import PaginationBar from '../Components/PaginationBar';

export interface PlantType {
    name: string,
    description: string,
    plantType?: string,
    imgUrl?: string,
    overview: any
    extras: any
};

export const metadata: Metadata = {
    title: "Plant Gallery",
    description:
      "Explore our extensive gallery of plants featuring vibrant images, species information, and care tips. Discover the perfect plant for your home or garden today.",
    keywords: [
      "Plant gallery",
      "Plant images",
      "House plants",
      "Garden plants",
      "Plant care tips",
      "PetalPulse gallery",
      "Indoor plants",
      "Outdoor plants",
      "Exotic plants",
    ]
  };




async function PlantsPage({ searchParams }: { searchParams: any }) {
    const pageSize = 6;

    let { search, page } = await searchParams;
    page = page ? parseInt(page) - 1 : 0;
    search = search || '';
    
    const plants = await prisma.plant.findMany({ where: { name: { contains: search , mode: 'insensitive'}, description: { contains : search, mode: 'insensitive'} }, skip: pageSize * page, take: pageSize});

                
    const totalPages = Math.ceil(((await prisma.plant.aggregate({_count: { id: true }, where: { name : { contains: search }}}))._count.id) / pageSize);


    return (
        <section id="gallery" className="bg-green-50 dark:bg-gray-800 py-4 text-black dark:text-white">
            <div className='container mx-auto px-6 lg:px-20 flex flex-col '>

                <SearchForm />

                {search ? (
                    <>
                        {/* search results */}
                        <div className="my-6">
                            <h2 className="text-3xl lg:text-4xl font-bold text-green-800 dark:text-green-500">
                                Searched For : {search}
                            </h2>
                        </div>

                    </>
                ) : ( !page && 
                    <>
                        {/* Featured Plants */}
                        <div className=" my-10">
                            <h2 className="text-3xl lg:text-4xl font-bold text-green-800 dark:text-green-500">
                                Featured Plants
                            </h2>
                            <p className="mt-4 text-gray-700 dark:text-gray-200">
                                Explore a variety of plants from our community members. Get inspired to grow your own!
                            </p>
                        </div>


                    </>
                )}

                {/* Plant Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Plant Card */}
                    {plants.map((plant: any, index: number) => <PlantCard plant={plant} key={index} />)}
                </div>

                <PaginationBar totalPages={totalPages} />

                {/* <Link href='/plants/new' className='default-button my-6 text-center'>Add Plant</Link> */}
            </div>
        </section>
    )
}

function SearchForm() {
    return (
        <>
            {/* Search form */}
            <form className='space-x-3 lg:self-end flex items-center mb-4'>
                <input type="text" name='search' placeholder='Search here ...' className='default-input w-full' />
                <button className='default-button'>search</button>
            </form>
        </>
    )
}

export default PlantsPage


