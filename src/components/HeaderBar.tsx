import React from 'react';

const HeaderBar = () => {
    return (
        <header className="sticky top-0 w-full bg-black border-b border-gray-600 p-4 flex justify-between items-center shadow-8bit shadow-green-400 z-50">
            <div className="typing-effect font-press-start text-green-400 text-lg">//8BitsMakeABray</div>
            <nav className="space-x-4">
                <a href="#about" className="text-green-400 hover:text-yellow-400 font-press-start">//About</a>
                <a href="#projects" className="text-green-400 hover:text-yellow-400 font-press-start">//Projects</a>
                <a href="#contact" className="text-green-400 hover:text-yellow-400 font-press-start">//Contact</a>
            </nav>
        </header>
    );
};

export default HeaderBar;