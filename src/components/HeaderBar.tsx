import NavLinks from "./NavLinks.tsx";
import DarkModeToggle from "./DarkModeToggle.tsx";

const HeaderBar = () => {
    return (
        <header className="sticky top-0 w-full bg-slate-200 dark:bg-black border-b border-gray-600 p-4 flex justify-between items-center shadow-8bit shadow-purple-400 dark:shadow-green-400 z-50">
            <div className="typing-effect font-press-start text-purple-400 dark:text-green-400 text-lg">//8BitsMakeABray</div>

            <div className="flex justify-between space-x-4">
                <DarkModeToggle></DarkModeToggle>
                <NavLinks></NavLinks>
            </div>
        </header>
    );
};

export default HeaderBar;