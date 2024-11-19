import {useTheme} from "../providers/ThemeContext.tsx";

const Socials = () => {
    // @ts-ignore
    const { isDarkMode } = useTheme();

    return (
        <div>
            <div className="flex justify-center mb-2">
                Links to Social Media
            </div>
            <div className="flex items-center w-full mt-2 mb-2 sm:mb-4">
                <div
                    className="flex-grow h-[2px] bg-gradient-to-r from-transparent dark:via-orange-400 via-cyan-400 to-transparent"/>
            </div>
            <p>
                {
                    isDarkMode ?
                        ("The Overlord seeks to expand his domain. This often leads him to other realms. You may attempt to follow him through his portals. I make no promises as to how they'll react to a being other than him.") :
                        ("Occasionally, the High Lord is called away to advise in other realms.")
                }
            </p>
            <div className="flex flex-row justify-center mt-2 space-x-2 sm:space-x-4">
                <div>
                    <a href="https://github.com/braybowler">
                        <img src="../images/git-hub.webp" alt="GitHub link icon"
                             className="w-14 h-14 sm:w-20 sm:h-20 border-2 border-purple-400 dark:border-green-400 rounded-full shadow-lg hover:scale-[1.05]"/>
                    </a>
                </div>
                <div>
                    <a href="https://linkedin.com/in/brayden-bowler/">
                        <img src="../images/linked-in.webp" alt="LinkedIn link icon"
                             className="w-14 h-14 sm:w-20 sm:h-20 border-2 border-purple-400 dark:border-green-400 rounded-full shadow-lg hover:scale-[1.05]"/>
                    </a>
                </div>
                <div>
                    <a href="https://discord.com/users/brayden#9405">
                        <img src="../images/discord.webp" alt="Discord link icon"
                             className="w-14 h-14 sm:w-20 sm:h-20 border-2 border-purple-400 dark:border-green-400 rounded-full shadow-lg hover:scale-[1.05]"/>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Socials;