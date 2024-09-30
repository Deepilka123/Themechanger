import React from 'react';
import ThemeProvider from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';

const App = () => (
    <ThemeProvider>
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Theme Switcher App</h1>
            <ThemeSwitcher />
        </div>
    </ThemeProvider>
);

export default App;
