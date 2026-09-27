"use client"

import { ThemeContext } from '../context/ThemeContext'
import React, { useContext, useEffect, useState } from 'react'

const ThemeProvider = ({children}) => {

    const {theme} = useContext(ThemeContext)
    const [mouted, setMouted] = useState(false)

    useEffect(() => {
        setMouted(true);
    }, []);
    if (mouted) {
        return <div className={theme}>{children}</div>
    }
    

  
}

export default ThemeProvider