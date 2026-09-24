"use client"

import { createContext, useState } from "react";

export const ThemeContext = createContext()

const getFormLocalStorage = () => {

    if (typeof window !== undefined) {
        const value = localStorage.getItem("theme")
        return value || "light"
    }
    
}

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
        return getFormLocalStorage();
    })
    return <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>;
}