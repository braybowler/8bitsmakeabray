import {useTheme} from "../providers/ThemeContext.tsx";
import Socials from "../components/Socials.tsx";

const Contact = () => {
    const email = 'braybowler1995@gmail.com';
    // @ts-ignore
    const { isDarkMode } = useTheme();

    return (
        <div className="p-2 sm:p-4 border-2 border-purple-400 dark:border-green-400 rounded-xl shadow-lg w-full bg-slate-50 dark:bg-black ">
            <div className="flex justify-center font-press-start text-purple-400 dark:text-green-400 text-xs sm:text-lg w-full">
                <h2>Contact</h2>
            </div>

            <div className="flex items-center w-full mt-2 mb-2 sm:mb-4">
                <div className="flex-grow h-[2px] bg-gradient-to-r from-transparent dark:via-orange-400 via-cyan-400 to-transparent">
                </div>
            </div>

            <div className="font-press-start text-purple-400 dark:text-green-400 text-xs sm:text-lg">
                <p>
                    {
                        isDarkMode ?
                            ("You would seek an audience with the Overlord? Your hubris knows no bounds.") :
                            ("The High Lord is gracious with his time for those who seek an audience.")
                    }
                </p>
                <br/>
                <p>
                    {
                        isDarkMode ?
                            ("If you are convinced that your life is forfeit, then attempt the arcane summoning ritual:") :
                            ("If ever you are in need of speaking with him, you may use this scrying method:")
                    }
                </p>
                <br/>
                <div className="flex justify-center">
                    <a
                        className="flex hover:scale-[1.01]"
                        href={`mailto:${email}`}>
                        braybowler1995@gmail.com
                    </a>
                </div>
                <br/>
                <Socials></Socials>
            </div>
        </div>
    );
};
export default Contact;