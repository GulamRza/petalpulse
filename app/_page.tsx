"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";

import dynamic from 'next/dynamic'




import * as React from 'react'
const NextThemesProvider = dynamic(
	() => import('next-themes').then((e) => e.ThemeProvider),
	{
		ssr: false,
	}
)



function _Providers({ children }: { children: ReactNode }) {
  return (

    <SessionProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        // disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </SessionProvider>
  )
}

function _Page({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const excludedRoutes = ["/auth/sign-in", "/auth/register"];
  const isExcludedRoute = excludedRoutes.includes(pathname);



  return (

    <_Providers>
      {!isExcludedRoute && <Navbar />}
      {children}
      {!isExcludedRoute && <Footer />}

    </_Providers>
  )
}

export default _Page