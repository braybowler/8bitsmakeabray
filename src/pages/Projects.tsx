import {useTheme} from "../providers/ThemeContext.tsx";

const Projects = () => {
    // @ts-ignore
    const { isDarkMode } = useTheme();

    return (
        <div className="p-2 sm:p-4 border-2 border-purple-400 dark:border-green-400 rounded-xl shadow-lg w-full bg-slate-50 dark:bg-black ">
            <div className="font-press-start text-purple-400 dark:text-green-400 text-xs sm:text-lg">
                <p>
                    {
                        isDarkMode ?
                            ("Projects") :
                            ("Projects")
                    }
                </p>
            </div>
        </div>
    );
};
export default Projects;