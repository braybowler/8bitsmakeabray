import { createContext, useContext, useState, useEffect } from 'react';
import Toast from '../components/Toast';

const ThemeContext = createContext('light');

//@ts-ignore
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

    const [transitionClass, setTransitionClass] = useState('')
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('')
    const lightModeMessages = [
        'Rise from the depths of the Dark',
        'Darkness be purged by Light',
        'The Light of the Citadel washes away all Darkness'
    ]
    const darkModeMessages = [
        'Darkness consumes',
        'The grasp of Darkness is unyielding',
        'Decay... Destruction... Darkness'
    ]

    const messageRandomizer = () => {
        const max = isDarkMode ? darkModeMessages.length : lightModeMessages.length
        return Math.floor(Math.random() * max)
    }

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', newMode ? 'dark' : 'light')
        }
        setTransitionClass(newMode ? 'dark-wave' : 'light-wave')

        const messageIndex = messageRandomizer()

        setToastMessage(newMode ? darkModeMessages[messageIndex] : lightModeMessages[messageIndex])
        setShowToast(true)
        setTimeout(() => setTransitionClass(''), 1000);
        setTimeout(() => setShowToast(false), 3000);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.documentElement.classList.toggle('dark', isDarkMode)
        }
    }, [isDarkMode]);

    return (
        //@ts-ignore
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode}}>
            <div className={`transition-overlay ${transitionClass}`}></div>
            {children}
            {showToast && <Toast message={toastMessage} onClose={() => setShowToast(false)} />}
        </ThemeContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);