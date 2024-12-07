import React, { ReactNode } from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'

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