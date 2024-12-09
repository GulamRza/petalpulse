import { Metadata } from 'next';
import { ReactNode } from 'react';


export const metadata: Metadata = {
  title: 'Plant Disease Diagnosis Tool',
  description: 'Diagnose plant diseases instantly with PetalPulse’s AI-powered tool. Upload plant images and get quick, accurate solutions to keep your plants healthy.',
  keywords: ["plant disease diagnosis", "AI plant checkup", "plant health tool", "plant image diagnosis", "plant care", "plant disease detection"]
}

export default function layout({ children }: {children : ReactNode}){
    return (
        <>{children}</>
    )
}