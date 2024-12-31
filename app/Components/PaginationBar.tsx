"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

function PaginationBar({ totalPages }: { totalPages: number }) {

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;


  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };



  return ( totalPages != 1 && 
    <div className=" flex justify-center gap-4 flex-wrap my-6 px-2 lg:px-0">

        {currentPage != 1 &&
          <Link href={createPageURL(currentPage - 1)} className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700">Prev</Link>
        }

      
      <div className="flex flex-wrap items-center gap-2">
        {new Array(5).fill(0).map((_, i) => (currentPage - 3 + i)).map((pageNumber) => (
          (pageNumber >= 0 && pageNumber < totalPages) &&
          <Link
          key={pageNumber}
          href={createPageURL(pageNumber + 1)}
            className={`
              ${currentPage == pageNumber + 1 ? "bg-green-300 dark:bg-green-700" : 'bg-gray-200 dark:bg-gray-700'}
                px-4 py-2 rounded`}
                >
            {pageNumber + 1}
          </Link>
        ))}
      </div>

      {currentPage != totalPages &&
        <Link href={createPageURL(currentPage + 1)} className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700">Next</Link>
      }

    </div>
  )
}

export default PaginationBar