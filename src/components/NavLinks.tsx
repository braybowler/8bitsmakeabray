import { useState } from 'react';
import HamburgerMenu from '../assets/svgs/HamburgerMenu.tsx';

const NavLinks = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    return (
        <div className="relative">
            <nav className="hidden lg:flex space-x-4">
                <a href="#about" className="text-purple-400 dark:text-green-400 hover:text-yellow-400 font-press-start">//About</a>
                <a href="#projects" className="text-purple-400 dark:text-green-400 hover:text-yellow-400 font-press-start">//Projects</a>
                <a href="#contact" className="text-purple-400 dark:text-green-400 hover:text-yellow-400 font-press-start">//Contact</a>
            </nav>

            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} className={`hover:text-yellow-400 font-press-start ${isMenuOpen ? 'text-orange-400' : 'text-green-400'}`}>
                    <HamburgerMenu></HamburgerMenu>
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute top-14 right-0 bg-black border-b border-gray-600 p-4 flex items-center shadow-8bit shadow-orange-400 z-50 lg:hidden">
                    <a href="#about" className="text-green-400 hover:text-yellow-400 font-press-start">//About</a>
                    <a href="#projects" className="text-green-400 hover:text-yellow-400 font-press-start">//Projects</a>
                    <a href="#contact" className="text-green-400 hover:text-yellow-400 font-press-start">//Contact</a>
                </div>
            )}
        </div>
    );
};

export default NavLinks;