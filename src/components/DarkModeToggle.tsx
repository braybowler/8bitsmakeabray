import { useTheme} from "../providers/ThemeContext.tsx";

const DarkModeToggle = () => {
    //@ts-ignore
    const { isDarkMode, toggleDarkMode } = useTheme();

    return (
        <label className="flex items-center space-x-2 sm:space-x-4">
            <span className="font-press-start text-purple-400 dark:text-green-400 text-xs sm:text-lg">{ isDarkMode? 'Dark' : 'Light' }</span>
            <div className="relative cursor-pointer">
                <input
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    className="sr-only"
                />
                <div
                    className={`w-6 h-3 sm:w-12 sm:h-6 bg-slate-200 dark:bg-slate-600 rounded-full ${isDarkMode ? 'bg-green-400' : ''} transition-all`}
                >
                    <div
                        className={`w-3 h-3 sm:w-6 sm:h-6 bg-purple-400 dark:bg-green-400 rounded-full shadow-md transform transition-all ${isDarkMode ? 'translate-x-3 sm:translate-x-6' : ''}`}
                    >
                    </div>
                </div>
            </div>
        </label>
    );
};

export default DarkModeToggle;