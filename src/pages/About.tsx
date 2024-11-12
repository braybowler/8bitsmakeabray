import {useTheme} from "../providers/ThemeContext.tsx";

const About = () => {
    // @ts-ignore
    const { isDarkMode } = useTheme();

    return (
        <div
            className="p-2 sm:p-4 border-2 border-purple-400 dark:border-green-400 rounded-xl shadow-lg w-full bg-slate-50 dark:bg-black ">
            <div
                className="flex justify-center mb-2 font-press-start text-purple-400 dark:text-green-400 text-xs sm:text-lg">
                Overlord Brayden
            </div>
            <div className="flex items-center w-full mt-2 mb-2 sm:mb-4">
                <div
                    className="flex-grow h-[2px] bg-gradient-to-r from-transparent dark:via-orange-400 via-cyan-400 to-transparent"/>
            </div>
            <div className="flex flex-col font-press-start text-purple-400 dark:text-green-400 text-xs sm:text-lg">
                <div>
                    <p>
                        {
                            isDarkMode ?
                                ("Do not let the warmth and whimsy of this hanged picture fool you. The Overlord is capable of wearing whatever guise necessary - though he does seem fond of this particular look, especially when tending to Earthly matters.") :
                                ("Ahh, yes - The High Lord - in all his Earthly glory. He often contains the true splendor of his full might by way of this vessel.")
                        }
                    </p>
                </div>
                <div className="flex flex-col">
                    <p>
                        {
                            isDarkMode ?
                                ("When not required to assert his authority over the Necropolis, the Overlord dissects the various sorceries of the realms. Last of which he made mention of are the enigmatic arts of 'software engineering'. I believe it to be closely related to necromancy - allowing our Overlord to animate the machine spirits to serve his will.") :
                                ("In a continued show of humility, the High Lord learns skills from the various realms. His most recent endeavour seems particularly interesting. The inhabitants of the realm he picked it from call it 'software engineering' but, more plainly, it appears to be a branch of magic that allows communication with, and command of, machines.")
                        }
                    </p>
                    <p>
                        {
                            isDarkMode ?
                                ("") :
                                ("")
                        }
                    </p>
                    <p>
                        {
                            isDarkMode ?
                                ("") :
                                ("")
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};
export default About;