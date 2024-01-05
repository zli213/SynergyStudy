import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((preveTheme) => preveTheme === "light" ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);