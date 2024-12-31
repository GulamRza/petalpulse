import React from 'react'
import Image from 'next/image';
import NotFoundPage from '@/app/not-found';
import { prisma } from '@/app/utils/prisma';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ id?: string }> }){
    const plantId = (await params).id;

  // Fetch plant details from the database
  try{
      const plant = await prisma.plant.findUnique({
        where: { id: plantId },
      });
    
      return plant && {
        title: `${plant.name}`,
        description: plant.description,
        keywords: [
          plant.name,
          plant.type,
          "Plant care",
          "House plants",
          "Garden plants",
        ]
      };
  }catch(err){ }

  return {
    title: "Plant Not Found",
    description: "The plant you are looking for does not exist. Explore our gallery for more options.",
  };
}

async function PlantDetail({ params }: { params: Promise<{ id?: string }> }) {

    const { id } = await params;
    let plant;

    try{
        plant = id ? await prisma.plant.findUnique({ where: { id } }) : null;
    }catch( err ){
        notFound();
    }

    return plant ? (
        <section id="gallery" className="bg-white dark:bg-gray-800 py-16 text-black dark:text-white ">
            <div className='container mx-auto px-6 lg:px-20 min-h-72 space-y-4' >

                <h1 className='text-5xl lg:text-6xl text-green-700'>{plant.name}</h1>

                <p className='text-gray-500 uppercase'>{plant.type}</p>

                <div className='lg:w-1/3 lg:float-right lg:m-6 h-full content-center'>
                    <Image
                        src={plant.imgUrl || '/thumbnail-image.png'}
                        alt='plant-image'
                        width={500}
                        height={500}
                        className='w-full h-full object-cover rounded'
                    />
                    {/* <p className='text-sm mt-2'></p> */}
                </div>

                <p className='min-h-32'>{plant.description}</p>


                <table className='border-collapse'>
                    <tbody>
                        {Object.keys(JSON.parse(plant.overview || "{}")).map(prop => 
                            <tr key={prop} className='border dark:border-gray-700'>
                                <td className=' px-2 w-1/3'>{prop}</td>
                                <td className=' px-2 w-full'>{JSON.parse(plant.overview || "{}")[prop] || '---'}</td>
                            </tr>
                        )}
                    </tbody>
                </table>


                <div className='space-y-6 pt-8'>
                    {Object.keys(JSON.parse(plant.extras || "{}")).map(prop => 
                        <div key={prop} className=' flex flex-col space-y-3'>
                            <h1 className='text-4xl'>{prop}</h1>

                            <p className=''>{JSON.parse(plant.extras || "{}")[prop]}</p>
                        </div>
                    )}
                </div>

            </div>
        </section>
    ) : <NotFoundPage />;
}

export default PlantDetail