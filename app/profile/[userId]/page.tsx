import { prisma } from '@/app/utils/prisma';
import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';



const ProfilePage = async ({params} : { params : Promise<{ userId : string}>}) => {

  const userId = (await params).userId;
  const session = await getServerSession(authOptions);
  let user: any;

  
  try{
        user = await prisma.user.findUnique({
        where: {
            id : userId
        },
        include: {
            threads : {
                select: {
                    id: true,
                    title : true,
                    createdAt: true
                }
            }
        }
      });

      if (!user){
        return <>Not Found</>
      }

  }catch (err){
    return <>Not Found</>
  }

  


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Profile Header */}
      <div className="bg-green-500 dark:bg-green-700 p-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <img
            src={user?.profilePicture || '/thumbnail-image.png'}
            alt={`${user.name}'s profile picture`}
            className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 object-cover"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{user.name}</h1>
            <p className="text-sm md:text-base mt-2">{user.bio || 'Plant enthusiast. Lover of all things green 🌱.'}</p>
          </div>
          {(session?.user.id == user.id) && <div className="ml-auto flex gap-4">
            <button className="px-4 py-2 bg-white dark:bg-gray-800 text-green-600 dark:text-green-300 rounded">
              Edit Profile
            </button>
            <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-green-600 dark:text-green-300 rounded">
              View Activity
            </button>
          </div>}
        </div>
      </div>

      {/* Stats Section */}
      {/* <div className="max-w-5xl mx-auto my-6 grid grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-white dark:bg-gray-800 rounded">
          <h2 className="text-lg font-semibold">{user.stats.threads}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">Threads</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded">
          <h2 className="text-lg font-semibold">{user.stats.comments}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">Comments</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded">
          <h2 className="text-lg font-semibold">{user.stats.likes}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">Likes</p>
        </div>
      </div> */}

      {/* Tabs for User Content */}
      <div className="max-w-5xl mx-auto">
        <div className="flex border-b dark:border-gray-700">
          <button className="py-2 px-4 text-green-600 dark:text-green-300 border-b-2 border-green-600 dark:border-green-300">
            Threads
          </button>
          <button className="py-2 px-4 text-gray-600 dark:text-gray-400">
            Comments
          </button>
          <button className="py-2 px-4 text-gray-600 dark:text-gray-400">
            Saved
          </button>
        </div>

        {/* Threads */}
        <div className="mt-6 space-y-4">
          {user.threads.map((thread : any) => (
            <div
              key={thread.id}
              className="p-4 bg-white dark:bg-gray-800 rounded"
            >
              <h3 className="text-lg font-semibold">{thread.title}</h3>
              {/* <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {thread.content}
              </p> */}
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                Posted on {String(thread.createdAt)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
