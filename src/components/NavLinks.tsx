import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import HamburgerMenu from './HamburgerMenu.tsx';

const NavLinks = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    return (
        <div className="relative">
            <nav className="hidden lg:flex space-x-2 sm:space-x-4">
                <HashLink smooth to="/#about" className="text-purple-400 dark:text-green-400 hover:text-cyan-400 dark:hover:text-orange-400 font-press-start text-xs sm:text-lg">//About</HashLink>
                <HashLink smooth to="/#projects" className="text-purple-400 dark:text-green-400 hover:text-cyan-400 dark:hover:text-orange-400 font-press-start text-xs sm:text-lg">//Projects</HashLink>
                <HashLink smooth to="/#contact" className="text-purple-400 dark:text-green-400 hover:text-cyan-400 dark:hover:text-orange-400 font-press-start text-xs sm:text-lg">//Contact</HashLink>
            </nav>

            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} className={`hover:text-cyan-400 dark:hover:text-orange-400 font-press-start ${isMenuOpen ? 'text-cyan-400 dark:text-orange-400' : 'text-purple-400 dark:text-green-400'}`}>
                    <HamburgerMenu></HamburgerMenu>
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute top-10 sm:top-14 right-0 bg-slate-50 dark:bg-black border-b dark:border-gray-600 p-2 sm:p-4 flex flex-col justify-end shadow-8bit shadow-cyan-400 dark:shadow-orange-400 z-50 lg:hidden">
                    <HashLink smooth to="/#about" className="text-purple-400 dark:text-green-400 hover:text-cyan-400 dark:hover:text-orange-400 font-press-start text-xs sm:text-lg">//About</HashLink>
                    <HashLink smooth to="/#projects" className="text-purple-400 dark:text-green-400 hover:text-cyan-400 dark:hover:text-orange-400 font-press-start text-xs sm:text-lg">//Projects</HashLink>
                    <HashLink smooth to="/#contact" className="text-purple-400  dark:text-green-400 hover:text-cyan-400 dark:hover:text-orange-400 font-press-start text-xs sm:text-lg">//Contact</HashLink>
                </div>
            )}
        </div>
    );
};

export default NavLinks;