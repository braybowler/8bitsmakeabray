import {useTheme} from "../providers/ThemeContext.tsx";

const Introduction = () => {
    // @ts-ignore
    const { isDarkMode } = useTheme();

    return (
        <div className="p-2 sm:p-4 border-2 border-purple-400 dark:border-green-400 rounded-xl shadow-lg w-full bg-slate-50 dark:bg-black ">
            <div className="font-press-start text-purple-400 dark:text-green-400 text-xs sm:text-lg">
                <p>
                    {
                        isDarkMode ?
                            ("You... wanderer... you approach the Dark Necropolis.") :
                            ("Ah, a noble soul! Step forth into the Citadel of Light.")
                    }
                </p>
                <br/>
                <p>
                    {
                        isDarkMode ?
                            ("Tread carefully, for shadows linger here.") :
                            ("Here, knowledge gleams as bright as the sun.")
                    }
                </p>
                <br/>
                <p>
                    {
                        isDarkMode ?
                            "I am Verithras, servant of the Dark Necropolis. Overlord Brayden has other duties. He has commanded me to ensure lost souls do not stray." :
                            "I'm Aurexis, guardian of the Citadel of Light. In his absence, High Lord Brayden has entrusted me to guide all who seek wisdom here. May your journey be enlightening."
                    }
                </p>
            </div>
        </div>
    );
};
export default Introduction;