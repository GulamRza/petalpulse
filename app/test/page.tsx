
import React from "react";
import { prisma } from "../utils/prisma";

const HeroSection = async () => {
  
  const threadId = '675007d41b57b0a8c095597e';
  

  // const result = tagIds;

  const result = await prisma.thread.findUnique({
    where: {
      id : threadId
    }, 
    include: {
      author: {
        select: {
          name : true
        }
      },
      answers: {
        select: {
          id : true,
          content: true,
          createdAt: true,
          user : {
            select: {
              name : true
            }
          }
        }
      },
      tags: {
        select: {
          tag: {
            select: {
              id : true,
              name : true
            }
          }
        }
      }
    }
  })




  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl text-black dark:text-white min-h-screen flex p-20 items-center flex-col">
      <h1>Testing Page</h1>
        <pre className="text-wrap"><code>{JSON.stringify(result, null, '\t')}</code></pre>
      </div>
    </div>
  );
};

export default HeroSection;
