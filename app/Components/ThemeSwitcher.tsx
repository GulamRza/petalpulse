"use client";

import React from 'react'
import { BiMoon, BiSun } from "react-icons/bi";
import { useTheme } from 'next-themes';



function ThemeSwitcher() {

    const { setTheme, theme, systemTheme } = useTheme();

    let darkTheme = theme == 'dark';
    if (theme == 'system'){
        darkTheme = (systemTheme == 'dark')
    }

    
    return ( darkTheme ? 
        <button onClick={()=> setTheme('light')} className="text-gray-800 focus:outline-none text-xl">
                <BiSun className='text-white' />
        </button>
        :
        <button onClick={()=> setTheme('dark')} className="text-gray-800 focus:outline-none text-xl">
            <BiMoon />
        </button>
    )
}

export default ThemeSwitcher