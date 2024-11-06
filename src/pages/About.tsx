import {useTheme} from "../providers/ThemeContext.tsx";

const About = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className="absolute top-0 left-full ml-2 p-3 border-2 border-purple-400 dark:border-green-400 rounded-xl shadow-lg max-w-xs z-10 w-full bg-slate-50 dark:bg-black ">
            <div className="font-press-start text-purple-400 dark:text-green-400 text-lg p-4">
                <p>
                    {
                        isDarkMode ?
                        "Welcome... Adventurer... You've stumbled into the Dark Necropolis." :
                        "Greetings, Hero! Welcome to the Citadel of Light."
                    }
                </p>
                <p>
                    {
                        isDarkMode ?
                            "You shall call me Verithras. " :
                            "My name is Aurexis - I'm your guide, appointed by High Lord Brayden, to help you navigate the sprawling Citadel"
                    }
                </p>
            </div>
        </div>
    );
};
export default About;