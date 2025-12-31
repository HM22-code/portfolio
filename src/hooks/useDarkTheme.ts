import { useState, useEffect } from 'react';

function useDarkTheme() {
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        // Check system preference on mount
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            setIsDark(true);
            document.querySelector('body')?.classList.add('dark');
        }
    }, []);

    const toggleDarkTheme = (): void => {
        setIsDark(!isDark);
        document.querySelector('body')?.classList.toggle('dark');
    };

    return { isDark, toggleDarkTheme };
}

export default useDarkTheme;