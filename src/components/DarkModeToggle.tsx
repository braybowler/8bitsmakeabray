import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' ||
                (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
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
            if (isDarkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }, [isDarkMode]);

    return (
        <label className="flex items-center cursor-pointer space-x-4">
            <span className="font-press-start text-purple-400 dark:text-green-400 text-lg">{ isDarkMode? 'Dark' : 'Light' }</span>
            <div className="relative">
                <input
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    className="sr-only"
                />
                <div
                    className={`w-12 h-6 bg-slate-600 dark:bg-slate-600 rounded-full ${isDarkMode ? 'bg-green-400' : ''} transition-all`}
                >
                    <div
                        className={`w-6 h-6 bg-purple-400 dark:bg-green-400 rounded-full shadow-md transform transition-all ${isDarkMode ? 'translate-x-6' : ''}`}
                    >
                    </div>
                </div>
            </div>
        </label>
    );
};

export default DarkModeToggle;