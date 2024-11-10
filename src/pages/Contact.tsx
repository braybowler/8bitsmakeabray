import {useTheme} from "../providers/ThemeContext.tsx";

const Contact = () => {
    // @ts-ignore
    const { isDarkMode } = useTheme();

    return (
        <div className="p-2 sm:p-4 border-2 border-purple-400 dark:border-green-400 rounded-xl shadow-lg w-full bg-slate-50 dark:bg-black ">
            <div className="font-press-start text-purple-400 dark:text-green-400 text-xs sm:text-lg">
                <p>
                    {
                        isDarkMode ?
                            ("You would seek audience with the Overlord? Your hubris knows no bounds.") :
                            ("The High Lord is gracious to those who seek an audience.")
                    }
                </p>
            <br/>
                <p>
                    {
                        isDarkMode ?
                            ("If you are convinced that your life is forfeit, then attempt this summoning ritual:") :
                            ("In the Citadel, court is held frequently. In fact, your invitation has just arrived:")
                    }
                </p>
            </div>
        </div>
    );
};
export default Contact;