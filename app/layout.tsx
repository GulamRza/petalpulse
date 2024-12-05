import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/NavBar";
import { Inter,  } from 'next/font/google';
import Footer from "./Components/Footer";
import _Page from "./_page";

const bodyFont = Inter({
  weight: '400',
  subsets: ['latin'],
  variable: '--inter-font'
});

const headingFont = localFont({
  src: 'fonts/PlayfairDisplay.ttf',
  variable: '--fairplay-font'
})

const accentFont = localFont({
  src: 'fonts/Pacifico-Regular.ttf',
  variable: '--pacifico-font'
})


export const metadata: Metadata = {
  title: "PetalPulse",
  description: "A Community for Plant Lovers",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} ${accentFont.variable} antialiased`}
      >
        <_Page>
          {children}
        </_Page>
      </body>
    </html>
  );
}
