import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext('dark');

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return (
                localStorage.getItem('theme') === 'dark' ||
                (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
            );
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