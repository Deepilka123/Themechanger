import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="mt-4 p-2 rounded-lg text-white bg-blue-500"
        >
            Switch to next theme: {theme}
        </button>
    );
};

export default ThemeSwitcher;
