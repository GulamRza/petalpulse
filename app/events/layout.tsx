import { Metadata } from 'next';
import { ReactNode } from 'react';


export const metadata: Metadata = {
  title: 'Events',
  description: 'Plant Care Events.',
  keywords: ['plant events', 'Plant Care Workshop', "Houseplants Webinar", "plant shows"]
}

export default function layout({ children }: {children : ReactNode}){
    return (
        <>{children}</>
    )
}