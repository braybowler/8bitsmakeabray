import {useTheme} from "../providers/ThemeContext.tsx";

const About = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className="w-full bg-slate-50 dark:bg-black ">
            <div className="typing-effect font-press-start text-purple-400 dark:text-green-400 text-lg p-4">
                <p>{isDarkMode? "Welcome... Adventurer..." : "Greetings... Hero..."}</p>
            </div>
        </div>
    );
};
export default About;