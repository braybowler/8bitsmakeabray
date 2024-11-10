import NavLinks from "./NavLinks.tsx";
import DarkModeToggle from "./DarkModeToggle.tsx";

const HeaderBar = () => {
    return (
        <header className="sticky top-0 w-full bg-slate-50 dark:bg-black border-b border-slate-200 dark:border-slate-600 p-2 sm:p-4 flex justify-between items-center shadow-8bit shadow-purple-400 dark:shadow-green-400 z-40">
            <div className="title-typing-effect border-r-2 border-cyan-400 dark:border-orange-400 font-press-start text-purple-400 dark:text-green-400 text-xs sm:text-lg">8BitsMakeABray</div>

            <div className="flex flex-row space-x-1 sm:space-x-4">
                <DarkModeToggle></DarkModeToggle>
                <NavLinks></NavLinks>
            </div>
        </header>
    );
};

export default HeaderBar;