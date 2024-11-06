import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext('light');

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('theme')) {
                return (localStorage.getItem('theme') === 'dark')
            } else {
               if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                   localStorage.setItem('theme', 'dark')
                   return true
               }
                localStorage.setItem('theme', 'light')
                return false
            }
        }
        return false;
    });

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', newMode ? 'dark' : 'light')
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.documentElement.classList.toggle('dark', isDarkMode)
        }
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);