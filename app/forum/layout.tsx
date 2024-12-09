import React, { ReactNode } from 'react'
import RightSideBar from './RightSideBar'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Forum',
  description: 'Join the Plant Lovers Community Forum on PetalPulse! Discuss gardening tips, share your plant experiences, ask questions, and connect with plant enthusiasts worldwide.',
  keywords: ["plant forum", "discussion", "plant", "houseplant help", "plant care", "plant guide"]
}

function layout({children}: {children : ReactNode}) {
  return (
    <main className='bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200  dark:border-gray-700'>
      <div className='flex flex-col lg:flex-row justify-center max-w-[90rem] mx-auto'>
          
          {/* <LeftSideBar /> */}

          <div className='flex-grow max-w-4xl'>
            {children}
          </div>

          <RightSideBar />
      </div>

    </main>
  )
}

export default layout