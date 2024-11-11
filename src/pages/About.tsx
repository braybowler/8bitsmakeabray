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
                                ("The Highlord ")
                        }
                    </p>
                </div>
                <div className="flex flex-col">
                    <p>
                        {
                            isDarkMode ?
                                ("When not not required to assert his authority over the Necropolis, the Overlord practices the mystical arts of 'software engineering'.") :
                                ("The Highlord ")
                        }
                    </p>
                    <p>
                        {
                            isDarkMode ?
                                ("Moreover, the Overlord is fond of a most nefarious means of self-torture known as 'golf'.") :
                                ("The Highlord ")
                        }
                    </p>
                    <p>
                        {
                            isDarkMode ?
                                ("Finally, the Overlord consistently looks to grow his physical prowess. I've advised him time after time that a simple spell could hoist the heavy objects, but he insists on doing it himself.") :
                                ("The Highlord ")
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};
export default About;