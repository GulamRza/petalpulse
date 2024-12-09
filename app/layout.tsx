import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter,  } from 'next/font/google';
import _Page from "./_page";


// setting up fonts
const bodyFont = Inter({ weight: '400', subsets: ['latin'], variable: '--inter-font' });
const headingFont = localFont({ src: 'fonts/PlayfairDisplay.ttf', variable: '--fairplay-font' });
const accentFont = localFont({ src: 'fonts/Pacifico-Regular.ttf', variable: '--pacifico-font'});


export const metadata: Metadata = {
  title: {
    template: "%s - PetalPulse",
    default: "PetalPulse"
  },

  description: "Join PetalPulse to explore plant care, plant diseases, a vibrant forum, and much more!",
  keywords: ['plants', 'houseplants', 'gardening', 'plant diseases', 'plant care', 'forum', 'discussion', 'plant blogs'],
  applicationName: 'PetalPulse',

  openGraph: {
    title: 'PetalPulse - The Ultimate Plant Lovers Community',
    description: 'Join PetalPulse to explore plant care, plant diseases, a vibrant forum, and much more!',
    siteName: 'PetalPulse',
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable} ${accentFont.variable} antialiased`}>
        <_Page>
          {children}
        </_Page>
      </body>
    </html>
  );
}
