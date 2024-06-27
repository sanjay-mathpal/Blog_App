'use client';
import React, { createContext, useContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

interface ThemeContextType {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

const initialState = {
    theme: "",
    setTheme: (theme : string) => {}
} as ThemeContextType

export const ThemeContext = createContext<ThemeContextType>(initialState);

const getLocalStorageTheme = () => {
    if(typeof window !== "undefined"){
        const value = localStorage.getItem("theme");
        return value || "light";
    }
    return "light"
}

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState(() => getLocalStorageTheme());

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    return useContext(ThemeContext);
};
